"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Target, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-0 relative overflow-x-hidden">

            {/* 1. Hero Section (The Vision) */}
            <section className="relative px-4 mb-32">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto text-center relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center mb-8"
                    >
                        <div className="relative w-64 h-24 md:w-96 md:h-32 mb-8">
                            <Image
                                src="/logo.png"
                                alt="Catalyst Digi Solutions"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8 font-space leading-tight"
                    >
                        Empowering Businesses through <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Transformation.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
                    >
                        At Catalyst Digi Solutions, we are dedicated to transforming the digital landscape for businesses of all sizes. Located in the vibrant city of Mangalore, India, we are a dynamic agency specializing in digital marketing, online training, website design, and application development.
                    </motion.p>
                </div>
            </section>

            {/* 2. The Foundation (Founder & Expertise) */}
            <section className="container mx-auto px-4 mb-32 relative z-10">
                <div className="bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-square relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/founder.jpg"
                                    alt="Darshan P V"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                                <p className="font-bold text-lg">&quot;Excellence & Innovation.&quot;</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm tracking-widest uppercase mb-2">
                                The Foundation
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-space">Darshan P V</h2>
                            <h3 className="text-xl text-slate-400 font-medium">Founder & CEO</h3>

                            <p className="text-slate-300 text-lg leading-relaxed">
                                Founded by Darshan PV, a seasoned expert with over two decades of experience in digital marketing, project management, and strategic digital transformation, Catalyst Digi Solutions stands on a foundation of excellence and innovation.
                            </p>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" /> Proven Track Record
                                </h4>
                                <p className="text-slate-400">
                                    With a history of successful collaboration with esteemed organizations like <span className="text-white font-semibold">Toyota Kirloskar</span> and <span className="text-white font-semibold">Kotak Securities</span>, we bring enterprise-grade expertise to every project.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
                                    Connect on LinkedIn <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Mission */}
            <section className="container mx-auto px-4 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-space">Our Mission</h2>
                        <p className="text-xl text-slate-300 leading-relaxed font-light">
                            &quot;Our mission is to empower businesses to thrive in the digital age by providing strategic guidance, cutting-edge technology solutions, and top-notch training programs. We believe in the power of digital transformation to propel businesses forward.&quot;
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* 4. What We Offer (Services Overview) */}
            <section className="container mx-auto px-4 mb-32">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-space">Comprehensive Solutions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service A */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 border border-white/10 rounded-3xl p-10 hover:border-primary/50 transition-colors group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Zap className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation Services</h3>
                        <p className="text-slate-400 leading-relaxed">
                            We specialize in developing and executing comprehensive strategies tailored to each client, from process optimization to innovative solution architecture.
                        </p>
                    </motion.div>

                    {/* Service B */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 border border-white/10 rounded-3xl p-10 hover:border-secondary/50 transition-colors group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Target className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Training Programs</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Designed and delivered by industry experts, our courses equip professionals with skills in digital marketing, project management, and emerging technologies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Why Choose Us (Core Pillars) */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-space">Why Choose Catalyst?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Expertise",
                            desc: "Results-driven solutions meeting business objectives.",
                            icon: CheckCircle2
                        },
                        {
                            title: "Innovation",
                            desc: "Constantly exploring new technologies to keep clients ahead of the curve.",
                            icon: Zap
                        },
                        {
                            title: "Customer Focus",
                            desc: "Tailored solutions where customer satisfaction is the top priority.",
                            icon: Users
                        }
                    ].map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                                <pillar.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                            <p className="text-slate-400">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
