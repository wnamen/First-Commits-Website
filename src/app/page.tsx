"use client";

import { ScrollSection, ScrollReveal, Button } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <ScrollSection className="pt-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/10 rotate-45" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 border border-white/10 rotate-45" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <ScrollReveal delay={100}>
              <p className="text-overline uppercase text-gray-500 mb-6 tracking-widest">
                Private Community · Referral Only
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-display lg:text-display-lg xl:text-display-xl font-medium tracking-tight mb-8">
                For the people behind
                <span className="block text-gray-500">
                  the first commits
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-body-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
                A private community for early operators—the ones who joined
                before the org chart, before the hype. Built on referrals, trust,
                and shared context.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/apply" variant="primary" size="lg">
                  Request Access
                </Button>
                <Button href="/about" variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll indicator */}
          <ScrollReveal delay={1000} className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-3 text-gray-600">
              <span className="text-caption tracking-wider">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-pulse-subtle" />
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* The Chamber Section */}
      <ScrollSection className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-square max-w-lg">
                {/* Abstract geometric composition */}
                <div className="absolute inset-0 border border-gray-800" />
                <div className="absolute inset-8 border border-gray-700 rotate-3" />
                <div className="absolute inset-16 bg-gray-900" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rotate-45" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={100}>
                <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                  Shared Context
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                  A place where early builders already speak the same language
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  First Commits is where operators who&apos;ve shipped, scaled, and
                  stayed find each other. Not a network—a community built on the
                  understanding that the hardest work happens before anyone&apos;s watching.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400} stagger>
                <ul className="space-y-4">
                  {[
                    "Operators who were there at the beginning",
                    "Trust built through referrals and shared experience",
                    "A standard that isn't advertised—only recognized",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 bg-white mt-2.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Stats Section */}
      <ScrollSection fullHeight={false} className="py-24 lg:py-32 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal stagger>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { value: "250+", label: "Members" },
                { value: "12", label: "Cities" },
                { value: "30+", label: "Gatherings Held" },
                { value: "100%", label: "Referral-Based" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-display lg:text-display-lg font-medium tracking-tight tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-caption text-gray-500 mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Trust Network Section */}
      <ScrollSection className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                Trust Network
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                Built on quiet rigor, not loud promises
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-body-lg text-gray-400 leading-relaxed">
                Every member is vetted through direct referral and contribution.
                Reputation compounds here. Trust is currency.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300} stagger>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Referral Vetting",
                  description:
                    "Every member enters through a trusted referral. No cold applications. No algorithms. Just proven judgment from operators who stake their reputation.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rotate-45" />
                    </div>
                  ),
                },
                {
                  title: "Active Participation",
                  description:
                    "Membership is maintained through showing up—at dinners, in conversations, for each other. The community thrives on presence and reciprocity.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center">
                      <div className="w-6 h-px bg-white" />
                      <div className="absolute w-px h-6 bg-white" />
                    </div>
                  ),
                },
                {
                  title: "Discretion by Design",
                  description:
                    "What happens in First Commits stays in First Commits. Confidentiality isn't a policy—it's the foundation of trust that makes real conversation possible.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center">
                      <div className="w-4 h-4 border border-white" />
                    </div>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-8 border border-gray-900 hover:border-gray-700 transition-colors duration-500"
                >
                  <div className="mb-6 relative">{item.icon}</div>
                  <h3 className="text-title font-medium mb-4">{item.title}</h3>
                  <p className="text-body text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Gatherings Section */}
      <ScrollSection className="py-32 lg:py-40 bg-gray-950">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                  How We Gather
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                  Small, intentional gatherings for people who build
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  We don&apos;t host events. We convene. Closed-door conversations,
                  operator-led dinners, and working sessions where early builders
                  share context that doesn&apos;t exist anywhere else.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="space-y-6">
                  {[
                    "Intimate dinners in twelve cities",
                    "Closed-door working sessions by function",
                    "Founder and operator roundtables",
                    "Off-the-record conversations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <div className="w-8 h-px bg-gray-700" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] max-w-md ml-auto">
                {/* Layered composition */}
                <div className="absolute inset-0 bg-gray-900" />
                <div className="absolute inset-4 border border-gray-800" />
                <div className="absolute inset-8 bg-gray-800" />
                <div className="absolute inset-12 border border-gray-700" />

                {/* Central element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 border-2 border-white rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rotate-45" />
                  </div>
                </div>

                {/* Floating accents */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border border-white/20" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollSection>

      {/* Testimonial / Quote Section */}
      <ScrollSection fullHeight={false} className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-px bg-gray-700" />
                <div className="w-2 h-2 bg-white rotate-45" />
                <div className="w-8 h-px bg-gray-700" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <blockquote className="text-headline lg:text-display font-medium tracking-tight mb-8 text-balance">
              &ldquo;The best operators don&apos;t need to be found. They need to be
              recognized.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-caption text-gray-500 uppercase tracking-widest">
              First Commits Founding Principle
            </p>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection fullHeight={false} className="py-32 lg:py-40 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                  Ready to join the builders who shape what comes next?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-body-lg text-gray-400 leading-relaxed">
                  Membership is by referral only. If you&apos;ve been building at the
                  frontier—and someone in our network can vouch for your
                  craft—we&apos;d like to hear from you.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Button href="/apply" variant="primary" size="lg">
                  Request Access
                </Button>
                <Button href="/partner" variant="secondary" size="lg">
                  Partner With Us
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollSection>

      {/* Members From */}
      <ScrollSection fullHeight={false} className="py-24 lg:py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-caption text-gray-600 uppercase tracking-widest mb-12">
              Members have built at
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} stagger>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
              {[
                "Stripe",
                "Figma",
                "Notion",
                "Linear",
                "Vercel",
                "Scale AI",
              ].map((company) => (
                <span
                  key={company}
                  className="text-gray-600 text-lg font-medium tracking-wide hover:text-gray-400 transition-colors duration-300"
                >
                  {company}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Final Section */}
      <ScrollSection fullHeight={false} className="py-32 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative inline-block mb-12">
              <div className="w-24 h-24 border border-gray-800 rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border border-gray-600 rotate-45" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rotate-45" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
              First Commits
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-body-lg text-gray-500 max-w-xl mx-auto">
              A private community for the first people who build companies.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12">
              <Link
                href="/apply"
                className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="text-caption uppercase tracking-widest">
                  Request an introduction
                </span>
                <span className="w-8 h-px bg-gray-700 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>
    </>
  );
}
