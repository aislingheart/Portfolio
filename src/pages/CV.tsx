import { Printer, Mail, Github, Linkedin, MapPin, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { jobs, education, projects, technicalCapabilities, coreSkills } from "../lib/data";

export default function CV() {
  const featuredProjects = projects.filter((p) => p.githubUrl);

  return (
    <div className="space-y-6">
      {/* Screen-only action bar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>back to portfolio</span>
        </Link>

        <button
          type="button"
          onClick={() => window.print()}
          className="magnetic-btn px-5 py-2.5 bg-white text-zinc-950 rounded-full font-medium text-sm inline-flex items-center gap-2 hover:bg-zinc-200 cursor-pointer"
        >
          <Printer size={15} />
          <span>print / save as PDF</span>
        </button>
      </div>

      {/* Printable CV Document */}
      <article className="cv-sheet glass-card p-8 md:p-12 space-y-8">
        {/* Header */}
        <header className="border-b border-white/10 pb-6 space-y-3">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
                Aisling Creed
              </h1>
              <p className="text-sm md:text-base text-accent-soft font-medium mt-1">
                IT Support · Linux &amp; Docker Systems Administration · Hardware Diagnostics · Android Tooling
              </p>
            </div>
            <div className="text-xs text-zinc-400 flex items-center gap-1.5">
              <MapPin size={13} className="text-accent" />
              <span>Cork, Ireland (fluent in English &amp; Irish)</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-400 pt-1">
            <a href="mailto:aislingcreed42@gmail.com" className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors">
              <Mail size={13} className="text-zinc-500" />
              <span>aislingcreed42@gmail.com</span>
            </a>
            <a
              href="https://github.com/aislingheart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <Github size={13} className="text-zinc-500" />
              <span>github.com/aislingheart</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aislingheart/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <Linkedin size={13} className="text-zinc-500" />
              <span>linkedin.com/in/aislingheart</span>
            </a>
            <a
              href="https://aislingheart.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <Globe size={13} className="text-zinc-500" />
              <span>aislingheart.github.io/Portfolio</span>
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent-soft">Profile</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Hands-on technician and builder spanning hardware diagnostics, Linux infrastructure, and software tooling.
            Experienced in iOS/Android board-level fault isolation via kernel panic logs, workstation provisioning and
            high-pressure live exam IT triage, self-hosted Docker Compose &amp; nginx reverse-proxy administration with
            Gluetun VPN isolation, and shipping open-source Kotlin/Compose Android applications.
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent-soft">Experience</h2>
          <div className="space-y-5">
            {jobs.map((job) => (
              <div key={`${job.company}-${job.dates}`} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-semibold text-zinc-100">
                    {job.title} <span className="text-zinc-500 font-normal">—</span>{" "}
                    <span className="text-zinc-300 font-medium">{job.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 shrink-0">{job.dates}</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-300 leading-relaxed">
                  {job.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent-soft">
            Selected Open-Source Projects &amp; Infrastructure
          </h2>
          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <div key={project.title} className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {project.title}
                    <span className="ml-2 text-xs font-mono font-normal text-zinc-500">
                      [{project.tech.slice(0, 5).join(" · ")}]
                    </span>
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-accent transition-colors"
                    >
                      {project.githubUrl.replace("https://", "")}
                    </a>
                  )}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.featuredSummary ?? project.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent-soft">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {technicalCapabilities.map((group) => (
              <div key={group.category} className="space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-200">
                  {group.category}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {group.items.map((item) => item.name).join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-400 pt-1">
            <span className="font-semibold text-zinc-200 uppercase tracking-wide">Core strengths: </span>
            {coreSkills.join(" · ")}
          </p>
        </section>

        {/* Education */}
        <section className="space-y-2.5">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent-soft">Education</h2>
          <div className="space-y-1.5">
            {education.map((edu) => (
              <div key={edu.title} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                <div>
                  <span className="font-medium text-zinc-100 capitalize">{edu.title}</span>
                  <span className="text-zinc-400"> — {edu.institution}</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">{edu.dates}</span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
