/**
 * Staggered animated card wrapper.
 * Pass a custom index for stagger delay ordering.
 */
import { motion } from "motion/react";
import { cardVariants } from "../lib/theme";

interface Props {
  index: number;
  className?: string;
  hoverLift?: boolean;
  children: React.ReactNode;
}

export default function AnimatedCard({ index, className = "", hoverLift = true, children }: Props) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      {...(hoverLift ? { whileHover: { y: -6 } } : {})}
      className={className}
    >
      {children}
    </motion.div>
  );
}
