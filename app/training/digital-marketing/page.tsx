import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Megaphone, TrendingUp, Users, Award, LineChart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Digital Marketing Training | Catalyst Digi',
    description: 'Master SEO, Social Media, and PPC. Learn to create data-driven marketing campaigns.',
};

export default function DigitalMarketingTrainingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                        alt="Marketing Analytics"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary font-bold text-sm mb-6 tracking-widest uppercase backdrop-blur-md">
                        Marketing Expert
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space text-white leading-tight">
                        Digital Marketing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-400">Masterclass</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        From SEO to Social Media Ads—learn how to build brands and drive sales in a data-driven world.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/internship"
                            className="px-8 py-4 bg-secondary text-black font-bold rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-lg shadow-secondary/25"
                        >
                            Start Learning <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Curriculum Timeline */}
            <section className="py-24 bg-slate-950">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space text-white">The Roadmap</h2>
                        <p className="text-slate-400">4 weeks to marketing mastery.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            { module: "Week 1", title: "SEO Fundamentals", topics: "Keyword research, On-page optimization, Backlink strategies, Google Search Console." },
                            { module: "Week 2", title: "Content & Social Media", topics: "Content marketing strategy, Copywriting, Instagram/LinkedIn growth hacks." },
                            { module: "Week 3", title: "Paid Advertising (PPC)", topics: "Google Ads setup, Facebook/Meta Business Manager, A/B Testing, ROI calculation." },
                            { module: "Week 4", title: "Analytics & Reporting", topics: "Google Analytics 4, Data visualization, Client reporting, Conversion Rate Optimization (CRO)." }
                        ].map((mod, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/50 flex items-center justify-center text-secondary font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="w-0.5 h-full bg-white/10 group-last:hidden" />
                                </div>
                                <div className="pb-10">
                                    <span className="text-secondary text-sm font-bold uppercase tracking-wider">{mod.module}</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{mod.title}</h3>
                                    <p className="text-slate-400">{mod.topics}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-24 bg-slate-900/30 relative">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-secondary/50 transition-colors">
                            <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Real Ad Budgets</h3>
                            <p className="text-slate-400">Experience running real campaigns with live budgets during the internship phase.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-secondary/50 transition-colors">
                            <LineChart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Tools Training</h3>
                            <p className="text-slate-400">Master tools like SEMrush, Ahrefs, Canva, and Google Analytics.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-secondary/50 transition-colors">
                            <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Certifications</h3>
                            <p className="text-slate-400">Support for Google and HubSpot certifications to validite your skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 z-50 md:static md:bg-transparent md:border-none md:p-0">
                <div className="container mx-auto flex justify-center md:py-24">
                    <Link href="/internship" className="w-full md:w-auto px-12 py-4 bg-secondary text-black font-bold text-lg rounded-full hover:bg-secondary/90 transition-all text-center shadow-2xl shadow-secondary/20">
                        Join the Program
                    </Link>
                </div>
            </div>
        </div>
    );
}
