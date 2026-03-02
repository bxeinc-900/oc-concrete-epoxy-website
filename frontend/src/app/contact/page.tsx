import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Contact Us | Free Quote for Epoxy Flooring & Polished Concrete",
    description: "Get a free quote today! We serve all of Orange County, Los Angeles, and Riverside with premium concrete polishing and epoxy flooring solutions.",
    keywords: [
        "epoxy flooring quote Orange County",
        "concrete polishing cost Huntington Beach",
        "epoxy floor contractors near me",
        "free flooring estimate",
        "south coast epoxy contact"
    ]
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'Contact Us', href: '/contact' }]} />
            </div>

            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left: Info */}
                        <div>
                            <h1 className="text-5xl lg:text-8xl font-bold font-outfit mb-12 tracking-tight">
                                Let's <span className="text-orange-500 italic">Transform</span> Your Floor.
                            </h1>

                            <div className="space-y-12">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 rounded-3xl bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-gray-500">Call or Text</h3>
                                        <p className="text-3xl font-bold">(949) 835-5224</p>
                                        <p className="text-gray-400 mt-2">Available 7 days a week for consultations.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 rounded-3xl bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-gray-500">Service Coverage</h3>
                                        <p className="text-xl font-semibold">Huntington Beach, CA</p>
                                        <p className="text-gray-400 mt-2 max-w-sm">Serving all of Orange County, Los Angeles, and Inland Empire.</p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500/60 mb-6">License Information</h3>
                                    <p className="text-gray-500 text-lg">Licensed, Bonded & Insured: <span className="text-white font-bold">#918040</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Lead Form Placeholder or Link */}
                        <div className="bg-white/5 border border-white/10 rounded-[64px] p-12 lg:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />

                            <h2 className="text-3xl font-bold font-outfit mb-8">Ready to Start?</h2>
                            <p className="text-gray-400 mb-10 text-lg">
                                Whether you have a 10,000 sq ft warehouse or a 2-car garage, we're ready to provide a custom solution.
                            </p>

                            <div className="space-y-6">
                                <Link
                                    href="/epoxy-calendar"
                                    className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-6 rounded-2xl text-xl font-bold transition-all hover:scale-[1.02] shadow-xl shadow-orange-900/20"
                                >
                                    Schedule Free Calendar Quote
                                </Link>

                                <div className="flex items-center space-x-4">
                                    <div className="flex-grow h-px bg-white/10" />
                                    <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Or</span>
                                    <div className="flex-grow h-px bg-white/10" />
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"></textarea>
                                    </div>
                                    <button type="submit" className="w-full border border-orange-500/50 hover:bg-orange-500 text-white py-4 rounded-xl font-bold transition-all">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
