"use client";

import Image from 'next/image';
import { Database, ShieldCheck, FileText, Lock, FolderOpen, Server } from 'lucide-react';
import ServiceSidebar from '@/components/ServiceSidebar';

export default function RecordManagementPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Hero Image */}
                        <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
                                alt="Record Management"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 inline-block">
                                    Data Security
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold font-space text-white">
                                    Secure Data & <br /> Document Management
                                </h1>
                            </div>
                        </div>

                        {/* Strategy Section */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-4 font-space">Organized Intelligence</h2>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                Data is only valuable if it's accessible and secure. We streamline your operations through efficient information architecture, ensuring your critical business records are digitized, organized, and protected.
                            </p>
                        </div>

                        {/* Core Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Data Organization */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 mb-4">
                                    <Database className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Data Organization</h3>
                                <p className="text-slate-400 text-sm">Structured management of large-scale business data to improve retrieval times and reduce redundancy.</p>
                            </div>

                            {/* Security */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-4">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Advanced Security</h3>
                                <p className="text-slate-400 text-sm">Military-grade encryption and access protocols to keep your sensitive documents safe from breaches.</p>
                            </div>

                            {/* Digitization */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-4">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Digitization</h3>
                                <p className="text-slate-400 text-sm">Converting physical paper records into searchable, indexed digital formats for modern workflows.</p>
                            </div>

                            {/* Archiving */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                                    <FolderOpen className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Smart Archiving</h3>
                                <p className="text-slate-400 text-sm">Automated retention policies and archival systems to ensure compliance with legal standards.</p>
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
