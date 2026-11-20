import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  Briefcase, GraduationCap, Heart, Wrench, Sparkles, Quote,
  ChevronLeft, ChevronRight, ArrowUpRight, FileText, CheckCircle2,
} from "lucide-react";
import pfp from "../assets/pfp.webp";
import { fadeInUp } from "../lib/theme";
import {
  socialLinks, quickFacts, coreSkills, technicalCapabilities, jobs, education,
} from "../lib/data";
import type { CapabilityTier } from "../lib/data";

const tierBadge: Record<CapabilityTier, string> = {
  daily: "bg-accent/15 text-accent-soft border-accent/25",
  production: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "hands-on": "bg-white/[0.05] text-zinc-400 border-white/[0.1]",
};

export default function About() {
  const [socialIndex, setSocialIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSocial = useCallback(() => {
    setDirection(1);
    setSocialIndex((prev) => (prev + 1) % socialLinks.length);
  }, []);

  const prevSocial = useCallback(() => {
    setDirection(-1);
    setSocialIndex((prev) => (prev - 1 + socialLinks.length) % socialLinks.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSocial, 3500);
    return () => clearInterval(timer);
  }, [isPaused, nextSocial]);

  const currentSocial = socialLinks[socialIndex];
  const SocialIcon = currentSocial.icon;

  return (
    <div className="space-y-16">
      {/* Top Profile Banner */}
      <m.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card glass-card-maroon p-8 md:p-10 relative overflow-hidden"
      >
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-60 bg-[radial-gradient(circle,rgba(192,57,43,0.12)_0%,transparent_70%)]" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          <div className="relative group shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-[1.5rem] overflow-hidden border border-white/10 shadow-xl">
              <img
                src={pfp}
                alt="Aisling Creed"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <m.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center text-xs shadow-lg"
            >
              ✨
            </m.div>
          </div>

          <div className="space-y-4 text-center md:text-left flex-1">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
                aisling creed
              </h1>
              <p className="text-zinc-500 text-sm mt-1">
                IT support · Linux sysadmin · hardware diagnostics · Android &amp; automation
              </p>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm md:text-base">
              i work across the full practical stack — from reading iOS kernel panic logs and micro-soldering flex cables, to running a containerized CachyOS/nginx/Gluetun homelab, to shipping open-source Kotlin Android tools. whether it's a walk-in customer with a dead phone or a stubborn reverse-proxy routing bug, i care about tracing the real root cause and leaving things cleaner than i found them.
            </p>
            <div className="pt-1 flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                to="/cv"
                className="magnetic-btn px-4 py-2 rounded-full bg-accent/15 hover:bg-accent/25 border border-accent/30 text-xs font-medium text-zinc-100 inline-flex items-center gap-2"
              >
                <FileText size={14} className="text-accent-soft" />
                <span>view printable cv</span>
              </Link>
              <Link
                to="/projects"
                className="magnetic-btn px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-300 inline-flex items-center gap-1.5"
              >
                <span>shipped projects</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </m.section>

      {/* Quick Facts + Connect Bento Row */}
      <m.section {...fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Quick Facts */}
        <div className="md:col-span-7 glass-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <Sparkles size={18} className="text-accent" />
              quick facts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between items-baseline border-b border-white/[0.04] pb-2 gap-3"
                >
                  <span className="text-zinc-500 text-xs shrink-0">{fact.label}</span>
                  <span className="text-zinc-300 text-right text-xs font-medium">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-3">
            <Quote size={16} className="text-accent/60 shrink-0" />
            <p className="text-xs italic text-zinc-400">
              "if it's broken, trace the root cause and fix it properly."
            </p>
          </div>
        </div>

        {/* Connect Interactive Switcher */}
        <div
          className="md:col-span-5 glass-card glass-card-maroon p-6 md:p-8 flex flex-col justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Heart size={18} className="text-accent" />
              connect
            </h2>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevSocial}
                aria-label="Previous link"
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={nextSocial}
                aria-label="Next link"
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="relative h-24 flex items-center justify-center overflow-hidden my-2">
            <AnimatePresence mode="wait" custom={direction}>
              <m.a
                key={currentSocial.label}
                href={currentSocial.url}
                target={currentSocial.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/30 transition-colors w-full group"
              >
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <SocialIcon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">
                    {currentSocial.label}
                  </div>
                  <div className="text-[11px] text-zinc-500">open link</div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-accent shrink-0 transition-colors" />
              </m.a>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1.5 pt-4">
            {socialLinks.map((s, idx) => (
              <button
                key={s.label}
                type="button"
                aria-label={`Show ${s.label}`}
                onClick={() => {
                  setDirection(idx > socialIndex ? 1 : -1);
                  setSocialIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === socialIndex ? "w-6 bg-accent" : "w-1.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </m.section>

      {/* Proof-Backed Technical Capabilities (Replaces percentage bars) */}
      <m.section {...fadeInUp} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2.5">
              <Wrench size={20} className="text-accent" />
              technical capabilities
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              grouped by how i actually use them — backed by shipped projects and bench work rather than arbitrary percentages.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className={`px-2 py-0.5 rounded-full border ${tierBadge.daily}`}>daily</span>
            <span className={`px-2 py-0.5 rounded-full border ${tierBadge.production}`}>production</span>
            <span className={`px-2 py-0.5 rounded-full border ${tierBadge["hands-on"]}`}>hands-on</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {technicalCapabilities.map((group) => (
            <div key={group.category} className="glass-card p-6 md:p-7 space-y-5">
              <h3 className="text-base font-semibold text-zinc-100 border-b border-white/[0.06] pb-3">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-zinc-200">{item.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${tierBadge[item.tier]}`}
                      >
                        {item.tier}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.proof}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core soft & workflow skills */}
        <div className="glass-card p-6 md:p-7">
          <h3 className="text-sm font-semibold text-zinc-300 mb-4">core strengths</h3>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </m.section>

      {/* Work Experience */}
      <m.section {...fadeInUp} className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2.5">
          <Briefcase size={20} className="text-accent" />
          work experience
        </h2>

        <div className="space-y-6 relative before:absolute before:left-[15px] before:top-3 before:bottom-3 before:w-px before:bg-white/10">
          {jobs.map((job) => (
            <div key={`${job.company}-${job.dates}`} className="pl-10 relative">
              <div
                className={`absolute left-[11px] top-6 w-2.5 h-2.5 rounded-full ${
                  job.isCurrent ? "timeline-dot-active" : "bg-zinc-600 ring-4 ring-[#0a0a0c]"
                }`}
              />

              <div className="glass-card glass-card-maroon p-6 md:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">{job.title}</h3>
                    <p className="text-sm text-accent-soft font-medium">{job.company}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 bg-white/[0.04] px-3 py-1 rounded-full w-fit border border-white/[0.06]">
                    {job.dates}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">{job.description}</p>

                <ul className="space-y-2 pt-3 border-t border-white/[0.06]">
                  {job.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm text-zinc-400">
                      <CheckCircle2 size={15} className="text-accent/70 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </m.section>

      {/* Education */}
      <m.section {...fadeInUp} className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2.5">
          <GraduationCap size={20} className="text-accent" />
          education
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div key={edu.title} className="glass-card p-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-100">{edu.title}</h3>
                <p className="text-sm text-zinc-400 mt-0.5">{edu.institution}</p>
              </div>
              <span className="text-xs font-mono text-zinc-500 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06] shrink-0">
                {edu.dates}
              </span>
            </div>
          ))}
        </div>
      </m.section>
    </div>
  );
}
