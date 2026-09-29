import { m } from "motion/react";
import {
  Code, Server, Wrench, CheckCircle2, ExternalLink, Github,
  Sparkles, GitCommitHorizontal, Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AnimatedCard from "../components/AnimatedCard";
import IconBox from "../components/IconBox";
import { projects } from "../lib/data";
import type { Project } from "../lib/data";
import { fadeInUp } from "../lib/theme";

const CATEGORY_META: Record<
  Project["category"],
  { label: string; icon: LucideIcon }
> = {
  code: { label: "code", icon: Code },
  infrastructure: { label: "infrastructure", icon: Server },
  repair: { label: "repair", icon: Wrench },
};

const STATUS_LABEL: Record<NonNullable<Project["status"]>, string> = {
  active: "active",
  ongoing: "ongoing",
  complete: "shipped",
};

const GITHUB_PROFILE = "https://github.com/aislingheart";

export default function Projects() {
  const groups = (["code", "infrastructure", "repair"] as const)
    .map((category) => ({
      category,
      meta: CATEGORY_META[category],
      items: projects.filter((p) => p.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="space-y-12">
      <PageHeader title="projects & builds 🛠️">
        things i've actually built and shipped — scripts that remove a manual step, a
        homelab that runs itself, and repair work where the fix has to hold. each one
        below is real work, not a list of tools.
      </PageHeader>

      {groups.map((group, gi) => (
        <m.section key={group.category} {...fadeInUp} className="space-y-6">
          <div className="flex items-center gap-2">
            <group.meta.icon size={18} className="text-accent" />
            <h2 className="text-xl font-semibold capitalize tracking-tight">
              {group.meta.label}
            </h2>
            <span className="text-xs text-zinc-600">{group.items.length}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {group.items.map((project, i) => (
              <AnimatedCard
                key={project.title}
                index={gi + i}
                className="glass-card p-8 flex flex-col group"
              >
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 text-zinc-400 group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <IconBox icon={group.meta.icon} hoverRotate={-10} />
                  </div>
                  {project.status && (
                    <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 group-hover:bg-white/10 transition-colors shrink-0">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === "complete"
                            ? "bg-zinc-500"
                            : "bg-emerald-400"
                        }`}
                      />
                      {STATUS_LABEL[project.status]}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors glow-text">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{project.summary}</p>

                <ul className="space-y-2.5 mb-6 flex-grow">
                  {project.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-zinc-600 shrink-0 mt-0.5 group-hover:text-accent transition-colors"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-400 group-hover:bg-white/10 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-accent transition-colors"
                      >
                        <Github size={15} /> source
                        <ExternalLink size={12} className="text-zinc-600" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-accent transition-colors"
                      >
                        <Sparkles size={15} /> live site
                        <ExternalLink size={12} className="text-zinc-600" />
                      </a>
                    )}
                  </div>
                )}
              </AnimatedCard>
            ))}
          </div>
        </m.section>
      ))}

      {/* GitHub */}
      <m.section
        {...fadeInUp}
        className="glass-card p-8 md:p-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />

        <div className="relative z-10 flex-1">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Github size={20} className="text-accent" />
            on github
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
            this portfolio is open source and built from scratch. most of my repair and
            sysadmin work is physical or server-side rather than something that lives in
            a repo, so the code side is intentionally small.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-6 shrink-0">
          <div className="text-center">
            <div className="text-2xl font-semibold text-zinc-100">1</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-500 mt-1">
              public repo
            </div>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-semibold text-zinc-100">2021</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-500 mt-1">
              joined
            </div>
          </div>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-zinc-200 text-sm font-medium rounded-full hover:bg-white/10 hover:text-accent transition-colors"
          >
            <GitCommitHorizontal size={15} />
            view profile
          </a>
        </div>
      </m.section>

      <m.p
        {...fadeInUp}
        className="text-center text-sm text-zinc-600 flex items-center justify-center gap-2"
      >
        <Clock size={13} />
        this page is hand-curated rather than pulled live from the api, so it stays
        accurate instead of listing experiments.
      </m.p>
    </div>
  );
}
