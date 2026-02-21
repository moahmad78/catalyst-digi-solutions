"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";


// FAQ Data
const faqData = [
    {
        category: "General & Consulting",
        questions: [
            {
                q: "Where is Catalyst Digi Solutions located?",
                a: "Our headquarters are located at #214, Divya Deepa, Kadri Mangalore – 575002."
            },
            {
                q: "What services do you offer?",
                a: "We specialize in Digital Marketing (SEO, Social Media), Digital Transformations (Web & Mobile, ERP), Data Management (Digitization & Security), and Corporate Training/Internships."
            }
        ]
    },
    {
        category: "Internship Program",
        questions: [
            {
                q: "Is the internship certificate valid?",
                a: "Yes, we provide industry-recognized experience certificates. Since you work on live client projects during your tenure, your certificate holds significant value for future employment."
            },
            {
                q: "Do I get to work on real clients?",
                a: "Absolutely. Our 'Don't Just Learn. Build Real Products' philosophy ensures that every intern contributes to actual business projects under the guidance of senior developers."
            }
        ]
    },
    {
        category: "Security (Data Management)",
        questions: [
            {
                q: "How secure is my data in Data Management?",
                a: "Data security is our top priority. We follow advanced security protocols, including AES-256 encryption, role-based access controls, and strict digitization standards to ensure 100% data integrity and confidentiality."
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <div>
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space">Frequently Asked Questions</h1>
                <p className="text-slate-400 text-lg">
                    Find answers to common questions about our services, internships, and policies.
                </p>
            </div>

            <div className="space-y-12">
                {faqData.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-xl font-bold text-primary mb-6 font-space border-b border-white/10 pb-2">
                            {section.category}
                        </h2>
                        <div className="space-y-4">
                            {section.questions.map((item, qIdx) => (
                                <FAQItem key={qIdx} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Support CTA */}
            <div className="mt-16 pt-8 border-t border-white/10 text-center md:text-left">
                <p className="text-slate-300 mb-4">Still have questions?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
                    Contact our Support Team <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-all hover:border-primary/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left"
            >
                <span className="font-bold text-slate-200">{question}</span>
                {isOpen ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
