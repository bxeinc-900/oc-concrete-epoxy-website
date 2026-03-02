import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Photo Gallery | OC Concrete Polishing & Epoxy Flooring",
    description: "View our gallery of recent epoxy flooring and polished concrete projects across Orange County, Los Angeles, and Riverside.",
    keywords: [
        "epoxy flooring gallery",
        "polished concrete photos",
        "metallic epoxy project photos",
        "orange county flooring contractor gallery",
        "garage floor epoxy california"
    ]
};

const galleryCategories = [
    {
        title: "Polished Concrete Floors",
        description: "Modern, durable, and sustainable flooring for residential and commercial spaces.",
        mainImage: "/images/modern_interior_polished_concrete_1772480061632.png",
        projects: ["Silverlake Residential Whole House", "Irvine Modern Condo", "Newport Beach Retail Space"]
    },
    {
        title: "Metallic Epoxy Flooring",
        description: "One-of-a-kind artistic flooring with a high-gloss, multi-dimensional finish.",
        mainImage: "/images/luxury_metallic_epoxy_garage_1772480048286.png",
        projects: ["Diamond Bar Luxury Garage", "Huntington Beach Man Cave", "Laguna Hills Showroom"]
    },
    {
        title: "Commercial & Industrial Epoxy",
        description: "High-performance, chemical-resistant white epoxy for labs, hangars, and kitchens.",
        mainImage: "/images/commercial_white_epoxy_lab_1772480074203.png",
        projects: ["Orange County Medical Lab", "Private Jet Hangar - Long Beach", "Santa Ana Industrial Warehouse"]
    }
];

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'Photo Gallery', href: '/photo-gallery' }]} />
            </div>

            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-8xl font-bold font-outfit mb-8 tracking-tight">
                        Our <span className="text-orange-500 italic">Portfolio</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        From luxury residential garages to high-tech medical laboratories, explore our recent projects across Southern California.
                        We take pride in every square foot we transform.
                    </p>
                </div>
            </section>

            {/* Gallery Sections */}
            <div className="space-y-32 pb-32">
                {galleryCategories.map((category, idx) => (
                    <section key={idx} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={`relative aspect-video rounded-[48px] overflow-hidden group border border-white/10 ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                                <Image
                                    src={category.mainImage}
                                    alt={category.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex items-end">
                                    <span className="text-white font-outfit text-2xl font-bold">Featured Project</span>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-6 text-orange-500">{category.title}</h2>
                                    <p className="text-xl text-gray-400 leading-relaxed">{category.description}</p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm uppercase tracking-widest text-orange-500/60 font-bold">Recent Locations</h4>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {category.projects.map((project, pIdx) => (
                                            <li key={pIdx} className="flex items-center space-x-3 text-gray-300">
                                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                                <span>{project}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/epoxy-calendar"
                                    className="inline-flex items-center space-x-4 text-white hover:text-orange-500 transition-colors group"
                                >
                                    <span className="text-lg font-bold">Request Case Study Details</span>
                                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-all">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Service Area Banner */}
            <section className="py-16 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center italic text-gray-400">
                    <p className="text-lg">
                        Serving Huntington Beach, Orange County, Long Beach, Los Angeles, and Riverside areas.
                        All photos shown are genuine projects completed by our family-owned team.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="p-16 rounded-[64px] bg-orange-600 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                        <h2 className="text-4xl lg:text-6xl font-bold font-outfit text-white mb-8 relative z-10">Like What You See?</h2>
                        <p className="text-xl text-orange-100 mb-12 relative z-10 max-w-2xl mx-auto">
                            Your floor could be next. Get a free, no-obligation quote from OC's leading concrete experts today.
                        </p>
                        <Link
                            href="/epoxy-calendar"
                            className="inline-block bg-white text-orange-600 px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all relative z-10"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
