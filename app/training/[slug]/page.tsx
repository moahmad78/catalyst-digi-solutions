"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { trainingPrograms } from "@/lib/training-data";
import TrainingSidebar from "@/components/TrainingSidebar";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";
import { Crown, Sparkles, ChevronRight, Clock, ArrowRight, Briefcase } from "lucide-react";

interface PageProps {
    params: {
        slug: string;
    }
}

export default function TrainingDetail({ params }: PageProps) {
    const program = trainingPrograms.find(p => p.id === params.slug);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    if (!program) {
        return notFound();
    }

    const Icon = program.icon;

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-20">
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <TrainingSidebar />

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3 space-y-12"
                    >
                        {/* Hero Section */}
                        <section className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 group">
                            <div className="absolute inset-0">
                                <Image
                                    src={program.heroImage}
                                    alt={program.title}
                                    fill
                                    className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                            </div>

                            <div className="relative z-10 p-8 md:p-12">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium ${program.color} mb-6`}>
                                    <Icon className="w-4 h-4" />
                                    Professional Training Program
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white font-space mb-6 leading-tight">
                                    {program.title}
                                </h1>
                                <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
                                    {program.description}
                                </p>

                                <div className="flex flex-wrap gap-4 items-center">
                                    <button
                                        onClick={() => setIsBookingOpen(true)}
                                        className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_-10px_rgba(124,58,237,0.6)]"
                                    >
                                        Consult Now <ChevronRight className="w-5 h-5" />
                                    </button>
                                    <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                                        <Clock className="w-5 h-5 text-slate-400" />
                                        {program.duration}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Tech Stack */}
                        <section>
                            <h2 className="text-2xl font-bold text-white font-space mb-6 flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-yellow-500" /> Master the Stack
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {program.stack.map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all">
                                        <div className="p-2 bg-slate-900 rounded-lg">
                                            <item.icon className="w-5 h-5 text-slate-300" />
                                        </div>
                                        <span className="font-medium text-white">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Syllabus / Modules */}
                        <section>
                            <h2 className="text-2xl font-bold text-white font-space mb-6">What You Will Learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {program.modules.map((mod, i) => (
                                    <div key={i} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors group">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                                                <span className="text-primary font-bold">{i + 1}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                                                <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Internship Connection */}
                        <section className="bg-gradient-to-r from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                                        <Crown className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white font-space">The Catalyst Advantage</h2>
                                </div>
                                <p className="text-lg text-slate-300 mb-8 max-w-2xl">
                                    This isn&apos;t just a training program. It&apos;s your gateway to a professional career.
                                    Top performers in this program get direct entry into our <span className="text-white font-bold">Internship Program</span>.
                                </p>

                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
                                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-primary" /> Internship Focus
                                    </h4>
                                    <p className="text-slate-400">
                                        {program.internshipFocus}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsBookingOpen(true)}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group"
                                >
                                    Start Your Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </section>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
