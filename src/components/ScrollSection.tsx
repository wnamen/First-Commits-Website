"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  centered?: boolean;
}

export default function ScrollSection({
  children,
  className = "",
  id,
  fullHeight = true,
  centered = true,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("is-active");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`
        relative
        ${fullHeight ? "min-h-screen" : ""}
        ${centered ? "flex items-center justify-center" : ""}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
