"use client";

import { User, Mail, Phone, MessageCircle, GraduationCap, BookOpen, BarChart, AlignLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface EnrollmentFormProps {
    category: "solutions" | "training";
}

export default function EnrollmentForm({ category }: EnrollmentFormProps) {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-2 font-space">Enrollment Form</h3>
            <p className="text-slate-400 text-sm mb-6">Ready to start your journey? Fill out the form below to enroll in our professional programs.</p>

            <motion.form
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="space-y-4"
            >
                {/* Full Name */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-slate-500" />
                        </div>
                        <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors text-sm" />
                    </div>
                </motion.div>

                {/* Email Address */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-4 w-4 text-slate-500" />
                        </div>
                        <input type="email" required placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors text-sm" />
                    </div>
                </motion.div>

                {/* Phone Number */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-4 w-4 text-slate-500" />
                        </div>
                        <input type="tel" required placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors text-sm" />
                    </div>
                </motion.div>

                {/* WhatsApp Number */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">WhatsApp Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MessageCircle className="h-4 w-4 text-slate-500" />
                        </div>
                        <input type="tel" required placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors text-sm" />
                    </div>
                </motion.div>

                {/* Highest Qualification */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Highest Qualification <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <GraduationCap className="h-4 w-4 text-slate-500" />
                        </div>
                        <input type="text" required placeholder="e.g., BCA, B.Tech, Graduate" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors text-sm" />
                    </div>
                </motion.div>

                {/* Select Program/Service */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Select Program/Service <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                            <BookOpen className="h-4 w-4 text-slate-500" />
                        </div>
                        <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none relative z-0">
                            <option value="" disabled hidden className="text-slate-600">Select an option</option>
                            {category === "solutions" ? (
                                <>
                                    <option value="digital-marketing" className="bg-slate-900">Digital Marketing</option>
                                    <option value="digital-transformations" className="bg-slate-900">Digital Transformations</option>
                                    <option value="data-management" className="bg-slate-900">Data Management</option>
                                </>
                            ) : (
                                <>
                                    <option value="virtual-office-trainings" className="bg-slate-900">Virtual Office Trainings</option>
                                    <option value="software-training" className="bg-slate-900">Software Training</option>
                                    <option value="digital-marketing-training" className="bg-slate-900">Digital Marketing Training</option>
                                </>
                            )}
                        </select>
                    </div>
                </motion.div>

                {/* Experience Level */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Experience Level <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                            <BarChart className="h-4 w-4 text-slate-500" />
                        </div>
                        <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none relative z-0">
                            <option value="" disabled hidden className="text-slate-600">Select experience level</option>
                            <option value="beginner" className="bg-slate-900">Beginner</option>
                            <option value="intermediate" className="bg-slate-900">Intermediate</option>
                            <option value="professional" className="bg-slate-900">Professional</option>
                        </select>
                    </div>
                </motion.div>

                {/* Any Message/Notes */}
                <motion.div variants={slideUp} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Any Message/Notes</label>
                    <div className="relative">
                        <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                            <AlignLeft className="h-4 w-4 text-slate-500" />
                        </div>
                        <textarea rows={3} placeholder="Tell us about your goals..." className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors text-sm resize-none"></textarea>
                    </div>
                </motion.div>

                <motion.button
                    variants={slideUp}
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-500 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/25"
                >
                    Enroll Now <ArrowRight className="w-4 h-4" />
                </motion.button>
            </motion.form>
        </div>
    );
}
