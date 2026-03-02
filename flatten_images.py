import os
import shutil
import re

base_dir = "site_export/southcoastepoxyflooring.com"
images_dir = os.path.join(base_dir, "images")
os.makedirs(images_dir, exist_ok=True)

image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp')
moved_images = {}

# 1. Move all images into images_dir
for root, dirs, files in os.walk(base_dir):
    if root == images_dir:
        continue
    for file in files:
        if file.lower().endswith(image_extensions):
            src_path = os.path.join(root, file)
            dst_path = os.path.join(images_dir, file)
            # handle duplicate file names
            counter = 1
            while os.path.exists(dst_path) and os.path.abspath(src_path) != os.path.abspath(dst_path):
                base, ext = os.path.splitext(file)
                new_name = f"{base}_{counter}{ext}"
                dst_path = os.path.join(images_dir, new_name)
                counter += 1
            
            shutil.copy2(src_path, dst_path) # wait, we can just copy to avoid breaking anything if script fails
            
            # calculate relative path that was previously used
            rel_src_path = os.path.relpath(src_path, base_dir)
            
            moved_images[file] = os.path.basename(dst_path)
            moved_images[rel_src_path] = os.path.basename(dst_path)

# 2. Update HTML/CSS files
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.lower().endswith(('.html', '.css')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception as e:
                continue

            # This is a basic replacement and might catch some false positives but works for most flat cases.
            # Replace wp-content/uploads/yyyy/mm/filename.jpg -> /images/filename.jpg
            for old_path, new_img_name in moved_images.items():
                if '/' in old_path: # only match paths that have directories, simple filename matching might be too broad
                    # handle both relative local structures like ../../wp-content/... and absolute /wp-content/...
                    # We will simply find all occurrences of old_path in content and replace with images/new_img_name
                    # Because html files might be nested, we should calculate the relative path from the current html file to the top level images directory
                    depth = root[len(base_dir):].count(os.sep)
                    prefix = "../" * depth if depth > 0 else "./"
                    if prefix == "./": prefix = ""
                    
                    # Also replace exact URL segments if they were kept
                    old_path_slash = old_path.replace(os.sep, '/')
                    
                    content = content.replace(f"/{old_path_slash}", f"/{prefix}images/{new_img_name}")
                    content = content.replace(f"../{old_path_slash}", f"{prefix}images/{new_img_name}")
                    content = content.replace(f"./{old_path_slash}", f"{prefix}images/{new_img_name}")
                    content = content.replace(f"{old_path_slash}", f"{prefix}images/{new_img_name}")

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

print(f"Moved {len(moved_images)//2} images to {images_dir} and updated HTML/CSS files.")
