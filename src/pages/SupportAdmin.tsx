import { m } from "motion/react";
import { Shield, Terminal, HardDrive, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { tw, fadeInUp } from "../lib/theme";
import { labServices, operatingSystems, techStack, examSaveSteps } from "../lib/data";

export default function SupportAdmin() {
  return (
    <div className="space-y-12">
      <PageHeader title="support & admin 🛡️">
        i build and maintain robust digital environments. whether it's managing a complex,
        self-hosted home lab or performing high-stakes crisis triage in an educational setting,
        i prioritise uptime, security, and a seamless user experience.
      </PageHeader>

      {/* The Exam Save */}
      <m.section {...fadeInUp} className="glass-card overflow-hidden relative">
        <div className={`absolute right-0 top-0 w-64 h-64 bg-[radial-gradient(circle,rgba(192,57,43,0.08)_0%,transparent_70%)] rounded-full -mr-20 -mt-20 pointer-events-none`} />
        <div className="grid md:grid-cols-2 relative z-10">
          <div className="p-8 md:p-12 space-y-6">
            <m.div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[${tw.accent}]/10 border border-[${tw.accent}]/15 text-xs font-medium text-[${tw.accent}] w-fit`}
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield size={14} />
              <span>crisis triage: active</span>
            </m.div>
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
                  <div className={`mt-0.5 text-zinc-500 group-hover:text-[${tw.accent}] transition-colors`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm text-zinc-400">
                    <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{item.label}</span> {item.text}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
          <div className="bg-[#0a0a0c]/50 p-12 flex items-center justify-center border-l border-white/5">
            <div className="text-center space-y-4">
              <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <HardDrive size={80} className="mx-auto text-zinc-600" />
              </m.div>
              <div className="font-mono text-xs text-zinc-500">
                <span className={`text-[${tw.accent}]`}>[disk_swap_successful]</span><br />
                boot_loader: grub_linux<br />
                status: <span className="text-emerald-400">operational ✓</span>
              </div>
            </div>
          </div>
        </div>
      </m.section>

      {/* Home Lab Section */}
      <m.section {...fadeInUp} className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-semibold tracking-tight">home lab infrastructure 🏠</h2>
          <m.span
            className={`text-xs font-medium text-[${tw.accent}] bg-[${tw.accent}]/10 px-2 py-1 rounded-md`}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            99.9% uptime goal
          </m.span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {labServices.map((service, i) => (
            <AnimatedCard key={service.name} index={i} className="glass-card p-6 group">
              <IconBox icon={service.icon} size={24} className={`text-zinc-400 mb-4 group-hover:text-[${tw.accent}] transition-all`} />
              <h4 className="font-medium mb-2 group-hover:text-white transition-colors">{service.name}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">{service.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </m.section>

      {/* Skills & OS */}
      <m.section {...fadeInUp} className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8 group">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 group-hover:text-white transition-colors">
            <Terminal size={20} className={`text-zinc-400 group-hover:text-[${tw.accent}] transition-colors`} />
            operating systems 💻
          </h3>
          <div className="space-y-4">
            {operatingSystems.map(os => (
              <m.div
                key={os.name}
                className="space-y-2"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-zinc-300">{os.name}</span>
                  <span className="text-zinc-500 text-xs">{os.desc}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${os.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r from-zinc-500 to-[${tw.accent}] group-hover:from-[${tw.accent}] group-hover:to-[${tw.accentSoft}] transition-colors duration-500`}
                  />
                </div>
              </m.div>
            ))}
          </div>
        </div>
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Shield size={20} className="text-zinc-400" />
            technical stack 🧰
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <m.span key={tech} className="skill-tag" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {tech}
              </m.span>
            ))}
          </div>
          <div className="mt-8 p-4 bg-white/[0.04] rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-r from-[${tw.accent}]/0 via-[${tw.accent}]/5 to-[${tw.accent}]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
            <p className="text-sm text-zinc-400 italic leading-relaxed relative z-10">
              "i thrive in support and admin work. i complete tasks more effectively by leveraging terminal-first
              workflows across all major operating systems, prioritising speed and accuracy."
            </p>
          </div>
        </div>
      </m.section>
    </div>
  );
}
