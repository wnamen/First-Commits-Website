"use client";

import { ScrollSection, ScrollReveal, Button } from "@/components";

export default function PartnerPage() {
  return (
    <>
      {/* Hero Section */}
      <ScrollSection className="pt-32">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-8 w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/3 right-8 w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-6 tracking-widest">
                For Investors & Founders
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-display lg:text-display-lg font-medium tracking-tight mb-8">
                Your portfolio&apos;s
                <span className="block text-gray-500">talent advantage</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-body-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
                First Commits serves as the talent layer for category-defining
                companies. Partner with us to give your portfolio access to
                vetted operators, specialized working groups, and discreet
                collaboration channels.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Button href="#partner-inquiry" variant="primary" size="lg">
                Partner Inquiry
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </ScrollSection>

      {/* Value Proposition */}
      <ScrollSection className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <ScrollReveal>
                <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                  Strategic Partnership
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                  A private capital firm for talent—not another networking group
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-body-lg text-gray-400 leading-relaxed">
                  The difference between a good company and a great company
                  often comes down to the first ten hires. First Commits exists
                  to ensure your portfolio companies have access to the
                  operators who can make that difference.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300} stagger>
              <div className="space-y-6">
                {[
                  {
                    metric: "72hrs",
                    label: "Average time to first qualified introduction",
                  },
                  {
                    metric: "85%",
                    label: "Interview-to-offer rate for member placements",
                  },
                  {
                    metric: "3.2x",
                    label: "Retention rate vs. traditional recruiting",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 border border-gray-900 hover:border-gray-700 transition-colors duration-500"
                  >
                    <p className="text-display font-medium tracking-tight mb-2">
                      {stat.metric}
                    </p>
                    <p className="text-caption text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollSection>

      {/* Services Grid */}
      <ScrollSection fullHeight={false} className="py-24 lg:py-32 bg-gray-950">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                Partnership Services
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-headline font-medium tracking-tight">
                How we support your portfolio
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Executive Search",
                  description:
                    "Access our network for C-suite and VP-level placements. Every candidate is pre-vetted and vouched for by current members.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="w-4 h-4 bg-white" />
                    </div>
                  ),
                },
                {
                  title: "Founding Teams",
                  description:
                    "Build your founding team with operators who've done it before. We specialize in first ten hire placements.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-white" />
                        <div className="w-2 h-2 bg-white" />
                        <div className="w-2 h-2 bg-white" />
                        <div className="w-2 h-2 bg-white/30" />
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Working Groups",
                  description:
                    "Specialized cohorts for specific challenges: GTM strategy, technical architecture, international expansion, and more.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="w-6 h-6 border border-white rotate-45" />
                    </div>
                  ),
                },
                {
                  title: "Advisory Networks",
                  description:
                    "Connect portfolio companies with experienced advisors for fractional or board-level guidance.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="flex gap-2">
                        <div className="w-px h-6 bg-white" />
                        <div className="w-px h-6 bg-white" />
                        <div className="w-px h-6 bg-white" />
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Due Diligence",
                  description:
                    "Leverage our network for reference checks, market validation, and operator insights during your investment process.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="w-6 h-6 border-2 border-white rounded-full" />
                    </div>
                  ),
                },
                {
                  title: "Talent Events",
                  description:
                    "Exclusive gatherings that connect your portfolio founders with exceptional operators in intimate settings.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="w-4 h-4 bg-white rotate-45" />
                    </div>
                  ),
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-black border border-gray-900 hover:border-gray-700 transition-colors duration-500"
                >
                  {service.icon}
                  <h3 className="text-title font-medium mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* For Founders Section */}
      <ScrollSection className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-square max-w-lg">
                {/* Abstract composition */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 border border-gray-800" />
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-gray-700 bg-gray-900" />
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border border-gray-800" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rotate-45" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-gray-700" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-800" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                  For Founders
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                  Build your team with operators who&apos;ve been there
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  The hardest hires are the first ones. First Commits connects
                  you with operators who understand the chaos of zero-to-one—and
                  thrive in it.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} stagger>
                <ul className="space-y-4 mb-8">
                  {[
                    "Skip the recruiter queue with direct operator introductions",
                    "Access candidates who aren't actively looking but are open to the right opportunity",
                    "Get candid references from operators who've worked together",
                    "Join founder-only channels for hiring strategy and compensation benchmarks",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 bg-white mt-2.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Button href="/apply" variant="secondary">
                  Apply as a Founder
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* For Investors Section */}
      <ScrollSection className="py-32 lg:py-40 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                  For Investors
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                  Your portfolio&apos;s unfair advantage in talent
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  Partner with First Commits to give every company in your
                  portfolio access to a curated network of exceptional
                  operators—before your competitors even know they&apos;re available.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} stagger>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Portfolio Access",
                      description: "All portfolio companies get direct access to our operator network",
                    },
                    {
                      title: "Priority Matching",
                      description: "Partner portfolios receive priority for high-demand candidates",
                    },
                    {
                      title: "Talent Intelligence",
                      description: "Quarterly reports on market trends and compensation benchmarks",
                    },
                    {
                      title: "Co-branded Events",
                      description: "Host exclusive talent events for your portfolio",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 border border-gray-800">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-caption text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Button href="#partner-inquiry" variant="primary">
                  Explore Partnership
                </Button>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] max-w-md ml-auto">
                {/* Layered composition */}
                <div className="absolute inset-0 bg-black border border-gray-800" />
                <div className="absolute inset-4 border border-gray-700" />
                <div className="absolute inset-8 bg-gray-900" />

                {/* Content layers */}
                <div className="absolute inset-12 flex flex-col justify-between p-6">
                  <div className="space-y-3">
                    <div className="w-full h-2 bg-gray-700" />
                    <div className="w-3/4 h-2 bg-gray-700" />
                    <div className="w-1/2 h-2 bg-gray-700" />
                  </div>
                  <div className="space-y-3">
                    <div className="w-2/3 h-2 bg-gray-700" />
                    <div className="w-full h-2 bg-gray-700" />
                  </div>
                </div>

                {/* Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rotate-45" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollSection>

      {/* Testimonial Section */}
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
              &ldquo;First Commits helped us hire our first three executives in under
              60 days. Each one came with the credibility of someone who&apos;d
              already vouched for them.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full" />
              <div className="text-left">
                <p className="font-medium">Series A Founder</p>
                <p className="text-caption text-gray-500">
                  Portfolio Company, Top-Tier VC
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Partner Inquiry Form */}
      <ScrollSection
        id="partner-inquiry"
        fullHeight={false}
        className="py-24 lg:py-32 border-t border-gray-900"
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-headline font-medium tracking-tight mb-4">
              Start a Partnership Conversation
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-body-lg text-gray-400 mb-12">
              Tell us about your firm and how we might work together.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="you@firm.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                  Firm Name
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Your venture firm or company"
                />
              </div>

              <div>
                <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                  Partnership Interest
                </label>
                <select className="input-field bg-transparent cursor-pointer">
                  <option value="" className="bg-gray-900">
                    Select your primary interest
                  </option>
                  <option value="portfolio" className="bg-gray-900">
                    Portfolio-wide talent access
                  </option>
                  <option value="executive" className="bg-gray-900">
                    Executive search for specific company
                  </option>
                  <option value="events" className="bg-gray-900">
                    Co-branded talent events
                  </option>
                  <option value="other" className="bg-gray-900">
                    Other partnership opportunity
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                  Tell Us More
                </label>
                <textarea
                  className="input-field min-h-32 resize-none"
                  placeholder="What are you looking to accomplish? Any specific hiring challenges or opportunities?"
                />
              </div>

              <Button type="submit" variant="primary" size="lg">
                Submit Inquiry
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </ScrollSection>
    </>
  );
}
