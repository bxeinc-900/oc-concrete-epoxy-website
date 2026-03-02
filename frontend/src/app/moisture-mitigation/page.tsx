import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Moisture Mitigation & Epoxy Floor Failure Prevention | Orange County",
    description: "Don't let your new epoxy floor peel! Learn about moisture vapor transmission, hydrostatic pressure, and how our moisture-wicking primers ensure a lifetime bond.",
    keywords: [
        "moisture mitigation epoxy",
        "hydrostatic pressure floor failure",
        "vapor barrier for concrete",
        "moisture testing concrete Orange County",
        "why epoxy floors peel"
    ]
};

export default function MoistureMitigationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'Moisture Mitigation', href: '/moisture-mitigation' }]} />
            </div>

            {/* Hero Section */}
            <section className="py-16 lg:py-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -z-10 blur-3xl opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">The Science of Durability</h2>
                        <h1 className="text-4xl lg:text-7xl font-bold font-outfit leading-tight mb-6">
                            Science-Backed <span className="text-blue-400 italic">Failure Prevention</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Most epoxy floor failures aren't caused by the coating—they're caused by the concrete beneath them. We solve the <span className="text-white font-bold">#1 cause of floor failure</span>: Moisture Vapor Transmission.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/epoxy-calendar"
                                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20"
                            >
                                Schedule Moisture Test
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative h-[300px] lg:h-[500px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0c] flex items-center justify-center p-12">
                            <div className="text-center">
                                <div className="text-6xl mb-6">💧</div>
                                <h3 className="text-2xl font-bold mb-4">Hydrostatic Pressure</h3>
                                <p className="text-gray-400 text-sm">When moisture rises through concrete, it creates pressure that can pop ordinary epoxy right off the surface.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Content Section */}
            <section className="py-24 bg-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-12 text-center text-orange-500">Why Most Epoxy Floors Peel</h2>

                    <div className="space-y-16">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-orange-600 flex-shrink-0 flex items-center justify-center font-bold text-2xl">01</div>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Vapor Transmission</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Concrete is like a hard sponge. Moisture from the soil below moves upward through microscopic capillaries. If this moisture is trapped under a non-breathable coating, it builds pressure.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center font-bold text-2xl">02</div>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Alkalinity & pH Balance</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Rising moisture carries alkaline salts with it. These salts can attack the chemical bond of the resin, causing it to delaminate.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-green-600 flex-shrink-0 flex items-center justify-center font-bold text-2xl">03</div>
                            <div>
                                <h4 className="text-2xl font-bold mb-4">Lack of Proper Prep</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Buffing or acid washing doesn't open the surface enough for deep penetration. We use dynamic **Diamond Grinding** to reach the slab's "open" pores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Solution Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-8 leading-tight">Our <span className="text-orange-500 underline underline-offset-8 decoration-orange-500/50">Moisture-Wicking</span> Primers</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We utilize industrial-grade moisture vapor barriers that are specifically engineered to deep-bond into the concrete substrate. Unlike standard epoxy, our primers are:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Rated for up to 20 lbs of moisture pressure.",
                                    "Deep-penetrating to anchor into the concrete pores.",
                                    "Alkaline-resistant to prevent chemical breakdown.",
                                    "Fast-curing to allow for same-day topcoats."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-12 rounded-[40px] border border-white/10">
                            <h4 className="text-2xl font-bold mb-6 italic">Did you know?</h4>
                            <p className="text-gray-400 mb-6 italic">"Orange County's proximity to the coast means higher groundwater tables. This makes moisture testing absolutely critical for long-term floor performance."</p>
                            <div className="h-px bg-white/10 my-8" />
                            <div className="text-sm uppercase tracking-widest text-orange-500 font-bold">Standard Procedure:</div>
                            <p className="text-gray-500 mt-2 italic">Every OC Concrete project starts with a Calcium Chloride or Relative Humidity (RH) test if moisture is suspected.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-orange-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-6 text-white leading-tight">Don't Gamble With Your Floors</h2>
                    <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Contact us today for a professional moisture assessment and a quote that lasts a lifetime.</p>
                    <Link
                        href="/epoxy-calendar"
                        className="inline-block bg-[#0c0c0c] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
                    >
                        Schedule Free Assessment
                    </Link>
                </div>
            </section>
        </div>
    );
}
