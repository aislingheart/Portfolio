import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Cpu, Server, Zap, ArrowRight, Terminal, ShieldCheck, HeartPulse, User } from "lucide-react";

export default function Home() {
  const qualifications = [
    "Versatile tech expert.",
    "Mobile repair technician.",
    "Hardware diagnostic specialist.",
    "Systems administrator.",
    "Micro-soldering expert.",
    "Automation enthusiast.",
    "IT support engineer.",
    "Empathetic problem solver."
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div className="space-y-6">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Intro Card (Spans 2 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 glass-card p-8 md:p-12 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8c1c13]/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8 w-fit relative z-10">
            <div className="w-2 h-2 rounded-full bg-[#8c1c13] shadow-[0_0_8px_#8c1c13]" />
            <span>System status: operational</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] relative z-10 min-h-[88px] md:min-h-[132px]">
            {currentText}
            <span className="text-[#8c1c13] animate-pulse font-light">|</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-8 relative z-10">
            I am Aisling. I bridge the gap between complex hardware diagnostics and robust systems administration. 
            With a foundation in high-volume retail repair and enterprise-level IT support, I bring a unique, holistic perspective to technical problem-solving. 
            From micro-soldering delicate Face ID flex cables to rescuing live exam sessions with rapid Linux SSD swaps, I thrive on high-stakes technical challenges that require both precision and empathy.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto relative z-10">
            <Link
              to="/hardware"
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              View projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <User size={16} /> About me
            </Link>
          </div>
        </motion.div>

        {/* Hardware Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to="/hardware"
            className="group block p-8 glass-card glass-card-maroon h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8c1c13]/20 transition-all shadow-inner">
              <Cpu className="text-zinc-300 group-hover:text-[#8c1c13] transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Hardware diagnostics</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
              Compound refurbishments, deep panic log analysis, and precision micro-soldering. Breathing life back into "unfixable" devices.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:gap-3 group-hover:text-[#8c1c13] transition-all">
              Explore <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

        {/* Support & Admin Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/support-admin"
            className="group block p-8 glass-card glass-card-maroon h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8c1c13]/20 transition-all shadow-inner">
              <Server className="text-zinc-300 group-hover:text-[#8c1c13] transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Support & admin</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
              High-stakes crisis triage, resilient home lab infrastructure, and empathetic technical support that prioritizes user experience.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:gap-3 group-hover:text-[#8c1c13] transition-all">
              Explore <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

        {/* Automation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/automation"
            className="group block p-8 glass-card glass-card-maroon h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8c1c13]/20 transition-all shadow-inner">
              <Zap className="text-zinc-300 group-hover:text-[#8c1c13] transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Workflow automation</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
              AI-assisted scripting, package management, and environment efficiencies. Building tools that eliminate repetitive manual labor.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:gap-3 group-hover:text-[#8c1c13] transition-all">
              Explore <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
          <h3 className="text-xl font-semibold mb-6 relative z-10">The methodology</h3>
          <div className="space-y-5 relative z-10">
            <div className="flex gap-4 group">
              <div className="mt-0.5 text-zinc-400 group-hover:text-white transition-colors"><ShieldCheck size={20} /></div>
              <div>
                <h4 className="font-medium mb-1 text-zinc-200 group-hover:text-white transition-colors">Strict quality control</h4>
                <p className="text-zinc-500 text-sm">Thorough testing post-repair to ensure zero-defect handovers and long-term reliability.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="mt-0.5 text-[#8c1c13] group-hover:scale-110 transition-transform"><HeartPulse size={20} /></div>
              <div>
                <h4 className="font-medium mb-1 text-zinc-200 group-hover:text-white transition-colors">Empathetic communication</h4>
                <p className="text-zinc-500 text-sm">Translating complex diagnostics into accessible analogies (like "The Bucket") to build trust.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="mt-0.5 text-zinc-400 group-hover:text-white transition-colors"><Terminal size={20} /></div>
              <div>
                <h4 className="font-medium mb-1 text-zinc-200 group-hover:text-white transition-colors">Cognitive diversity</h4>
                <p className="text-zinc-500 text-sm">Embracing different troubleshooting methodologies as a team's greatest asset in crisis scenarios.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

