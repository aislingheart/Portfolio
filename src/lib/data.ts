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
  Server, Shield, Database, Network, Terminal, HardDrive,
  Calendar, MousePointer2,
} from "lucide-react";

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
  { icon: Mail, label: "ashcreed42@gmail.com", url: "mailto:ashcreed42@gmail.com" },
  { icon: Linkedin, label: "aislingheart", url: "https://www.linkedin.com/in/aislingheart/" },
  { icon: Camera, label: "@imageworm", url: "https://www.instagram.com/imageworm" },
  { icon: Instagram, label: "@aisling_heart", url: "https://www.instagram.com/aisling_heart" },
  { icon: Github, label: "aislingheart", url: "https://github.com/aislingheart" },
  { icon: Twitter, label: "@aislingheart", url: "https://twitter.com/aislingheart" },
  { icon: Cloud, label: "aislingheart.bsky.social", url: "https://bsky.app/profile/aislingheart.bsky.social" },
];

export const quickFacts = [
  { label: "age", value: "21" },
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
    title: "upskilling & professional development",
    company: "Self-Directed",
    dates: "May 2025 - Present",
    isCurrent: true,
    description: "building out my skills across Linux sysadmin, networking, and workflow automation. setting up homelab servers, writing scripts, and bridging hands-on hardware troubleshooting with modern IT support.",
  },
  {
    title: "sales assistant / mobile repair tech",
    company: "Fone Connection",
    dates: "Mar 2025 - May 2025",
    description: "handled hardware repairs (screens, batteries, flex cables, component replacements) and software troubleshooting across iOS and Android. paired technical bench work with direct customer support in a busy shop environment.",
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
