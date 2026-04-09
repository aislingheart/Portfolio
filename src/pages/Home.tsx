import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Cpu, Server, Zap, ArrowRight, Terminal, ShieldCheck, HeartPulse, User, Sparkles } from "lucide-react";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { tw, spring } from "../lib/theme";
import { qualifications } from "../lib/data";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 6) return "you're up late! go sleep 😴";
  if (hour < 12) return "good morning! ☕";
  if (hour < 17) return "hey there! 👋";
  if (hour < 21) return "good evening! 🌅";
  return "night owl mode 🦉";
}

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [greeting] = useState(getGreeting);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = qualifications[currentIndex];

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % qualifications.length);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 30 : 70);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  const navCards = [
    { path: "/hardware",      icon: Cpu,    title: "hardware diagnostics 🔧",  desc: "compound refurbishments, deep panic log analysis, and precision micro-soldering. breathing life back into \"unfixable\" devices.", rotate: -5 },
    { path: "/support-admin",  icon: Server, title: "support & admin 🛡️",       desc: "high-stakes crisis triage, resilient home lab infrastructure, and empathetic technical support that puts people first.", rotate: 5 },
    { path: "/automation",     icon: Zap,    title: "workflow automation ⚡",    desc: "scripting, package management, and environment efficiencies. building tools that eliminate repetitive manual labour.", rotate: -5 },
  ];

  const methodology = [
    { icon: ShieldCheck, title: "strict quality control",           desc: "thorough testing post-repair to ensure zero-defect handovers and long-term reliability.", accent: false },
    { icon: HeartPulse,  title: "empathetic communication 💛",      desc: "translating complex diagnostics into accessible analogies (like \"the bucket\") to build trust.", accent: true },
    { icon: Terminal,    title: "cognitive diversity",               desc: "embracing different troubleshooting methodologies as a team's greatest asset in crisis scenarios.", accent: false },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Intro Card */}
        <AnimatedCard index={0} hoverLift={false} className="md:col-span-2 glass-card p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[${tw.accent}]/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none`} />

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-4 w-fit relative z-10"
          >
            <Sparkles size={12} className={`text-[${tw.accent}]`} />
            <span>{greeting}</span>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8 w-fit relative z-10">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            <span>open to opportunities ✨</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] relative z-10 min-h-[88px] md:min-h-[132px]">
            {currentText}
            <span className={`text-[${tw.accent}] animate-pulse font-light`}>|</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-8 relative z-10">
            hey, i'm Aisling! 👋 i bridge the gap between complex hardware diagnostics and robust systems administration.
            from micro-soldering delicate Face ID flex cables to rescuing live exam sessions with rapid Linux SSD swaps,
            i thrive on high-stakes technical challenges that need both precision and empathy.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto relative z-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/hardware" className="magnetic-btn px-6 py-3 bg-zinc-100 text-zinc-900 font-medium rounded-full hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                view projects <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/about" className="px-6 py-3 bg-white/5 border border-white/10 text-zinc-200 font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                <User size={16} /> about me
              </Link>
            </motion.div>
          </div>
        </AnimatedCard>

        {/* Nav Cards */}
        {navCards.map((card, i) => (
          <AnimatedCard key={card.path} index={i + 1} className="">
            <Link to={card.path} className="group block p-8 glass-card glass-card-maroon h-full flex flex-col">
              <IconBox
                icon={card.icon}
                size={24}
                hoverRotate={card.rotate}
                className={`w-12 h-12 rounded-2xl bg-white/5 text-zinc-400 mb-6 group-hover:bg-[${tw.accent}]/15 group-hover:text-[${tw.accent}] transition-all`}
              />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors glow-text">{card.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">{card.desc}</p>
              <div className={`flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:gap-3 group-hover:text-[${tw.accent}] transition-all`}>
                explore <ArrowRight size={16} />
              </div>
            </Link>
          </AnimatedCard>
        ))}

        {/* How I Work Card */}
        <AnimatedCard index={4} hoverLift={false} className="glass-card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
          <h3 className="text-xl font-semibold mb-6 relative z-10">how i work 💡</h3>
          <div className="space-y-5 relative z-10">
            {methodology.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 group cursor-default"
                whileHover={{ x: 4 }}
                transition={spring.gentle}
              >
                {item.accent ? (
                  <motion.div
                    className={`mt-0.5 text-[${tw.accent}]`}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  >
                    <item.icon size={20} />
                  </motion.div>
                ) : (
                  <div className="mt-0.5 text-zinc-500 group-hover:text-zinc-200 transition-colors">
                    <item.icon size={20} />
                  </div>
                )}
                <div>
                  <h4 className="font-medium mb-1 text-zinc-300 group-hover:text-zinc-100 transition-colors">{item.title}</h4>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
