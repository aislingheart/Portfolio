import { m } from "motion/react";
import { Terminal, Code2, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { fadeInUp } from "../lib/theme";
import { automations, scriptingTools } from "../lib/data";

export default function Automation() {
  return (
    <div className="space-y-12">
      <PageHeader title="workflow automation ⚡">
        i automate repetitive maintenance and turn messy multi-step tasks into repeatable commands — from JSON-provisioned homelab dashboards and unattended server updates to running Raycast extensions inline on Android.
      </PageHeader>

      <div className="grid md:grid-cols-2 gap-6">
        {automations.map((item, i) => (
          <AnimatedCard key={item.title} index={i} className="glass-card p-8 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-300">
                <IconBox icon={item.icon} hoverRotate={-10} />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-white transition-colors glow-text">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{item.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {item.tech.map((t) => (
                <m.span key={t} className="skill-tag" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  {t}
                </m.span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Verification-first engineering methodology */}
      <m.section {...fadeInUp} className="glass-card p-8 md:p-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 bg-[radial-gradient(circle,rgba(192,57,43,0.08)_0%,transparent_70%)] rounded-full -mr-24 -mt-24 pointer-events-none" />
        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-medium uppercase tracking-wider">
              <Sparkles size={14} />
              <span>engineering approach</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">verification-first automation ⚙️</h2>
            <p className="text-zinc-400 leading-relaxed">
              good automation should be boring, diffable, and easy to verify before it touches a live system. i keep configs in git, validate changes against real data, and prefer small reproducible tools over fragile one-off tweaks.
            </p>
            <div className="space-y-3 text-sm text-zinc-400">
              <m.div className="flex items-center gap-3 group" whileHover={{ x: 4 }}>
                <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                <span className="group-hover:text-zinc-200 transition-colors">
                  reproducible infrastructure: Docker Compose stacks, JSON-provisioned dashboards, and logged update pipelines.
                </span>
              </m.div>
              <m.div className="flex items-center gap-3 group" whileHover={{ x: 4 }}>
                <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                <span className="group-hover:text-zinc-200 transition-colors">
                  pre-flight validation: running nginx -t, strict TypeScript checks, and Gradle tests before deploying or tagging releases.
                </span>
              </m.div>
              <m.div className="flex items-center gap-3 group" whileHover={{ x: 4 }}>
                <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                <span className="group-hover:text-zinc-200 transition-colors">
                  cross-platform ergonomics: building consistent command-line and launcher workflows across Linux, macOS, Windows, and Android.
                </span>
              </m.div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="glass-card p-6 bg-black/40 border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-500 border-b border-white/5 pb-3">
                <span className="flex items-center gap-2 font-mono">
                  <Terminal size={14} className="text-accent" />
                  scripting &amp; tooling stack
                </span>
                <Code2 size={14} />
              </div>
              <div className="space-y-3 font-mono text-xs">
                {scriptingTools.map((tool) => (
                  <m.div
                    key={tool.name}
                    className="flex justify-between items-center p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors gap-3"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-zinc-200">{tool.name}</span>
                    <span className={`text-right ${tool.isAccent ? "text-accent-soft" : "text-zinc-500"}`}>
                      {tool.tag}
                    </span>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </m.section>
    </div>
  );
}
