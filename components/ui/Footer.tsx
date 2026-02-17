import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Company Info */}
                    <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="block mb-6">
                            <Logo className="w-48 h-auto" />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs md:max-w-none">
                            Empowering businesses with ROI-based Digital Marketing, Custom App Development, and Corporate Training solutions.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/darshanpv" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/darshanpv" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-pink-500/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://x.com/DarshanPV" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-400/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.facebook.com/profile.php?id=61562093013241" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-600/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/training/software" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Software Training
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Legal & Support */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Legal & Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/legal/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/refund-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start justify-center md:justify-start gap-3 text-muted-foreground text-sm">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>
                                    # 214, Divya Deepa, Opp to ESI Hospital,<br />
                                    Bendoorwell, Kadri Mangalore – 575002, India
                                </span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground text-sm">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+919880664435" className="hover:text-primary transition-colors">
                                    +91 9880664435
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground text-sm">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <div className="flex flex-col">
                                    <a href="mailto:enquiry@catalystdigisolutions.com" className="hover:text-primary transition-colors">
                                        enquiry@catalystdigisolutions.com
                                    </a>
                                    <a href="mailto:support@catalystdigisolutions.com" className="hover:text-primary transition-colors mt-1">
                                        support@catalystdigisolutions.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 py-3 flex items-center justify-center text-xs text-muted-foreground h-auto min-h-[40px]">
                    <p>© {new Date().getFullYear()} Catalyst Digi Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
