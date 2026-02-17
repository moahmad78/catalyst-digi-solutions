"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Award, TrendingUp } from "lucide-react";

const companies = [
    { name: "Google", color: "#4285F4" },
    { name: "Microsoft", color: "#F25022" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Infosys", color: "#007CC3" },
    { name: "TCS", color: "#E71D73" },
    { name: "Wipro", color: "#1D9A6C" },
    { name: "Zoho", color: "#DF2128" },
    { name: "Accenture", color: "#A100FF" },
    { name: "Swiggy", color: "#FC8019" },
    { name: "Zomato", color: "#CB202D" }
];

const alumni = [
    {
        name: "Rahul S.",
        role: "Frontend Dev",
        company: "Swiggy",
        package: "12 LPA",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Priya M.",
        role: "UX Designer",
        company: "Zoho",
        package: "8 LPA",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Amit K.",
        role: "Full Stack",
        company: "Accenture",
        package: "6.5 LPA",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Sneha R.",
        role: "Data Analyst",
        company: "TCS",
        package: "5.5 LPA",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
];

export default function HiringPartners() {
    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="container px-4 mx-auto relative z-10">
                {/* 1. Stats & Statement Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold uppercase tracking-wider mb-6">
                        <Award className="w-4 h-4" /> Verified Certificate Value
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-6">
                        Accepted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">50+ Top Tech Companies</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Our internship certificates are recognized by leading startups and MNCs, giving you a distinct edge in placements. We don&apos;t just teach; we connect you to the industry.
                    </p>
                </div>

                {/* 2. Infinite Logo Marquee (The Wall of Trust) */}
                <div className="relative w-full overflow-hidden mb-20 group">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

                    <div className="flex w-full">
                        <motion.div
                            className="flex items-center gap-12 whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        >
                            {[...companies, ...companies].map((company, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                                    <div
                                        className="text-2xl font-bold font-space px-6 py-4 rounded-xl border border-white/5 bg-white/5"
                                        style={{ color: company.color }} // Note: In a real scenario, use SVG logos
                                    >
                                        {company.name}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* 3. Where Our Alumni Work Grid */}
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-white mb-8 font-space">Recent Success Stories</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {alumni.map((alum, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all group hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center">
                                <div className="relative w-20 h-20 mb-4">
                                    <Image
                                        src={alum.image}
                                        alt={alum.name}
                                        fill
                                        className="rounded-full object-cover border-4 border-slate-800 group-hover:border-primary transition-colors"
                                    />
                                    <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-slate-900">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{alum.name}</h4>
                                <p className="text-xs text-slate-400 mb-4">{alum.role}</p>

                                <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-300">{alum.company}</span>
                                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-md flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" /> {alum.package}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
