import { m } from "motion/react";
import { Cpu, CheckCircle2 } from "lucide-react";
import pfp from "../assets/pfp.webp";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { tw } from "../lib/theme";
import { caseStudies, hardwareSkills } from "../lib/data";

export default function Hardware() {
  return (
    <div className="space-y-12">
      <PageHeader title="hardware diagnostics 🔧">
        i specialise in advanced mobile hardware diagnostics and precision repairs.
        my approach combines physical component work with deep software-level analysis
        to solve "unfixable" issues, ensuring devices don't just turn on, but operate reliably.
      </PageHeader>

      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study, i) => (
          <AnimatedCard key={study.title} index={i} className="glass-card p-8 flex flex-col group">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl bg-white/5 text-zinc-400 group-hover:bg-[${tw.accent}]/15 group-hover:text-[${tw.accent}] transition-colors`}>
                <IconBox icon={Cpu} hoverRotate={-10} />
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                {study.tags.map(tag => (
                  <m.span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400 group-hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.08 }}
                  >
                    {tag}
                  </m.span>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-1 group-hover:text-white transition-colors glow-text">{study.title}</h3>
            <p className={`text-[${tw.accent}] text-sm font-medium mb-4`}>{study.subtitle}</p>
            <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{study.description}</p>

            <div className="space-y-3 border-t border-white/5 pt-6">
              {study.details.map((detail, idx) => (
                <m.div
                  key={idx}
                  className="flex gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                >
                  <CheckCircle2 size={16} className={`text-zinc-500 shrink-0 mt-0.5 group-hover:text-[${tw.accent}] transition-colors`} />
                  <span>{detail}</span>
                </m.div>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        {hardwareSkills.map((item, i) => (
          <AnimatedCard key={item.title} index={i + 2} className="glass-card p-6 group">
            <div className="flex items-center gap-3 mb-4 text-zinc-400 group-hover:text-zinc-200 transition-colors">
              <IconBox icon={item.icon} size={20} className={`group-hover:text-[${tw.accent}] transition-colors`} hoverRotate={5} />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {item.desc}
            </p>
          </AnimatedCard>
        ))}
      </section>

      {/* The Bucket Analogy */}
      <m.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="glass-card p-8 md:p-12 relative overflow-hidden"
      >
        <div className={`absolute right-0 bottom-0 w-64 h-64 bg-[radial-gradient(circle,rgba(192,57,43,0.08)_0%,transparent_70%)] rounded-full -mr-20 -mb-20 pointer-events-none`} />
        <div className="max-w-3xl relative z-10">
          <h2 className="text-2xl font-semibold mb-6">the bucket analogy 🪣</h2>
          <p className="text-lg text-zinc-400 italic mb-8 leading-relaxed">
            "i explain battery health to non-technical users by comparing it to a bucket on a rocking ship.
            keeping water between 20% and 80% keeps the bucket stable. too much weight destabilises it; too little makes it wobble.
            this empathy-first communication builds trust where technical jargon fails."
          </p>
          <div className="flex items-center gap-4">
            <m.img
              src={pfp}
              alt="Aisling Avatar"
              className={`w-12 h-12 rounded-full border-2 border-[#c0392b]/30 object-cover shadow-lg`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div>
              <p className="font-medium text-zinc-200">aisling</p>
              <p className="text-xs text-zinc-500">customer communication strategy 💛</p>
            </div>
          </div>
        </div>
      </m.section>
    </div>
  );
}
