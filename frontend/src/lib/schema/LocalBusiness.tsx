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
            "addressLocality": "Huntington Beach",
            "addressRegion": "CA",
            "postalCode": "92646",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.6603,
            "longitude": -117.9992
        },
        "hasMap": "https://www.google.com/maps?cid=17337711478889534118",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "76"
        },
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:30",
                "closes": "16:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "14:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/OCconcretepolishing",
            "https://www.instagram.com/oc_epoxy",
            "https://www.tiktok.com/@ocepoxy",
            "https://www.youtube.com/@oc_epoxy",
            "https://www.google.com/maps?cid=17337711478889534118"
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Huntington Beach"
            },
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
                "name": "Laguna Beach"
            },
            {
                "@type": "City",
                "name": "Costa Mesa"
            },
            {
                "@type": "City",
                "name": "Orange County"
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
