import { m } from "motion/react";
import { Shield, Terminal, HardDrive, CheckCircle2, Bug, Github, ExternalLink } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { HomelabDiagram } from "../components/ProjectVisuals";
import { fadeInUp } from "../lib/theme";
import {
  labServices, operatingSystems, techStack, examSaveSteps, subpathIncidentSteps,
} from "../lib/data";

export default function SupportAdmin() {
  return (
    <div className="space-y-12">
      <PageHeader title="support & admin 🛡️">
        i build, debug, and manage reproducible Linux and cross-platform tech environments. from running a containerized CachyOS server behind nginx and VPN isolation to resolving live failures under exam conditions, i focus on root-cause fixes and reliable systems.
      </PageHeader>

      {/* Case Study 1: The Exam Save */}
      <m.section {...fadeInUp} className="glass-card overflow-hidden relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-[radial-gradient(circle,rgba(192,57,43,0.08)_0%,transparent_70%)] rounded-full -mr-20 -mt-20 pointer-events-none" />
        <div className="grid md:grid-cols-2 relative z-10">
          <div className="p-8 md:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/15 text-xs font-medium text-accent w-fit">
              <Shield size={14} />
              <span>live incident triage</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">case study: "the exam save" 🎓</h2>
            <p className="text-zinc-400 leading-relaxed">
              during a live school exam, a student's Windows installation suffered a catastrophic failure.
              with all other spare laptops already in use, a standard OS re-image was too slow and would cost the student their exam.
            </p>
            <div className="space-y-4">
              {examSaveSteps.map((item, idx) => (
                <m.div
                  key={idx}
                  className="flex gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="mt-0.5 text-zinc-500 group-hover:text-accent transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm text-zinc-400">
                    <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{item.label}</span> {item.text}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
          <div className="bg-[#0a0a0c]/50 p-12 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/5">
            <div className="text-center space-y-4">
              <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <HardDrive size={80} className="mx-auto text-zinc-600" />
              </m.div>
              <div className="font-mono text-xs text-zinc-500 space-y-0.5">
                <div className="text-accent">[disk_swap_successful]</div>
                <div>boot_loader: grub_linux</div>
                <div>recovery_time: &lt; 5 min</div>
                <div>status: <span className="text-emerald-400">operational ✓</span></div>
              </div>
            </div>
          </div>
        </div>
      </m.section>

      {/* Case Study 2: Real Production Reverse-Proxy Root Cause */}
      <m.section {...fadeInUp} className="glass-card overflow-hidden relative">
        <div className="grid md:grid-cols-12 relative z-10">
          <div className="md:col-span-7 p-8 md:p-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 w-fit">
              <Bug size={14} className="text-accent" />
              <span>root-cause debugging · nginx &amp; SvelteKit</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              case study: post-login 404 under /ai/
            </h2>
            <div className="space-y-4">
              {subpathIncidentSteps.map((item, idx) => (
                <div key={idx} className="flex gap-3.5">
                  <CheckCircle2 size={18} className="text-accent/80 shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    <span className="font-medium text-zinc-200">{item.label}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="https://github.com/aislingheart/nginx-subpath-routing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-accent transition-colors"
              >
                <Github size={14} />
                <span>read the full nginx subpath routing write-up</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#0a0a0c]/70 p-6 md:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5 font-mono text-xs space-y-3">
            <div className="text-zinc-500 text-[11px] uppercase tracking-wider">nginx/nginx.conf · surgical fix</div>
            <pre className="text-[11px] leading-relaxed text-zinc-300 overflow-x-auto p-3.5 rounded-xl bg-black/50 border border-white/[0.06]">
{`# disable upstream gzip so sub_filter runs
proxy_set_header Accept-Encoding "";

# repoint SvelteKit client router to /ai
sub_filter 'base: ""' 'base: "/ai"';

# stop auth guard ?redirect= loop
sub_filter 'pathname!=="/auth"'
           'pathname!=="/ai/auth"';

# keep-alive safe WebSocket upgrades
proxy_set_header Connection $connection_upgrade;`}
            </pre>
            <div className="text-[11px] text-emerald-400">
              $ nginx -t &amp;&amp; docker compose reload → syntax ok
            </div>
          </div>
        </div>
      </m.section>

      {/* Home Lab Infrastructure & Architecture */}
      <m.section {...fadeInUp} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">home lab infrastructure 🏠</h2>
            <p className="text-sm text-zinc-500 mt-1">
              reproducible CachyOS Docker Compose stack behind a single nginx subpath proxy and VPN namespace killswitch.
            </p>
          </div>
          <span className="text-xs font-mono text-accent-soft bg-accent/10 border border-accent/20 px-3 py-1 rounded-full w-fit">
            CachyOS · Docker · nginx · Gluetun
          </span>
        </div>

        <HomelabDiagram />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {labServices.map((service, i) => (
            <AnimatedCard key={service.name} index={i} className="glass-card p-6 group">
              <IconBox icon={service.icon} size={22} className="text-zinc-400 mb-3.5 group-hover:text-accent transition-all" />
              <h4 className="font-medium mb-1.5 group-hover:text-white transition-colors">{service.name}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{service.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </m.section>

      {/* Operating Systems & Technical Stack */}
      <m.section {...fadeInUp} className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8 group">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 group-hover:text-white transition-colors">
            <Terminal size={20} className="text-zinc-400 group-hover:text-accent transition-colors" />
            operating systems 💻
          </h3>
          <div className="space-y-5">
            {operatingSystems.map((os) => (
              <div
                key={os.name}
                className="space-y-1.5 border-b border-white/[0.05] pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-zinc-200">{os.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent-soft border border-accent/25">
                    {os.tier}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{os.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Shield size={20} className="text-zinc-400" />
              technical stack 🧰
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <m.span key={tech} className="skill-tag" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {tech}
                </m.span>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/[0.04] rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <p className="text-sm text-zinc-400 italic leading-relaxed relative z-10">
              "i work command-line first across Linux, macOS, and Windows — keeping infrastructure in compose files and versioned configs so every fix is repeatable and documented."
            </p>
          </div>
        </div>
      </m.section>
    </div>
  );
}
