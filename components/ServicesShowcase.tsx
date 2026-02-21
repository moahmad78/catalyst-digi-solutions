"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Smartphone, Database, ArrowRight } from "lucide-react";

const services = [
    {
        title: "Digital Marketing",
        description: "ROI-driven strategies, SEO mastery, and high-quality Lead Generation to dominate your market.",
        icon: TrendingUp,
        href: "/solutions/digital-marketing",
        color: "text-blue-400",
        glow: "group-hover:shadow-[inset_0_0_60px_-15px_rgba(59,130,246,0.4)]",
        borderColor: "group-hover:border-blue-500/50",
        bg: "group-hover:bg-blue-500/10",
    },
    {
        title: "Digital Transformations",
        description: "Innovative solutions for business modernization, including custom application development, ERP systems, and cloud migration.",
        icon: Smartphone,
        href: "/solutions/digital-transformation",
        color: "text-purple-400",
        glow: "group-hover:shadow-[inset_0_0_60px_-15px_rgba(168,85,247,0.4)]",
        borderColor: "group-hover:border-purple-500/50",
        bg: "group-hover:bg-purple-500/10",
    },
    {
        title: "Data Management",
        description: "Secure digitization and systematic management of official records to streamline operations and ensure growth.",
        icon: Database,
        href: "/solutions/record-management",
        color: "text-emerald-400",
        glow: "group-hover:shadow-[inset_0_0_60px_-15px_rgba(16,185,129,0.4)]",
        borderColor: "group-hover:border-emerald-500/50",
        bg: "group-hover:bg-emerald-500/10",
    },
];

export default function ServicesShowcase() {
    return (
        <section id="services-showcase" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space text-white">
                        Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystem</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        From strategy to execution, we provide end-to-end solutions for your business growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md overflow-hidden hover:-translate-y-2 transition-all duration-300 ${service.borderColor}`}
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${service.glow}`} />

                            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-colors ${service.bg}`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 font-space">{service.title}</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                href={service.href}
                                className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-primary transition-colors"
                            >
                                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
