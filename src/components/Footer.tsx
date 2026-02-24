import { Container } from "@/components/ui/Container";
import { sectionIds, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {year} {siteConfig.name}. All rights reserved.
        </p>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`#${sectionIds.about}`}
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            About
          </a>
          <a
            href={`#${sectionIds.projects}`}
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            Projects
          </a>
          <a
            href={`#${sectionIds.contact}`}
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            Contact
          </a>
        </nav>
      </Container>
    </footer>
  );
}
