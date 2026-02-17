"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight, CheckCircle2, Rocket, Settings, Target,
    LineChart, UserCheck,
    BarChart3, Workflow, LayoutList, Database, Cpu, MessageSquare
} from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { consultingIndustries } from "@/lib/consulting-data";

// Transform data for marquee cards
const industryCards = consultingIndustries.map(industry => ({
    slug: industry.slug,
    icon: <industry.icon className="w-8 h-8 text-white" />,
    title: industry.title,
    description: industry.description,
    techFocus: industry.details.solutions.map(s => s.title).slice(0, 3).join(" • "),
    color: industry.slug === "e-commerce-optimization" ? "from-blue-500/20 to-cyan-500/20"
        : industry.slug === "service-agency-scaling" ? "from-purple-500/20 to-pink-500/20"
            : "from-emerald-500/20 to-teal-500/20"
}));

// Components
const IndustryCard = ({ slug, icon, title, description, techFocus, color }: { slug: string, icon: React.ReactNode, title: string, description: string, techFocus: string, color: string }) => (
    <Link href={`/consulting/${slug}`} className="block h-full">
        <div className={`w-[350px] p-8 rounded-3xl bg-gradient-to-br ${color} border border-white/10 relative overflow-hidden group cursor-pointer hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 transform backdrop-blur-sm`}>
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                {icon}
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-white border border-white/20 shadow-lg relative z-10">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-space relative z-10">{title}</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed whitespace-normal h-24 relative z-10">
                {description}
            </p>
            <div className="pt-4 border-t border-white/10 relative z-10">
                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Tech Focus</p>
                <p className="text-white text-xs">{techFocus}</p>
            </div>
        </div>
    </Link>
);

const MarqueeCards = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="relative w-full overflow-hidden py-10">
            {/* Gradient Mask */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    backdropFilter: "blur(0px)" // Hack to force new layer
                }}
            />

            <div
                className="flex overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="flex gap-8 flex-shrink-0"
                    animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 80, // Slower for readability
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Duplicated list for seamless loop (4x for smoothness) */}
                    {[...industryCards, ...industryCards, ...industryCards, ...industryCards].map((card, idx) => (
                        <div key={`${card.slug}-${idx}`} className="flex-shrink-0">
                            <IndustryCard
                                slug={card.slug}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                techFocus={card.techFocus}
                                color={card.color}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default function ConsultingPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            {/* Booking Modal */}
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                        alt="Business Meeting"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950" />
                </motion.div>

                {/* Abstract Shapes */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-4xl md:text-7xl font-bold mb-6 font-space text-white leading-tight">
                            Strategic Guidance for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Exponential Growth.</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            We analyze, plan, and execute business strategies to help startups and enterprises scale efficiently and sustainably.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                            >
                                Get Your Free Business Audit <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link
                                href="/#services-showcase"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
                            >
                                Explore Services
                            </Link>
                        </div>

                        {/* Success Counter (Floating Bar) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-12 py-6 mx-auto hover:border-primary/30 transition-colors shadow-2xl"
                        >
                            <AnimatedCounter end={50} suffix="+" label="Businesses Transformed" />
                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                            <AnimatedCounter end={2.5} suffix="x" label="Avg. Revenue Growth" color="text-primary" isFloat />
                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                            <AnimatedCounter end={98} suffix="%" label="Client Retention" color="text-secondary" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 1. The "Catalyst Strategy" Roadmap - Grid Beam Background */}
            <section className="py-32 bg-slate-900/50 relative overflow-hidden">
                {/* Visual Polish: Grid Beam */}
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
                <div className="absolute top-0 left-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space text-white">The Catalyst Strategy</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Your journey from bottleneck to breakthrough in 4 clear steps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Business Audit", desc: "We dive deep into your current workflows to find bottlenecks.", icon: Target },
                            { step: "02", title: "Strategic Blueprint", desc: "A tailored 12-month growth plan designed for your niche.", icon: Settings },
                            { step: "03", title: "Implementation", desc: "We don't just advise; our engineers help you build the tech you need.", icon: Rocket },
                            { step: "04", title: "ROI Analysis", desc: "Monthly reporting on growth metrics and process efficiency.", icon: LineChart },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 group"
                            >
                                <div className="absolute -top-6 left-6 text-6xl font-bold text-white/5 font-space group-hover:text-primary/10 transition-colors">{item.step}</div>
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                                <p className="text-slate-400 text-sm relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consulting by Industry - Infinite Marquee */}
            <section className="py-24 bg-slate-950 relative border-t border-white/5 overflow-hidden">
                <div className="container px-4 mx-auto mb-16 relative z-10">
                    <div className="text-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Tailored Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space text-white">
                            Consulting by Industry
                        </h2>
                    </div>
                </div>

                <MarqueeCards />
            </section>

            {/* Our Strategic Arsenal (Tools) */}
            <section className="py-20 bg-slate-900/30 border-y border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/3">
                            <h3 className="text-3xl font-bold text-white font-space mb-4">Our Strategic Arsenal</h3>
                            <p className="text-slate-400">We leverage top-tier tools to gather data, automate workflows, and manage projects with precision.</p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
                            <ToolCard icon={<BarChart3 />} name="Data & Analytics" tools="GA4, Mixpanel" />
                            <ToolCard icon={<Workflow />} name="Automation" tools="Zapier, n8n" />
                            <ToolCard icon={<LayoutList />} name="Project Mgmt" tools="Trello, Jira" />
                            <ToolCard icon={<Database />} name="CRM" tools="HubSpot, Salesforce" />
                            <ToolCard icon={<Cpu />} name="AI Integration" tools="OpenAI, Claude" />
                            <ToolCard icon={<MessageSquare />} name="Communication" tools="Slack, Discord" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Case Study Highlight & Founder Session */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Case Study */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Social Proof</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-space text-white leading-tight">
                                Featured <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Success Story</span>
                            </h2>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <LineChart className="w-32 h-32 text-green-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase mb-4">
                                        +200% Efficiency
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Global Retail Expansion</h3>
                                    <p className="text-slate-300 mb-6">
                                        We implemented a custom automation strategy for a leading retail brand, reducing manual inventory tracking by 95% and doubling operational speed within 3 months.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm font-bold text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Automated Workflow</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Founder Session - The Expert Edge */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)] transition-shadow duration-500"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white to-secondary" />
                            <div className="w-24 h-24 mx-auto rounded-full bg-black border-2 border-white/20 mb-6 flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/founder.jpg"
                                    alt="Darshan P V"
                                    width={96}
                                    height={96}
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white font-space mb-2">Darshan P V</h3>
                            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-6">The Expert Edge</p>

                            <blockquote className="text-xl text-white font-serif italic mb-8 max-w-md mx-auto relative">
                                <span className="text-4xl text-white/20 absolute -top-4 -left-2">&quot;</span>
                                We bridge the gap between complex tech and practical business growth.
                                <span className="text-4xl text-white/20 absolute -bottom-8 -right-2">&quot;</span>
                            </blockquote>

                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
                            >
                                <UserCheck className="w-5 h-5" />
                                Book a 1:1 Strategy Call
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper Components (continued)
const AnimatedCounter = ({ end, suffix = "", label, color = "text-white", isFloat = false }: { end: number, suffix?: string, label: string, color?: string, isFloat?: boolean }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => isFloat ? latest.toFixed(1) : Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            animate(count, end, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, end, count]);

    return (
        <div ref={ref} className="text-center">
            <div className={`text-3xl font-bold ${color} font-space mb-1`}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <motion.span>{rounded as any}</motion.span>{suffix}
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{label}</div>
        </div>
    );
};

const ToolCard = ({ icon, name, tools }: { icon: React.ReactNode, name: string, tools: string }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
        <div className="p-2 rounded-lg bg-slate-900 border border-white/10 text-primary group-hover:text-white transition-colors">
            {icon}
        </div>
        <div>
            <div className="text-white font-bold text-sm">{name}</div>
            <div className="text-slate-400 text-xs">{tools}</div>
        </div>
    </div>
);
