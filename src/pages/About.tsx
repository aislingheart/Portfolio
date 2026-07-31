import { useState } from "react";
import pfp from "../assets/pfp.webp";
import { m, AnimatePresence } from "motion/react";
import { MapPin, Briefcase, GraduationCap, User, Wrench, Smartphone, Headphones, Gamepad2, Zap, Languages, Quote, Heart } from "lucide-react";
import AnimatedCard from "../components/AnimatedCard";
import { tw, spring, cardVariants } from "../lib/theme";
import { socialLinks, quickFacts, coreSkills, technicalProficiency, jobs, education } from "../lib/data";

/** Maps quick-fact labels to their icons */
const factIcons: Record<string, typeof User> = {
  age: User, "fav OS": Smartphone, "go-to tool": Wrench, "fav repair": Zap,
  music: Headphones, pets: Heart, hobbies: Gamepad2, fuel: Zap,
  "fun fact": Languages, obsession: Smartphone,
};

export default function About() {
  const [activeLink, setActiveLink] = useState(socialLinks[0]);

  const renderLabel = () => {
    const label = activeLink.label;
    if (label.includes('@') && !label.startsWith('@')) {
      const [prefix, suffix] = label.split('@');
      return <><span className="text-zinc-500">{prefix}@</span><span className={`text-[${tw.accent}]`}>{suffix}</span></>;
    }
    if (label.startsWith('@')) {
      return <><span className="text-zinc-500">@</span><span className={`text-[${tw.accent}]`}>{label.slice(1)}</span></>;
    }
    if (activeLink.url.includes('linkedin.com')) {
      return <><span className="text-zinc-500">linkedin.com/in/</span><span className={`text-[${tw.accent}]`}>{label}</span></>;
    }
    if (activeLink.url.includes('github.com')) {
      return <><span className="text-zinc-500">github.com/</span><span className={`text-[${tw.accent}]`}>{label}</span></>;
    }
    if (label.includes('.')) {
      return <><span className="text-zinc-500">bsky.app/</span><span className={`text-[${tw.accent}]`}>{label}</span></>;
    }
    return <span className={`text-[${tw.accent}]`}>{label}</span>;
  };

  return (
    <div className="space-y-12">
      {/* Links Section */}
      <AnimatedCard index={0} hoverLift={false} className="glass-card p-12 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(192,57,43,0.12)_0%,transparent_70%)] rounded-full pointer-events-none`} />

        <m.img 
          initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
          src={pfp} 
          alt="Aisling Creed" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#c0392b]/30 shadow-[0_0_30px_rgba(192,57,43,0.2)] object-cover mb-8 relative z-10"
        />

        <m.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 relative z-10 flex flex-col md:flex-row gap-2 md:gap-6"
        >
          <m.span className={`text-[${tw.accent}]`} whileHover={{ scale: 1.05 }} transition={spring.gentle}>Aisling</m.span>
          <m.span className="text-zinc-100" whileHover={{ scale: 1.05 }} transition={spring.gentle}>Creed</m.span>
        </m.h1>

        <m.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          className="text-3xl md:text-4xl mb-16 relative z-10"
        >
          <m.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }} className={`inline-block drop-shadow-[0_0_15px_rgba(192,57,43,0.4)]`}>
            ❤️
          </m.span>
        </m.div>

        <m.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          href={activeLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center relative z-10 w-full"
        >
          <p className="text-zinc-500 text-sm mb-3 group-hover:text-zinc-400 transition-colors">tap here to visit &gt;</p>
          <div className="h-10 mb-8 relative flex justify-center items-center w-full">
            <AnimatePresence mode="popLayout">
              <m.h2
                key={activeLink.label}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-semibold absolute"
              >
                {renderLabel()}
              </m.h2>
            </AnimatePresence>
          </div>
        </m.a>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md overflow-hidden relative z-10 shadow-xl"
        >
          {socialLinks.map((link, i) => (
            <m.button
              key={i}
              onClick={() => setActiveLink(link)}
              onMouseEnter={() => setActiveLink(link)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-200 ${
                activeLink.url === link.url ? `bg-[${tw.accent}] text-white` : "text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
              } ${i !== socialLinks.length - 1 ? "border-r border-white/10" : ""}`}
              aria-label={`Select ${link.label}`}
            >
              <link.icon size={22} />
            </m.button>
          ))}
        </m.div>
      </AnimatedCard>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Bio Card */}
        <AnimatedCard index={1} hoverLift={false} className="md:col-span-2 glass-card p-8 md:p-12 relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(192,57,43,0.05)_0%,transparent_70%)] rounded-full -ml-20 -mt-20 pointer-events-none`} />

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <m.img
              src={pfp}
              alt="Aisling Avatar"
              className={`w-16 h-16 rounded-full border border-[${tw.accent}]/30 object-cover shadow-lg`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={spring.gentle}
            />
            <div>
              <h2 className="text-2xl font-semibold">about me 💫</h2>
              <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1">
                <MapPin size={14} />
                <span>Cork, Ireland 🇮🇪</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-zinc-400 leading-relaxed relative z-10">
            <p>i've always loved taking things apart to figure out how they work, and getting them working again when they break. i approach tech with a mix of hands-on troubleshooting and straightforward communication, whether that's diagnosing a board fault or helping someone solve a tricky software issue.</p>
            <p>after working as a mobile repair tech at Fone Connection fixing screens, batteries, and logic board components, i've been focusing on expanding my skills into sysadmin, networking, and automation. i'm currently building out my knowledge in Linux server environments, homelab setups, and script-driven workflows.</p>
            <p>my background also includes IT support at EPS Water Ireland (handling hardware setup and ticketing) and running live tech support during school exams at Cork Educate Together. whether i'm walking someone through a fix or doing delicate soldering under magnification, my goal is to keep things clean, clear, and stress-free.</p>
          </div>
        </AnimatedCard>

        {/* Quick Facts Card */}
        <AnimatedCard index={2} hoverLift={false} className="glass-card p-8 flex flex-col gap-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <User size={18} className="text-zinc-500" />
            quick facts
          </h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            {quickFacts.map((item) => {
              const Icon = factIcons[item.label] || User;
              return (
                <m.li
                  key={item.label}
                  className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default gap-4"
                  whileHover={{ x: 3 }}
                  transition={spring.gentle}
                >
                  <span className="text-zinc-500 flex items-center gap-1.5 shrink-0">
                    <Icon size={13} className="text-zinc-600" />
                    {item.label}
                  </span>
                  <span className="font-medium text-zinc-300 text-right text-xs">{item.value}</span>
                </m.li>
              );
            })}
          </ul>

          <div className="mt-auto pt-4 border-t border-white/5">
            <div className="flex items-start gap-2">
              <Quote size={14} className={`text-[${tw.accent}] shrink-0 mt-0.5`} />
              <p className="text-xs text-zinc-400 italic leading-relaxed">
                "if it's not working,{" "}
                <span className={`text-[${tw.accent}] font-semibold not-italic`}>MAKE IT F*CKIN' WORK.</span>"
              </p>
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Experience & Education */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedCard index={3} hoverLift={false} className="glass-card p-8">
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <Briefcase size={20} className={`text-[${tw.accent}]`} />
            work experience 💼
          </h3>
          <div className="space-y-10">
            {jobs.map((job) => (
              <m.div
                key={job.title}
                className="relative pl-6 border-l border-white/10 group cursor-default"
                whileHover={{ x: 4 }}
                transition={spring.gentle}
              >
                <div className={`absolute w-3 h-3 rounded-full -left-[6.5px] top-1.5 ${job.isCurrent ? "timeline-dot-active" : "bg-zinc-600 group-hover:bg-zinc-400 transition-colors"}`} />
                <h4 className="font-medium text-zinc-200 text-lg">{job.title}</h4>
                <p className={`text-sm ${job.isCurrent ? `text-[${tw.accent}] font-medium` : "text-zinc-500"} mb-3`}>
                  {job.company} • {job.dates}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">{job.description}</p>
              </m.div>
            ))}
          </div>
        </AnimatedCard>

        <AnimatedCard index={4} hoverLift={false} className="glass-card p-8 flex flex-col">
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap size={20} className="text-zinc-400" />
            education 🎓
          </h3>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <m.div
                key={edu.title}
                className="relative pl-6 border-l border-white/10 group cursor-default"
                whileHover={{ x: 4 }}
                transition={spring.gentle}
              >
                <div className={`absolute w-3 h-3 rounded-full -left-[6.5px] top-1.5 ${idx === 0 ? "bg-zinc-500" : "bg-zinc-600"} group-hover:bg-zinc-400 transition-colors`} />
                <h4 className="font-medium text-zinc-200 text-lg">{edu.title}</h4>
                <p className="text-sm text-zinc-500 mb-2">{edu.institution} • {edu.dates}</p>
              </m.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <h3 className="text-lg font-semibold mb-6 text-zinc-300">core skills ✨</h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map(skill => (
                <m.span key={skill} className="skill-tag" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {skill}
                </m.span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <h3 className="text-lg font-semibold mb-6 text-zinc-300 flex items-center gap-2">
              <Wrench size={16} className="text-zinc-500" />
              technical proficiency 🛠️
            </h3>
            <div className="space-y-6">
              {technicalProficiency.map((cat) => (
                <div key={cat.category}>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">{cat.category}</p>
                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <m.div
                        key={item.name}
                        className="group cursor-default"
                        whileHover={{ x: 3 }}
                        transition={spring.gentle}
                      >
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">{item.name}</span>
                          <span className="text-zinc-600">{item.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <m.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`h-full bg-[${tw.accent}] group-hover:bg-[${tw.accentSoft}] transition-colors duration-300`}
                          />
                        </div>
                      </m.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
