import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIds } from "@/lib/site";

export function About() {
  return (
    <section id={sectionIds.about} className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="I build modern interfaces that feel fast, clean, and human."
            description="Placeholder bio — you’ll replace this with your story."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <p className="text-base leading-7 text-[var(--muted)]">
                I’m a frontend developer focused on building responsive, accessible
                web experiences. My work blends strong UX, performance, and clean
                engineering practices.
              </p>
              <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                I’m comfortable working across the stack of a modern frontend:
                React, Next.js (App Router), TypeScript, Tailwind CSS, Git,
                and APIs. I enjoy translating design intent into production-ready
                UI — including motion that feels intentional, not noisy.
              </p>
              <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                Outside of code, I’m curious by default: I like refining systems,
                spotting patterns, and making things simpler.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-7 sm:p-8">
              <p className="text-sm font-semibold">Core strengths</p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>Pixel-perfect UI implementation</li>
                <li>Performance + Core Web Vitals</li>
                <li>Accessible, keyboard-friendly components</li>
                <li>Reusable systems and clean code</li>
              </ul>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-[var(--muted)]">Currently exploring</p>
                <p className="mt-1 text-sm font-semibold">
                  Motion design patterns & component architecture
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
