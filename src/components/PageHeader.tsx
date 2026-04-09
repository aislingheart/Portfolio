/**
 * Reusable animated section header with decorative blob.
 */
import { motion } from "motion/react";
import { fadeInUp } from "../lib/theme";

interface Props {
  title: string;
  children: React.ReactNode; // description paragraph
}

export default function PageHeader({ title, children }: Props) {
  return (
    <motion.section {...fadeInUp} className="relative">
      <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#c0392b]/15 rounded-full blur-3xl pointer-events-none" />
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 relative z-10">
        {title}
      </h1>
      <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed relative z-10">
        {children}
      </p>
    </motion.section>
  );
}
