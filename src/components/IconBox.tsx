/**
 * Icon container with spring hover animation.
 * Used inside cards, section headers, and timeline entries.
 */
import { motion } from "motion/react";
import { spring } from "../lib/theme";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  size?: number;
  className?: string;
  hoverRotate?: number;
}

export default function IconBox({ icon: Icon, size = 24, className = "", hoverRotate = -5 }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: hoverRotate }}
      transition={spring.snappy}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <Icon size={size} />
    </motion.div>
  );
}
