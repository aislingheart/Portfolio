/**
 * Staggered animated card wrapper.
 * Pass a custom index for stagger delay ordering.
 */
import React, { useRef } from "react";
import type { ReactNode, Key } from "react";
import { m, useMotionValue, useSpring, useTransform } from "motion/react";
import { cardVariants } from "../lib/theme";

interface Props {
  key?: Key;
  index: number;
  className?: string;
  hoverLift?: boolean;
  children: ReactNode;
}

export default function AnimatedCard({ index, className = "", hoverLift = true, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values to track mouse position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4]);

  const boxState = useRef({ centerX: 0, centerY: 0, width: 0, height: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Cache the flat geometry layout strictly on enter to prevent 3D-projected bounds 
    // from corrupting the coordinate plane mathematically frame-by-frame on tilt.
    boxState.current = {
      width: e.currentTarget.offsetWidth,
      height: e.currentTarget.offsetHeight,
      centerX: rect.left + e.currentTarget.offsetWidth / 2,
      centerY: rect.top + e.currentTarget.offsetHeight / 2,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Distance mapped directly to cached viewport center vector rather than live DOM projection
    const deltaX = e.clientX - boxState.current.centerX;
    const deltaY = e.clientY - boxState.current.centerY;
    
    if (boxState.current.width === 0) return;

    x.set(deltaX / boxState.current.width);
    y.set(deltaY / boxState.current.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...(hoverLift ? { whileHover: { y: -6 } } : {})}
      className={className}
      style={{ 
        transformPerspective: 1000, 
        rotateX, 
        rotateY,
        // Override global CSS 'transition-all' attributes provided via injected classNames (e.g., .glass-card).
        // By omitting 'transform' from this list, we permanently lock out the CSS layout engine from 
        // violently interfering with Framer Motion's real-time 60fps JavaScript physics loop!
        transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, filter, backdrop-filter",
      }}
    >
      {children}
    </m.div>
  );
}
