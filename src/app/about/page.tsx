"use client";

import { ScrollSection, ScrollReveal, Button } from "@/components";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <ScrollSection className="pt-32">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-6 tracking-widest">
                Our Story
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-display lg:text-display-lg font-medium tracking-tight mb-8">
                Built for those who thrive
                <span className="block text-gray-500">in ambiguity</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-body-lg text-gray-400 max-w-2xl leading-relaxed">
                First Commits is a guild for foundational operators—the builders
                who turn early chaos into durable systems. We exist because the
                most important work happens before the rest of the world is
                watching.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ScrollSection>

      {/* Origin Story */}
      <ScrollSection className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="sticky top-32">
                  <div className="relative aspect-[4/5] max-w-sm">
                    {/* Layered geometric composition */}
                    <div className="absolute inset-0 border border-gray-800" />
                    <div className="absolute inset-4 bg-gray-950" />
                    <div className="absolute inset-8 border border-gray-700" />

                    {/* Central symbol */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 border border-gray-600 rotate-45" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border border-gray-500 rotate-45" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rotate-45" />
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-4 h-px bg-gray-700" />
                    <div className="absolute top-2 left-2 w-px h-4 bg-gray-700" />
                    <div className="absolute bottom-2 right-2 w-4 h-px bg-gray-700" />
                    <div className="absolute bottom-2 right-2 w-px h-4 bg-gray-700" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 className="text-headline font-medium tracking-tight mb-8">
                  The Origin
                </h2>
              </ScrollReveal>

              <div className="space-y-6 text-body-lg text-gray-400 leading-relaxed">
                <ScrollReveal delay={100}>
                  <p>
                    First Commits began with a simple observation: the best
                    early-stage hires were rarely found through job boards or
                    recruiters. They were found through whisper networks—quiet
                    recommendations between founders and operators who had
                    already proven themselves in the trenches.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <p>
                    We realized these networks existed, but they were scattered
                    and inefficient. A founder in San Francisco might know the
                    perfect VP of Engineering in New York, but the connection
                    would never be made because no one thought to ask.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <p>
                    First Commits was created to formalize what was already
                    happening informally—to create a structured space where
                    operators with zero-to-one experience could find each other,
                    vouch for each other, and build the next generation of
                    category-defining companies together.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <p className="text-white font-medium">
                    We don&apos;t advertise. We don&apos;t mass recruit. We grow through
                    the trust that our members place in each other&apos;s judgment.
                    That&apos;s by design.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Values Section */}
      <ScrollSection fullHeight={false} className="py-24 lg:py-32 bg-gray-950">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                Our Values
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-headline font-medium tracking-tight">
                The principles that guide us
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} stagger>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Ownership",
                  description:
                    "We take responsibility for outcomes, not just outputs. Every member of First Commits has demonstrated the ability to own problems end-to-end—to see something through from conception to completion without waiting for permission or direction.",
                  number: "01",
                },
                {
                  title: "Clarity",
                  description:
                    "We value precision in thought and communication. In the chaos of early-stage building, clarity is a superpower. Our members can distill complexity into actionable insight—and they expect the same from each other.",
                  number: "02",
                },
                {
                  title: "Velocity",
                  description:
                    "We bias toward action. Speed is a competitive advantage in startups, and our members understand how to move fast without breaking the things that matter. They know when to be methodical and when to sprint.",
                  number: "03",
                },
                {
                  title: "Discipline",
                  description:
                    "We do the unglamorous work. Building something from nothing requires sustained effort over years, not months. Our members have the discipline to show up consistently, even when no one is watching.",
                  number: "04",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-8 bg-black border border-gray-900 hover:border-gray-700 transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-title font-medium">{value.title}</h3>
                    <span className="text-caption text-gray-700 font-mono">
                      {value.number}
                    </span>
                  </div>
                  <p className="text-body text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* The Guild Section */}
      <ScrollSection className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                  The Guild
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                  A community of craft, not credentials
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  First Commits isn&apos;t about where you went to school or which
                  brand-name companies appear on your resume. It&apos;s about what
                  you&apos;ve built and how you built it.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  Our members include founding engineers, first marketing hires,
                  startup CFOs, and operational leaders who&apos;ve architected
                  companies from the ground up. What they share isn&apos;t a pedigree—
                  it&apos;s a proven ability to create something from nothing.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400} stagger>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "250+", label: "Active Members" },
                    { value: "15", label: "Countries" },
                    { value: "80%", label: "Zero-to-One Experience" },
                    { value: "100%", label: "Referral-Based" },
                  ].map((stat, index) => (
                    <div key={index} className="p-4 border border-gray-900">
                      <p className="text-headline font-medium mb-1 tabular-nums">
                        {stat.value}
                      </p>
                      <p className="text-caption text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="relative aspect-square max-w-lg ml-auto">
                {/* Network visualization */}
                <div className="absolute inset-0">
                  {/* Nodes */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full" />
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-400 rounded-full" />
                  <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gray-500 rounded-full" />
                  <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white rounded-full" />
                  <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-gray-600 rounded-full" />
                  <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-gray-500 rounded-full" />
                  <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-gray-400 rounded-full" />

                  {/* Central node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full" />

                  {/* Connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="25"
                      y1="25"
                      x2="50"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="66"
                      y1="33"
                      x2="50"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="33"
                      y1="75"
                      x2="50"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="75"
                      y1="50"
                      x2="50"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="75"
                      y1="66"
                      x2="50"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="25"
                      x2="50"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="75"
                      x2="50"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>

                {/* Border frame */}
                <div className="absolute inset-0 border border-gray-900" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollSection>

      {/* Member Types */}
      <ScrollSection fullHeight={false} className="py-24 lg:py-32 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                Member Profiles
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-headline font-medium tracking-tight">
                Who belongs in First Commits
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Founding Engineers",
                  description:
                    "Technical leaders who've built the first version of products that scaled. They understand the tradeoffs between speed and architecture.",
                },
                {
                  title: "First Marketing Hires",
                  description:
                    "Growth operators who've taken companies from zero awareness to market leadership. They've built brands, not just campaigns.",
                },
                {
                  title: "Startup CFOs & COOs",
                  description:
                    "Operational leaders who've built the systems that scale. They've hired teams, raised capital, and operationalized chaos.",
                },
                {
                  title: "Product Leaders",
                  description:
                    "PMs who've defined product strategy from scratch. They've shipped MVPs and scaled them to millions of users.",
                },
                {
                  title: "People & Talent",
                  description:
                    "HR leaders who've built cultures that attract and retain exceptional talent. They've scaled teams from 10 to 1,000.",
                },
                {
                  title: "Serial Operators",
                  description:
                    "Builders who've done it multiple times. They bring pattern recognition and the wisdom of experience to every new challenge.",
                },
              ].map((type, index) => (
                <div
                  key={index}
                  className="group p-6 border border-gray-900 hover:border-gray-700 transition-colors duration-500"
                >
                  <div className="w-2 h-2 bg-white mb-6 group-hover:rotate-45 transition-transform duration-500" />
                  <h3 className="text-lg font-medium mb-3">{type.title}</h3>
                  <p className="text-body text-gray-500 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Quote Section */}
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
              &ldquo;The first commit is the hardest. Everything after that is just
              iteration.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-caption text-gray-500 uppercase tracking-widest">
              First Commits Ethos
            </p>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* How It Works */}
      <ScrollSection fullHeight={false} className="py-24 lg:py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                How It Works
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-headline font-medium tracking-tight">
                The mechanics of membership
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} stagger>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Referral",
                  description:
                    "New members are referred by existing members who stake their reputation on the recommendation.",
                },
                {
                  step: "02",
                  title: "Vetting",
                  description:
                    "Our membership committee reviews every application, verifying experience and cultural fit.",
                },
                {
                  step: "03",
                  title: "Onboarding",
                  description:
                    "Accepted members are introduced to the community through structured onboarding and warm introductions.",
                },
                {
                  step: "04",
                  title: "Contribution",
                  description:
                    "Members maintain their standing through active participation: sharing opportunities, making intros, contributing expertise.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <p className="text-caption text-gray-700 font-mono mb-4">
                    {item.step}
                  </p>
                  <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-body text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-gray-800 -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection fullHeight={false} className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
              Ready to make your first commit?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-body-lg text-gray-400 max-w-xl mx-auto mb-12">
              If you&apos;ve been building at the frontier—and someone in our network
              can vouch for your craft—we&apos;d like to hear from you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary" size="lg">
                Request Access
              </Button>
              <Button href="/partner" variant="secondary" size="lg">
                Partner With Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>
    </>
  );
}
