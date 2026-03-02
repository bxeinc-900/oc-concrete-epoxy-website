import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Metallic Epoxy Flooring | Orange County Custom Marble Finish",
    description: "Experience the luxury of metallic epoxy flooring in Orange County. Stunning, high-gloss marble effect floors for homes and showrooms. One-of-a-kind designs.",
    keywords: [
        "metallic epoxy flooring",
        "marble effect epoxy floor",
        "custom epoxy designs Orange County",
        "liquid metal flooring",
        "luxury garage floors"
    ]
};

export default function MetallicEpoxyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'Metallic Epoxy', href: '/metallic-epoxy-flooring' }]} />
            </div>

            {/* Hero Section */}
            <section className="py-16 lg:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative z-10">
                        <h1 className="text-4xl lg:text-7xl font-bold font-outfit leading-tight mb-6">
                            Floors That Are <span className="text-orange-500 italic">Works of Art</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Metallic epoxy creates a seamless, high-gloss surface that mimics the depth of liquid metal or polished marble. Each floor is a unique masterpiece.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/epoxy-calendar"
                                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20"
                            >
                                Schedule Custom Quote
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-10 bg-orange-500/20 rounded-full blur-3xl" />
                        <div className="relative h-[400px] lg:h-[600px] rounded-[48px] overflow-hidden border border-white/20 shadow-2xl">
                            <Image
                                src="/images/luxury_metallic_epoxy_garage_1772480048286.png"
                                alt="Custom Metallic Epoxy Marble Floor Finish"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-500">100% Unique</h3>
                            <p className="text-gray-400">Metallic pigments flow and react naturally during installation, ensuring no two floors are ever the same.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-500">Depth & Dimension</h3>
                            <p className="text-gray-400">Our multi-layer systems create a 3D effect that changes with the lighting in your home or showroom.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-500">Elite Protection</h3>
                            <p className="text-gray-400">Resistant to moisture, chemicals, and hot tires, making it as practical as it is beautiful.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery/Showcase Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl lg:text-5xl font-bold font-outfit leading-tight">Upscale Solutions for <span className="text-orange-500">Modern Living</span></h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Metallic epoxy has become the premier choice for luxury garages and upscale Orange County interiors. It offers the high-end look of marble without the maintenance of natural stone.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="font-bold text-white mb-1 italic">Vivid Colors</div>
                                    <div className="text-xs text-gray-500 uppercase">Endless Customization</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="font-bold text-white mb-1 italic">Seamless</div>
                                    <div className="text-xs text-gray-500 uppercase">Hygienic & Easy Clean</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative h-64 rounded-3xl overflow-hidden">
                                <Image
                                    src="https://southcoastepoxyflooring.com/images/blue-epoxy-metallic-floor-orange-county.jpeg"
                                    alt="Blue Metallic Epoxy Floor"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-80 rounded-3xl overflow-hidden mt-8">
                                <Image
                                    src="https://southcoastepoxyflooring.com/wp-content/uploads/2023/11/Marbled-Metallic-epoxy_Floor-in-Yorba-Linda-Orange-County-1024x768.jpeg"
                                    alt="Marbled Metallic Epoxy Floor"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Process Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-12">The Metallic Artisanship Process</h2>
                    <div className="space-y-12 text-left">
                        {[
                            { title: "Surface Diamond Grinding", desc: "We grind the concrete to CSP-2 or CSP-3 to ensure a permanent mechanical bond." },
                            { title: "Moisture Barrier Primer", desc: "A high-solids epoxy primer prevents outgassing and moisture bubbles." },
                            { title: "Metallic Art Layer", desc: "The artistic pour using metallic pigments and swirling techniques to create the 'marble' effect." },
                            { title: "Industrial Topcoat", desc: "A clear polyaspartic or high-wear urethane layer protects the art for a lifetime." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-orange-600 flex-shrink-0 flex items-center justify-center font-bold text-xl">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-amber-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-6 text-white italic">Ready for Luxury?</h2>
                    <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Get a free consultation and see why we are Orange County's top choice for metallic floors.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/epoxy-calendar"
                            className="bg-white text-orange-600 px-12 py-6 rounded-[32px] text-xl font-black hover:scale-105 transition-all shadow-2xl"
                        >
                            Start Your Masterpiece
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
