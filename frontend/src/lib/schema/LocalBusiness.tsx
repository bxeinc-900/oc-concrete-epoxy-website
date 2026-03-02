export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "OC Concrete Polishing & Epoxy Flooring",
        "image": "https://southcoastepoxyflooring.com/images/blue-epoxy-metallic-floor-orange-county.jpeg",
        "@id": "https://southcoastepoxyflooring.com",
        "url": "https://southcoastepoxyflooring.com",
        "telephone": "949-835-5224",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Orange County",
            "addressRegion": "CA",
            "postalCode": "",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.7175,
            "longitude": -117.8311
        },
        "servesCuisine": "",
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/OCconcretepolishing",
            "https://www.instagram.com/oc_epoxy",
            "https://www.tiktok.com/@ocepoxy",
            "https://www.youtube.com/@oc_epoxy"
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Irvine"
            },
            {
                "@type": "City",
                "name": "Newport Beach"
            },
            {
                "@type": "City",
                "name": "Huntington Beach"
            },
            {
                "@type": "City",
                "name": "Fullerton"
            },
            {
                "@type": "City",
                "name": "Costa Mesa"
            },
            {
                "@type": "City",
                "name": "Long Beach"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
