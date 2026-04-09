import React, { useRef, useEffect } from "react";
import { m, LazyMotion, domAnimation } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Cpu, Server, Zap, Home as HomeIcon, User, Heart } from "lucide-react";

function FloatingSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; size: number; speedY: number; opacity: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = Array.from({ length: 15 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: (Math.random() * 0.3 + 0.1) * -1, // gentle drift upwards
        opacity: Math.random() * 0.3 + 0.1,
      }));
    };

    const animate = () => {
      // Clear canvas each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.y += p.speedY; // move up
        
        // Loop around if it floats out of view
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        // Draw soft glowing orb
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(192, 57, 43, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(231, 76, 60, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialization
    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-5 pointer-events-none" />;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        // Use transform instead of left/top to avoid layout thrashing
        // 250 is half the 500px width/height of the glow
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    { name: "home", path: "/", icon: HomeIcon },
    { name: "about", path: "/about", icon: User },
    { name: "hardware", path: "/hardware", icon: Cpu },
    { name: "support", path: "/support-admin", icon: Server },
    { name: "automation", path: "/automation", icon: Zap },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen flex flex-col relative">
      {/* Interactive cursor glow */}
      <div
        ref={glowRef}
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
            <span className="hover:text-zinc-200 transition-colors cursor-pointer reveal-line">terminal-first</span>
            <span className="hover:text-zinc-200 transition-colors cursor-pointer reveal-line">hardware-focused ✨</span>
            <span className="hover:text-[#c0392b] transition-colors cursor-pointer reveal-line">cat-approved 🐱</span>
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
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden ${
                  isActive 
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
    </div>
    </LazyMotion>
  );
}
