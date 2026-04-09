import { motion } from "motion/react";
import { Cpu, Search, Activity, Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Hardware() {
  const caseStudies = [
    {
      title: "iPhone 12 compound refurbishment",
      subtitle: "From bootloop to profit",
      description: "A severely damaged device with a broken earpiece, low battery health, bad screen, and constant bootlooping. Successfully refurbished for a net 80 euro profit.",
      tags: ["iOS", "Refurbishment", "Diagnostics"],
      details: [
        "Identified bootloop cause via panic log analysis.",
        "Replaced screen and battery with high-quality components.",
        "Repaired Face ID flex to restore earpiece functionality.",
        "Conducted full system test post-closure."
      ]
    },
    {
      title: "Panic log analysis: SMC crash",
      subtitle: "Deep diagnostic challenge",
      description: "Diagnosed a device that kept restarting after a third-party repair. Used panic logs to trace the issue to faulty thermal sensors and battery monitoring data.",
      tags: ["Panic Logs", "SMC", "Thermal Sensors"],
      details: [
        "Extracted logs via 3uTools and iOS diagnostics.",
        "Identified SMC crash caused by incorrect data from the MagSafe flex thermal sensor.",
        "Isolated battery level monitoring as a secondary failure point.",
        "Educated customer on the importance of component sourcing."
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Hardware diagnostics</h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          I specialize in advanced mobile hardware diagnostics and precision repairs. 
          My approach combines physical component work with deep software-level analysis to solve "unfixable" issues.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-zinc-800 text-zinc-300">
                <Cpu size={24} />
              </div>
              <div className="flex gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400">{tag}</span>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-1">{study.title}</h3>
            <p className="text-zinc-500 text-sm font-medium mb-4">{study.subtitle}</p>
            <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{study.description}</p>
            
            <div className="space-y-3 border-t border-white/5 pt-6">
              {study.details.map((detail, idx) => (
                <div key={idx} className="flex gap-3 text-sm text-zinc-400">
                  <CheckCircle2 size={16} className="text-zinc-500 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4 text-zinc-300">
            <Search size={20} />
            <h4 className="font-semibold">Panic log mastery</h4>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Proficient in interpreting kernel panic logs to isolate hardware failures in SMC, thermal sensors, and power management ICs.
          </p>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4 text-zinc-300">
            <Zap size={20} />
            <h4 className="font-semibold">Micro-soldering</h4>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Experienced in precise component-level work, including 2-point solder jobs on delicate Face ID and earpiece flex cables.
          </p>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4 text-zinc-300">
            <ShieldAlert size={20} />
            <h4 className="font-semibold">Quality control</h4>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Strict adherence to pre-closure component testing and post-repair system validation to guarantee long-term reliability.
          </p>
        </div>
      </section>

      {/* The Bucket Analogy */}
      <section className="glass-card p-8 md:p-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">The bucket analogy</h2>
          <p className="text-lg text-zinc-400 italic mb-8 leading-relaxed">
            "I explain battery health to non-technical users by comparing it to a bucket on a rocking ship. 
            Keeping water between 20% and 80% keeps the bucket stable. Too much weight destabilizes it; too little makes it wobble. 
            This empathy-first communication builds trust where technical jargon fails."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
              <Activity className="text-zinc-400" />
            </div>
            <div>
              <p className="font-medium text-zinc-200">Aisling</p>
              <p className="text-xs text-zinc-500">Customer communication strategy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

