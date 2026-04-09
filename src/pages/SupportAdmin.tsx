import { motion } from "motion/react";
import { Server, Shield, Database, Network, Terminal, HardDrive, CheckCircle2, Zap } from "lucide-react";

export default function SupportAdmin() {
  const labServices = [
    { name: "Docker", description: "Containerized environment for local services and LLMs.", icon: Database },
    { name: "OpenWebUI", description: "Local LLM interface for private, AI-augmented workflows.", icon: Terminal },
    { name: "Jellyfin", description: "Self-hosted media management and streaming suite.", icon: Server },
    { name: "Tailscale", description: "Secure mesh VPN for remote access to home infrastructure.", icon: Shield },
    { name: "WOL Beacon", description: "Raspberry Pi configured as a Wake-on-LAN trigger.", icon: Zap },
    { name: "Kali Linux", description: "Network penetration testing and security auditing.", icon: Network },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Support & admin</h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          I build and maintain robust digital environments. Whether it's managing a complex home lab or performing high-stakes crisis triage in an educational setting, I prioritize uptime and user experience.
        </p>
      </section>

      {/* The Exam Save */}
      <section className="glass-card overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 w-fit">
              <Shield size={14} />
              <span>Crisis triage: active</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">Case study: "The exam save"</h2>
            <p className="text-zinc-400 leading-relaxed">
              During a live school exam, a student's Windows installation failed. With all other laptops in use, a standard re-image was too slow.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-0.5 text-zinc-500"><CheckCircle2 size={20} /></div>
                <p className="text-sm text-zinc-400"><span className="font-medium text-zinc-200">Rapid diagnosis:</span> Identified OS failure as the bottleneck within seconds.</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-0.5 text-zinc-500"><CheckCircle2 size={20} /></div>
                <p className="text-sm text-zinc-400"><span className="font-medium text-zinc-200">Creative solution:</span> Swapped the failing drive for a pre-configured Ubuntu/LibreOffice SSD.</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-0.5 text-zinc-500"><CheckCircle2 size={20} /></div>
                <p className="text-sm text-zinc-400"><span className="font-medium text-zinc-200">Result:</span> Student resumed the exam in under 5 minutes with full document compatibility.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.02] p-12 flex items-center justify-center border-l border-white/5">
            <div className="text-center space-y-4">
              <HardDrive size={80} className="mx-auto text-zinc-700" />
              <div className="font-mono text-xs text-zinc-500">
                [disk_swap_successful]<br />
                boot_loader: grub_linux<br />
                status: operational
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Lab Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-semibold tracking-tight">Home lab infrastructure</h2>
          <span className="text-xs font-medium text-zinc-500">99.9% uptime goal</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {labServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6"
            >
              <service.icon size={24} className="text-zinc-400 mb-4" />
              <h4 className="font-medium mb-2">{service.name}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills & OS */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Terminal size={20} className="text-zinc-400" />
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
                  <span className="font-medium">{os.name}</span>
                  <span className="text-zinc-500 text-xs">{os.desc}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${os.level}%` }}
                    className="h-full bg-zinc-400"
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
              <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-sm text-zinc-400 italic leading-relaxed">
              "I thrive in support and admin work. I complete tasks more effectively by leveraging terminal-first workflows across all major operating systems."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

