"use client";

import Image from 'next/image';
import { Lightbulb, Rocket, Users, Target, BarChart, ArrowRight } from 'lucide-react';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function DigitalTransformationsPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Hero Image */}
                        <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                alt="Digital Transformation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 inline-block">
                                    Future Ready
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold font-space text-white">
                                    Digital Transformation <br /> & Innovation
                                </h1>
                            </div>
                        </div>

                        {/* Strategy Section */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-4 font-space">Reimagine Your Business</h2>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                We help enterprises embrace digital technologies to fundamentally change how they operate and deliver value to customers. From legacy modernization to AI integration, we guide your transformation journey.
                            </p>
                        </div>

                        {/* Core Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Process Optimization */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Process Optimization</h3>
                                <p className="text-slate-400 text-sm">Streamline operations using automation and digital workflows to reduce costs and improve speed.</p>
                            </div>

                            {/* Legacy Modernization */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Legacy Modernization</h3>
                                <p className="text-slate-400 text-sm">Upgrade outdated systems to modern cloud-native architectures without disrupting business continuity.</p>
                            </div>

                            {/* Cultural Shift */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Cultural Adoption</h3>
                                <p className="text-slate-400 text-sm">Empower your workforce with the tools and mindset needed to thrive in a digital-first environment.</p>
                            </div>

                            {/* Data-Driven Insights */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
                                    <BarChart className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Data Intelligence</h3>
                                <p className="text-slate-400 text-sm">Leverage analytics and AI to gain actionable insights and make informed strategic decisions.</p>
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
