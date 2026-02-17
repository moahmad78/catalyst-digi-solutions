import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Catalyst Digi Solutions",
    description: "Terms and conditions for using Catalyst Digi Solutions' services and training programs.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-slate-950 text-slate-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">Terms of Service</h1>
                <p className="text-slate-400 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-space prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80">
                    <p>
                        Welcome to Catalyst Digi Solutions. By accessing our website, applying for internships, or engaging our services, you agree to comply with and be bound by the following terms and conditions.
                    </p>

                    <h3>1. Services</h3>
                    <p>
                        Catalyst Digi Solutions provides digital transformation services, including but not limited to Application Development, Digital Marketing, and Data Management. We also offer professional training programs and internships.
                    </p>

                    <h3>2. Training & Internships</h3>
                    <ul>
                        <li><strong>Live Projects:</strong> Our &quot;Live Project&quot; training involves working on real-world scenarios. The intellectual property created during these internships belongs to Catalyst Digi Solutions or its clients, unless otherwise stated.</li>
                        <li><strong>Certification:</strong> Certificates are issued upon successful completion of the internship program and fulfillment of all assigned tasks.</li>
                        <li><strong>Conduct:</strong> Interns are expected to maintain professional conduct. We reserve the right to terminate an internship for misconduct or non-performance.</li>
                    </ul>

                    <h3>3. Intellectual Property</h3>
                    <p>
                        All content on this website, including text, graphics, logos, and software, is the property of Catalyst Digi Solutions and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                    </p>

                    <h3>4. User Obligations</h3>
                    <p>
                        You agree to use our website and services only for lawful purposes. You must not use our site to transmit any unsolicited commercial communications (spam) or to compromise the security of our systems.
                    </p>

                    <h3>5. Limitation of Liability</h3>
                    <p>
                        Catalyst Digi Solutions shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
                    </p>

                    <h3>6. Changes to Terms</h3>
                    <p>
                        We reserve the right to modify these terms at any time. Your continued use of the site or services after any such changes constitutes your acceptance of the new Terms of Service.
                    </p>
                </div>
            </div>
        </main>
    );
}
