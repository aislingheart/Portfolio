import { motion } from "motion/react";
import { Code, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { tw, fadeInUp } from "../lib/theme";
import { automations, scriptingTools } from "../lib/data";

export default function Automation() {
  return (
    <div className="space-y-12">
      <PageHeader title="workflow automation ⚡">
        i leverage scripting and smart tooling to eliminate repetitive tasks. by combining
        practical knowledge with the right tools for the job, i build highly functional
        automations that enhance productivity and system reliability.
      </PageHeader>

      <div className="grid md:grid-cols-3 gap-6">
        {automations.map((item, i) => (
          <AnimatedCard key={item.title} index={i} className="glass-card p-8 flex flex-col group">
            <IconBox
              icon={item.icon}
              size={24}
              className={`w-12 h-12 rounded-2xl bg-white/5 text-zinc-400 mb-6 group-hover:bg-[${tw.accent}]/15 group-hover:text-[${tw.accent}] transition-all`}
            />
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors glow-text">{item.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tech.map(t => (
                <motion.span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400 group-hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.08 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>

      <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 relative overflow-hidden">
        <div className={`absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-[${tw.accent}]/8 to-transparent rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none`} />
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">smart development 🧠</h2>
            <p className="text-zinc-400 leading-relaxed">
              i believe in using the best tools for the job. while i'm not a full-time software engineer,
              i'm highly proficient in directing tools and workflows to generate functional scripts,
              complex automations, and web applications.
            </p>
            <ul className="space-y-4">
              {[
                "prompt engineering for complex logic extraction.",
                "debugging generated code through iterative testing.",
                "integrating scripts into existing macOS/Windows workflows.",
              ].map((text, idx) => (
                <motion.li
                  key={idx}
                  className="flex gap-3 text-sm text-zinc-400 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 size={18} className={`text-zinc-500 shrink-0 group-hover:text-[${tw.accent}] transition-colors`} />
                  <span className="group-hover:text-zinc-200 transition-colors">{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a0a0c] rounded-2xl p-6 font-mono text-xs border border-white/5 relative group">
            <div className={`absolute inset-0 bg-gradient-to-br from-[${tw.accent}]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
            <div className="flex gap-2 mb-4">
              <motion.div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-red-400/50 transition-colors" whileHover={{ scale: 1.3 }} />
              <motion.div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-yellow-400/50 transition-colors" whileHover={{ scale: 1.3 }} />
              <motion.div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-green-400/50 transition-colors" whileHover={{ scale: 1.3 }} />
            </div>
            <div className="text-zinc-300">
              <span className={`text-zinc-500 group-hover:text-[${tw.accent}] transition-colors`}>import</span> calendar_api<br />
              <span className={`text-zinc-500 group-hover:text-[${tw.accent}] transition-colors`}>import</span> llm_parser<br />
              <br />
              <span className="text-zinc-600"># extracting roster from unstructured text</span><br />
              roster_data = llm_parser.parse(input_text)<br />
              <br />
              <span className={`text-zinc-500 group-hover:text-[${tw.accent}] transition-colors`}>for</span> event <span className={`text-zinc-500 group-hover:text-[${tw.accent}] transition-colors`}>in</span> roster_data:<br />
              &nbsp;&nbsp;calendar_api.add_event(event)<br />
              <br />
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">print</span>(<span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">"sync complete. ✅"</span>)
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8 group">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={Code} size={24} className={`text-zinc-400 group-hover:text-[${tw.accent}] transition-colors`} hoverRotate={5} />
            <h3 className="text-xl font-semibold group-hover:text-white transition-colors">scripting & tools 🛠️</h3>
          </div>
          <div className="space-y-4">
            {scriptingTools.map(item => (
              <motion.div
                key={item.name}
                className="flex justify-between items-center p-4 bg-white/[0.04] rounded-2xl border border-white/5 hover:bg-white/[0.08] transition-colors cursor-default"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="font-medium text-zinc-300">{item.name}</span>
                <span className={`text-xs font-medium ${item.isAccent ? `text-[${tw.accent}]` : "text-zinc-500"}`}>{item.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="glass-card p-8 flex flex-col justify-center relative overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-r from-[${tw.accent}]/0 via-[${tw.accent}]/5 to-[${tw.accent}]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
          <p className="text-lg text-zinc-400 italic leading-relaxed text-center relative z-10">
            "automation isn't about being a master coder — it's about having the vision to see
            where a machine can do the work better than a human, and the resourcefulness to make it happen."
          </p>
          <p className="text-sm text-zinc-500 text-center mt-4 relative z-10">— my philosophy 💭</p>
        </div>
      </motion.section>
    </div>
  );
}
