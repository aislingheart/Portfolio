import { motion } from "motion/react";
import { Zap, Code, Terminal, Cpu, Calendar, MousePointer2, CheckCircle2 } from "lucide-react";

export default function Automation() {
  const automations = [
    {
      title: "Roster to calendar sync",
      description: "AI-augmented Python workflow that extracts work rosters from unstructured text/images and converts them into standardized calendar events.",
      icon: Calendar,
      tech: ["Python", "LLM", "iCal"],
    },
    {
      title: "Raycast environment macros",
      description: "Custom Raycast macros and keybinds to open pre-configured development and support environments with a single command.",
      icon: MousePointer2,
      tech: ["Raycast", "AppleScript", "macOS"],
    },
    {
      title: "Server update pipeline",
      description: "Automated update workflows using Winget and UnigetUI to keep home server applications and games current with minimal manual intervention.",
      icon: Cpu,
      tech: ["Winget", "UnigetUI", "PowerShell"],
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Workflow automation</h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          I leverage AI and scripting to eliminate repetitive tasks. By combining limited coding knowledge with advanced LLM assistance, I build functional tools that enhance productivity and system reliability.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        {automations.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col group"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tech.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="glass-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">AI-augmented development</h2>
            <p className="text-zinc-400 leading-relaxed">
              I believe in using the best tools for the job. While I am not a full-time programmer, I am proficient in directing AI to generate functional scripts and automations.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-zinc-400">
                <CheckCircle2 size={18} className="text-zinc-500 shrink-0" />
                <span>Prompt engineering for complex logic extraction.</span>
              </li>
              <li className="flex gap-3 text-sm text-zinc-400">
                <CheckCircle2 size={18} className="text-zinc-500 shrink-0" />
                <span>Debugging generated code through iterative testing.</span>
              </li>
              <li className="flex gap-3 text-sm text-zinc-400">
                <CheckCircle2 size={18} className="text-zinc-500 shrink-0" />
                <span>Integrating scripts into existing macOS/Windows workflows.</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#0a0a0a] rounded-2xl p-6 font-mono text-xs border border-white/5">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">import</span> calendar_api<br />
              <span className="text-zinc-500">import</span> llm_parser<br />
              <br />
              <span className="text-zinc-600"># Extracting roster from unstructured text</span><br />
              roster_data = llm_parser.parse(input_text)<br />
              <br />
              <span className="text-zinc-500">for</span> event <span className="text-zinc-500">in</span> roster_data:<br />
              &nbsp;&nbsp;calendar_api.add_event(event)<br />
              <br />
              <span className="text-zinc-400">print</span>(<span className="text-zinc-500">"Sync complete."</span>)
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Code size={24} className="text-zinc-400" />
            <h3 className="text-xl font-semibold">Scripting & tools</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="font-medium">Python</span>
              <span className="text-xs font-medium text-zinc-500">LLM-assisted</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="font-medium">AppleScript</span>
              <span className="text-xs font-medium text-zinc-500">Macros</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="font-medium">PowerShell</span>
              <span className="text-xs font-medium text-zinc-500">System admin</span>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 flex flex-col justify-center">
          <p className="text-lg text-zinc-400 italic leading-relaxed text-center">
            "Automation isn't about being a master coder; it's about having the vision to see where a machine can do the work better than a human, and the resourcefulness to make it happen."
          </p>
        </div>
      </section>
    </div>
  );
}

