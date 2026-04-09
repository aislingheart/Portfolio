import { motion } from "motion/react";
import { Server, Shield, Database, Network, Terminal, HardDrive, CheckCircle2, Zap } from "lucide-react";

export default function SupportAdmin() {
  const labServices = [
    { name: "Docker", description: "Containerized environment for local services, ensuring isolation and easy deployment.", icon: Database },
    { name: "OpenWebUI", description: "Local LLM interface for private, AI-augmented workflows and scripting assistance.", icon: Terminal },
    { name: "Jellyfin", description: "Self-hosted media management and streaming suite with hardware transcoding.", icon: Server },
    { name: "Tailscale", description: "Secure mesh VPN for frictionless remote access to home infrastructure from anywhere.", icon: Shield },
    { name: "WOL Beacon", description: "Raspberry Pi configured as a Wake-on-LAN trigger for remote power management.", icon: Zap },
    { name: "Kali Linux", description: "Dedicated VM for network penetration testing, security auditing, and learning.", icon: Network },
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
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 relative z-10">Support & admin</h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed relative z-10">
          I build and maintain robust digital environments. Whether it's managing a complex, self-hosted home lab or performing high-stakes crisis triage in an educational setting, I prioritize uptime, security, and a seamless user experience.
        </p>
      </motion.section>

      {/* The Exam Save */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="glass-card overflow-hidden relative"
      >
        <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-[#8c1c13]/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="grid md:grid-cols-2 relative z-10">
          <div className="p-8 md:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8c1c13]/10 border border-[#8c1c13]/20 text-xs font-medium text-[#8c1c13] w-fit">
              <Shield size={14} />
              <span>Crisis triage: active</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">Case study: "The exam save"</h2>
            <p className="text-zinc-400 leading-relaxed">
              During a live school exam, a student's Windows installation suffered a catastrophic failure. With all other spare laptops already in use, a standard OS re-image was too slow and would cost the student their exam.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 group">
                <div className="mt-0.5 text-zinc-500 group-hover:text-[#8c1c13] transition-colors"><CheckCircle2 size={20} /></div>
                <p className="text-sm text-zinc-400"><span className="font-medium text-zinc-200 group-hover:text-white transition-colors">Rapid diagnosis:</span> Identified the OS failure as the bottleneck within seconds, ruling out hardware issues.</p>
              </div>
              <div className="flex gap-4 group">
                <div className="mt-0.5 text-zinc-500 group-hover:text-[#8c1c13] transition-colors"><CheckCircle2 size={20} /></div>
                <p className="text-sm text-zinc-400"><span className="font-medium text-zinc-200 group-hover:text-white transition-colors">Creative solution:</span> Swapped the failing drive for a pre-configured Ubuntu/LibreOffice SSD I kept on hand.</p>
              </div>
              <div className="flex gap-4 group">
                <div className="mt-0.5 text-zinc-500 group-hover:text-[#8c1c13] transition-colors"><CheckCircle2 size={20} /></div>
                <p className="text-sm text-zinc-400"><span className="font-medium text-zinc-200 group-hover:text-white transition-colors">Result:</span> The student resumed the exam in under 5 minutes with full document compatibility and zero data loss.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0a0a]/50 p-12 flex items-center justify-center border-l border-white/5">
            <div className="text-center space-y-4">
              <HardDrive size={80} className="mx-auto text-zinc-700" />
              <div className="font-mono text-xs text-zinc-500">
                <span className="text-[#8c1c13]">[disk_swap_successful]</span><br />
                boot_loader: grub_linux<br />
                status: operational
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Home Lab Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-semibold tracking-tight">Home lab infrastructure</h2>
          <span className="text-xs font-medium text-[#8c1c13] bg-[#8c1c13]/10 px-2 py-1 rounded-md">99.9% uptime goal</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {labServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-6 group"
            >
              <service.icon size={24} className="text-zinc-400 mb-4 group-hover:text-[#8c1c13] group-hover:scale-110 transition-all" />
              <h4 className="font-medium mb-2 group-hover:text-white transition-colors">{service.name}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills & OS */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="glass-card p-8 group">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 group-hover:text-white transition-colors">
            <Terminal size={20} className="text-zinc-400 group-hover:text-[#8c1c13] transition-colors" />
            Operating systems
          </h3>
          <div className="space-y-4">
            {[
              { name: "Linux (Ubuntu/Kali)", level: 90, desc: "Server admin, penetration testing, VMs." },
              { name: "macOS", level: 95, desc: "Primary workstation, environment optimization." },
              { name: "Windows", level: 85, desc: "Desktop support, home server management." },
              { name: "Android/iOS", level: 95, desc: "Advanced diagnostics and mobile OS internals." },
            ].map(os => (
              <div key={os.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-zinc-300">{os.name}</span>
                  <span className="text-zinc-500 text-xs">{os.desc}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${os.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-zinc-500 group-hover:bg-[#8c1c13] transition-colors duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Shield size={20} className="text-zinc-400" />
            Technical stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {["VMware", "WSL", "Docker", "SSH", "RDP", "Tailscale", "Wireshark", "VS Code", "3uTools", "Parsec", "OBS Studio", "GIMP", "Photoshop"].map(tech => (
              <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8c1c13]/0 via-[#8c1c13]/5 to-[#8c1c13]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <p className="text-sm text-zinc-400 italic leading-relaxed relative z-10">
              "I thrive in support and admin work. I complete tasks more effectively by leveraging terminal-first workflows across all major operating systems, prioritizing speed and accuracy."
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

