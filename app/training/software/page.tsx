import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code, Code2, Database, Laptop, Award, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Software Development Training | Catalyst Digi',
    description: 'Learn modern full-stack development. React, Next.js, Node.js, and more. Hands-on coding bootcamp.',
};

export default function SoftwareTrainingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop"
                        alt="Coding Bootcamp"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold text-sm mb-6 tracking-widest uppercase backdrop-blur-md">
                        Full Stack Mastery
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space text-white leading-tight">
                        Software <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Development Course</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Become a job-ready developer. Learn the MERN stack, Next.js, and modern best practices through hands-on projects.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/internship"
                            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25"
                        >
                            Start Coding <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Curriculum Timeline */}
            <section className="py-24 bg-slate-950">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space text-white">Full-Stack Curriculum</h2>
                        <p className="text-slate-400">Zero to Hero in 12 weeks.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            { module: "Module 1", title: "The Web Foundation", topics: "HTML5, CSS3, Modern JavaScript (ES6+), Responsive Design with Tailwind CSS." },
                            { module: "Module 2", title: "Frontend Engineering", topics: "React.js core concepts, Hooks, Routing, and State Management using Redux/Context." },
                            { module: "Module 3", title: "Modern Frameworks", topics: "Mastering Next.js 14, Server Components, SSR/SSG, and API Routes." },
                            { module: "Module 4", title: "Backend & Database", topics: "Node.js, Express, MongoDB/PostgreSQL, Authentication & API Security." },
                            { module: "Module 5", title: "Deployment & DevOps", topics: "Git version control, Vercel/Netlify deployment, CI/CD basics." }
                        ].map((mod, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-500 font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="w-0.5 h-full bg-white/10 group-last:hidden" />
                                </div>
                                <div className="pb-10">
                                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">{mod.module}</span>
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
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
                            <Laptop className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Portfolio Building</h3>
                            <p className="text-slate-400">Build 3 major projects to showcase your skills to potential employers.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
                            <Briefcase className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Career Prep</h3>
                            <p className="text-slate-400">Resume reviews, mock interviews, and GitHub profile optimization.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
                            <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Industry Mentors</h3>
                            <p className="text-slate-400">Learn directly from senior developers working in top tech companies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 z-50 md:static md:bg-transparent md:border-none md:p-0">
                <div className="container mx-auto flex justify-center md:py-24">
                    <Link href="/internship" className="w-full md:w-auto px-12 py-4 bg-blue-500 text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-all text-center shadow-2xl shadow-blue-500/20">
                        Apply for Training
                    </Link>
                </div>
            </div>
        </div>
    );
}
