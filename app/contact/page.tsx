"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, User, Mail, Phone, MessageSquare, Send, Building2, Layers, IndianRupee, Clock, MapPin, Linkedin, Instagram, Twitter, ShieldCheck, Calendar, Facebook } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    const [inquiryType, setInquiryType] = useState<"student" | "client">("client");

    return (
        <div className="min-h-screen bg-slate-950 pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="container px-4 mx-auto relative z-10">
                {/* Responsive Grid: Stacks on mobile (grid-cols-1), Splits on desktop (lg:grid-cols-5) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-7xl mx-auto">

                    {/* Left Column: Contact Info & Process */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-space text-white mb-6">
                                Let&apos;s Start a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Conversation</span>
                            </h1>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Whether you have a question about our internship or need a custom digital solution, our team is ready to help.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Office Address</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        # 214, Divya Deepa, Opp to ESI Hospital,<br />Bendoorwell, Kadri Mangalore – 575002, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Phone</h4>
                                    <a href="tel:+919880664435" className="text-slate-400 text-sm hover:text-white transition-colors">
                                        +91 9880664435
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email</h4>
                                    <div className="flex flex-col">
                                        <a href="mailto:enquiry@catalystdigisolutions.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                                            enquiry@catalystdigisolutions.com
                                        </a>
                                        <a href="mailto:support@catalystdigisolutions.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                                            support@catalystdigisolutions.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
                            <div className="flex gap-4">
                                <Link href="https://www.linkedin.com/in/darshanpv" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link href="https://www.instagram.com/darshanpv" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-pink-500/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link href="https://x.com/DarshanPV" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-400/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="https://www.facebook.com/profile.php?id=61562093013241" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-600/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">What Happens Next?</h4>
                            <div className="relative border-l border-white/10 ml-3 space-y-8 pb-2">
                                <div className="relative pl-8">
                                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-slate-950" />
                                    <h5 className="text-white font-bold text-sm mb-1">Form Submission</h5>
                                    <p className="text-slate-500 text-xs">We receive your details instantly.</p>
                                </div>
                                <div className="relative pl-8">
                                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 ring-4 ring-slate-950" />
                                    <h5 className="text-white font-bold text-sm mb-1">Strategy Analysis</h5>
                                    <p className="text-slate-500 text-xs">Our team reviews your requirements.</p>
                                </div>
                                <div className="relative pl-8">
                                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 ring-4 ring-slate-950" />
                                    <h5 className="text-white font-bold text-sm mb-1">1:1 Consultation Call</h5>
                                    <p className="text-slate-500 text-xs">We discuss the roadmap together.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Dynamic Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        {/* Toggle Switch */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-slate-900 border border-white/10 p-1 rounded-full flex relative">
                                <button
                                    onClick={() => setInquiryType("client")}
                                    className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-colors ${inquiryType === "client" ? "text-white" : "text-slate-400 hover:text-white"}`}
                                >
                                    <Briefcase className="w-4 h-4" />
                                    Client Project
                                </button>
                                <button
                                    onClick={() => setInquiryType("student")}
                                    className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-colors ${inquiryType === "student" ? "text-white" : "text-slate-400 hover:text-white"}`}
                                >
                                    <GraduationCap className="w-4 h-4" />
                                    Student Intern
                                </button>

                                {/* Sliding Pill */}
                                <motion.div
                                    className="absolute top-1 bottom-1 bg-white/10 border border-white/5 rounded-full shadow-lg"
                                    layoutId="toggleHighlight"
                                    initial={false}
                                    animate={{
                                        left: inquiryType === "client" ? "4px" : "50%",
                                        width: "calc(50% - 4px)",
                                        x: inquiryType === "client" ? 0 : 0
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden mb-8">
                            {/* Subtle Shine */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <form className="space-y-5 relative z-10">
                                {/* Common Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Dynamic Fields */}
                                <AnimatePresence mode="wait">
                                    {inquiryType === "student" ? (
                                        <motion.div
                                            key="student-fields"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden"
                                        >
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">College / University</label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                                    <input
                                                        type="text"
                                                        placeholder="University Name"
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Interested Domain</label>
                                                <div className="relative">
                                                    <Layers className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                                    <select className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:bg-black/60 transition-all appearance-none cursor-pointer font-medium">
                                                        <option value="" disabled selected>Select Domain</option>
                                                        <option value="web" className="bg-slate-900">Web Development</option>
                                                        <option value="app" className="bg-slate-900">App Development</option>
                                                        <option value="design" className="bg-slate-900">UI/UX Design</option>
                                                        <option value="marketing" className="bg-slate-900">Digital Marketing</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="client-fields"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden"
                                        >
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company Name</label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                                    <input
                                                        type="text"
                                                        placeholder="Your Company"
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service Needed</label>
                                                <div className="relative">
                                                    <Layers className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                                    <select className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:bg-black/60 transition-all appearance-none cursor-pointer font-medium">
                                                        <option value="" disabled selected>Select Service</option>
                                                        <option value="marketing" className="bg-slate-900">Digital Marketing</option>
                                                        <option value="app" className="bg-slate-900">App Development</option>
                                                        <option value="records" className="bg-slate-900">Record Management</option>
                                                        <option value="consulting" className="bg-slate-900">Consulting</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="space-y-1.5 md:col-span-2">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Budget</label>
                                                        <div className="relative">
                                                            <IndianRupee className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                                            <input
                                                                type="text"
                                                                placeholder="e.g. 50k - 1L"
                                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Timeline</label>
                                                        <div className="relative">
                                                            <Clock className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                                            <select className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:bg-black/60 transition-all appearance-none cursor-pointer font-medium">
                                                                <option value="" disabled selected>Select Timeline</option>
                                                                <option value="urgent" className="bg-slate-900">Urgent (Immediate)</option>
                                                                <option value="1_month" className="bg-slate-900">Within 1 Month</option>
                                                                <option value="flexible" className="bg-slate-900">Flexible</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Message</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                                        <textarea
                                            rows={3}
                                            placeholder={inquiryType === 'student' ? "Tell us why you want to join..." : "Tell us about your project..."}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:bg-black/60 transition-all resize-none font-medium"
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 text-base mt-2"
                                >
                                    {inquiryType === "student" ? "Submit Application" : "Request Quote"}
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </form>
                        </div>

                        {/* Trust & Availability Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md flex flex-col items-center text-center hover:border-primary/30 transition-colors"
                            >
                                <div className="p-2 bg-primary/10 rounded-full mb-3 text-primary">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <h5 className="text-white text-sm font-bold mb-1">24h Response</h5>
                                <p className="text-slate-400 text-xs">We get back within 24 business hours.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md flex flex-col items-center text-center hover:border-primary/30 transition-colors"
                            >
                                <div className="p-2 bg-primary/10 rounded-full mb-3 text-primary">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <h5 className="text-white text-sm font-bold mb-1">Available Mon-Sat</h5>
                                <p className="text-slate-400 text-xs">9:00 AM – 6:30 PM IST Support.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md flex flex-col items-center text-center hover:border-primary/30 transition-colors"
                            >
                                <div className="p-2 bg-primary/10 rounded-full mb-3 text-primary">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <h5 className="text-white text-sm font-bold mb-1">100% Secure</h5>
                                <p className="text-slate-400 text-xs">Encrypted & confidential details.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
