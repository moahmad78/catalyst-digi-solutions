import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DeveloperSignature from "@/components/DeveloperSignature";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Catalyst Digi Solutions | Digital Marketing, Digital Transformations & Data Management",
  description: "Transforming businesses with cutting-edge digital solutions. Web Development, SEO, Branding, and Professional Training in Mangalore. Contact: +91 9880664435",
  authors: [{ name: "Sahil Sheikh", url: "https://www.instagram.com/sahil_sheikh78/" }, { name: "Darshan PV", url: "https://www.linkedin.com/in/darshanpv" }],
  creator: "Sahil Sheikh",
  keywords: ["Digital Marketing Mangalore", "Software Internship", "Data Management India", "Catalyst Digi", "Digital Transformation Mangalore", "Corporate Training India"],
  icons: {
    icon: "/fevi.png",
    shortcut: "/fevi.png",
    apple: "/fevi.png",
  },
  openGraph: {
    title: "Catalyst Digi Solutions",
    description: "Transforming businesses with cutting-edge digital solutions. Web Development, SEO, Branding, and Professional Training.",
    url: "https://catalystdigisolutions.com",
    siteName: "Catalyst Digi Solutions",
    locale: 'en_US',
    type: 'website',
    emails: ["enquiry@catalystdigisolutions.com"],
    phoneNumbers: ["+91 9880664435"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background font-sans text-foreground antialiased flex flex-col min-h-screen selection:bg-primary/30 selection:text-primary-foreground`}>
        <DeveloperSignature />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
