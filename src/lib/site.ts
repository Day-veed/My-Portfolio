export const siteConfig = {
  name: "Your Name",
  role: "Frontend Developer",
  tagline: "Frontend Developer crafting pixel-perfect web experiences",
  location: "Remote · Your City",
  email: "you@example.com",
  links: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle/",
  },
} as const;

export const sectionIds = {
  top: "top",
  about: "about",
  skills: "skills",
  projects: "projects",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];
