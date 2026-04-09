import { motion } from "motion/react";
import { Zap, Code, Terminal, Cpu, Calendar, MousePointer2, CheckCircle2 } from "lucide-react";

export default function Automation() {
  const automations = [
    {
      title: "Roster to calendar sync",
      description: "AI-augmented Python workflow that extracts work rosters from unstructured text or images and converts them into standardized, perfectly formatted calendar events.",
      icon: Calendar,
      tech: ["Python", "LLM", "iCal"],
    },
    {
      title: "Raycast environment macros",
      description: "Custom Raycast macros and AppleScript keybinds designed to instantly open pre-configured development and support environments with a single command.",
      icon: MousePointer2,
      tech: ["Raycast", "AppleScript", "macOS"],
    },
    {
      title: "Server update pipeline",
      description: "Automated update workflows using Winget and UnigetUI to keep home server applications, services, and games current with minimal manual intervention.",
      icon: Cpu,
      tech: ["Winget", "UnigetUI", "PowerShell"],
    },
  ];

  return (
    <div className="space-y-12">
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#8c1c13]/20 rounded-full blur-3xl pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 relative z-10">Workflow automation</h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed relative z-10">
          I leverage AI and scripting to eliminate repetitive tasks. By combining limited coding knowledge with advanced LLM assistance, I build highly functional tools that enhance productivity and system reliability.
        </p>
      </motion.section>

      <div className="grid md:grid-cols-3 gap-6">
        {automations.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col group"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8c1c13]/20 group-hover:text-[#8c1c13] transition-all shadow-inner">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tech.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400 group-hover:bg-white/10 transition-colors">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-[#8c1c13]/10 to-transparent rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">AI-augmented development</h2>
            <p className="text-zinc-400 leading-relaxed">
              I believe in using the best tools for the job. While I am not a full-time software engineer, I am highly proficient in directing AI to generate functional scripts, complex automations, and web applications.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-zinc-400 group">
                <CheckCircle2 size={18} className="text-zinc-500 shrink-0 group-hover:text-[#8c1c13] transition-colors" />
                <span className="group-hover:text-zinc-200 transition-colors">Prompt engineering for complex logic extraction.</span>
              </li>
              <li className="flex gap-3 text-sm text-zinc-400 group">
                <CheckCircle2 size={18} className="text-zinc-500 shrink-0 group-hover:text-[#8c1c13] transition-colors" />
                <span className="group-hover:text-zinc-200 transition-colors">Debugging generated code through iterative testing.</span>
              </li>
              <li className="flex gap-3 text-sm text-zinc-400 group">
                <CheckCircle2 size={18} className="text-zinc-500 shrink-0 group-hover:text-[#8c1c13] transition-colors" />
                <span className="group-hover:text-zinc-200 transition-colors">Integrating scripts into existing macOS/Windows workflows.</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#0a0a0a] rounded-2xl p-6 font-mono text-xs border border-white/5 shadow-inner relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8c1c13]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-red-500/50 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-yellow-500/50 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-green-500/50 transition-colors" />
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500 group-hover:text-[#8c1c13] transition-colors">import</span> calendar_api<br />
              <span className="text-zinc-500 group-hover:text-[#8c1c13] transition-colors">import</span> llm_parser<br />
              <br />
              <span className="text-zinc-600"># Extracting roster from unstructured text</span><br />
              roster_data = llm_parser.parse(input_text)<br />
              <br />
              <span className="text-zinc-500 group-hover:text-[#8c1c13] transition-colors">for</span> event <span className="text-zinc-500 group-hover:text-[#8c1c13] transition-colors">in</span> roster_data:<br />
              &nbsp;&nbsp;calendar_api.add_event(event)<br />
              <br />
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">print</span>(<span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">"Sync complete."</span>)
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="glass-card p-8 group">
          <div className="flex items-center gap-3 mb-6">
            <Code size={24} className="text-zinc-400 group-hover:text-[#8c1c13] transition-colors" />
            <h3 className="text-xl font-semibold group-hover:text-white transition-colors">Scripting & tools</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <span className="font-medium text-zinc-300">Python</span>
              <span className="text-xs font-medium text-[#8c1c13]">LLM-assisted</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <span className="font-medium text-zinc-300">AppleScript</span>
              <span className="text-xs font-medium text-zinc-500">Macros</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <span className="font-medium text-zinc-300">PowerShell</span>
              <span className="text-xs font-medium text-zinc-500">System admin</span>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8c1c13]/0 via-[#8c1c13]/5 to-[#8c1c13]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <p className="text-lg text-zinc-400 italic leading-relaxed text-center relative z-10">
            "Automation isn't about being a master coder; it's about having the vision to see where a machine can do the work better than a human, and the resourcefulness to make it happen."
          </p>
        </div>
      </motion.section>
    </div>
  );
}

