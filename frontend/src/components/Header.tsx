'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/images/oc-concrete-epoxy-logo.jpg"
                                alt="OC Concrete Polishing & Epoxy Flooring Logo"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors text-gray-800">Home</Link>
                            <Link href="/epoxy-flooring" className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors text-gray-800">Epoxy Floors</Link>
                            <Link href="/polished-concrete" className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors text-gray-800">Polished Concrete</Link>
                            <Link href="/commercial-epoxy-flooring-orange-county" className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors text-gray-800">Commercial</Link>
                            <Link href="/about-us" className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors text-gray-800">About</Link>
                            <Link href="/photo-gallery" className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors text-gray-800">Gallery</Link>
                            <Link
                                href="/epoxy-calendar"
                                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-900/20"
                            >
                                Get Quote
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 animate-in fade-in slide-in-from-top-4 duration-300 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md transition-colors">Home</Link>
                        <Link href="/epoxy-flooring" className="block hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md transition-colors">Epoxy Floors</Link>
                        <Link href="/polished-concrete" className="block hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md transition-colors">Polished Concrete</Link>
                        <Link href="/commercial-epoxy-flooring-orange-county" className="block hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md transition-colors">Commercial</Link>
                        <Link href="/about-us" className="block hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md transition-colors">About Us</Link>
                        <Link href="/photo-gallery" className="block hover:bg-gray-50 text-gray-800 px-3 py-2 rounded-md transition-colors">Photo Gallery</Link>
                        <Link href="/epoxy-calendar" className="block bg-orange-600 text-white px-3 py-2 rounded-md font-semibold text-center mt-4">Get Free Quote</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
