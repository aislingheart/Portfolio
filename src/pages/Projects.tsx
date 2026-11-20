import { m } from "motion/react";
import { Link } from "react-router-dom";
import {
  Code2, Server, Wrench, Github, ExternalLink, CheckCircle2, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { KomorebiVisual, MyHrtVisual, HomelabDiagram } from "../components/ProjectVisuals";
import { fadeInUp } from "../lib/theme";
import { projects } from "../lib/data";
import type { Project } from "../lib/data";

const categoryMeta: Record<
  Project["category"],
  { label: string; icon: LucideIcon; blurb: string }
> = {
  code: {
    label: "code & builds",
    icon: Code2,
    blurb: "android apps, web builds, and everyday developer tooling.",
  },
  infrastructure: {
    label: "infrastructure & servers",
    icon: Server,
    blurb: "self-hosted Linux services, VPN isolation, and automation pipelines.",
  },
  repair: {
    label: "hardware & repair",
    icon: Wrench,
    blurb: "component-level diagnostics and micro-soldering work.",
  },
};

const categoryOrder: Project["category"][] = ["code", "infrastructure", "repair"];

const statusStyle: Record<NonNullable<Project["status"]>, { dot: string; label: string }> = {
  active: { dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]", label: "active" },
  ongoing: { dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]", label: "ongoing" },
  complete: { dot: "bg-zinc-400", label: "complete" },
};

function renderProjectVisual(visual?: Project["visual"]) {
  if (visual === "komorebi") return <KomorebiVisual />;
  if (visual === "myhrt") return <MyHrtVisual />;
  if (visual === "homelab") return <HomelabDiagram compact />;
  return null;
}

export default function Projects() {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      meta: categoryMeta[cat],
      items: projects.filter((p) => p.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  const publicRepoCount = projects.filter((p) => p.githubUrl).length;

  return (
    <div className="space-y-12">
      <PageHeader title="projects & builds 🛠️">
        a mix of code, self-hosted infrastructure, and hardware work. everything here is
        something i actually run, ship, or rely on day to day.
      </PageHeader>

      {grouped.map((group) => (
        <m.section key={group.category} {...fadeInUp} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2.5">
                <group.meta.icon size={20} className="text-accent" />
                {group.meta.label}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">{group.meta.blurb}</p>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              {group.items.length} {group.items.length === 1 ? "item" : "items"}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {group.items.map((project, i) => {
              const status = project.status ? statusStyle[project.status] : null;
              const hasVisual = Boolean(project.visual);
              return (
                <AnimatedCard
                  key={project.title}
                  index={i}
                  className={`glass-card glass-card-maroon p-8 flex flex-col group ${
                    hasVisual ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="p-3 rounded-2xl bg-white/[0.04] text-zinc-400 group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                      <IconBox icon={group.meta.icon} size={22} hoverRotate={-8} />
                    </div>

                    {status && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-zinc-400">
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                        {status.label}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors glow-text">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {hasVisual && (
                    <div className="mb-6">
                      {renderProjectVisual(project.visual)}
                    </div>
                  )}

                  <div className="space-y-2.5 border-t border-white/[0.06] pt-5 mb-6 flex-grow">
                    {project.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex gap-2.5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-zinc-600 shrink-0 mt-0.5 group-hover:text-accent transition-colors"
                        />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="skill-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    {(project.githubUrl || project.demoUrl || project.caseStudyPath) && (
                      <div className="flex flex-wrap gap-4 pt-3 border-t border-white/[0.06]">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-accent transition-colors"
                          >
                            <Github size={14} />
                            <span>source</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-accent transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>live site</span>
                          </a>
                        )}
                        {project.caseStudyPath && (
                          <Link
                            to={project.caseStudyPath}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-accent transition-colors"
                          >
                            <span>deep dive</span>
                            <ArrowRight size={13} />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </m.section>
      ))}

      {/* GitHub profile card */}
      <m.section
        {...fadeInUp}
        className="glass-card p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-[radial-gradient(circle,rgba(192,57,43,0.08)_0%,transparent_70%)] rounded-full -mr-24 -mb-24 pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <h2 className="text-xl font-semibold flex items-center gap-2.5">
            <Github size={20} className="text-accent" />
            on github
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
            all five of my standalone projects are open source. most of my repair and
            sysadmin work is physical or server-side rather than something that lives
            in a repo, so the code side is curated for real shipped work.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-6 shrink-0">
          <div className="text-center">
            <div className="text-2xl font-semibold text-zinc-100">
              {publicRepoCount}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-500 mt-1">
              public repos
            </div>
          </div>

          <a
            href="https://github.com/aislingheart"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-5 py-2.5 bg-white text-zinc-950 rounded-full font-medium text-sm inline-flex items-center gap-2 hover:bg-zinc-200"
          >
            <Github size={15} />
            <span>@aislingheart</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </m.section>
    </div>
  );
}
