import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  external,
  ariaLabel,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition will-change-transform focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:brightness-110 active:brightness-95"
      : "border border-white/15 bg-white/5 text-[var(--foreground)] hover:bg-white/10";

  const content = <span className="relative z-10">{children}</span>;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cn(base, styles, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(base, styles, className)}
    >
      {content}
    </Link>
  );
}
