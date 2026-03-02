import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewWidget from '@/components/ReviewWidget';


export const metadata: Metadata = {
    title: "About Us | OC Concrete Polishing & Epoxy Flooring",
    description: "Established in 2007, OC Concrete Polishing is a family-owned flooring company serving Orange County and Los Angeles with premium concrete solutions.",
    keywords: [
        "concrete contractors Orange County",
        "epoxy flooring experts Huntington Beach",
        "family owned flooring company",
        "concrete polishing history",
        "about south coast epoxy"
    ]
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'About Us', href: '/about-us' }]} />
            </div>

            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-7xl font-bold font-outfit leading-tight mb-8">
                            Legacy of <span className="text-orange-500 italic">Craftsmanship</span> Since 2007
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed italic border-l-4 border-orange-500 pl-6 py-2">
                            "We provide a strong family-oriented work environment where integrity and great service are key to everything we do."
                        </p>
                    </div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-[64px] overflow-hidden group">
                        <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent transition-all duration-700" />
                        <Image
                            src="https://southcoastepoxyflooring.com/images/occoncrete-web-header2.jpg"
                            alt="OC Concrete Polishing Craftsmanship"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-5xl font-bold font-outfit">The Original <span className="text-orange-500">Epoxy Experts</span></h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                OC Concrete Polishing & Epoxy Floors is the go-to flooring expert in Huntington Beach, serving areas from Los Angeles to Orange County. With over 20 years in the flooring industry, we've seen every type of concrete challenge Southern California has to offer.
                            </p>
                            <p>
                                Since our official founding in 2007, we've remained a family-oriented business. We believe that a floor isn't just a surface—it's the foundation of your home or business. Our team is dedicated to making old concrete look new again through artistic design and industrial engineering.
                            </p>
                            <p>
                                Whether it's a high-end residential garage, a busy commercial kitchen, or a mid-century modern living space, we bring the same level of precision and integrity to every project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-outfit mb-4">Our Core Foundations</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Why Orange County homeowners and businesses choose us for their life-long flooring needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            { title: "Integrity Above All", desc: "No cutting corners. We use the highest-grade industrial resins and diamond grinding tools to ensure every floor lasts a lifetime." },
                            { title: "Local Heritage", desc: "Proudly based in Huntington Beach. We understand the local climate and specific concrete needs of OC and LA counties." },
                            { title: "10-Year Warranty", desc: "We don't just finish a job and leave. We stand behind our work with an industry-leading warranty that gives you total peace of mind." }
                        ].map((v, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-500 font-black text-2xl group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Google Reviews Social Proof */}
                    <div className="bg-white/5 border border-white/10 rounded-[48px] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
                        <div className="max-w-xl text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
                                <div className="flex text-orange-500">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span className="text-2xl font-bold font-outfit">4.8 / 5.0</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 font-outfit">Recommended by Over 76+ Locals</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We've built our reputation on quality and trust. Check out what your neighbors in Orange County are saying about their new floors on Google.
                            </p>
                            <a
                                href="https://www.google.com/maps?cid=17337711478889534118"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border-b-2 border-orange-500 py-2 font-bold hover:text-orange-500 transition-colors uppercase tracking-widest text-sm"
                            >
                                Read Latest Reviews
                            </a>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl scale-110 lg:rotate-3">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">G</div>
                                    <div className="font-bold text-gray-900">Google Verified Profile</div>
                                </div>
                                <div className="text-sm text-gray-500 space-y-2">
                                    <div className="w-48 h-2 bg-gray-100 rounded" />
                                    <div className="w-32 h-2 bg-gray-100 rounded" />
                                    <div className="flex space-x-1 py-2">
                                        {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 rounded-sm bg-orange-400" />)}
                                    </div>
                                    <div className="w-40 h-2 bg-gray-100 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Section */}
            <ReviewWidget />

            {/* Trust Section */}
            <section className="py-24 bg-orange-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-white mb-8">Ready to Start Your Project?</h2>
                    <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">Discover the difference a professional concrete contractor can make for your property.</p>
                    <Link
                        href="/epoxy-calendar"
                        className="inline-block bg-white text-orange-600 px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl transition-all"
                    >
                        Get A Free Quote Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
