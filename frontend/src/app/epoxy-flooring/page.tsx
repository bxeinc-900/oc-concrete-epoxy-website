import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Epoxy Garage Floor Coating | Orange County Showroom Finish",
    description: "Turn your garage into a showroom with premium epoxy floor coatings in Orange County. 1-day installation, lifetime warranty, and high-performance durability.",
    keywords: [
        "epoxy garage floor coating",
        "garage floor epoxy Orange County",
        "polyaspartic floor coating",
        "1 day epoxy floor",
        "lifetime warranty epoxy floor"
    ]
};

export default function EpoxyFlooringPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'Epoxy Flooring', href: '/epoxy-flooring' }]} />
            </div>

            {/* Hero / Header Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl lg:text-6xl font-bold font-outfit leading-tight mb-6">
                            Turn Your Garage Into A <span className="text-orange-500 italic">Showroom</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Industrial-grade epoxy and flake floors installed in as little as <span className="text-white font-bold">ONE DAY</span>. Experience the ultimate durability for your Orange County home.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/epoxy-calendar"
                                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20"
                            >
                                Schedule Free Estimate
                            </Link>
                            <div className="flex items-center space-x-2 text-sm text-gray-400 bg-white/5 px-4 py-4 rounded-xl border border-white/10">
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Lifetime Warranty Included</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/premium_flake_epoxy_floor_orange_county_1772480513088.png"
                                alt="Orange County Epoxy Garage Floor Showroom Finish"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold font-outfit mb-4 text-orange-500 uppercase">Epoxy vs. Polyaspartic</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Not all garage floor coatings are created equal. We use the most advanced technology available.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 hover:border-white/20 transition-all">
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm mr-4">!</span>
                                Traditional Epoxy
                            </h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✕</span>
                                    Prone to UV yellowing and fading in sunlight.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✕</span>
                                    Can peel under hot tires (Hot Tire Pick-Up).
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✕</span>
                                    Brittle finish that can crack with concrete movement.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">✕</span>
                                    Takes 3-5 days to fully cure and apply.
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#0c0c0c] border-2 border-orange-500/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-bl-xl">Recommended</div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm mr-4">✓</span>
                                Our Polyaspartic System
                            </h3>
                            <ul className="space-y-4 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    4x stronger than standard epoxy coatings.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    100% UV stable - will never yellow or fade.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Heat resistant - no hot tire peeling forever.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Installed & return to service in just 24 hours.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Section (New) */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-4">Our <span className="text-orange-500 italic">7-Step</span> Showroom Process</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Preparation is everything. We don't just 'paint' your floor; we bond a multi-layer system to it for life.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Diamond Grinding", desc: "We use planetary diamond grinders to open the concrete's pores for maximum adhesion. Dust-free vacuum system kept on-site." },
                            { step: "02", title: "Crack & Spall Repair", desc: "Every expansion joint and hairline crack is cleaned and filled with industrial-grade grout to ensure a seamless finish." },
                            { step: "03", title: "Moisture Mitigation", desc: "A critical step! We apply a specialized vapor barrier primer to prevent future peeling. Learn why this matters on our ", link: <Link href="/moisture-mitigation" className="text-blue-400 underline underline-offset-4">Moisture Mitigation</Link>, suffix: " page." },
                            { step: "04", title: "Base Coat Application", desc: "A high-solids epoxy base coat is applied, creating the canvas for your floor's color and texture." },
                            { step: "05", title: "Full Broadcast Flake", desc: "We hand-cast decorative flakes to 100% rejection, ensuring total coverage and a uniform aesthetic." },
                            { step: "06", title: "Scrape & Detail", desc: "Once cured, we scrape the floor to flatten the flakes and vacuum the excess for a smooth, high-end feel." },
                            { step: "07", title: "Polyaspartic Topcoat", desc: "The final shield. A UV-stable, chemical-resistant topcoat that locks in the color and provides an industrial-grade gloss." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/25 transition-all group">
                                <div className="text-orange-500 font-black text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{item.step}</div>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}{item.link}{item.suffix}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Local Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://southcoastepoxyflooring.com/images/light-grey-blended-flakes.jpg"
                                alt="Epoxy Flake Floor System Details"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-8 leading-tight">Professional Services Across <span className="text-orange-500">Orange County</span></h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <h4 className="font-bold text-xl mb-2">Residential & Garage</h4>
                                    <p className="text-gray-400 text-sm">Transform your home's most underutilized space into a durable, clean, and beautiful environment.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <h4 className="font-bold text-xl mb-2">Commercial & Industrial</h4>
                                    <p className="text-gray-400 text-sm">Slip-resistant, hygienic, and incredibly tough flooring for retail, kitchens, and warehouses.</p>
                                </div>
                                <div className="flex items-center space-x-8 pt-4">
                                    <div>
                                        <p className="text-3xl font-bold text-orange-500 font-outfit">20+</p>
                                        <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
                                    </div>
                                    <div className="w-px h-12 bg-white/10" />
                                    <div>
                                        <p className="text-3xl font-bold text-orange-500 font-outfit">1000+</p>
                                        <p className="text-xs uppercase tracking-widest text-gray-500">Projects Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-orange-600 to-orange-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-6 text-white">Ready for your Showroom Floor?</h2>
                    <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Get a free, no-obligation quote for your Orange County epoxy flooring project today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/epoxy-calendar"
                            className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform"
                        >
                            Get My Free Quote
                        </Link>
                        <a
                            href="tel:9498355224"
                            className="border-2 border-white text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition-colors"
                        >
                            Call (949) 835-5224
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
