import { motion } from "motion/react";
import { Cpu, Search, Activity, Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Hardware() {
  const caseStudies = [
    {
      title: "iPhone 12 compound refurbishment",
      subtitle: "From bootloop to profit",
      description: "A severely damaged device presented with a broken earpiece, low battery health, shattered screen, and constant bootlooping. Successfully diagnosed, refurbished, and restored to full functionality for a net 80 euro profit.",
      tags: ["iOS", "Refurbishment", "Diagnostics"],
      details: [
        "Identified bootloop root cause via deep panic log analysis.",
        "Replaced screen and battery with high-quality, tested components.",
        "Repaired Face ID flex via micro-soldering to restore earpiece functionality.",
        "Conducted full system stress-test post-closure to guarantee stability."
      ]
    },
    {
      title: "Panic log analysis: SMC crash",
      subtitle: "Deep diagnostic challenge",
      description: "Diagnosed a device that kept restarting randomly after a third-party repair. Used kernel panic logs to trace the issue back to faulty thermal sensors and corrupted battery monitoring data.",
      tags: ["Panic Logs", "SMC", "Thermal Sensors"],
      details: [
        "Extracted and parsed kernel logs via 3uTools and iOS diagnostics.",
        "Identified SMC crash caused by incorrect data from the MagSafe flex thermal sensor.",
        "Isolated battery level monitoring as a secondary failure point.",
        "Educated customer on the importance of component sourcing and repair quality."
      ]
    }
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
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 relative z-10">Hardware diagnostics</h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed relative z-10">
          I specialize in advanced mobile hardware diagnostics and precision repairs. 
          My approach combines physical component work with deep software-level analysis to solve "unfixable" issues, ensuring devices don't just turn on, but operate reliably.
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-zinc-800 text-zinc-300 group-hover:bg-[#8c1c13]/20 group-hover:text-[#8c1c13] transition-colors">
                <Cpu size={24} />
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                {study.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400 group-hover:bg-white/10 transition-colors">{tag}</span>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-1 group-hover:text-white transition-colors">{study.title}</h3>
            <p className="text-[#8c1c13] text-sm font-medium mb-4">{study.subtitle}</p>
            <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{study.description}</p>
            
            <div className="space-y-3 border-t border-white/5 pt-6">
              {study.details.map((detail, idx) => (
                <div key={idx} className="flex gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <CheckCircle2 size={16} className="text-zinc-500 shrink-0 mt-0.5 group-hover:text-[#8c1c13] transition-colors" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Search, title: "Panic log mastery", desc: "Proficient in interpreting kernel panic logs to isolate hardware failures in SMC, thermal sensors, and power management ICs, turning guesswork into science." },
          { icon: Zap, title: "Micro-soldering", desc: "Experienced in precise component-level work, including 2-point solder jobs on delicate Face ID and earpiece flex cables under magnification." },
          { icon: ShieldAlert, title: "Quality control", desc: "Strict adherence to pre-closure component testing and post-repair system validation to guarantee long-term reliability and zero-defect handovers." }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 group"
          >
            <div className="flex items-center gap-3 mb-4 text-zinc-300 group-hover:text-white transition-colors">
              <item.icon size={20} className="group-hover:text-[#8c1c13] transition-colors" />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* The Bucket Analogy */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-[#8c1c13]/10 to-transparent rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <h2 className="text-2xl font-semibold mb-6">The bucket analogy</h2>
          <p className="text-lg text-zinc-400 italic mb-8 leading-relaxed">
            "I explain battery health to non-technical users by comparing it to a bucket on a rocking ship. 
            Keeping water between 20% and 80% keeps the bucket stable. Too much weight destabilizes it; too little makes it wobble. 
            This empathy-first communication builds trust where technical jargon fails."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#8c1c13]/10 border border-[#8c1c13]/20 flex items-center justify-center">
              <Activity className="text-[#8c1c13]" />
            </div>
            <div>
              <p className="font-medium text-zinc-200">Aisling</p>
              <p className="text-xs text-zinc-500">Customer communication strategy</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

