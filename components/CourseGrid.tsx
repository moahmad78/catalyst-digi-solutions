"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BarChart } from "lucide-react";
import { internshipData } from "@/lib/internshipData";

export default function CourseGrid({ limit }: { limit?: number }) {
    const courses = limit ? internshipData.slice(0, limit) : internshipData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
                <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] transition-all flex flex-col"
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="p-8 flex-grow flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                            <course.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-white/5 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {course.duration}
                            </span>
                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-white/5 flex items-center gap-1">
                                <BarChart className="w-3 h-3" /> {course.level}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 font-space leading-tight group-hover:text-primary transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {course.description}
                        </p>

                        {/* Tools Preview */}
                        <div className="flex -space-x-2 overflow-hidden mb-6">
                            {course.tools.slice(0, 4).map((tool, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center relative z-10" title={tool.name}>
                                    <tool.icon className="w-4 h-4 text-slate-400" />
                                </div>
                            ))}
                            {course.tools.length > 4 && (
                                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-400 font-bold relative z-10">
                                    +{course.tools.length - 4}
                                </div>
                            )}
                        </div>

                        <Link
                            href={`/internship/${course.id}`}
                            className="mt-auto w-full py-3 bg-white/5 border border-white/10 rounded-xl text-center text-sm font-bold text-white hover:bg-primary hover:border-primary transition-all flex items-center justify-center gap-2 group-hover:translate-x-1"
                        >
                            View Curriculum <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
