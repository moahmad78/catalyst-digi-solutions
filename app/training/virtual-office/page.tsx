import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Monitor, Users, Calendar, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Virtual Office Training | Catalyst Digi',
    description: 'Master remote work tools and virtual office management. A comprehensive course for administrative professionals.',
};

export default function VirtualOfficeTrainingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2664&auto=format&fit=crop"
                        alt="Virtual Office Setup"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-sm mb-6 tracking-widest uppercase backdrop-blur-md">
                        Professional Skills
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space text-white leading-tight">
                        Virtual Office <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Management Training</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Master the essential tools and soft skills required to be a high-performing virtual assistant or remote office manager.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/internship"
                            className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                        >
                            Enroll Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="py-24 bg-slate-950 relative">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { icon: Monitor, title: "Tech Mastery", desc: "Learn Zoom, Slack, Trello, and Microsoft 365." },
                            { icon: Users, title: "Client Handling", desc: "Communication etiquette and email management." },
                            { icon: Calendar, title: "Organization", desc: "Advanced scheduling and project coordination." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <item.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Timeline */}
            <section className="py-24 bg-slate-900/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space text-white">Course Curriculum</h2>
                        <p className="text-slate-400">A structured path to expertise.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            { module: "Module 1", title: "Remote Work Fundamentals", topics: "Setting up your workspace, Time management, Digital security." },
                            { module: "Module 2", title: "Communication Tools", topics: "Professional Email writing, Slack etiquette, Zoom video conferencing." },
                            { module: "Module 3", title: "Project Management", topics: "Introduction to Trello/Asana, Task tracking, Deadline management." },
                            { module: "Module 4", title: "Office Administration", topics: "Calendar management, File organization (Google Drive/Dropbox), Basic invoicing." }
                        ].map((mod, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="w-0.5 h-full bg-white/10 group-last:hidden" />
                                </div>
                                <div className="pb-10">
                                    <span className="text-primary text-sm font-bold uppercase tracking-wider">{mod.module}</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{mod.title}</h3>
                                    <p className="text-slate-400">{mod.topics}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Benefits / Why Join */}
            <section className="py-24 bg-slate-950 relative border-t border-white/5">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-white font-space text-center mb-12">Why Choose This Course?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors">
                            <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Certification</h3>
                            <p className="text-slate-400">Receive a recognized certificate upon completion to boost your resume.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors">
                            <Monitor className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Live Projects</h3>
                            <p className="text-slate-400">Work on real-world simulations to practice your new skills.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors">
                            <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Placement Support</h3>
                            <p className="text-slate-400">We assist top performers with job placements and internship opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 z-50 md:static md:bg-transparent md:border-none md:p-0">
                <div className="container mx-auto flex justify-center md:py-24">
                    <Link href="/internship" className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all text-center shadow-2xl shadow-primary/20">
                        Secure Your Spot
                    </Link>
                </div>
            </div>
        </div>
    );
}
