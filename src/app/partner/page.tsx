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
                A community your
                <span className="block text-gray-500">early hires already gather in</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-body-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
                First Commits is where founding operators find each other. Partner
                with us to support the people building inside your portfolio—through
                community, not placement.
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
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
                Why Partner
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-headline lg:text-display font-medium tracking-tight mb-6">
                A trusted operator community—not a recruiting pipeline
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-body-lg text-gray-400 leading-relaxed mb-8">
                First Commits started as a way for early hires to find each
                other. What emerged was a community built on shared context,
                trust, and proximity to the work.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-body-lg text-gray-400 leading-relaxed">
                When you partner with us, you&apos;re not accessing a talent
                database. You&apos;re aligning with a community where your
                portfolio founders and their future teammates already gather.
              </p>
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
                How We Work Together
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-headline font-medium tracking-tight">
                Community-first, not transaction-first
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gatherings",
                  description:
                    "Invite your portfolio founders to our dinners and working sessions—intimate gatherings where operators share real context.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="w-4 h-4 bg-white" />
                    </div>
                  ),
                },
                {
                  title: "Introductions",
                  description:
                    "When the right opportunity emerges, we make introductions. No pipeline. No placement fees. Just trusted connections.",
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
                  title: "Working Sessions",
                  description:
                    "Operator-led conversations on specific challenges: GTM, hiring, fundraising, international expansion. No panels. Real talk.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="w-6 h-6 border border-white rotate-45" />
                    </div>
                  ),
                },
                {
                  title: "Founder Support",
                  description:
                    "Your portfolio founders can tap into the community for candid advice from operators who've been through it.",
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
                  title: "References",
                  description:
                    "Need a gut check on a candidate? Our members give honest references because their reputation depends on it.",
                  icon: (
                    <div className="w-12 h-12 border border-gray-700 flex items-center justify-center mb-6">
                      <div className="w-6 h-6 border-2 border-white rounded-full" />
                    </div>
                  ),
                },
                {
                  title: "Co-Hosted Dinners",
                  description:
                    "Partner with us to host intimate dinners in your city—a way to show up for the community while meeting exceptional operators.",
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
                  Find your people before you need to hire them
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  The best hires come from relationships that existed before you
                  had the role to fill. First Commits is where those relationships
                  start.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} stagger>
                <ul className="space-y-4 mb-8">
                  {[
                    "Meet operators at dinners before you need to recruit them",
                    "Get honest references from people who've actually worked together",
                    "Join conversations with founders facing the same challenges",
                    "Build relationships that compound over time",
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
                  Request an Introduction
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
                  Support the people building inside your portfolio
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
                  Partnership is about alignment, not leverage. When you support
                  the community, you&apos;re investing in the relationships that help
                  your founders succeed.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} stagger>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Founder Invitations",
                      description: "Invite your portfolio founders to our gatherings",
                    },
                    {
                      title: "Co-Hosted Dinners",
                      description: "Partner on intimate operator dinners in your city",
                    },
                    {
                      title: "Community Support",
                      description: "Help sustain a community that supports early builders",
                    },
                    {
                      title: "Organic Connections",
                      description: "Let relationships form naturally, not transactionally",
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
              &ldquo;The best part isn&apos;t the introductions—it&apos;s the
              conversations. I learn more at one First Commits dinner than
              a month of networking events.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full" />
              <div className="text-left">
                <p className="font-medium">First Commits Member</p>
                <p className="text-caption text-gray-500">
                  Series A Founder
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
                  <option value="dinners" className="bg-gray-900">
                    Co-host dinners in our city
                  </option>
                  <option value="invitations" className="bg-gray-900">
                    Invite portfolio founders to gatherings
                  </option>
                  <option value="community" className="bg-gray-900">
                    Support the community
                  </option>
                  <option value="other" className="bg-gray-900">
                    Something else
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                  Tell Us More
                </label>
                <textarea
                  className="input-field min-h-32 resize-none"
                  placeholder="What brings you here? How do you imagine working together?"
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
