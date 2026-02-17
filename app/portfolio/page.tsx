"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Globe, Smartphone, BarChart, Database, Layout, Rocket } from "lucide-react";

// Project Data
const projects = [
    {
        id: "lao-app",
        title: "Lao App",
        category: "Web & App Dev",
        client: "Lao Government",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        tags: ["Flutter", "Firebase", "Google Maps API"],
        badge: "Live on Play Store",
        link: "#",
        size: "large", // spans 2 cols
    },
    {
        id: "mga-ecommerce",
        title: "MGA Electricals E-commerce",
        category: "Web & App Dev",
        client: "MGA Electricals",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Next.js", "Shopify", "Stripe"],
        badge: "200% Sales Boost",
        link: "#",
        size: "normal",
    },
    {
        id: "voomet-branding",
        title: "Voomet Brand Launch",
        category: "Digital Marketing",
        client: "Voomet",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["SEO", "Social Media", "PPC"],
        badge: "10k+ Leads Generated",
        link: "#",
        size: "normal",
    },
    {
        id: "corporate-digitization",
        title: "Corporate Data Digitization",
        category: "Records Management",
        client: "FinCorp Global",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        tags: ["OCR", "Cloud Storage", "Security"],
        badge: "1M+ Files Processed",
        link: "#",
        size: "large",
    },
    {
        id: "medtech-dashboard",
        title: "MedTech Dashboard",
        category: "Web & App Dev",
        client: "HealthPlus",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
        tags: ["React", "D3.js", "Node.js"],
        badge: "Award Winning UI",
        link: "#",
        size: "normal",
    },
    {
        id: "travel-portal",
        title: "Travel Agency Portal",
        category: "Web & App Dev",
        client: "Wanderlust",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
        tags: ["Vue.js", "Nuxt", "Amadeus API"],
        badge: "Global Booking System",
        link: "#",
        size: "normal",
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All Projects");

    // Filter projects based on active category
    const filteredProjects = activeCategory === "All Projects"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const categories = ["All Projects", "Web & App Dev", "Digital Marketing", "Records Management"];

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            {/* 1. Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                        alt="Portfolio Hero"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-sm mb-6 tracking-widest uppercase backdrop-blur-md"
                    >
                        Proof of Work
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 font-space text-white leading-tight"
                    >
                        Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        From high-scale apps to ROI-driven marketing campaigns, explore the projects that define our success.
                    </motion.p>
                </div>
            </section>

            {/* 2. Portfolio Bento Grid */}
            <section className="py-24 bg-slate-950 relative">
                <div className="container px-4 mx-auto">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full border text-sm font-bold transition-all ${activeCategory === category
                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                                        : "bg-transparent text-slate-400 border-white/10 hover:border-primary/50 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 ${project.size === 'large' ? 'md:col-span-2' : ''}`}
                            >
                                {/* Background Image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    {/* Badge */}
                                    <div className="absolute top-8 right-8">
                                        <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                            {project.badge}
                                        </span>
                                    </div>

                                    {/* Client Info */}
                                    <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2">
                                        {project.client}
                                    </span>

                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-lg backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <Link href={`/portfolio/${project.id}`} className="inline-flex items-center gap-2 text-white font-semibold group/link hover:text-primary transition-colors">
                                        View Case Study
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA Section */}
            <section className="py-32 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

                <div className="container px-4 mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-space text-white">
                            Ready to be our next <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Success Story?</span>
                        </h2>
                        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
                            Join 500+ satisfied clients who have transformed their business with Catalyst.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-2xl"
                        >
                            Start Your Project <Rocket className="w-5 h-5 text-primary" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
