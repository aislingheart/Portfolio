import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Cpu, Server, Zap, ArrowRight, Terminal, ShieldCheck, HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Intro Card (Spans 2 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 glass-card p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8 w-fit">
            <Terminal size={14} />
            <span>System status: operational</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.1]">
            Versatile tech expert.
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-8">
            I am Aisling. I bridge the gap between complex hardware diagnostics and robust systems administration. 
            From micro-soldering Face ID flexes to rescuing exam sessions with Linux SSD swaps, I thrive on technical challenges.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto">
            <Link
              to="/hardware"
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              View projects <ArrowRight size={16} />
            </Link>
            <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Hardware Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="/hardware"
            className="group block p-8 glass-card h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="text-zinc-300" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hardware diagnostics</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
              Compound refurbishments, panic log analysis, and precision micro-soldering.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:gap-3 transition-all">
              Explore <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

        {/* Support & Admin Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/support-admin"
            className="group block p-8 glass-card h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Server className="text-zinc-300" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Support & admin</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
              Crisis triage, home lab infrastructure, and empathetic technical support.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:gap-3 transition-all">
              Explore <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

        {/* Automation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/automation"
            className="group block p-8 glass-card h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-zinc-300" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Workflow automation</h3>
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
              AI-assisted scripting, package management, and environment efficiencies.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:gap-3 transition-all">
              Explore <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 md:p-10 flex flex-col justify-center"
        >
          <h3 className="text-xl font-semibold mb-6">The methodology</h3>
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="mt-0.5 text-zinc-400"><ShieldCheck size={20} /></div>
              <div>
                <h4 className="font-medium mb-1 text-zinc-200">Strict quality control</h4>
                <p className="text-zinc-500 text-sm">Thorough testing post-repair to ensure zero-defect handovers.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-0.5 text-zinc-400"><HeartPulse size={20} /></div>
              <div>
                <h4 className="font-medium mb-1 text-zinc-200">Empathetic communication</h4>
                <p className="text-zinc-500 text-sm">Using analogies like "The Bucket" to make tech accessible.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-0.5 text-zinc-400"><Terminal size={20} /></div>
              <div>
                <h4 className="font-medium mb-1 text-zinc-200">Cognitive diversity</h4>
                <p className="text-zinc-500 text-sm">Different troubleshooting methodologies are a team's greatest asset.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

