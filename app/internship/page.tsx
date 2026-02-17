"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Share2, Briefcase, CheckCircle, Loader2, Clock, Users, Award, Rocket, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HiringPartners from "@/components/HiringPartners";
import CourseGrid from "@/components/CourseGrid";

import BookingModal from "@/components/BookingModal";

export default function Internship() {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const domains = [
        {
            title: "Web Development",
            icon: <Code className="w-8 h-8 text-primary" />,
            skills: ["React & Next.js", "WordPress & CMS", "Frontend Architecture", "API Integration"],
            tools: ["VS Code", "Git/GitHub", "Postman", "Vercel"],
            build: "E-Commerce Sites, SaaS Dashboards, Personal Portfolios",
            description: "Build modern, responsive websites and web applications using cutting-edge technologies.",
        },
        {
            title: "Graphic Designing",
            icon: <Palette className="w-8 h-8 text-secondary" />,
            skills: ["Adobe Photoshop", "Canva Pro", "UI/UX Principles", "Brand Identity"],
            tools: ["Photoshop", "Illustrator", "Figma", "Canva"],
            build: "Social Media Kits, Brand Logos, Marketing Collateral",
            description: "Create stunning visuals and user interfaces that captivate audiences and communicate brand stories.",
        },
        {
            title: "Digital Marketing",
            icon: <Share2 className="w-8 h-8 text-pink-500" />,
            skills: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
            tools: ["Google Ads", "Meta Business Suite", "Google Analytics", "SEMrush"],
            build: "Live Ad Campaigns, SEO Audits, Content Calendars",
            description: "Master the art of online marketing to drive traffic, engagement, and conversions.",
        },
    ];

    const partners = [
        "Tech Partner 1", "Hiring Partner 2", "Studio Partner 3",
        "Agency Partner 4", "Global Partner 5", "Innovation Partner 6",
        "Growth Partner 7", "Cloud Partner 8"
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        // Simulate API call
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log("Internship Form Data Submitted:", data);

        setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            {/* Booking Modal */}
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* 1. Hero Section (Reverted) */}
            <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950"></div>

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md">
                            Launch Your Career
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space text-white leading-tight">
                            Don&apos;t Just Learn. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">Build Real Products.</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Work on Live Client Projects, Get Mentored by Experts, and Launch Your Career with a portfolio that speaks for itself.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_-10px_rgba(124,58,237,0.6)] cursor-pointer"
                            >
                                Apply Now <ChevronRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scrollToSection('programs')}
                                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                Explore Courses
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Choose Your Path */}
            <section id="programs" className="py-24 bg-slate-950 relative">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Choose Your Path</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-6">
                            6 Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Career Tracks</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Select a domain to view the detailed syllabus, tools covered, and live projects you will build.
                        </p>
                    </div>

                    <CourseGrid />
                </div>
            </section>

            {/* 3. Why Choose Catalyst? */}
            <section className="py-24 bg-slate-900/30 relative border-y border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Why Choose Us?</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-6">
                            Real Skills. <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Real Growth.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Rocket, title: "100% Live Projects", desc: "No dummy projects. You will write code/design for actual live clients." },
                            { icon: Clock, title: "Flexible Slots (24/7)", desc: "Your time, your pace. Book slots anytime that fits your college schedule." },
                            { icon: Users, title: "Expert Mentorship", desc: "Daily code reviews and guidance from Senior Developers (not just trainers)." },
                            { icon: Briefcase, title: "Placement Support", desc: "Direct referrals to our network of 50+ hiring partners." }
                        ].map((usp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-primary/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                                    <usp.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-space">{usp.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{usp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The Process Roadmap */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space text-white">Your Journey to Pro</h2>
                        <p className="text-slate-400 text-lg">From student to professional in 5 simple steps.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="hidden md:block absolute top-[24px] left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-primary to-slate-800 rounded-full z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                { step: "01", title: "Apply", desc: "Fill the form & book slot." },
                                { step: "02", title: "Learn", desc: "Master tools via live training." },
                                { step: "03", title: "Build", desc: "Work on real client projects." },
                                { step: "04", title: "Review", desc: "Get code reviews from experts." },
                                { step: "05", title: "Launch", desc: "Get certified & hired." }
                            ].map((item, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 text-white font-bold flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all shadow-xl">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-space">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Certificate Value Section */}
            <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-950 border-y border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-6 border border-yellow-500/20">
                                <Star className="w-4 h-4 fill-current" /> Valid & Verifiable
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-space text-white leading-tight">
                                A Certificate That <br /> <span className="text-yellow-500">Opens Doors.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Don&apos;t just add a line to your resume. Show proof of your skills. Our internship certificates are recognized by industry leaders and list the actual live projects you worked on.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Industry Recognized & Verifiable",
                                    "Lists Live Projects & Tech Stack",
                                    "Valid for College Credits & Job Apps",
                                    "Signed by Senior Technical Architects"
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                                        <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-[4/3] bg-white rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-slate-800 overflow-hidden group">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-900 bg-slate-50 p-8 text-center">
                                    <div className="w-16 h-16 bg-slate-900 rounded-full mb-4"></div>
                                    <h3 className="text-2xl font-serif font-bold mb-2">Certificate of Internship</h3>
                                    <p className="text-sm text-slate-500 mb-8 max-w-xs">This certifies that <span className="font-bold text-black border-b border-black">Your Name</span> has successfully completed the internship program...</p>
                                    <div className="w-32 h-10 border-b-2 border-slate-300"></div>
                                    <p className="text-xs text-slate-400 mt-2">Authorized Signature</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                            <div className="absolute -inset-4 bg-yellow-500/20 blur-2xl -z-10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Hiring Partners & Marquee */}
            <HiringPartners />


        </div>
    );
}
