"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { sectionIds } from "@/lib/site";

export function Projects() {
  return (
    <section id={sectionIds.projects} className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="Each project includes a quick case study: the problem, the tools, and the result."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={project.title}>
              <Reveal delay={idx * 0.05}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-[color:var(--surface)] p-4">
                      <div>
                        <p className="text-xs font-semibold text-[var(--foreground)]">
                          Challenge
                        </p>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {project.caseStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--foreground)]">
                          Tools
                        </p>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {project.caseStudy.tools}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--foreground)]">
                          Outcome
                        </p>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {project.caseStudy.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        Live <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                        aria-label={`Open GitHub repo for ${project.title}`}
                      >
                        Code <Github className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
