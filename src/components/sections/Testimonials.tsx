import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import { sectionIds } from "@/lib/site";

export function Testimonials() {
  return (
    <section id={sectionIds.testimonials} className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted to deliver"
            description="Short, high-signal feedback from people I’ve worked with."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={t.name}>
              <Reveal delay={idx * 0.05}>
                <figure className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                  <blockquote className="text-sm leading-6 text-[var(--foreground)]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{t.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
