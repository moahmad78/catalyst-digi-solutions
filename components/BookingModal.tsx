"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Building2, MessageSquare, Calendar, Clock, CheckCircle2, Loader2, Phone, Upload, FileText, Check } from "lucide-react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const [isSuccess, setIsSuccess] = useState(false);
    const [resume, setResume] = useState<File | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        designation: "",
        service: "",
        challenges: "",
        date: "",
        timeSlot: "",
    });

    // Mock Time Slots
    const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setIsSuccess(false);
            setIsLoading(false);
            setResume(null);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                designation: "",
                service: "",
                challenges: "",
                date: "",
                timeSlot: "",
            });
        }
    }, [isOpen]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call with FormData
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));
        if (resume) {
            data.append("resume", resume);
        }
        console.log("Form Data Submitted:", Object.fromEntries(data));

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSuccess(true);
    };

    const handleNext = () => {
        // Basic validation could go here
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal Content - Slide Over */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-slate-950 border-l border-white/10 shadow-2xl z-50 overflow-y-auto"
                    >
                        <div className="p-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-white font-space">Book Strategy Session</h2>
                                    <p className="text-slate-400 text-sm">Step {step} of 3</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: "33%" }}
                                    animate={{ width: `${(step / 3) * 100}%` }}
                                />
                            </div>

                            {/* Success View */}
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
                                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white font-space">Booking Confirmed!</h3>
                                    <p className="text-slate-300 max-w-sm">
                                        Success! An invitation has been sent to <span className="text-white font-bold">{formData.email}</span>. Darshan P V looks forward to meeting you.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                /* Form Steps */
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Step 1: Personal & Business Info */}
                                    {step === 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <User className="w-5 h-5 text-primary" /> Personal Details
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <input
                                                        required
                                                        placeholder="Full Name"
                                                        className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary placeholder:text-slate-500 outline-none transition-colors w-full"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="Business Email"
                                                        className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary placeholder:text-slate-500 outline-none transition-colors w-full"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="WhatsApp Number"
                                                        className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary placeholder:text-slate-500 outline-none transition-colors w-full"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                    <input
                                                        required
                                                        placeholder="Designation"
                                                        className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary placeholder:text-slate-500 outline-none transition-colors w-full"
                                                        value={formData.designation}
                                                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <Building2 className="w-5 h-5 text-primary" /> Business Info
                                                </h3>
                                                <input
                                                    required
                                                    placeholder="Company Name"
                                                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary placeholder:text-slate-500 outline-none transition-colors w-full"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                />
                                            </div>

                                            {/* Resume Upload */}
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <FileText className="w-5 h-5 text-primary" /> Upload Resume
                                                </h3>
                                                <div className="relative group">
                                                    <input
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                    />
                                                    <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all ${resume ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 group-hover:border-primary/50 group-hover:bg-white/10'}`}>
                                                        {resume ? (
                                                            <>
                                                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                                                                    <Check className="w-6 h-6 text-primary" />
                                                                </div>
                                                                <p className="text-white font-medium text-sm truncate max-w-[200px]">{resume.name}</p>
                                                                <p className="text-green-400 text-xs mt-1">File Attached Successfully</p>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                                    <Upload className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                                                                </div>
                                                                <p className="text-slate-300 font-medium text-sm">Click to upload or drag and drop</p>
                                                                <p className="text-slate-500 text-xs mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Consultation Details */}
                                    {step === 2 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <MessageSquare className="w-5 h-5 text-primary" /> How can we help?
                                                </h3>

                                                <div className="space-y-2">
                                                    <label className="text-sm text-slate-400">Service Interested In</label>
                                                    <select
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
                                                        value={formData.service}
                                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                    >
                                                        <option value="" disabled className="bg-slate-900">Select a Service</option>
                                                        <option value="startup" className="bg-slate-900">Startup Strategy</option>
                                                        <option value="process" className="bg-slate-900">Process Optimization</option>
                                                        <option value="digital" className="bg-slate-900">Digital Transformation</option>
                                                        <option value="other" className="bg-slate-900">Other</option>
                                                    </select>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm text-slate-400">Current Challenges</label>
                                                    <textarea
                                                        rows={4}
                                                        placeholder="What is the biggest problem your business is facing right now?"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary placeholder:text-slate-500 outline-none transition-colors resize-none"
                                                        value={formData.challenges}
                                                        onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 3: Scheduler */}
                                    {step === 3 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <Calendar className="w-5 h-5 text-primary" /> Select Date & Time
                                                </h3>

                                                {/* Date Picker Mock */}
                                                <div className="space-y-2">
                                                    <label className="text-sm text-slate-400">Preferred Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary outline-none transition-colors cursor-pointer" // Note: Native date picker styling is browser dependent
                                                        value={formData.date}
                                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                        style={{ colorScheme: 'dark' }}
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm text-slate-400">Available Time Slots</label>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {timeSlots.map((slot) => (
                                                            <button
                                                                key={slot}
                                                                type="button"
                                                                onClick={() => setFormData({ ...formData, timeSlot: slot })}
                                                                className={`p-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-center gap-2 ${formData.timeSlot === slot
                                                                    ? 'bg-primary border-primary text-white'
                                                                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                                                                    }`}
                                                            >
                                                                <Clock className="w-4 h-4" />
                                                                {slot}
                                                            </button>
                                                        ))}
                                                    </div>
                                                    <p className="text-xs text-slate-500 text-center mt-2">Times are in IST (Indian Standard Time)</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex gap-4 pt-4 border-t border-white/10">
                                        {step > 1 && (
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                className="px-6 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors"
                                            >
                                                Back
                                            </button>
                                        )}

                                        {step < 3 ? (
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="flex-1 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
                                            >
                                                Next Step
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                disabled={isLoading || !formData.date || !formData.timeSlot}
                                                className="flex-1 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" /> Scheduling...
                                                    </>
                                                ) : (
                                                    "Confirm Booking"
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
