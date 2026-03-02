import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Polished Concrete Floors | Orange County Concrete Polishing",
    description: "Luxury polished concrete floors for OC homes and businesses. Durable, eco-friendly, and stunning stone-like finish. Get a free estimate today.",
    keywords: [
        "polished concrete floors Orange County",
        "concrete polishing contractor",
        "residential polished concrete",
        "commercial concrete polishing",
        "concrete grinding Orange County"
    ]
};

export default function PolishedConcretePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'Polished Concrete', href: '/polished-concrete' }]} />
            </div>

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Sustainable Luxury</span>
                        <h1 className="text-4xl lg:text-6xl font-bold font-outfit leading-tight mb-6">
                            The Timeless Beauty of <span className="text-orange-500 italic">Polished Concrete</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Transform your slab into a masterpiece. Experience the look of exotic stone with the industrial durability of granite.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/epoxy-calendar"
                                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20"
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/modern_interior_polished_concrete_1772480061632.png"
                                alt="Luxury Polished Concrete Floor Finish"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-outfit mb-4">Why Choose Polished Concrete?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">The perfect balance of form and function for modern Orange County living.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Extreme Durability",
                            desc: "Hardened surface that resists scratches, impacts, and heavy traffic effortlessly.",
                            icon: "🛡️"
                        },
                        {
                            title: "Eco-Friendly",
                            desc: "Utilizes your existing slab, reducing waste and eligible for LEED credits.",
                            icon: "🌿"
                        },
                        {
                            title: "Low Maintenance",
                            desc: "No stripping or waxing required. A simple damp mop keeps it shining for years.",
                            icon: "✨"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 hover:border-orange-500/30 transition-all text-center">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mid-Century Modern Focus */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl order-2 lg:order-1">
                            <Image
                                src="https://images.squarespace-cdn.com/content/v1/5d081ec634b7e10001e6a635/1560838807565-TI0FDKTJ39VTJ36KRWQO/Maurer_Int_Feature01.jpg?format=1500w"
                                alt="Mid-Century Modern Polished Concrete Home"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-8 leading-tight">A Staple for <span className="text-orange-500 italic">Mid-Century Modern</span> Homes</h2>
                            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                                Orange County is world-renowned for its Mid-Century Modern architecture. Polished concrete floors perfectly complement these designs with their clean lines, minimal joints, and emphasis on raw materials.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-white font-medium">
                                    <span className="text-orange-500">✓</span>
                                    <span>Seamless indoor-outdoor flow</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white font-medium">
                                    <span className="text-orange-500">✓</span>
                                    <span>Natural aggregate exposure</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white font-medium">
                                    <span className="text-orange-500">✓</span>
                                    <span>Enhanced thermal mass for cooling</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[#0c0c0c]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-6">Commercial & Industrial Grade</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">From retail showrooms to high-tech warehouses, we deliver floors that stand up to the most demanding environments.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Concrete Grinding", desc: "Removing old coatings and leveling the surface." },
                            { title: "Surface Prep", desc: "Removing glues, thin-set, and old epoxy." },
                            { title: "Natural Polishing", desc: "Honing with industrial diamonds to high gloss." },
                            { title: "Concrete Restoration", desc: "Repairing cracks and cleaning structures." }
                        ].map((step, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <div className="text-orange-500 font-bold mb-2">0{idx + 1}</div>
                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-6 text-white">Elevate Your Space Today</h2>
                    <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Join hundreds of Orange County homeowners and businesses who trust us for their concrete polishing needs.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/epoxy-calendar"
                            className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform"
                        >
                            Get My Free Online Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
