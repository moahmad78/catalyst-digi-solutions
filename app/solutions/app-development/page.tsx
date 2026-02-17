"use client";

import Image from 'next/image';
import { Smartphone, Globe, Cpu, Server, Code2, Layers } from 'lucide-react';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function AppDevelopmentPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Hero Image */}
                        <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
                                alt="App Development"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 inline-block">
                                    Engineering Excellence
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold font-space text-white">
                                    Custom Software & <br /> App Solutions
                                </h1>
                            </div>
                        </div>

                        {/* Strategy Section */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-4 font-space">Business Transformation</h2>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                We engineer future-ready digital products with clean, scalable code. From mobile apps to complex enterprise platforms, we build software that automates your unique business processes.
                            </p>
                        </div>

                        {/* Core Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Mobile Apps */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Mobile Apps</h3>
                                <p className="text-slate-400 text-sm">High-performance Native (iOS/Android) and Cross-platform applications built with Flutter and React Native.</p>
                            </div>

                            {/* Web Platforms */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-4">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Web Platforms</h3>
                                <p className="text-slate-400 text-sm">Scalable, SEO-friendly web applications using Next.js, React, and modern serverless architectures.</p>
                            </div>

                            {/* Custom Logic */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Custom Logic</h3>
                                <p className="text-slate-400 text-sm">Tailored software algorithms to solve specific operational challenges and automate workflows.</p>
                            </div>

                            {/* Cloud Backend */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                                    <Server className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Cloud Infrastructure</h3>
                                <p className="text-slate-400 text-sm">Secure, scalable backend systems on AWS, Google Cloud, or Azure to ensure 99.9% uptime.</p>
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
