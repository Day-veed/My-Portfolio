"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIds, siteConfig } from "@/lib/site";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function Contact() {
  const nameId = "contact-name";
  const emailId = "contact-email";
  const messageId = "contact-message";

  const [state, setState] = useState<FormState>({ status: "idle" });

  const statusMessage = useMemo(() => {
    if (state.status === "success" || state.status === "error") {
      return state.message;
    }
    return "";
  }, [state]);

  async function onSubmit(formData: FormData) {
    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setState({
          status: "error",
          message: data.message ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setState({ status: "success", message: "Message sent — I’ll reply soon." });
    } catch {
      setState({
        status: "error",
        message: "Network error. Please try again in a moment.",
      });
    }
  }

  return (
    <section id={sectionIds.contact} className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something great"
            description="Send a message and I’ll get back to you. Replace the email and social links with yours."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <form
                action={onSubmit}
                className="space-y-4"
                aria-describedby={statusMessage ? "contact-status" : undefined}
              >
                <div>
                  <label htmlFor={nameId} className="text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[color:var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor={emailId} className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[color:var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor={messageId} className="text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[color:var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]"
                    placeholder="Tell me what you’re building…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.status === "submitting"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
                >
                  {state.status === "submitting" ? "Sending…" : "Send message"}
                </button>

                <p
                  id="contact-status"
                  className={
                    "text-sm " +
                    (state.status === "error"
                      ? "text-red-300"
                      : "text-[var(--muted)]")
                  }
                  role={
                    state.status === "success" || state.status === "error"
                      ? "status"
                      : undefined
                  }
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-7 sm:p-8">
              <p className="text-sm font-semibold">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                {siteConfig.email}
              </a>

              <div className="mt-7 grid gap-3">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-[var(--muted)]">Response time</p>
                <p className="mt-1 text-sm font-semibold">
                  Typically within 24–48 hours
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
