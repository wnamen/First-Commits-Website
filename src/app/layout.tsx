import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "First Commits | The Talent Layer for Category-Defining Companies",
  description:
    "A private, referral-only community for world-class early startup hires and foundational operators. Where exceptional builders find their next zero-to-one opportunity.",
  keywords: [
    "startup talent",
    "early stage hiring",
    "foundational operators",
    "startup community",
    "executive talent",
    "zero to one",
  ],
  openGraph: {
    title: "First Commits",
    description:
      "The talent layer that shapes category-defining companies. A private community for world-class foundational operators.",
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
