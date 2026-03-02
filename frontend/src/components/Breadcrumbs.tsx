import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://southcoastepoxyflooring.com${item.href}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav className="flex py-4 text-sm text-gray-500 font-medium" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            {index === items.length - 1 ? (
                                <span className="text-orange-500" aria-current="page">{item.label}</span>
                            ) : (
                                <Link href={item.href} className="hover:text-orange-500 transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
