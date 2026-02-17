"use client";

import { motion } from "framer-motion";

const clients = [
    { name: "Lao Government", id: 1 },
    { name: "MGA Electricals", id: 2 },
    { name: "Voomet", id: 3 },
    { name: "FinCorp Global", id: 4 },
    { name: "MedTech Plus", id: 5 },
];

export default function ClientLogos() {
    return (
        <section className="py-16 bg-slate-950 border-y border-white/5 overflow-hidden">
            <div className="container px-4 mx-auto mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-500 text-xs font-bold tracking-widest uppercase"
                >
                    TRUSTED BY INDUSTRY LEADERS
                </motion.p>
            </div>

            {/* Infinite Marquee */}
            <div
                className="relative w-full max-w-full overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
            >
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-16 flex-shrink-0"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {/* Duplicate the list for seamless loop */}
                        {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
                            <div
                                key={`${client.id}-${idx}`}
                                className="flex items-center justify-center min-w-[200px] h-24 px-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
                            >
                                <span className="text-white font-bold text-xl tracking-wider whitespace-nowrap">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Optional: Stats below logos */}
            <div className="container px-4 mx-auto mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { value: "500+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "50+", label: "Industry Awards" },
                        { value: "24/7", label: "Support Available" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-space">
                                {stat.value}
                            </div>
                            <div className="text-slate-500 text-xs uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
