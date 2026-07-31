/**
 * Reusable animated section header with decorative blob.
 */
import type { ReactNode } from "react";
import { m } from "motion/react";
import { Mail } from "lucide-react";
import { fadeInUp } from "../lib/theme";

interface Props {
  title: string;
  children: ReactNode; // description paragraph
}

export default function PageHeader({ title, children }: Props) {
  return (
    <m.section {...fadeInUp} className="relative">
      <div className="absolute -left-8 -top-8 w-32 h-32 bg-[radial-gradient(circle,rgba(192,57,43,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            {children}
          </p>
        </div>
        <m.a
          href="mailto:aislingcreed42@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 bg-white/5 border border-white/10 text-zinc-200 font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 w-fit shrink-0 mt-1"
        >
          <Mail size={16} /> contact me
        </m.a>
      </div>
    </m.section>
  );
}
