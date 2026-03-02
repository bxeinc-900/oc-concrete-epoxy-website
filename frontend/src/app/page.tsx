import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

import ReviewWidget from "@/components/ReviewWidget";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-orange-500/10 to-transparent -z-10 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 -z-10 blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl lg:text-7xl font-bold font-outfit leading-tight mb-6">
              Premium <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Epoxy Flooring</span> & Concrete Polishing
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-xl font-light leading-relaxed">
              Transforming residential, commercial, and industrial spaces across <span className="text-white font-medium">Orange County</span> with high-performance, stunning floor designs for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 underline-offset-4">
              <Link
                href="/epoxy-calendar"
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 text-center shadow-2xl shadow-orange-900/40"
              >
                Get Free Online Quote
              </Link>
              <Link
                href="/photo-gallery"
                className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 text-center backdrop-blur-sm"
              >
                View Gallery
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0c0c0c] bg-orange-500 flex items-center justify-center text-[10px] font-bold">OC</div>
                ))}
              </div>
              <p className="text-sm text-gray-500"><span className="text-white font-bold italic">5.0 Star Rating</span> based on 200+ residential and commercial projects.</p>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-orange-400 font-bold tracking-widest uppercase text-xs mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold font-outfit">Metallic 3D Epoxy Garage</h3>
                <p className="text-gray-300 text-sm">Huntington Beach, CA</p>
              </div>
              {/* Real premium image from components */}
              <div className="w-full h-full bg-[url('/images/luxury_metallic_epoxy_garage_1772480048286.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#111111]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl lg:text-5xl font-bold font-outfit leading-tight mb-4">Professional Concrete Services</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">From garage transformation to industrial-grade durability, we handle it all with precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Epoxy Flooring"
              description="High-performance garage floor epoxy that's chemical resistant and heat resistant."
              href="/epoxy-flooring"
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
            />
            <ServiceCard
              title="Concrete Polishing"
              description="Sustainable, low-maintenance polished concrete floors for warehouses and office spaces."
              href="/polished-concrete"
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <ServiceCard
              title="Metallic 3D Floors"
              description="Transform your home or retail space with captivating, visually stunning 3D metallic effects."
              href="/metallic-epoxy-flooring"
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
            />
            <ServiceCard
              title="Commercial & Retail"
              description="Durable flooring solutions for high-traffic environments including retail and food service."
              href="/commercial-epoxy-flooring-orange-county"
              icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* Review Section */}
      <ReviewWidget />

      {/* Buying Intent / Trust Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold font-outfit mb-8">Why Orange County Trusts <span className="text-orange-500 uppercase tracking-tight">OC Concrete</span></h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center font-bold">01</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Lifetime Warranty</h4>
                <p className="text-gray-400 text-sm">We stand behind our industrial-grade floor coatings technology with industry-leading peeling and cracking protection.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center font-bold">02</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Local Construction Experts</h4>
                <p className="text-gray-400 text-sm">Serving Irvine, Newport Beach, Huntington Beach, and all of Southern California for over two decades.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center font-bold">03</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Problem-Solvers</h4>
                <p className="text-gray-400 text-sm">Facing cracked garage floors or dusty concrete? We provide solutions that increase property value and aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-orange-600 rounded-[40px] p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
          <h3 className="text-3xl font-bold font-outfit mb-4">Start Your Project Today</h3>
          <p className="text-orange-100 mb-8 max-w-md">Get a customized quote for your epoxy flooring or concrete polishing project in as little as 24 hours.</p>
          <Link
            href="/epoxy-calendar"
            className="inline-block bg-[#0c0c0c] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-transform"
          >
            Request Your Free Quote
          </Link>
          <p className="mt-8 text-sm text-orange-200">Or call/text: <span className="font-bold text-white underline underline-offset-4">(949) 835-5224</span></p>
        </div>
      </section>
    </div>
  );
}
