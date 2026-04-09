import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu, Server, Zap, Home as HomeIcon, User } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "About", path: "/about", icon: User },
    { name: "Hardware", path: "/hardware", icon: Cpu },
    { name: "Support", path: "/support-admin", icon: Server },
    { name: "Automation", path: "/automation", icon: Zap },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Atmospheric Background */}
      <div className="atmosphere">
        <div className="atmosphere-blob bg-[#8c1c13] w-[600px] h-[600px] -top-48 -left-48 opacity-20" />
        <div className="atmosphere-blob bg-zinc-600 w-[500px] h-[500px] top-1/2 -right-24 delay-1000 opacity-10" />
        <div className="atmosphere-blob bg-[#8c1c13] w-[400px] h-[400px] -bottom-48 left-1/3 delay-700 opacity-10" />
      </div>

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 pt-16 pb-40">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 mt-auto relative z-10 bg-[#0a0a0a]/80 backdrop-blur-md pb-32 md:pb-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Aisling. Built with precision and empathy.
          </p>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <span className="hover:text-white transition-colors cursor-pointer">Terminal-first</span>
            <span className="hover:text-white transition-colors cursor-pointer">Hardware-focused</span>
            <span className="hover:text-[#8c1c13] transition-colors cursor-pointer">AI-augmented</span>
          </div>
        </div>
      </footer>

      {/* Floating Pill Navigation - Moved to Bottom */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-nav px-2 py-2 flex items-center gap-1 md:gap-2 pointer-events-auto shadow-2xl shadow-black/50 border-white/10 bg-[#0a0a0a]/80"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? "text-white shadow-sm" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon size={16} className={isActive ? "text-white" : "text-zinc-500"} />
                <span className="hidden md:inline relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}

