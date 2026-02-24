import {
  Braces,
  Code2,
  Component,
  Database,
  GitBranch,
  Layout,
  Palette,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
  highlight?: boolean;
};

export const skills: Skill[] = [
  { name: "React", icon: Component, highlight: true },
  { name: "Next.js", icon: PanelsTopLeft, highlight: true },
  { name: "TypeScript", icon: Braces, highlight: true },
  { name: "Tailwind CSS", icon: Palette, highlight: true },
  { name: "JavaScript", icon: Code2 },
  { name: "HTML", icon: Layout },
  { name: "CSS", icon: Sparkles },
  { name: "Git", icon: GitBranch },
  { name: "APIs", icon: Database },
  { name: "A11y", icon: ShieldCheck },
];

export type Project = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  caseStudy: {
    challenge: string;
    tools: string;
    outcome: string;
  };
  links: {
    live: string;
    github: string;
  };
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Checkout UX Redesign",
    description:
      "A performance-focused checkout rebuild with improved conversion and fewer user drop-offs.",
    image: {
      src: "/projects/checkout.svg",
      alt: "Project screenshot placeholder for Checkout UX Redesign",
    },
    caseStudy: {
      challenge:
        "Users were abandoning checkout due to confusing steps and slow load times.",
      tools: "Next.js, React, TypeScript, Tailwind CSS, REST APIs",
      outcome:
        "Simplified steps and optimized rendering; improved perceived speed and reduced friction.",
    },
    links: {
      live: "https://example.com",
      github: "https://github.com/your-handle/project",
    },
    tags: ["Next.js", "TypeScript", "UX"],
  },
  {
    title: "Marketing Site + CMS",
    description:
      "A responsive marketing site with accessible components and a clean content workflow.",
    image: {
      src: "/projects/marketing.svg",
      alt: "Project screenshot placeholder for Marketing Site + CMS",
    },
    caseStudy: {
      challenge: "Content updates required developer support and slowed releases.",
      tools: "Next.js, Tailwind CSS, Headless CMS, SEO",
      outcome:
        "Enabled fast content edits and improved Lighthouse scores with optimized images.",
    },
    links: {
      live: "https://example.com",
      github: "https://github.com/your-handle/project",
    },
    tags: ["SEO", "A11y", "Tailwind"],
  },
  {
    title: "Dashboard UI System",
    description:
      "A reusable component system for internal tools with consistent styling and rapid iteration.",
    image: {
      src: "/projects/dashboard.svg",
      alt: "Project screenshot placeholder for Dashboard UI System",
    },
    caseStudy: {
      challenge:
        "Teams built UI inconsistently, causing UX drift and increased maintenance costs.",
      tools: "React, TypeScript, Tailwind CSS, Design Tokens",
      outcome:
        "Standardized components and patterns to speed up delivery and reduce regressions.",
    },
    links: {
      live: "https://example.com",
      github: "https://github.com/your-handle/project",
    },
    tags: ["Design System", "React", "TypeScript"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Delivers polished UI with great attention to detail — performance and accessibility are always considered.",
    name: "Client Name",
    title: "Product Manager",
  },
  {
    quote:
      "A strong communicator who ships reliable features quickly and raises the quality bar for the team.",
    name: "Colleague Name",
    title: "Senior Engineer",
  },
  {
    quote:
      "Turned ambiguous requirements into a clean, responsive experience that users loved.",
    name: "Stakeholder Name",
    title: "Founder",
  },
];
