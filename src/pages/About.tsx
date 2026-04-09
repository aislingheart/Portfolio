import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Briefcase, GraduationCap, User, Mail, Camera, Instagram, Github, Twitter, Cloud } from "lucide-react";

export default function About() {
  const socialLinks = [
    { icon: Mail, label: "ashcreed42@gmail.com", url: "mailto:ashcreed42@gmail.com" },
    { icon: Camera, label: "@imageworm", url: "https://www.instagram.com/imageworm" },
    { icon: Instagram, label: "@aisling_heart", url: "https://www.instagram.com/aisling_heart" },
    { icon: Github, label: "aislingheart", url: "https://github.com/aislingheart" },
    { icon: Twitter, label: "@aislingheart", url: "https://twitter.com/aislingheart" },
    { icon: Cloud, label: "aislingheart.bsky.social", url: "https://bsky.app/profile/aislingheart.bsky.social" },
  ];

  const [activeLink, setActiveLink] = useState(socialLinks[0]);

  const renderLabel = () => {
    const label = activeLink.label;
    if (label.includes('@') && !label.startsWith('@')) {
      const [prefix, suffix] = label.split('@');
      return <><span className="text-zinc-600">{prefix}@</span><span className="text-[#8c1c13]">{suffix}</span></>;
    }
    if (label.startsWith('@')) {
      return <><span className="text-zinc-600">@</span><span className="text-[#8c1c13]">{label.slice(1)}</span></>;
    }
    if (label === "aislingheart") {
      return <><span className="text-zinc-600">github.com/</span><span className="text-[#8c1c13]">{label}</span></>;
    }
    if (label.includes('.')) {
      return <><span className="text-zinc-600">bsky.app/</span><span className="text-[#8c1c13]">{label}</span></>;
    }
    return <span className="text-[#8c1c13]">{label}</span>;
  };

  return (
    <div className="space-y-12">
      {/* Links Section (Header) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-[#8c1c13]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 relative z-10 flex flex-col md:flex-row gap-2 md:gap-6"
        >
          <span className="text-[#8c1c13]">Aisling</span> <span className="text-white">Creed</span>
        </motion.h1>
        
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
          className="text-3xl md:text-4xl mb-16 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
        >
          ❤️
        </motion.div>

        <motion.a 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          href={activeLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center relative z-10 hover:scale-105 transition-transform duration-300 w-full"
        >
          <p className="text-zinc-500 text-sm mb-3 group-hover:text-zinc-400 transition-colors">Tap here to visit &gt;</p>
          <div className="h-10 mb-8 relative flex justify-center items-center w-full">
            <AnimatePresence mode="popLayout">
              <motion.h2
                key={activeLink.label}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-semibold absolute"
              >
                {renderLabel()}
              </motion.h2>
            </AnimatePresence>
          </div>
        </motion.a>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden relative z-10 shadow-xl"
        >
          {socialLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => setActiveLink(link)}
              onMouseEnter={() => setActiveLink(link)}
              className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-colors ${
                activeLink.label === link.label ? "bg-[#8c1c13] text-white" : "text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
              } ${i !== socialLinks.length - 1 ? "border-r border-white/10" : ""}`}
              aria-label={`Select ${link.label}`}
            >
              <link.icon size={22} />
            </button>
          ))}
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#8c1c13]/5 to-transparent rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#8c1c13]/10 flex items-center justify-center border border-[#8c1c13]/20 shadow-inner">
              <User className="text-[#8c1c13]" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">About me</h2>
              <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1">
                <MapPin size={14} />
                <span>Cork, Ireland</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-zinc-400 leading-relaxed relative z-10">
            <p>
              I'm a 21-year-old tech professional. My journey in technology is driven by an insatiable curiosity for how things work—and more importantly, how to fix them when they break. With a strong foundation in both customer-facing service and backend technical support, I bring a unique blend of deep empathy and rigorous problem-solving to the tech industry. I pride myself on my adaptability and a keen eye for detail.
            </p>
            <p>
              Currently, I work as a Mobile Repair Technician at Fone Connection, where I balance comprehensive hardware repairs with delivering high-quality, empathetic customer service in a fast-paced environment. I believe that technical expertise is only half the job; the other half is making the customer feel heard and understood.
            </p>
            <p>
              My background includes IT Support at EPS Water Ireland—where I maintained infrastructure and managed ticketing systems—and providing critical technical support during live exams at Cork Educate Together. Whether I'm explaining complex technical issues to a customer or executing a delicate micro-soldering repair, my goal is always to deliver an exceptional, stress-free experience.
            </p>
          </div>
        </motion.div>

        {/* Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 flex flex-col gap-8"
        >
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User size={18} className="text-zinc-500" />
              Personal details
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-zinc-500">Age</span>
                <span className="font-medium text-zinc-200">21</span>
              </li>
              <li className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-zinc-500">Industry</span>
                <span className="font-medium text-zinc-200">Technology</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Experience & Education */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <Briefcase size={20} className="text-[#8c1c13]" />
            Work experience
          </h3>
          <div className="space-y-10">
            <div className="relative pl-6 border-l border-white/10 group">
              <div className="absolute w-3 h-3 bg-[#8c1c13] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(140,28,19,0.5)] group-hover:scale-125 transition-transform" />
              <h4 className="font-medium text-zinc-200 text-lg">Sales Assistant / Mobile Repair Tech</h4>
              <p className="text-sm text-[#8c1c13] font-medium mb-3">Fone Connection • Mar 2025 - Present</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Execute comprehensive hardware repairs (screens, batteries, components) and software troubleshooting on a wide range of iOS and Android devices. Balance technical repair workflows with active customer support in a fast-paced, high-volume shopping centre environment, ensuring accurate quotes and managing expectations.
              </p>
            </div>
            
            <div className="relative pl-6 border-l border-white/10 group">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 group-hover:bg-zinc-500 transition-colors" />
              <h4 className="font-medium text-zinc-200 text-lg">IT Support Technician Assistant</h4>
              <p className="text-sm text-zinc-500 mb-3">EPS Water Ireland • Feb 2023</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Supported and assisted IT staff in the maintenance of workplace computers and phones. Readied new machines for users, upgraded older hardware, and utilized ticketing systems to solve co-worker issues independently and effectively.
              </p>
            </div>

            <div className="relative pl-6 border-l border-white/10 group">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 group-hover:bg-zinc-500 transition-colors" />
              <h4 className="font-medium text-zinc-200 text-lg">Exam Supervisor & Tech Support</h4>
              <p className="text-sm text-zinc-500 mb-3">Cork Educate Together • Jun 2021 - Jul 2021</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Ensured a smooth exam experience for students by providing attentive supervision and technical assistance. Demonstrated flexibility and quick thinking by troubleshooting and resolving technical issues on the spot, maintaining a calm environment.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap size={20} className="text-zinc-400" />
            Education
          </h3>
          <div className="space-y-8">
            <div className="relative pl-6 border-l border-white/10 group">
              <div className="absolute w-3 h-3 bg-zinc-500 rounded-full -left-[6.5px] top-1.5 group-hover:bg-zinc-400 transition-colors" />
              <h4 className="font-medium text-zinc-200 text-lg">Leaving Certificate</h4>
              <p className="text-sm text-zinc-500 mb-2">Coláiste Dáibhéid • Apr 2024 - May 2025</p>
            </div>
            
            <div className="relative pl-6 border-l border-white/10 group">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 group-hover:bg-zinc-500 transition-colors" />
              <h4 className="font-medium text-zinc-200 text-lg">Junior Certificate</h4>
              <p className="text-sm text-zinc-500 mb-2">Cork Educate Together • Sep 2022 - Jun 2024</p>
            </div>
          </div>

          <div className="mt-auto pt-12">
            <h3 className="text-lg font-semibold mb-6 text-zinc-300">Core skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Attention to detail", "Customer service", "Problem-solving", "Empathy", "Time management", "Active listening", "Troubleshooting", "Adaptability", "Conflict resolution"].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

