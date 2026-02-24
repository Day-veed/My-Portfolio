"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { sectionIds, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section id={sectionIds.top} className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
      >
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--accent)]/20 blur-[110px]" />
        <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              Available for freelance & full-time roles
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {siteConfig.tagline}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              I build fast, accessible, and elegant web apps with React, Next.js, and
              TypeScript. I care about the small details: motion, micro-interactions,
              and clean UI that feels effortless.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink href={`#${sectionIds.projects}`} variant="primary">
                  View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </motion.div>
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink href={`#${sectionIds.contact}`} variant="secondary">
                  Hire Me <Mail className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                React
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Next.js
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                TypeScript
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Tailwind
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,92,255,0.25),transparent_55%),radial-gradient(circle_at_90%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Selected work
                  </p>
                  <p className="text-xs text-[var(--muted)]">{siteConfig.location}</p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4">
                    <p className="text-xs text-[var(--muted)]">Focus</p>
                    <p className="mt-1 text-sm font-semibold">Performance</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4">
                    <p className="text-xs text-[var(--muted)]">Strength</p>
                    <p className="mt-1 text-sm font-semibold">UI Craft</p>
                  </div>
                  <div className="col-span-2 rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4">
                    <p className="text-xs text-[var(--muted)]">What you get</p>
                    <p className="mt-1 text-sm font-semibold">
                      A thoughtful build: clean code, accessible UX, and smooth motion.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4">
                  <div>
                    <p className="text-xs text-[var(--muted)]">Email</p>
                    <p className="mt-1 text-sm font-semibold">
                      {siteConfig.email}
                    </p>
                  </div>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
                    <Image
                      src="/avatar.svg"
                      alt="Avatar illustration"
                      fill
                      className="object-cover"
                      sizes="40px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
