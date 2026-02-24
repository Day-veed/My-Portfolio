"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { sectionIds } from "@/lib/site";

const navItems = [
  { label: "About", href: `#${sectionIds.about}` },
  { label: "Skills", href: `#${sectionIds.skills}` },
  { label: "Projects", href: `#${sectionIds.projects}` },
  { label: "Contact", href: `#${sectionIds.contact}` },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--background)]/70 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--background)]/50">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={`#${sectionIds.top}`}
          className="font-semibold tracking-tight text-[var(--foreground)]"
          aria-label="Go to top"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            Portfolio
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
            <ButtonLink href={`#${sectionIds.projects}`} variant="secondary">
              View Projects
            </ButtonLink>
          </motion.div>
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="hidden sm:block">
            <ButtonLink href={`#${sectionIds.contact}`} variant="primary">
              Hire Me
            </ButtonLink>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}
