import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Commercial Epoxy Flooring OC | Industrial Warehouse Coatings",
    description: "Orange County's trusted partner for commercial and industrial epoxy flooring. We specialize in restaurants, retail, warehouses, and labs with durable, slip-resistant finishes.",
    keywords: [
        "commercial epoxy flooring Orange County",
        "industrial floor coating",
        "warehouse flooring OC",
        "restaurant floor coatings",
        "FDA approved flooring labs"
    ]
};

export default function CommercialEpoxyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs
                    items={[
                        { label: 'Services', href: '/epoxy-flooring' },
                        { label: 'Commercial Epoxy', href: '/commercial-epoxy-flooring-orange-county' }
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-sm mb-6 block">Heavy Duty Solutions</span>
                            <h1 className="text-5xl lg:text-8xl font-bold font-outfit mb-8 tracking-tighter leading-[0.9]">
                                High-Performance <span className="text-orange-500 italic">Industrial</span> Floors.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                Engineered for the most demanding environments. From heavy forklift traffic to corrosive chemical spills, our floors are built to outlast and outperform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href="/epoxy-calendar"
                                    className="bg-orange-600 hover:bg-orange-700 text-white text-center py-5 px-10 rounded-2xl text-xl font-bold transition-all hover:scale-[1.02] shadow-xl shadow-orange-900/20"
                                >
                                    Get Commercial Quote
                                </Link>
                                <a href="tel:9498355224" className="border border-white/10 hover:bg-white/5 py-5 px-10 rounded-2xl text-center font-bold transition-all">
                                    Call Developer
                                </a>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-orange-500/20 rounded-[80px] blur-3xl opacity-30 group-hover:opacity-60 transition duration-1000" />
                            <div className="relative aspect-square lg:aspect-auto lg:h-[700px] rounded-[64px] overflow-hidden border border-white/10 shadow-3xl">
                                <Image
                                    src="/images/commercial_white_epoxy_lab_1772480074203.png"
                                    alt="High-gloss sterile lab epoxy floor orange county"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                                    <div className="flex items-center space-x-6">
                                        <div className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center text-orange-500">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-white font-bold uppercase tracking-widest text-sm">Industrial Grade Certified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-24 bg-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl lg:text-6xl font-bold font-outfit mb-6">Expertise Across All <span className="text-orange-500">Sectors</span></h2>
                        <p className="text-gray-400 text-xl font-light">Customized flooring solutions tailored to your industry requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Warehouses", desc: "Extreme durability for high-frequency forklift traffic and impact.", icon: "🏢" },
                            { title: "Restaurants", desc: "Hygienic, anti-slip, and heat-resistant floors for busy kitchens.", icon: "🍽️" },
                            { title: "Labs & Medical", desc: "Sterile, non-porous, and chemical-resistant surfaces.", icon: "🧪" },
                            { title: "Retail Stores", desc: "Aesthetic high-gloss finishes that elevate your brand image.", icon: "🛍️" }
                        ].map((sector, idx) => (
                            <div key={idx} className="bg-[#0c0c0c] border border-white/5 p-10 rounded-[48px] hover:border-orange-500/30 transition-all group">
                                <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">{sector.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{sector.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light">{sector.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us / Problem Section */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-12">Stop Dealing with <span className="text-red-500 italic">Weak</span> Industrial Floors.</h2>
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Dusting & Concrete Degradation</h4>
                                        <p className="text-gray-400">Untreated concrete creates dust that damages machinery and contaminates products. Our sealers eliminate dusting permanently.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Slip Hazards</h4>
                                        <p className="text-gray-400">Safety is non-negotiable. We offer custom texture profiles to meet OSHA and building code requirements for every environment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-600/5 border border-orange-500/20 p-12 lg:p-20 rounded-[64px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -mr-32 -mt-32" />
                            <h3 className="text-3xl font-bold mb-8">Ready for a Lifetime Solution?</h3>
                            <p className="text-xl text-gray-400 mb-12 font-light">Join companies like Tesla, Amazon, and local OC businesses who trust our expert teams.</p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-center space-x-4">
                                    <span className="text-orange-500 text-2xl">✓</span>
                                    <span className="font-bold">Next-Day Availability for Consultation</span>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <span className="text-orange-500 text-2xl">✓</span>
                                    <span className="font-bold">Work Nights & Weekends to Minimize Downtime</span>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <span className="text-orange-500 text-2xl">✓</span>
                                    <span className="font-bold">Comprehensive Safety Documentation</span>
                                </li>
                            </ul>
                            <Link href="/epoxy-calendar" className="inline-block bg-white text-orange-600 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl">
                                Request Facility Assessment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
