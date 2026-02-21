"use client";

import Image from 'next/image';
import { Search, Share2, Mail, Magnet, TrendingUp } from 'lucide-react';
import ServiceSidebar from '@/components/ServiceSidebar';
import { motion } from 'framer-motion';

export default function DigitalMarketingPage() {
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
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Digital Marketing Strategy"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 inline-block">
                                    Growth Engine
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold font-space text-white leading-tight">
                                    Empower Your Brand with Tailored Digital Marketing Strategies.
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
                                &quot;Empower your brand with our tailored digital marketing strategies, meticulously crafted by our experts to deliver tangible results and elevate your ROI.&quot;
                            </p>
                        </motion.div>

                        {/* Value Proposition */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/20 rounded-xl">
                                    <TrendingUp className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2 font-space">Value Proposition</h2>
                                    <p className="text-indigo-200/80 leading-relaxed">
                                        Focus on increasing leads & sales, optimizing marketing costs, and differentiating the brand online.
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
                            {/* SEO */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Search Engine Optimization (SEO)</h3>
                                <p className="text-slate-400 text-sm">Mastery in ranking and visibility.</p>
                            </motion.div>

                            {/* SMM */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Share2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Social Media Marketing (SMM)</h3>
                                <p className="text-slate-400 text-sm">Engaging audiences across all social platforms.</p>
                            </motion.div>

                            {/* Email Marketing */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Email Marketing</h3>
                                <p className="text-slate-400 text-sm">Direct and personalized communication for conversion.</p>
                            </motion.div>

                            {/* Lead Generation */}
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Magnet className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Lead Generation</h3>
                                <p className="text-slate-400 text-sm">High-quality lead acquisition to dominate your market.</p>
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
