"use client";

import Image from 'next/image';
import { Search, TrendingUp, Target, BarChart, Globe, Megaphone } from 'lucide-react';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function DigitalMarketingPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Hero Image */}
                        <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Digital Marketing"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 inline-block">
                                    Growth Engine
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold font-space text-white">
                                    ROI-Driven Digital <br /> Marketing & Strategy
                                </h1>
                            </div>
                        </div>

                        {/* Strategy Section */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-4 font-space">Strategic Growth</h2>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                We don't just run ads; we build comprehensive strategies that connect your brand with the right audience. Our focus is purely on data-driven growth and visible brand authority.
                            </p>
                        </div>

                        {/* Core Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* SEO */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">SEO Mastery</h3>
                                <p className="text-slate-400 text-sm">Rank higher on Google and dominate search results with ethical, content-driven strategies.</p>
                            </div>

                            {/* Lead Gen */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Lead Generation</h3>
                                <p className="text-slate-400 text-sm">High-quality leads that actually convert into sales, filtering out the noise.</p>
                            </div>

                            {/* Ad Campaigns */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Ad Campaigns</h3>
                                <p className="text-slate-400 text-sm">ROI-focused Meta and Google Ads management to maximize your ad spend efficiency.</p>
                            </div>

                            {/* Brand Awareness */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4">
                                    <Megaphone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Brand Visibility</h3>
                                <p className="text-slate-400 text-sm">Creative campaigns that spark conversations and keep your brand Top of Mind.</p>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar (4 Cols) */}
                    <div className="lg:col-span-4">
                        <ServiceSidebar />
                    </div>

                </div>
            </div>
        </div>
    );
}
