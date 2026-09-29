import React, { useRef, useEffect, useState } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence, MotionConfig } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Cpu, Server, Zap, Home as HomeIcon, Flower2, Heart, FolderGit2 } from "lucide-react";
import TerminalMode from "./TerminalMode";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

/** Particle budget scales down on small/low-power screens. */
const PARTICLE_COUNT_DESKTOP = 100;
const PARTICLE_COUNT_MOBILE = 40;

function FloatingSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Honour the OS reduce-motion setting: render a single static frame
    // instead of spinning requestAnimationFrame forever.
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let isMouseActive = false;
    let inactivityTimeout: number;

    const MOUSE_RADIUS = 180;
    const LINE_MAX_DIST = 120;

    // Scale the particle budget to the viewport. The link-drawing pass below
    // is O(n^2), so this directly caps per-frame cost on phones.
    const particleBudget = () =>
      window.innerWidth < 768 || window.innerHeight < 600
        ? PARTICLE_COUNT_MOBILE
        : PARTICLE_COUNT_DESKTOP;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = Array.from({ length: particleBudget() }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
      }));
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      isMouseActive = true;
      if ('touches' in e) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      } else {
        mouse.x = (e as MouseEvent).clientX;
        mouse.y = (e as MouseEvent).clientY;
      }

      clearTimeout(inactivityTimeout);
      inactivityTimeout = window.setTimeout(() => {
        isMouseActive = false;
      }, 2000); // Ghost cursor takes over after 2 seconds of inactivity
    };

    const handlePointerLeave = () => {
      isMouseActive = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeX = mouse.x;
      let activeY = mouse.y;

      // If no mouse/touch is active (like on mobile), orchestrate a smoothly floating autonomous point
      if (!isMouseActive) {
        const time = Date.now() * 0.0005;
        // Lissajous curve for natural wandering movement
        activeX = canvas.width / 2 + Math.sin(time) * (canvas.width * 0.3) * Math.cos(time * 0.7);
        activeY = canvas.height / 2 + Math.cos(time * 1.1) * (canvas.height * 0.4) * Math.sin(time * 0.8);
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = canvas.width + 20;
        else if (p.x > canvas.width + 20) p.x = -20;

        if (p.y < -20) p.y = canvas.height + 20;
        else if (p.y > canvas.height + 20) p.y = -20;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(192, 57, 43, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(231, 76, 60, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const distToMouse = Math.hypot(p1.x - activeX, p1.y - activeY);

        if (distToMouse < MOUSE_RADIUS) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distBetweenNodes = Math.hypot(p1.x - p2.x, p1.y - p2.y);

            if (distBetweenNodes < LINE_MAX_DIST) {
              const mouseOpacity = 1 - (distToMouse / MOUSE_RADIUS);
              const nodeOpacity = 1 - (distBetweenNodes / LINE_MAX_DIST);
              const lineOpacity = Math.min(mouseOpacity, nodeOpacity) * 0.5;

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(231, 76, 60, ${lineOpacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Don't burn CPU/battery animating a background the user can't see.
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        cancelAnimationFrame(animationFrameId);
        animate();
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("touchend", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("touchend", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-5 pointer-events-none"
    />
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [showTerminal, setShowTerminal] = useState(false);
  const [showMilo, setShowMilo] = useState(false);
  const [miloImg, setMiloImg] = useState<string | null>(null);
  const [xrayMode, setXrayMode] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // milo.webp is ~700KB. Load it on demand so it never lands in the initial
  // bundle for the 99% of visitors who never open the cat easter egg.
  useEffect(() => {
    if (!showMilo || miloImg) return;
    let cancelled = false;
    import("../assets/milo.webp")
      .then((mod) => {
        if (!cancelled) setMiloImg(mod.default);
      })
      .catch(() => {
        // Easter egg is non-critical; silently skip if the asset fails.
      });
    return () => {
      cancelled = true;
    };
  }, [showMilo, miloImg]);

  // Close the Milo modal on Escape.
  useEffect(() => {
    if (!showMilo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMilo(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showMilo]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        // Use transform instead of left/top to avoid layout thrashing
        // 250 is half the 500px width/height of the glow
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  const navItems = [
    { path: "/", name: "home", icon: HomeIcon },
    { path: "/about", name: "about", icon: Flower2 },
    { path: "/hardware", name: "hardware", icon: Cpu },
    { path: "/support-admin", name: "support", icon: Server },
    { path: "/automation", name: "automation", icon: Zap },
    { path: "/projects", name: "projects", icon: FolderGit2 },
  ];

  return (
    <LazyMotion features={domAnimation}>
      {/* reducedMotion="user" makes Framer skip transform/opacity animations
          automatically when the OS asks for reduced motion. */}
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col relative">
        {/* Interactive cursor glow */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="cursor-glow"
          style={{ transform: "translate(-500px, -500px)" }}
        />

        {/* Floating sparkle particles */}
        <FloatingSparkles />

        {/* Atmospheric background */}
        <div className="atmosphere">
          <div className="atmosphere-blob bg-[#c0392b] w-[600px] h-[600px] -top-48 -left-48 opacity-[0.12]" />
          <div className="atmosphere-blob bg-zinc-500 w-[500px] h-[500px] top-1/2 -right-24 opacity-[0.06]" />
          <div className="atmosphere-blob bg-[#e74c3c] w-[400px] h-[400px] -bottom-48 left-1/3 opacity-[0.08]" />
        </div>

        <main className="flex-grow max-w-5xl mx-auto w-full px-6 pt-16 pb-40">
          <m.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </m.div>
        </main>

        <footer className="py-12 px-6 border-t border-white/5 mt-auto relative z-10 bg-[#0a0a0c]/80 backdrop-blur-md pb-[180px] md:pb-[140px]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-sm flex items-center gap-1.5">
              © {new Date().getFullYear()} aisling. built with
              <m.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Heart size={14} className="text-[#c0392b] fill-[#c0392b]" />
              </m.span>
              and way too many energy drinks.
            </p>
            <div className="flex gap-6 text-zinc-500 text-sm">
              <button
                type="button"
                onClick={() => setShowTerminal(true)}
                className="hover:text-zinc-200 transition-colors cursor-pointer reveal-line"
              >
                terminal-first
              </button>
              <button
                type="button"
                onClick={() => {
                  const next = !xrayMode;
                  setXrayMode(next);
                  document.body.classList.toggle('xray-mode', next);
                }}
                aria-pressed={xrayMode}
                className="hover:text-zinc-200 transition-colors cursor-pointer reveal-line"
              >
                hardware-focused ✨
              </button>
              <button
                type="button"
                onClick={() => setShowMilo(true)}
                className="hover:text-accent transition-colors cursor-pointer reveal-line"
              >
                cat-approved 🐱
              </button>
            </div>
          </div>
        </footer>

        {/* Floating pill navigation */}
        <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
          <m.nav
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-nav px-2 py-2 flex items-center gap-1 md:gap-2 pointer-events-auto shadow-2xl shadow-black/40 border-white/10"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.name}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden ${isActive
                    ? "text-zinc-100 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                    }`}
                >
                  {isActive && (
                    <m.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <m.div
                    whileHover={{ scale: 1.15, rotate: isActive ? 0 : 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <item.icon size={16} className={isActive ? "text-zinc-100" : "text-zinc-500"} />
                  </m.div>
                  <span className="hidden md:inline relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </m.nav>
        </div>

        {/* Milo Modal Egg */}
        <AnimatePresence>
          {showMilo && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMilo(false)}
              className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            >
              <m.div
                role="dialog"
                aria-modal="true"
                aria-label="Milo the cat approves of this portfolio"
                initial={{ y: 50, rotate: -5, opacity: 0 }}
                animate={{ y: 0, rotate: 2, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#f0f0f0] p-4 pb-16 rounded-sm shadow-2xl relative max-w-sm w-full"
              >
                {miloImg ? (
                  <img
                    src={miloImg}
                    alt="Milo, the cat who supervises quality assurance on this site"
                    className="w-full aspect-square object-cover shadow-inner bg-zinc-800 rounded-sm"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-full aspect-square bg-zinc-800 rounded-sm animate-pulse"
                  />
                )}
                <p className="absolute bottom-5 left-0 w-full text-center text-zinc-800 font-serif italic text-lg opacity-80 decoration-inherit flex items-center justify-center gap-2">I approve of this portfolio~milo 🐾</p>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Terminal Mode Egg */}
        {showTerminal && <TerminalMode onClose={() => setShowTerminal(false)} />}
      </div>
      </MotionConfig>
    </LazyMotion>
  );
}
