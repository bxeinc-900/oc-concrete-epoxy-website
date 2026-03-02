import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
    return (
        <Link href={href} className="group block h-full">
            <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-outfit">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>
                <span className="text-orange-500 text-sm font-semibold flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}
