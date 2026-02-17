import { consultingIndustries } from "@/lib/consulting-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import ConsultingInquiryForm from "@/components/ConsultingInquiryForm";
import { Metadata } from "next";

export async function generateStaticParams() {
    return consultingIndustries.map((industry) => ({
        slug: industry.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const industry = consultingIndustries.find((i) => i.slug === slug);
    if (!industry) return { title: "Consulting Not Found" };

    return {
        title: `${industry.title} | Catalyst Consulting`,
        description: industry.description,
    };
}

export default async function ConsultingIndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Debug logging
    // console.log('Requested slug:', slug);
    // console.log('Available slugs:', consultingIndustries.map(i => i.slug));

    const industry = consultingIndustries.find((i) => i.slug === slug);

    if (!industry) {
        // console.log('Industry not found for slug:', slug);
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-950 pt-24 pb-24">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden mb-12">
                <Image
                    src={industry.heroImage}
                    alt={industry.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <Link href="/consulting" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-wider">
                            <ArrowLeft className="w-4 h-4" /> Back to Consulting
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space max-w-4xl">
                            {industry.details.headline}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl">{industry.details.subheadline}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Navigation (Sticky) */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-32 space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                                <h3 className="text-lg font-bold text-white mb-4 font-space">Industries</h3>
                                <div className="space-y-1">
                                    {consultingIndustries.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={`/consulting/${item.slug}`}
                                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.slug === slug
                                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Key Stats */}
                            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Impact Metrics</h4>
                                <div className="space-y-4">
                                    {industry.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="text-3xl font-bold text-white font-space">{stat.value}</div>
                                            <div className="text-xs text-slate-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-16">

                        {/* Challenges Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 font-space">The Challenge</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {industry.details.challenges.map((challenge, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mb-4 font-bold">!</div>
                                        <p className="text-slate-300">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Solutions Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8 font-space">Our Tailored Solution</h2>
                            <div className="space-y-6">
                                {industry.details.solutions.map((sol, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 md:p-8 bg-slate-900/50 border border-white/10 rounded-3xl hover:border-primary/50 transition-colors group">
                                        <div className="shrink-0 mt-1">
                                            <CheckCircle2 className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{sol.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{sol.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Booking Form */}
                        <section className="pt-8 border-t border-white/10" id="book-audit">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-4 font-space">Start with an Audit</h2>
                                        <p className="text-slate-400 mb-8">
                                            Ready to optimize your {industry.title}? Fill out the form to schedule a technical deep-dive with our consultants.
                                        </p>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3 text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                Review of current tech stack
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                Identification of bottlenecks
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                ROI projection roadmap
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ConsultingInquiryForm initialService={industry.title} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
