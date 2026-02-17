"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
    { name: 'Digital Marketing', href: '/solutions/digital-marketing' },
    { name: 'App Development', href: '/solutions/app-development' },
    { name: 'Record Management', href: '/solutions/record-management' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformations' },
];

export default function ServiceSidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-8 sticky top-24">
            {/* Navigation */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 font-space">Services</h3>
                <nav className="flex flex-col space-y-2">
                    {services.map((service) => {
                        const isActive = pathname === service.href;
                        return (
                            <Link
                                key={service.href}
                                href={service.href}
                                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {service.name}
                                {isActive && <CheckCircle2 className="w-4 h-4" />}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2 font-space">Get a Quote</h3>
                <p className="text-slate-400 text-sm mb-6">Ready to scale? Let&apos;s discuss your project.</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="john@company.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-2"
                    >
                        Request Call <ArrowRight className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}
