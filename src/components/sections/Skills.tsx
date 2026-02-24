import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIds } from "@/lib/site";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id={sectionIds.skills} className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A modern frontend toolkit"
            description="A curated set of technologies I use to ship reliable products."
          />
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;

            return (
              <div key={skill.name}>
                <Reveal delay={idx * 0.03}>
                  <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-[color:var(--surface)] text-[var(--foreground)]"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-[var(--foreground)]">
                        {skill.name}
                      </span>
                    </div>

                    {skill.highlight ? (
                      <span className="rounded-full border border-white/10 bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                        Core
                      </span>
                    ) : null}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
