import { m } from "motion/react";
import { Code, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { fadeInUp } from "../lib/theme";
import { automations, scriptingTools } from "../lib/data";

export default function Automation() {
  return (
    <div className="space-y-12">
      <PageHeader title="workflow automation ⚡">
        i write scripts and set up tools to automate repetitive tasks. whether it's keeping servers updated, spinning up whole stacks from one command, or wiring up custom macros, i like making workflows faster and easier.
      </PageHeader>

      <div className="grid md:grid-cols-2 gap-6">
        {automations.map((item, i) => (
          <AnimatedCard key={item.title} index={i} className="glass-card p-8 flex flex-col group">
            <IconBox
              icon={item.icon}
              size={24}
              className={`w-12 h-12 rounded-2xl bg-white/5 text-zinc-400 mb-6 group-hover:bg-accent/15 group-hover:text-accent transition-all`}
            />
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors glow-text">{item.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tech.map(t => (
                <m.span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400 group-hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.08 }}
                >
                  {t}
                </m.span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>

      <m.section {...fadeInUp} className="glass-card p-8 md:p-12 relative overflow-hidden">
        <div className={`absolute right-0 bottom-0 w-64 h-64 bg-[radial-gradient(circle,rgba(192,57,43,0.08)_0%,transparent_70%)] rounded-full -mr-20 -mb-20 pointer-events-none`} />
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">smart development 🧠</h2>
            <p className="text-zinc-400 leading-relaxed">
              i like picking the right tool for the job. while my primary focus is sysadmin and hardware,
              i write scripts and use modern tools to build automations, helper utilities, and web interfaces when needed.
            </p>
            <ul className="space-y-4">
              {[
                "using smart prompting and AI assistance to map out script logic.",
                "testing and debugging generated code against real test data.",
                "hooking scripts into macOS, Windows, and Linux automation tools.",
              ].map((text, idx) => (
                <m.li
                  key={idx}
                  className="flex gap-3 text-sm text-zinc-400 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 size={18} className={`text-zinc-500 shrink-0 group-hover:text-accent transition-colors`} />
                  <span className="group-hover:text-zinc-200 transition-colors">{text}</span>
                </m.li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a0a0c] rounded-2xl p-6 font-mono text-xs border border-white/5 relative group">
            <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
            <div className="flex gap-2 mb-4">
              <m.div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-red-400/50 transition-colors" whileHover={{ scale: 1.3 }} />
              <m.div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-yellow-400/50 transition-colors" whileHover={{ scale: 1.3 }} />
              <m.div className="w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-green-400/50 transition-colors" whileHover={{ scale: 1.3 }} />
            </div>
            <div className="text-zinc-300">
              <span className={`text-zinc-500 group-hover:text-accent transition-colors`}># unattended update run</span><br />
              winget upgrade --accept-source-agreements \<br />
              &nbsp;&nbsp;--accept-package-agreements --silent<br />
              <br />
              <span className={`text-zinc-500 group-hover:text-accent transition-colors`}>for</span> stack <span className={`text-zinc-500 group-hover:text-accent transition-colors`}>in</span> media ai; <span className={`text-zinc-500 group-hover:text-accent transition-colors`}>do</span><br />
              &nbsp;&nbsp;docker compose -f ~/<span className="text-zinc-300">$&#123;stack&#125;</span> pull --quiet<br />
              &nbsp;&nbsp;docker compose -f ~/<span className="text-zinc-300">$&#123;stack&#125;</span> up -d --remove-orphans<br />
              &nbsp;&nbsp;<span className={`text-zinc-500 group-hover:text-accent transition-colors`}>echo</span> "$&#123;stack&#125; updated" &gt;&gt; update.log<br />
              <br />
              <span className={`text-zinc-500 group-hover:text-accent transition-colors`}>echo</span> "no manual step left. ✅"
            </div>
          </div>
        </div>
      </m.section>

      <m.section {...fadeInUp} className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8 group">
          <div className="flex items-center gap-3 mb-6">
            <IconBox icon={Code} size={24} className={`text-zinc-400 group-hover:text-accent transition-colors`} hoverRotate={5} />
            <h3 className="text-xl font-semibold group-hover:text-white transition-colors">scripting & tools 🛠️</h3>
          </div>
          <div className="space-y-4">
            {scriptingTools.map(item => (
              <m.div
                key={item.name}
                className="flex justify-between items-center p-4 bg-white/[0.04] rounded-2xl border border-white/5 hover:bg-white/[0.08] transition-colors cursor-default"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="font-medium text-zinc-300">{item.name}</span>
                <span className={`text-xs font-medium ${item.isAccent ? `text-accent` : "text-zinc-500"}`}>{item.tag}</span>
              </m.div>
            ))}
          </div>
        </div>
        <div className="glass-card p-8 flex flex-col justify-center relative overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
          <p className="text-lg text-zinc-400 italic leading-relaxed text-center relative z-10">
            "automation is about seeing where a quick script can save hours of manual work, and having the curiosity to build it."
          </p>
          <p className="text-sm text-zinc-500 text-center mt-4 relative z-10">my take 💭</p>
        </div>
      </m.section>
    </div>
  );
}
