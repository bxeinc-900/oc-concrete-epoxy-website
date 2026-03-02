import { Metadata } from 'next';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Schedule a Free Estimate | OC Concrete Polishing & Epoxy Flooring",
    description: "Book your free onsite estimate for epoxy flooring or concrete polishing in Orange County. Select a time that works for you.",
    keywords: [
        "schedule epoxy flooring estimate",
        "book concrete polishing quote",
        "free flooring consultation Orange County",
        "online flooring booking"
    ]
};

export default function ScheduleEstimatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'Schedule an Estimate', href: '/epoxy-calendar' }]} />
            </div>

            <section className="py-12 lg:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-16">
                        <h1 className="text-5xl lg:text-8xl font-bold font-outfit mb-8 tracking-tight">
                            Book Your <span className="text-orange-500 italic">Estimate</span>.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Select a convenient time for our expert to visit your site, assess your floors, and provide a comprehensive fixed-price quote.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />

                        <div className="bg-white/5 border border-white/10 rounded-[48px] p-2 lg:p-6 shadow-2xl shadow-orange-950/20 backdrop-blur-sm min-h-[900px] overflow-hidden">
                            <iframe
                                src="https://link.betterautomate.com/widget/booking/s3fTHfT0NoZagjMDFgTg"
                                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '900px' }}
                                scrolling="no"
                                id="s3fTHfT0NoZagjMDFgTg_1772480221928"
                                className="rounded-3xl"
                            ></iframe>
                            <Script
                                src="https://link.betterautomate.com/js/form_embed.js"
                                strategy="lazyOnload"
                            />
                        </div>
                    </div>

                    <div className="mt-16 pt-16 border-t border-white/5">
                        <p className="text-gray-500 uppercase tracking-[0.3em] font-bold text-sm mb-6 text-center">Need Immediate Help?</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <a href="tel:9498355224" className="text-2xl font-bold hover:text-orange-500 transition-colors flex items-center gap-3">
                                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (949) 835-5224
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
