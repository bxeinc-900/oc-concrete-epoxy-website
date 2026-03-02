const scrape = require('website-scraper');

const options = {
  urls: ['https://southcoastepoxyflooring.com/'],
  directory: './site_export',
  recursive: true,
  maxDepth: 3,
  filenameGenerator: 'bySiteStructure',
  urlFilter: function(url) {
    if (url.includes('wp-json')) return false; // skip WP APIs
    return url.includes('southcoastepoxyflooring.com');
  },
  subdirectories: [
    { directory: 'images', extensions: ['.jpg', '.png', '.svg', '.gif', '.jpeg', '.webp'] },
    { directory: 'js', extensions: ['.js'] },
    { directory: 'css', extensions: ['.css'] },
    { directory: 'fonts', extensions: ['.woff', '.ttf', '.woff2', '.eot'] }
  ]
};

scrape(options).then((result) => {
  console.log("Website scraped successfully. Ready to move to HighLevel.");
}).catch((err) => {
  console.error("Error scraping website", err);
});
