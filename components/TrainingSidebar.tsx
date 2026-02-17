"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { trainingPrograms } from "@/lib/training-data";
import { ChevronRight } from "lucide-react";

export default function TrainingSidebar() {
    const pathname = usePathname();

    return (
        <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 font-space">Training Programs</h3>
                    <nav className="flex flex-col space-y-2">
                        {trainingPrograms.map((program) => {
                            const isActive = pathname === `/training/${program.id}`;
                            const Icon = program.icon;

                            return (
                                <Link
                                    key={program.id}
                                    href={`/training/${program.id}`}
                                    className="block group"
                                >
                                    <div className={`relative px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between border ${isActive ? 'bg-white/10 border-white/20' : 'hover:bg-white/5 border-transparent hover:border-white/5'}`}>

                                        {/* Active Indicator/Glow */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-xl"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}

                                        <div className="relative flex items-center gap-3 z-10">
                                            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20 text-white' : 'bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10'} transition-colors`}>
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'} transition-colors`}>
                                                {program.title}
                                            </span>
                                        </div>

                                        {isActive && (
                                            <motion.div
                                                initial={{ x: -5, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                            >
                                                <ChevronRight className="w-4 h-4 text-primary relative z-10" />
                                            </motion.div>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Mobile Dropdown / Horizontal Scroll Placeholder for smaller screens if needed */}
                {/* Currently using a responsive grid layout where this sidebar naturally stacks or hides */}
            </div>
        </aside>
    );
}
