/**
 * All portfolio content lives here.
 *
 * Updating a job title, adding a case study, or tweaking a description
 * only requires editing this file. No JSX hunting needed.
 */
import type { LucideIcon } from "lucide-react";
import {
  Mail, Camera, Instagram, Github, Twitter, Cloud, Linkedin,
  Cpu, Search, Zap, ShieldAlert,
  Server, Shield, Database, Network, Terminal,
  Calendar, MousePointer2,
} from "lucide-react";

// ── Projects ─────────────────────────────────────────────────────────
/**
 * Curated rather than auto-fetched from the GitHub API.
 *
 * The public profile has 8 repos, but several are not worth listing:
 * OmniWM is a 211MB fork of someone else's project, `web` is empty,
 * embed-weather is a single HTML file, and penelope is two PNGs. Two
 * entries genuinely do represent real work — this portfolio site and
 * MyHRT — so those are included, alongside the server build documented in
 * ~/servers-info.md, which is infrastructure work that has no repo at all.
 *
 * `githubUrl` is optional; add it when a project has a public repo.
 */
export interface Project {
  title: string;
  summary: string;
  details: string[];
  tech: string[];
  category: "code" | "infrastructure" | "repair";
  status?: "active" | "ongoing" | "complete";
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "this portfolio",
    summary:
      "the site you're looking at. a dark glassmorphic portfolio built with React 19, TypeScript and Tailwind, deployed to GitHub Pages.",
    details: [
      "cursor-reactive particle canvas with an autonomous mode for touch devices.",
      "lazy-loaded routes, code-split per page to keep the initial bundle small.",
      "full keyboard navigation, visible focus rings and reduced-motion support.",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Vite", "Framer Motion", "GitHub Pages"],
    category: "code",
    status: "active",
    githubUrl: "https://github.com/aislingheart/Portfolio",
    demoUrl: "https://aislingheart.github.io/Portfolio/",
  },
  {
    title: "MyHRT",
    summary:
      "an android app for tracking gender-affirming hormone therapy, built around a pharmacokinetics simulation engine that models actual hormone levels over time from your dose history.",
    details: [
      "simulates serum estradiol and testosterone curves from real dose logs, accounting for route of administration and ester type.",
      "clinical timing guidance: dose spacing, sublingual hold times, gel application, injection site rotation.",
      "frequency-aware reminders that survive a device reboot instead of dying with it.",
      "runs fully on-device with an offline reference engine, so no cloud API key is needed to use it.",
      "published as v1.0.0 with a downloadable APK; MIT licensed.",
    ],
    tech: ["Kotlin", "Android", "Gradle", "Pharmacokinetics modelling"],
    category: "code",
    status: "active",
    githubUrl: "https://github.com/aislingheart/MyHRT",
  },
  {
    title: "homelab media & AI server",
    summary:
      "a self-hosted stack on CachyOS — media automation, a GPU-accelerated Jellyfin, and a local LLM — all reachable through one nginx reverse proxy without exposing ports to the internet.",
    details: [
      "full *arr automation stack (Sonarr, Radarr, Lidarr, Prowlarr, Bazarr) driving qBittorrent, with the whole library on a 2TB mount.",
      "nginx reverse proxy with subpath routing, so eight services live under one host without port juggling.",
      "used nginx sub_filter to rewrite Open WebUI's hardcoded absolute asset paths, which otherwise collided with the dashboard's root routes.",
      "ollama serving gemma2 locally with Jellyfin hardware transcoding on an RTX 5050.",
      "everything in docker compose, so the media and AI stacks come up from one command each.",
      "migrated the whole thing off Windows, including repairing the SQLite paths the Windows install left behind.",
    ],
    tech: ["CachyOS", "Docker", "nginx", "Jellyfin", "Sonarr", "Radarr", "Prowlarr", "qBittorrent", "Ollama", "Open WebUI", "Homarr"],
    category: "infrastructure",
    status: "active",
  },
  {
    title: "server update pipeline",
    summary:
      "scripted updates for home server apps and utilities, so staying current doesn't depend on remembering to check by hand.",
    details: [
      "drives Winget and UnigetUI non-interactively for repeatable, unattended updates.",
      "wraps the update runs in scripts that log what changed, making failures traceable.",
    ],
    tech: ["Winget", "UnigetUI", "PowerShell"],
    category: "infrastructure",
    status: "ongoing",
  },
  {
    title: "raycast environment macros",
    summary:
      "custom Raycast commands and AppleScript shortcuts that bring up the dev and support tools I use daily in a couple of keystrokes.",
    details: [
      "wraps repetitive terminal invocations and app launches behind one search action.",
      "scripted fixes for the tasks that otherwise mean digging through notes.",
    ],
    tech: ["Raycast", "AppleScript", "macOS"],
    category: "code",
    status: "complete",
  },
  {
    title: "iphone board-level repair",
    summary:
      "component-level diagnostics and repair on iOS devices: tracing panic logs to the failed part, then soldering it back to a working state.",
    details: [
      "diagnose from kernel panic logs rather than guesswork — SMC, thermal sensors, power ICs.",
      "micro-soldering under magnification, including 2-point joints on Face ID and earpiece flex.",
      "bench-tested before and after every repair so devices stay reliable past the handover.",
    ],
    tech: ["3uTools", "iOS diagnostics", "Micro-soldering", "Panic log analysis"],
    category: "repair",
    status: "ongoing",
  },
];

// ── Home ─────────────────────────────────────────────────────────────
export const qualifications = [
  "versatile tech expert.",
  "hardware diagnostic specialist.",
  "systems administrator.",
  "micro-soldering expert.",
  "automation enthusiast.",
  "IT support engineer.",
  "empathetic problem solver.",
  "always learning, always building.",
];

// ── About ────────────────────────────────────────────────────────────
export interface SocialLink {
  icon: LucideIcon;
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { icon: Mail, label: "aislingcreed42@gmail.com", url: "mailto:aislingcreed42@gmail.com" },
  { icon: Linkedin, label: "aislingheart", url: "https://www.linkedin.com/in/aislingheart/" },
  { icon: Camera, label: "@imageworm", url: "https://www.instagram.com/imageworm" },
  { icon: Instagram, label: "@aisling_heart", url: "https://www.instagram.com/aisling_heart" },
  { icon: Github, label: "aislingheart", url: "https://github.com/aislingheart" },
  { icon: Twitter, label: "@aislingheart", url: "https://twitter.com/aislingheart" },
  { icon: Cloud, label: "aislingheart.bsky.social", url: "https://bsky.app/profile/aislingheart.bsky.social" },
];

/**
 * Date of birth (YYYY-MM-DD), used to derive the displayed age so it can
 * never go stale. Update this ONE value and the age on the About page
 * recalculates itself automatically.
 */
const BIRTH_DATE = "2004-10-27";

function calculateAge(dob: string): number {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDelta = now.getMonth() - birth.getMonth();
  // Haven't had the birthday yet this year.
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < birth.getDate())) {
    age -= 1;
  }
  return age;
}

const currentAge = calculateAge(BIRTH_DATE);

export const quickFacts = [
  { label: "age", value: `${currentAge}` },
  { label: "fav OS", value: "Android / macOS" },
  { label: "go-to tool", value: "the spudger 🫡" },
  { label: "fav repair", value: "the more complex, the better" },
  { label: "music", value: "vocaloid 🎵" },
  { label: "pets", value: "Milo 🐱 Luna 🐱 Becky 🐶" },
  { label: "hobbies", value: "📸 🎮 🎬" },
  { label: "fuel", value: "Aussie Lemonade Monster ⚡" },
  { label: "fun fact", value: "fluent in Irish 🇮🇪" },
  { label: "obsession", value: "Pixel ↔ Mac continuity" },
];

export const coreSkills = [
  "attention to detail", "customer service", "problem-solving",
  "empathy", "time management", "active listening",
  "troubleshooting", "adaptability", "conflict resolution",
];

export interface TechProficiency {
  name: string;
  level: number; // percentage 0-100
}

export interface TechCategory {
  category: string;
  items: TechProficiency[];
}

export const technicalProficiency: TechCategory[] = [
  {
    category: "systems & infrastructure",
    items: [
      { name: "macOS", level: 100 },
      { name: "Windows", level: 100 },
      { name: "Linux (Ubuntu/Kali)", level: 90 },
      { name: "Android", level: 100 },
      { name: "iOS / iPadOS", level: 80 },
      { name: "Docker", level: 60 },
      { name: "VMware", level: 75 },
      { name: "WSL", level: 75 },
    ],
  },
  {
    category: "command line",
    items: [
      { name: "Linux / macOS Terminal", level: 95 },
      { name: "CMD / PowerShell", level: 80 },
    ],
  },
  {
    category: "networking & remote",
    items: [
      { name: "SSH", level: 80 },
      { name: "Tailscale", level: 80 },
      { name: "RDP / Parsec", level: 70 },
      { name: "Wireshark", level: 60 },
      { name: "Wake-on-LAN", level: 75 },
    ],
  },
  {
    category: "hardware & diagnostics",
    items: [
      { name: "iPhone Repair", level: 85 },
      { name: "Panic Log Analysis", level: 80 },
      { name: "Micro-soldering", level: 65 },
      { name: "3uTools", level: 65 },
    ],
  },
];

export interface Job {
  title: string;
  company: string;
  dates: string;
  description: string;
  isCurrent?: boolean;
}

export const jobs: Job[] = [
  {
    title: "sales assistant / mobile repair tech",
    company: "Fone Connection",
    dates: "Mar 2025 - Present",
    isCurrent: true,
    description: "on the bench handling hardware repairs (screens, batteries, flex cables, component replacements) and software troubleshooting across iOS and Android, paired with direct customer support in a busy shop environment. alongside the day job i'm independently building skills across Linux sysadmin, networking, and workflow automation — homelab servers, scripts, and automation tooling.",
  },
  {
    title: "IT support technician assistant",
    company: "EPS Water Ireland",
    dates: "Feb 2023",
    description: "assisted IT staff with setup and maintenance for workplace PCs and mobile devices. prepped fresh machines for new staff, upgraded legacy hardware, and managed ticketing queues to resolve user issues.",
  },
  {
    title: "exam supervisor & tech support",
    company: "Cork Educate Together",
    dates: "Jun 2021 - Jul 2021",
    description: "provided on-site IT support and supervision during student exams. handled sudden hardware and software hiccups on the fly so students didn't lose time or progress.",
  },
];

export interface Education {
  title: string;
  institution: string;
  dates: string;
}

export const education: Education[] = [
  { title: "leaving certificate", institution: "Coláiste Dáibhéid", dates: "Apr 2024 - May 2025" },
  { title: "junior certificate", institution: "Cork Educate Together", dates: "Sep 2022 - Jun 2024" },
];

// ── Hardware ─────────────────────────────────────────────────────────
export interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  details: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: "iPhone 12 compound refurbishment",
    subtitle: "from bootloop to profit",
    description: "a heavily damaged iPhone 12 came in with a shattered screen, dead battery, broken earpiece, and a constant bootloop. diagnosed the board panic, replaced the components, micro-soldered the flex, and brought it back to 100% functionality.",
    tags: ["iOS", "Refurbishment", "Diagnostics"],
    details: [
      "traced the bootloop cause by analyzing kernel panic logs.",
      "replaced screen and battery with high-quality, tested components.",
      "repaired Face ID flex via micro-soldering to restore earpiece functionality.",
      "ran post-repair stress tests to make sure everything stayed stable.",
    ],
  },
  {
    title: "panic log analysis: SMC crash",
    subtitle: "deep diagnostic challenge",
    description: "diagnosed a device restarting randomly after a third-party repair. used kernel panic logs to trace the issue back to faulty thermal sensors and corrupted battery monitoring data.",
    tags: ["Panic Logs", "SMC", "Thermal Sensors"],
    details: [
      "extracted and parsed kernel logs via 3uTools and iOS diagnostics.",
      "found the SMC crash was caused by corrupt data coming off the thermal sensor.",
      "isolated battery level monitoring as a secondary failure point.",
      "explained the failure mechanism to the client so they understood what went wrong.",
    ],
  },
];

export const hardwareSkills = [
  { icon: Search, title: "panic log mastery 🔍", desc: "reading kernel panic logs to pinpoint exact hardware failures in SMC, thermal sensors, and power ICs instead of guessing." },
  { icon: Zap, title: "micro-soldering ⚡", desc: "component-level work under magnification, including 2-point soldering on delicate Face ID and earpiece flex cables." },
  { icon: ShieldAlert, title: "quality control ✅", desc: "pre-closure bench testing and thorough post-repair validation checks to ensure long-term device reliability." },
];

// ── Support & Admin ──────────────────────────────────────────────────
export interface LabService {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const labServices: LabService[] = [
  { name: "Docker", description: "containerized setup for self-hosted apps and services, keeping environments isolated and easy to update.", icon: Database },
  { name: "OpenWebUI", description: "local interface for LLMs to help with scripting and local testing.", icon: Terminal },
  { name: "Jellyfin", description: "self-hosted media server with hardware transcoding enabled.", icon: Server },
  { name: "Tailscale", description: "mesh VPN setup for secure remote access to home servers from anywhere.", icon: Shield },
  { name: "WOL Beacon", description: "Raspberry Pi setup as a Wake-on-LAN trigger for remote machine power management.", icon: Zap },
  { name: "Kali Linux", description: "dedicated VM for network testing, security labs, and learning.", icon: Network },
];

export const operatingSystems = [
  { name: "macOS", level: 100, desc: "primary workstation, env. optimisation." },
  { name: "Windows", level: 100, desc: "desktop support, home server management." },
  { name: "Linux (Ubuntu/Kali)", level: 90, desc: "server admin, pen testing, VMs." },
  { name: "Android/iOS", level: 100, desc: "advanced diagnostics & mobile internals." },
];

export const techStack = [
  "VMware", "WSL", "Docker", "SSH", "RDP", "Tailscale",
  "Wireshark", "VS Code", "3uTools", "Parsec", "OBS Studio", "GIMP", "Photoshop",
];

export const examSaveSteps = [
  { label: "rapid diagnosis:", text: "spotted the OS boot crash right away and ruled out hardware failure within seconds." },
  { label: "creative solution:", text: "swapped in a spare SSD pre-loaded with Ubuntu and LibreOffice that I had ready." },
  { label: "result:", text: "the student was back working on their exam in under 5 minutes with zero lost work. 🎉" },
];

// ── Automation ───────────────────────────────────────────────────────
export interface AutomationProject {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
}

export const automations: AutomationProject[] = [
  {
    title: "roster to calendar sync",
    description: "Python script that reads work shift images or text and auto-creates formatted calendar events.",
    icon: Calendar,
    tech: ["Python", "LLM", "iCal"],
  },
  {
    title: "raycast environment macros",
    description: "custom Raycast macros and AppleScript shortcuts to launch my daily dev and support tools instantly.",
    icon: MousePointer2,
    tech: ["Raycast", "AppleScript", "macOS"],
  },
  {
    title: "server update pipeline",
    description: "automated scripts using Winget and UnigetUI to keep home server apps and utilities up to date.",
    icon: Cpu,
    tech: ["Winget", "UnigetUI", "CMD"],
  },
];

export const scriptingTools = [
  { name: "Python", tag: "automation", isAccent: true },
  { name: "AppleScript", tag: "macros", isAccent: false },
  { name: "CMD", tag: "system admin", isAccent: false },
];
