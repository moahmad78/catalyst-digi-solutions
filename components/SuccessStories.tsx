"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const successStories = [
    {
        name: "Aarav Patel",
        role: "Frontend Developer",
        company: "Zoho",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Zoho_Corporation_logo.png/1200px-Zoho_Corporation_logo.png", // Valid placeholder or local asset
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
        quote: "The live projects here helped me crack my interview at Zoho! I built a real CRM dashboard that impressed the interviewers."
    },
    {
        name: "Sneha Reddy",
        role: "UI/UX Designer",
        company: "Swiggy",
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        quote: "I learned to think like a designer. The portfolio I built during the internship was the key to my selection."
    },
    {
        name: "Rohan Gupta",
        role: "Full Stack Engineer",
        company: "Freshworks",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Freshworks_Logo.svg/2560px-Freshworks_Logo.svg.png",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        quote: "Practical, hands-on learning. No boring theory. We shipped code to production every week."
    },
    {
        name: "Ananya Singh",
        role: "Digital Marketer",
        company: "Nykaa",
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Nykaa_Logo.svg/1200px-Nykaa_Logo.svg.png",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        quote: "Running live ad campaigns gave me the confidence to handle real marketing budgets."
    },
    {
        name: "Vikram Malhotra",
        role: "Flutter Developer",
        company: "Zomato",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        quote: "Building a food delivery app clone from scratch taught me more than 4 years of college."
    }
];

export default function SuccessStories() {
    return (
        <section id="real-results" className="py-24 bg-slate-950 relative overflow-hidden text-center border-t border-white/5">
            {/* Section Header */}
            <div className="container px-4 mx-auto mb-16 relative z-10 text-center">
                <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Real Results</span>
                <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4 relative inline-block">
                    Our Alumni are <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Leading the Way</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-lg">
                    Recent placements from our latest batches. Join the league of top achievers.
                </p>
            </div>

            {/* Gradient Masks (CSS Version) */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
            >
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-8 flex-shrink-0"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...successStories, ...successStories, ...successStories].map((story, i) => (
                            <motion.div
                                key={`${story.name}-${i}`}
                                whileHover={{ scale: 1.05, borderColor: "rgba(124,58,237,0.5)" }}
                                className="w-[400px] flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-start text-left transition-all duration-300 group/card cursor-pointer"
                            >
                                <div className="flex items-center gap-4 mb-6 w-full">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover/card:border-primary transition-colors">
                                        <Image src={story.image} alt={story.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-white font-bold text-lg leading-tight">{story.name}</h4>
                                        <p className="text-slate-400 text-sm">Placed at <span className="text-white font-medium">{story.company}</span></p>
                                    </div>
                                    <div className="relative w-8 h-8 opacity-50 group-hover/card:opacity-100 grayscale group-hover/card:grayscale-0 transition-all duration-500">
                                        <Image src={story.companyLogo} alt={story.company} fill className="object-contain" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <Quote className="w-8 h-8 text-white/5 absolute -top-4 -left-2 transform -scale-x-100" />
                                    <p className="text-slate-300 text-sm leading-relaxed relative z-10 italic">
                                        &quot;{story.quote}&quot;
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
