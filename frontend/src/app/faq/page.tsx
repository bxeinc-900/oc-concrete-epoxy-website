import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: "Epoxy Flooring FAQ | Orange County Concrete Coating Questions",
    description: "Get answers to common epoxy flooring and concrete polishing questions in Orange County. Learn about durability, maintenance, and the 1-day installation process.",
    keywords: [
        "epoxy flooring faq",
        "garage floor coating questions",
        "orange county concrete FAQs",
        "how long does epoxy last",
        "is epoxy slippery"
    ]
};

export default function FAQPage() {
    const faqs = [
        {
            category: "General & Process",
            questions: [
                {
                    q: "How long does the installation take?",
                    a: "Our standard garage systems are completed in just ONE DAY. More complex metallic floors or large commercial spaces may take 2-3 days."
                },
                {
                    q: "When can I drive on my new floor?",
                    a: "You can walk on it in as little as 4-6 hours. We recommend waiting 24 hours for heavy foot traffic and 48-72 hours for vehicles."
                },
                {
                    q: "Is there a smell or odor during installation?",
                    a: "No. We use low-VOC (volatile organic compound) materials. While there may be a faint 'new car' type smell during application, it dissipates rapidly and is non-toxic."
                }
            ]
        },
        {
            category: "Durability & Maintenance",
            questions: [
                {
                    q: "How long will my floor last?",
                    a: "With proper maintenance, our floors are designed to last a lifetime. We offer an industry-leading Lifetime Warranty against peeling and delamination."
                },
                {
                    q: "Will hot tires damage the floor?",
                    a: "No. Our polyaspartic and industrial-grade epoxy systems are resistant to 'Hot Tire Pick-Up.' Your tires won't peel the coating off your concrete."
                },
                {
                    q: "How do I clean my epoxy floor?",
                    a: "A simple mop with mild soap and water is all you need. Avoid using acidic cleaners or wax. For large areas, a squeegee works wonders."
                }
            ]
        },
        {
            category: "Design & Options",
            questions: [
                {
                    q: "Are the floors slippery when wet?",
                    a: "We add slip-resistant grip additives (anti-skid) into our topcoats. While any smooth surface can be slick when wet, our floors offer excellent traction according to ADA guidelines."
                },
                {
                    q: "Can you fix cracks in my concrete first?",
                    a: "Absolutely. We diamond-grind the entire surface and use specialized crack-fill pigments to repair cracks and spalling before any coating is applied."
                },
                {
                    q: "What color options do I have?",
                    a: "We offer hundreds of flake combinations, solid colors, and 3D metallic pigments. Check out our Color Chart for inspiration!"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
                <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
            </div>

            {/* Header Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-orange-500 font-black tracking-[0.2em] uppercase text-sm mb-6">Expert Knowledge</h2>
                    <h1 className="text-4xl lg:text-7xl font-bold font-outfit mb-8">Frequently Asked <span className="text-white italic">Questions</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to know about transforming your Orange County floors.</p>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {faqs.map((group, idx) => (
                            <div key={idx}>
                                <h3 className="text-2xl font-bold mb-12 text-orange-500 border-l-4 border-orange-500 pl-4">{group.category}</h3>
                                <div className="space-y-12">
                                    {group.questions.map((faq, fIdx) => (
                                        <div key={fIdx} className="group">
                                            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">Q: {faq.q}</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed">A: {faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still have questions Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold font-outfit mb-8 italic">Still Have Questions?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">We're here to help. Reach out to our Orange County floor experts today for a free consultation.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            href="/contact"
                            className="bg-orange-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-orange-700 transition-all"
                        >
                            Contact Us
                        </Link>
                        <a
                            href="tel:9498355224"
                            className="border-2 border-white/20 hover:border-white text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all"
                        >
                            Call (949) 835-5224
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
