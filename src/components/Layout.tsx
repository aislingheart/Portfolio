import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu, Server, Zap, Home as HomeIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Hardware", path: "/hardware", icon: Cpu },
    { name: "Support", path: "/support-admin", icon: Server },
    { name: "Automation", path: "/automation", icon: Zap },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Atmospheric Background */}
      <div className="atmosphere">
        <div className="atmosphere-blob bg-zinc-500 w-[500px] h-[500px] -top-48 -left-48" />
        <div className="atmosphere-blob bg-zinc-600 w-[400px] h-[400px] top-1/2 -right-24 delay-1000" />
      </div>

      {/* Floating Pill Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="glass-nav px-2 py-2 flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-white/10 text-white shadow-sm" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={16} className={isActive ? "text-white" : "text-zinc-500"} />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 pt-32 pb-12">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Aisling. Built with precision and empathy.
          </p>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <span className="hover:text-white transition-colors cursor-pointer">Terminal-first</span>
            <span className="hover:text-white transition-colors cursor-pointer">Hardware-focused</span>
            <span className="hover:text-white transition-colors cursor-pointer">AI-augmented</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

