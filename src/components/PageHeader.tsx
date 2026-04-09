/**
 * Reusable animated section header with decorative blob.
 */
import type { ReactNode } from "react";
import { m } from "motion/react";
import { fadeInUp } from "../lib/theme";

interface Props {
  title: string;
  children: ReactNode; // description paragraph
}

export default function PageHeader({ title, children }: Props) {
  return (
    <m.section {...fadeInUp} className="relative">
      <div className="absolute -left-8 -top-8 w-32 h-32 bg-[radial-gradient(circle,rgba(192,57,43,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 relative z-10">
        {title}
      </h1>
      <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed relative z-10">
        {children}
      </p>
    </m.section>
  );
}
