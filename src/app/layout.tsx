import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "First Commits | A Private Community for Early Operators",
  description:
    "A private, referral-only community for early startup operators. Built on shared context, trust, and proximity to the work.",
  keywords: [
    "startup community",
    "early stage operators",
    "founding team",
    "operator community",
    "startup dinners",
    "referral community",
  ],
  openGraph: {
    title: "First Commits",
    description:
      "A private community for the first people who build companies. Built on referrals, trust, and shared context.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
