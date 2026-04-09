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

  // Smooth out the movement with heavier, highly damped physics so it feels fluid rather than snappy
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });

  // Map mouse coordinates to 3D rotation angles
  // When mouse is top (negative Y), we pitch up (positive rotateX)
  // When mouse is left (negative X), we yaw left (negative rotateY)
  // Reduced angle to 4deg so the effect is subtle
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const rectInfo = useRef({ width: 0, height: 0, absoluteLeft: 0, absoluteTop: 0 });

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // Cache the absolute position in the document so scrolling doesn't invalidate it
    rectInfo.current = {
      width: rect.width,
      height: rect.height,
      absoluteLeft: rect.left + scrollLeft,
      absoluteTop: rect.top + scrollTop,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height, absoluteLeft, absoluteTop } = rectInfo.current;
    if (width === 0) return; // Safeguard if movement starts before enter is caught
    
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Calculate mouse position relative to the element without forcing a DOM layout recalculation
    const mouseX = (e.clientX + scrollLeft) - absoluteLeft;
    const mouseY = (e.clientY + scrollTop) - absoluteTop;
    
    // Convert to percentage from center (-0.5 to 0.5)
    // Reduce tilt intensity to keep the effect lightweight and subtle
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    // Reset cache just to be perfectly clean
    rectInfo.current = { width: 0, height: 0, absoluteLeft: 0, absoluteTop: 0 };
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
      style={{
        transformPerspective: 1000,
        rotateX,
        rotateY,
      }}
      {...(hoverLift ? { whileHover: { y: -6 } } : {})}
      className={className}
    >
      {children}
    </m.div>
  );
}
