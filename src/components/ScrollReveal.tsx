"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  stagger?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  stagger = false,
  threshold = 0.2,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("is-visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-8";
      case "down":
        return "-translate-y-8";
      case "left":
        return "translate-x-8";
      case "right":
        return "-translate-x-8";
      case "none":
        return "";
      default:
        return "translate-y-8";
    }
  };

  if (stagger) {
    return (
      <div
        ref={elementRef}
        className={`scroll-reveal-stagger ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={elementRef}
      className={`
        opacity-0 ${getDirectionClasses()}
        transition-all duration-700 ease-out-expo
        [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0 [&.is-visible]:translate-y-0
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
