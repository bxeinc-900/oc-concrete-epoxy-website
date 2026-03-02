import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-black font-outfit tracking-tighter">
                                OC <span className="text-orange-500 italic">CONCRETE</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            Orange County's premier concrete restoration and coating experts. Family-owned and operated for over 20 years.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/OCconcretepolishing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500/20 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14H7v4.21h2.5V23h5V11.67h3.77l.5-4.21z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/oc_epoxy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500/20 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/epoxy-flooring" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Garage Epoxy</Link></li>
                            <li><Link href="/metallic-epoxy-flooring" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Metallic 3D Floors</Link></li>
                            <li><Link href="/polished-concrete" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Polished Concrete</Link></li>
                            <li><Link href="/commercial-epoxy-flooring-orange-county" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Commercial</Link></li>
                            <li><Link href="/moisture-mitigation" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Moisture Mitigation</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about-us" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/photo-gallery" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Photo Gallery</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Contact Us</Link></li>
                            <li><Link href="/faq" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">FAQ</Link></li>
                            <li><Link href="/epoxy-calendar" className="text-orange-500 font-bold hover:text-orange-400 transition-colors text-sm underline underline-offset-4 font-outfit">Free Estimate</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div className="space-y-1">
                                    <span className="text-gray-500 text-sm block">Serving Huntington Beach & all of OC.</span>
                                    <a href="https://www.google.com/maps?cid=17337711478889534118" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-xs font-bold hover:underline">View on Google Maps</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <div className="space-y-1">
                                    <a href="tel:9498355224" className="text-gray-500 hover:text-white transition-all text-sm font-bold tracking-tight block">(949) 835-5224</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div className="text-xs text-gray-500 space-y-1">
                                    <p><span className="font-bold text-gray-400">Mon-Fri:</span> 8:30 AM – 4:30 PM</p>
                                    <p><span className="font-bold text-gray-400">Sat:</span> 10:00 AM – 2:00 PM</p>
                                    <p><span className="font-bold text-gray-400">Sun:</span> Closed</p>
                                </div>
                            </li>
                            <li className="pt-2">
                                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <div className="flex text-orange-500">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <span className="text-white text-xs font-bold">4.8 / 5.0</span>
                                    </div>
                                    <p className="text-[10px] text-gray-500 mb-2">Based on 76 Google Reviews</p>
                                    <a href="https://g.page/r/CaZSbB27JvwEBM/review" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-[10px] font-bold uppercase tracking-wider hover:underline">Write a Review</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
                    <p>© {new Date().getFullYear()} South Coast Epoxy & Concrete Restoration. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
