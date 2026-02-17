"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Clock, BarChart, ChevronRight, Loader2, Send, Menu, X } from "lucide-react";
import { internshipData } from "@/lib/internshipData";

export default function InternshipCoursePage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    // Find course data
    const course = internshipData.find((c) => c.id === slug);

    // Sidebar state for mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Form state
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Scroll to top on slug change
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsSidebarOpen(false);
    }, [slug]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
                    <Link href="/internship" className="text-primary hover:underline">Return to Internship Page</Link>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log("Course Enrollment Data:", data);

        setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-20">
            {/* Mobile Header for Sidebar Toggle */}
            <div className="md:hidden bg-slate-900 border-b border-white/10 p-4 sticky top-16 z-30 flex items-center justify-between">
                <span className="font-bold text-white text-lg truncate">{course.title}</span>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-white/5 rounded-lg text-white">
                    {isSidebarOpen ? <X /> : <Menu />}
                </button>
            </div>

            <div className="container px-4 mx-auto flex flex-col md:flex-row gap-8 py-8 relative">

                {/* 1. Sidebar Navigation */}
                <aside className={`
                    fixed inset-y-0 left-0 z-40 w-64 bg-slate-900/95 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:bg-transparent md:border-none md:static md:w-1/4 md:block
                    ${isSidebarOpen ? "translate-x-0 top-16 pt-4" : "-translate-x-full md:translate-x-0"}
                `}>
                    <div className="p-6 md:p-0 md:sticky md:top-24 space-y-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Available Courses</h3>
                        {internshipData.map((c) => (
                            <Link
                                key={c.id}
                                href={`/internship/${c.id}`}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${slug === c.id ? 'bg-primary text-white font-semibold shadow-lg shadow-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                            >
                                <c.icon className="w-5 h-5" />
                                <span className="text-sm">{c.title}</span>
                            </Link>
                        ))}

                        <div className="mt-8 p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-white/10 text-center hidden md:block">
                            <h4 className="font-bold text-white mb-2">Need Guidance?</h4>
                            <p className="text-xs text-slate-400 mb-4">Talk to our career counselors to find the best path for you.</p>
                            <Link href="/contact" className="text-xs font-bold text-primary hover:underline">Contact Us &rarr;</Link>
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)} />
                )}

                {/* 2. Main Content */}
                <main className="flex-1 min-w-0">

                    {/* Hero Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 p-8 md:p-12"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/20 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {course.duration}
                                </span>
                                <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full border border-secondary/20 flex items-center gap-1">
                                    <BarChart className="w-3 h-3" /> {course.level}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-space leading-tight">{course.title}</h1>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl">{course.description}</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#enroll" className="px-6 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2">
                                    Enroll Now <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column: Details (2/3 width on LG) */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* What You Will Learn */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 font-space">Tools & Technologies</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {course.tools.map((tool, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors">
                                            <tool.icon className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-medium text-slate-200">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Syllabus Timeline */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-8 font-space">Course Syllabus</h2>
                                <div className="space-y-8 relative before:absolute before:inset-0 before:left-[19px] before:w-[2px] before:bg-white/10">
                                    {course.syllabus.map((stage, i) => (
                                        <div key={i} className="relative z-10 pl-12 group">
                                            <div className="absolute left-0 top-1 w-10 h-10 bg-slate-950 border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(124,58,237,0.5)]">
                                                {i + 1}
                                            </div>
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                                <h3 className="text-lg font-bold text-white mb-4">{stage.stage}</h3>
                                                <ul className="space-y-2">
                                                    {stage.topics.map((topic, j) => (
                                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                                                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* What You Will Build */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 font-space">Real-World Projects</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {course.projects.map((project, i) => (
                                        <div key={i} className="p-5 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl">
                                            <h4 className="font-bold text-white mb-1">{project}</h4>
                                            <p className="text-xs text-slate-500">Live Project</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Career Opportunities */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 font-space">Career Opportunities</h2>
                                <div className="flex flex-wrap gap-3">
                                    {course.roles.map((role, i) => (
                                        <span key={i} className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold rounded-full">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </motion.section>

                        </div>

                        {/* Right Column: Sticky Enrollment Form (1/3 width on LG) */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-xl" id="enroll">
                                <h3 className="text-xl font-bold text-white mb-2">Secure Your Spot</h3>
                                <p className="text-xs text-slate-400 mb-6">Limited slots available for {course.title}.</p>

                                {success && (
                                    <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-xs font-semibold flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> Application Sent!
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
                                        <input required name="name" type="text" className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
                                        <input required name="email" type="email" className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 mb-1">Phone</label>
                                        <input required name="phone" type="tel" className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="+91 987..." />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 mb-1">Course (Auto-selected)</label>
                                        <input readOnly name="course" type="text" value={course.title} className="w-full px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm font-semibold cursor-not-allowed" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 mb-1">Preferred Slot</label>
                                        <select required name="slot" className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-1 focus:ring-primary outline-none">
                                            <option value="" className="bg-slate-900">Select Slot</option>
                                            <option value="morning" className="bg-slate-900">Morning</option>
                                            <option value="afternoon" className="bg-slate-900">Afternoon</option>
                                            <option value="evening" className="bg-slate-900">Evening</option>
                                        </select>
                                    </div>

                                    <button disabled={submitting} type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70">
                                        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Enroll Now <Send className="w-4 h-4" /></>}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
