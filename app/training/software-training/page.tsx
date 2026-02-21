import { Metadata } from 'next';
import Image from 'next/image';
import { Laptop, Code2, Briefcase, PlayCircle, BookOpen, SlidersHorizontal, GraduationCap } from 'lucide-react';
import * as motion from 'framer-motion/client';
import TrainingSidebar from '@/components/TrainingSidebar';

export const metadata: Metadata = {
    title: 'Software Development Training | Catalyst Digi',
    description: 'Learn modern full-stack development. React, Next.js, Node.js, and more.',
};

export default function SoftwareTrainingPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop"
                                alt="Coding Bootcamp"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 inline-block">
                                    Career Accelerator
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold font-space text-white leading-tight">
                                    Master Professional Excellence with Hands-on Virtual Training.
                                </h1>
                            </div>
                        </motion.div>

                        {/* Main Description */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                        >
                            <p className="text-slate-300 leading-relaxed text-lg">
                                &quot;Join our program for practical, hands-on experience with the latest technologies. Led by experts, our interactive sessions prioritize real-world application, ensuring you gain valuable skills for your career.&quot;
                            </p>
                        </motion.div>

                        {/* Value Proposition */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/20 rounded-xl">
                                    <GraduationCap className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2 font-space">Training Excellence</h2>
                                    <p className="text-indigo-200/80 leading-relaxed">
                                        Focus on industry-led practical learning, career transformation, and real-world project experience.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Core Details Grid */}
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Laptop className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Hands-on Practice</h3>
                                <p className="text-slate-400 text-sm">Practical experience with the latest technologies.</p>
                            </motion.div>

                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Expert-led Instruction</h3>
                                <p className="text-slate-400 text-sm">Interactive sessions prioritizing real-world application.</p>
                            </motion.div>

                            <motion.div variants={fadeIn} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Career Support</h3>
                                <p className="text-slate-400 text-sm">Gain valuable skills for your career advancement.</p>
                            </motion.div>
                        </motion.div>

                        {/* Shared FAQ / Additional Info Section */}
                        <section className="border-t border-white/5 pt-12">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-2 font-space text-white">Program Information</h2>
                                <p className="text-slate-400">Everything you need to know about our training approach.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-950 border border-white/10 rounded-2xl p-6 flex gap-6 items-start">
                                    <div className="p-3 bg-blue-500/20 rounded-xl shrink-0">
                                        <BookOpen className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Program Options</h3>
                                        <p className="text-slate-400 leading-relaxed">We offer a wide range of training programs covering topics such as digital marketing, project management, data analytics, cybersecurity, and more.</p>
                                    </div>
                                </div>

                                <div className="bg-slate-950 border border-white/10 rounded-2xl p-6 flex gap-6 items-start">
                                    <div className="p-3 bg-purple-500/20 rounded-xl shrink-0">
                                        <PlayCircle className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Delivery Method</h3>
                                        <p className="text-slate-400 leading-relaxed">We offer online training options featuring interactive sessions, virtual labs, and access to course materials through our learning management system (LMS).</p>
                                    </div>
                                </div>

                                <div className="bg-slate-950 border border-white/10 rounded-2xl p-6 flex gap-6 items-start">
                                    <div className="p-3 bg-emerald-500/20 rounded-xl shrink-0">
                                        <SlidersHorizontal className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Customization</h3>
                                        <p className="text-slate-400 leading-relaxed">We offer customizable training programs tailored to meet your specific needs and objectives.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar (4 Cols) */}
                    <div className="lg:col-span-4">
                        <TrainingSidebar />
                    </div>

                </div>
            </div>
        </div>
    );
}
