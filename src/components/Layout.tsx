import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Cpu, Server, Zap, Home as HomeIcon, User, Heart } from "lucide-react";

function FloatingSparkles() {
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 20,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: s.left,
            bottom: '-10px',
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: `radial-gradient(circle, rgba(192, 57, 43, ${s.opacity}) 0%, rgba(231, 76, 60, ${s.opacity * 0.5}) 50%, transparent 100%)`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const location = useLocation();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const navItems = [
    { name: "home", path: "/", icon: HomeIcon },
    { name: "about", path: "/about", icon: User },
    { name: "hardware", path: "/hardware", icon: Cpu },
    { name: "support", path: "/support-admin", icon: Server },
    { name: "automation", path: "/automation", icon: Zap },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Interactive cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
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
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 mt-auto relative z-10 bg-[#0a0a0c]/80 backdrop-blur-md pb-32 md:pb-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} aisling. built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Heart size={14} className="text-[#c0392b] fill-[#c0392b]" />
            </motion.span>
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
        <motion.nav 
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
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: isActive ? 0 : 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <item.icon size={16} className={isActive ? "text-zinc-100" : "text-zinc-500"} />
                </motion.div>
                <span className="hidden md:inline relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}
