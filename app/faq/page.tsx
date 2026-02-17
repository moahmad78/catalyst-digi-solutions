"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Head from 'next/head';

const faqs = [
    {
        question: "Do you offer custom software development services?",
        answer: "Yes, we specialize in building custom web applications, mobile apps, and enterprise software tailored to your specific business needs. We use modern technologies like Next.js, React, and Node.js to ensure scalability and performance."
    },
    {
        question: "What is the duration of your training programs?",
        answer: "Our training programs typically range from 4 to 12 weeks, depending on the course complexity. For example, our Digital Marketing Masterclass is 4 weeks, while our Full-Stack Bootcamps can run up to 12 weeks."
    },
    {
        question: "Do you provide placement assistance after training?",
        answer: "Absolutely. We offer dedicated placement support for top-performing students, including resume building, mock interviews, and referrals to our network of hiring partners."
    },
    {
        question: "How much do your digital marketing services cost?",
        answer: "Our pricing is customized based on your goals, industry, and campaign scope. We offer flexible packages starting from small business essentials to comprehensive enterprise strategies. Contact us for a free quote."
    },
    {
        question: "Can you help migrate our legacy system to the cloud?",
        answer: "Yes, our digital transformation team has extensive experience in legacy modernization and cloud migration (AWS, Azure, Google Cloud). We ensure zero data loss and minimal downtime during the transition."
    },
    {
        question: "Is there an internship program available?",
        answer: "Yes, we offer internship opportunities for fresh graduates and students who complete our training programs. It's a great way to gain real-world experience."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            {/* SEO Metadata (Client-side workaround, better to layout) */}
            <Head>
                <title>Frequently Asked Questions | Catalyst Digi</title>
                <meta name="description" content="Common questions about our digital services, training programs, and company policies." />
            </Head>

            <div className="py-32 container px-4 mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Support Center</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space text-white">
                        Frequently Asked <br /> Questions
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Everything you need to know about our services and process.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-purple-500 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]' : 'bg-transparent border-white/10 hover:bg-white/5'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold font-space ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full ${openIndex === index ? 'bg-primary/20 text-primary' : 'bg-white/5 text-slate-400'}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
