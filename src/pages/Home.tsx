import { useState, useEffect } from "react";
import { m } from "motion/react";
import {
  ArrowRight, Cpu, Server, Zap, Mail, FileText,
  Github, Linkedin, ExternalLink, FolderGit2,
} from "lucide-react";
import { Link } from "react-router-dom";
import pfp from "../assets/pfp.webp";
import { qualifications, projects } from "../lib/data";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

function TypewriterQualification() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentWord = qualifications[index];
    const typingSpeed = isDeleting ? 35 : 70;

    if (!isDeleting && subIndex === currentWord.length) {
      const pause = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(pause);
    }

    if (isDeleting && subIndex === 0) {
      const nextWord = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % qualifications.length);
      }, 400);
      return () => clearTimeout(nextWord);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className="text-zinc-200">{qualifications[0]}</span>;
  }

  return (
    <span className="inline-flex items-center">
      <span className="text-zinc-200">{qualifications[index].substring(0, subIndex)}</span>
      <m.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        className="w-0.5 h-6 md:h-8 ml-1 inline-block rounded-full bg-accent"
      />
    </span>
  );
}

const navCards = [
  {
    to: "/hardware",
    icon: Cpu,
    title: "hardware diagnostics 🔧",
    desc: "mobile board-level repair, kernel panic log analysis, and micro-soldering.",
    hoverRotate: -12,
  },
  {
    to: "/support-admin",
    icon: Server,
    title: "support & admin 🛡️",
    desc: "CachyOS Docker/nginx homelab, Gluetun VPN isolation, and live incident triage.",
    hoverRotate: 12,
  },
  {
    to: "/automation",
    icon: Zap,
    title: "workflow automation ⚙️",
    desc: "Komorebi QuickJS runner, dashboard-as-code, and cross-OS scripting.",
    hoverRotate: 0,
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-10">
      {/* Main Hero Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Intro Card */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8 glass-card glass-card-maroon p-8 md:p-11 flex flex-col justify-between relative overflow-hidden group"
        >
          {/* Ambient radial gradient */}
          <div
            className="absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
            style={{ background: "radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)" }}
          />

          <div className="space-y-6 relative z-10">
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
              <span>open to IT support, sysadmin &amp; junior dev roles · Limerick, IE</span>
            </m.div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-gradient">
              hey, i'm aisling.
              <span className="block text-xl md:text-3xl font-normal text-zinc-400 mt-3 h-10 md:h-12 flex items-center">
                <TypewriterQualification />
              </span>
            </h1>

            <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
              i diagnose faulty hardware down to the kernel panic log, self-host containerized Linux infrastructure behind nginx and VPN isolation, and ship open-source Android tools like{" "}
              <Link to="/projects" className="text-zinc-200 underline decoration-accent/50 underline-offset-4 hover:text-white hover:decoration-accent transition-colors">
                Komorebi
              </Link>{" "}
              and{" "}
              <Link to="/projects" className="text-zinc-200 underline decoration-accent/50 underline-offset-4 hover:text-white hover:decoration-accent transition-colors">
                MyHRT
              </Link>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-8 relative z-10">
            <Link
              to="/projects"
              className="magnetic-btn px-5 py-3 bg-white text-zinc-950 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-zinc-200 group/btn"
            >
              <FolderGit2 size={15} />
              <span>view projects</span>
              <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/cv"
              className="magnetic-btn px-5 py-3 bg-accent/15 hover:bg-accent/25 text-zinc-100 rounded-full font-medium text-sm border border-accent/30 flex items-center gap-2"
            >
              <FileText size={15} className="text-accent-soft" />
              <span>cv / resume</span>
            </Link>

            <a
              href="mailto:aislingcreed42@gmail.com"
              className="magnetic-btn px-5 py-3 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 rounded-full font-medium text-sm border border-white/[0.08] flex items-center gap-2"
            >
              <Mail size={15} className="text-zinc-400" />
              <span>contact</span>
            </a>

            <div className="flex items-center gap-2 sm:ml-auto">
              <a
                href="https://github.com/aislingheart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/aislingheart/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </m.div>

        {/* Avatar Card */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 glass-card glass-card-maroon p-6 flex flex-col items-center justify-center relative group"
        >
          <div className="relative w-full aspect-square max-w-[260px] rounded-[1.25rem] overflow-hidden border border-white/[0.08]">
            <img
              src={pfp}
              alt="Aisling Creed"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/70 via-transparent to-transparent" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 100%, rgba(192,57,43,0.18) 0%, transparent 60%)" }}
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm font-medium text-zinc-200">aisling creed</p>
            <p className="text-xs text-zinc-500 mt-0.5">hardware · linux · android</p>
          </div>
        </m.div>
      </div>

      {/* Featured Shipped Work — Immediate Proof for Hiring Managers */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4 px-1">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">featured work</h2>
            <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
              real projects shipped in the open — code, infrastructure, and diagnostics.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-medium text-zinc-400 hover:text-accent transition-colors inline-flex items-center gap-1 shrink-0"
          >
            <span>all projects</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <m.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card glass-card-maroon p-6 flex flex-col justify-between gap-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-accent/10 border border-accent/20 text-accent-soft">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.featuredSummary ?? project.summary}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06] text-xs font-medium">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-accent transition-colors"
                    >
                      <Github size={13} />
                      <span>source</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  <Link
                    to={project.caseStudyPath ?? "/projects"}
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-100 transition-colors ml-auto"
                  >
                    <span>{project.caseStudyPath ? "architecture" : "details"}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </section>

      {/* Core Domain Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {navCards.map((card, i) => (
          <Link key={card.to} to={card.to} className="group block">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card glass-card-maroon p-7 h-full flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <m.div
                  whileHover={{ rotate: card.hoverRotate, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-11 h-11 rounded-2xl bg-white/[0.04] flex items-center justify-center text-zinc-400 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-300"
                >
                  <card.icon size={20} />
                </m.div>
                <h2 className="text-lg font-semibold group-hover:text-white transition-colors">
                  {card.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {card.desc}
                </p>
              </div>
              <div className="pt-5 flex items-center text-xs font-medium text-zinc-500 group-hover:text-accent transition-colors">
                <span>explore</span>
                <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </m.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
