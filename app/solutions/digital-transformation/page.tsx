"use client";

import Image from 'next/image';
import { Smartphone, Target, Cloud, ArrowRightLeft, Cpu } from 'lucide-react';
import ServiceSidebar from '@/components/ServiceSidebar';
import { motion } from 'framer-motion';

export default function DigitalTransformationPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                alt="Digital Transformation Services"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 inline-block">
                                    Future Ready
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold font-space text-white leading-tight">
                                    Transform Your Business for the Digital Age.
                                </h1>
                            </div>
                        </motion.div>

                        {/* Main Description */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                        >
                            <p className="text-slate-300 leading-relaxed text-lg">
                                &quot;Transform your business and stay ahead in the digital age with our custom application development services. We specialize in creating innovative solutions to meet your unique needs.&quot;
                            </p>
                        </motion.div>

                        {/* Value Proposition */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <Target className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2 font-space">Key Benefits</h2>
                                    <p className="text-purple-200/80 leading-relaxed">
                                        Automated repetitive tasks, streamlined workflows, and real-time collaboration.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Core Details Grid */}
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {/* Custom App */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Custom Apps</h3>
                                <p className="text-slate-400 text-sm">Mobile and web applications built from scratch.</p>
                            </motion.div>

                            {/* ERP */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-xl flex items-center justify-center text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">ERP Systems</h3>
                                <p className="text-slate-400 text-sm">Implementing enterprise resource planning systems to streamline operations.</p>
                            </motion.div>

                            {/* Cloud */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Cloud className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Cloud Infrastructure Migration</h3>
                                <p className="text-slate-400 text-sm">Migrating to secure, scalable cloud-based environments.</p>
                            </motion.div>

                            {/* Digitization */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                                    <ArrowRightLeft className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Process Digitization</h3>
                                <p className="text-slate-400 text-sm">Digitizing manual processes to improve efficiency and customer experience.</p>
                            </motion.div>
                        </motion.div>

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
