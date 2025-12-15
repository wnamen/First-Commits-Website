"use client";

import { useState } from "react";
import { ScrollSection, ScrollReveal, Button } from "@/components";

type FormStep = 1 | 2 | 3;

interface FormData {
  // Step 1: Identity
  fullName: string;
  email: string;
  linkedIn: string;
  location: string;
  // Step 2: Experience
  currentRole: string;
  yearsExperience: string;
  operatorType: string;
  notableWork: string;
  // Step 3: Connection
  referrer: string;
  whyFirstCommits: string;
  contribution: string;
}

export default function ApplyPage() {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    linkedIn: "",
    location: "",
    currentRole: "",
    yearsExperience: "",
    operatorType: "",
    notableWork: "",
    referrer: "",
    whyFirstCommits: "",
    contribution: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep((step + 1) as FormStep);
  };

  const handlePrev = () => {
    if (step > 1) setStep((step - 1) as FormStep);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <ScrollSection className="pt-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 border border-gray-700">
                <div className="w-8 h-8 bg-white rotate-45" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-display font-medium tracking-tight mb-6">
              Request Received
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-body-lg text-gray-400 mb-8 leading-relaxed">
              Thank you for reaching out. We read every request and will be
              in touch if there&apos;s a connection to be made. This usually
              takes 2-3 weeks.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-caption text-gray-600 uppercase tracking-wider">
              The best things are worth waiting for
            </p>
          </ScrollReveal>
        </div>
      </ScrollSection>
    );
  }

  return (
    <>
      {/* Hero */}
      <ScrollSection fullHeight={false} className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-overline uppercase text-gray-500 mb-4 tracking-widest">
              Signal Interest
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-display lg:text-display-lg font-medium tracking-tight mb-6">
              Request an Introduction
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-body-lg text-gray-400 max-w-2xl leading-relaxed">
              Membership is referral-based and intentionally limited. This is
              less an application and more a way for us to learn who you are
              and how we might know each other.
            </p>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Progress Indicator */}
      <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Identity" },
              { num: 2, label: "Experience" },
              { num: 3, label: "Connection" },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`flex items-center gap-3 ${
                    step >= s.num ? "text-white" : "text-gray-600"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      step > s.num
                        ? "bg-white text-black"
                        : step === s.num
                        ? "border border-white"
                        : "border border-gray-700"
                    }`}
                  >
                    {step > s.num ? "✓" : s.num}
                  </div>
                  <span className="hidden sm:inline text-caption uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
                {index < 2 && (
                  <div
                    className={`w-12 sm:w-24 h-px mx-4 transition-colors duration-300 ${
                      step > s.num ? "bg-white" : "bg-gray-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <ScrollSection fullHeight={false} centered={false} className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Identity */}
            <div
              className={`transition-all duration-500 ${
                step === 1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute -translate-x-8 pointer-events-none"
              }`}
            >
              <div className="mb-8">
                <h2 className="text-headline font-medium tracking-tight mb-2">
                  Who are you?
                </h2>
                <p className="text-gray-500">
                  Let&apos;s start with the fundamentals.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className="input-field"
                    placeholder="Your name as you'd like to be known"
                    required
                  />
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="input-field"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={formData.linkedIn}
                    onChange={(e) => updateField("linkedIn", e.target.value)}
                    className="input-field"
                    placeholder="linkedin.com/in/yourprofile"
                    required
                  />
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    className="input-field"
                    placeholder="City, Country"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Experience */}
            <div
              className={`transition-all duration-500 ${
                step === 2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute -translate-x-8 pointer-events-none"
              }`}
            >
              <div className="mb-8">
                <h2 className="text-headline font-medium tracking-tight mb-2">
                  Where did you join early?
                </h2>
                <p className="text-gray-500">
                  Tell us about your experience building at early-stage companies.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Current or Most Recent Role
                  </label>
                  <input
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => updateField("currentRole", e.target.value)}
                    className="input-field"
                    placeholder="Title @ Company"
                    required
                  />
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Years of Operator Experience
                  </label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) =>
                      updateField("yearsExperience", e.target.value)
                    }
                    className="input-field bg-transparent cursor-pointer"
                    required
                  >
                    <option value="" className="bg-gray-900">
                      Select range
                    </option>
                    <option value="3-5" className="bg-gray-900">
                      3-5 years
                    </option>
                    <option value="5-8" className="bg-gray-900">
                      5-8 years
                    </option>
                    <option value="8-12" className="bg-gray-900">
                      8-12 years
                    </option>
                    <option value="12+" className="bg-gray-900">
                      12+ years
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Primary Operator Type
                  </label>
                  <select
                    value={formData.operatorType}
                    onChange={(e) =>
                      updateField("operatorType", e.target.value)
                    }
                    className="input-field bg-transparent cursor-pointer"
                    required
                  >
                    <option value="" className="bg-gray-900">
                      Select type
                    </option>
                    <option value="founding-team" className="bg-gray-900">
                      Founding Team
                    </option>
                    <option value="executive" className="bg-gray-900">
                      Executive/C-Suite
                    </option>
                    <option value="product" className="bg-gray-900">
                      Product
                    </option>
                    <option value="engineering" className="bg-gray-900">
                      Engineering
                    </option>
                    <option value="growth" className="bg-gray-900">
                      Growth/Marketing
                    </option>
                    <option value="operations" className="bg-gray-900">
                      Operations
                    </option>
                    <option value="finance" className="bg-gray-900">
                      Finance/Strategy
                    </option>
                    <option value="people" className="bg-gray-900">
                      People/Talent
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Early-Stage Experience
                  </label>
                  <textarea
                    value={formData.notableWork}
                    onChange={(e) => updateField("notableWork", e.target.value)}
                    className="input-field min-h-32 resize-none"
                    placeholder="Where did you join before it was obvious? What did you help build or operate at an early stage?"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Connection */}
            <div
              className={`transition-all duration-500 ${
                step === 3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute -translate-x-8 pointer-events-none"
              }`}
            >
              <div className="mb-8">
                <h2 className="text-headline font-medium tracking-tight mb-2">
                  How we might connect
                </h2>
                <p className="text-gray-500">
                  Tell us about your relationship to the community.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Do You Know a Member?
                  </label>
                  <input
                    type="text"
                    value={formData.referrer}
                    onChange={(e) => updateField("referrer", e.target.value)}
                    className="input-field"
                    placeholder="Name of current member (if applicable)"
                  />
                  <p className="mt-2 text-caption text-gray-600">
                    Most members join through an existing connection
                  </p>
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    What are you looking for?
                  </label>
                  <textarea
                    value={formData.whyFirstCommits}
                    onChange={(e) =>
                      updateField("whyFirstCommits", e.target.value)
                    }
                    className="input-field min-h-32 resize-none"
                    placeholder="What brings you here? What kind of community are you hoping to find?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-caption text-gray-500 uppercase tracking-wider mb-3">
                    Anything else?
                  </label>
                  <textarea
                    value={formData.contribution}
                    onChange={(e) =>
                      updateField("contribution", e.target.value)
                    }
                    className="input-field min-h-32 resize-none"
                    placeholder="Anything else you'd like us to know about you or your work?"
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="w-8 h-px bg-current" />
                  <span className="text-caption uppercase tracking-wider">
                    Previous
                  </span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button type="button" onClick={handleNext} variant="primary">
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </ScrollSection>

      {/* Expectations Section */}
      <ScrollSection fullHeight={false} className="py-24 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="text-title font-medium mb-8">What to Expect</h3>
          </ScrollReveal>

          <ScrollReveal delay={100} stagger>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "We Review",
                  description:
                    "We read every request and look for connections to the existing community.",
                },
                {
                  step: "02",
                  title: "We Connect",
                  description:
                    "If there's a fit, we'll introduce you to a member who can vouch for the community.",
                },
                {
                  step: "03",
                  title: "We Follow Up",
                  description:
                    "Either way, you'll hear from us within a few weeks.",
                },
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-caption text-gray-600 mb-2">{item.step}</p>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-body text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>
    </>
  );
}
