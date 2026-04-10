/**
 * All portfolio content lives here.
 *
 * Updating a job title, adding a case study, or tweaking a description
 * only requires editing this file — no JSX hunting needed.
 */
import type { LucideIcon } from "lucide-react";
import {
  Mail, Camera, Instagram, Github, Twitter, Cloud,
  Cpu, Search, Zap, ShieldAlert,
  Server, Shield, Database, Network, Terminal, HardDrive,
  Calendar, MousePointer2,
} from "lucide-react";

// ── Home ─────────────────────────────────────────────────────────────
export const qualifications = [
  "versatile tech expert.",
  "mobile repair technician.",
  "hardware diagnostic specialist.",
  "systems administrator.",
  "micro-soldering expert.",
  "automation enthusiast.",
  "IT support engineer.",
  "empathetic problem solver.",
];

// ── About ────────────────────────────────────────────────────────────
export interface SocialLink {
  icon: LucideIcon;
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { icon: Mail, label: "ashcreed42@gmail.com", url: "mailto:ashcreed42@gmail.com" },
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
    description: "execute comprehensive hardware repairs (screens, batteries, components) and software troubleshooting on a wide range of iOS and Android devices. balance technical repair workflows with active customer support in a fast-paced, high-volume shopping centre environment.",
  },
  {
    title: "IT support technician assistant",
    company: "EPS Water Ireland",
    dates: "Feb 2023",
    description: "supported and assisted IT staff in the maintenance of workplace computers and phones. readied new machines for users, upgraded older hardware, and utilized ticketing systems to solve co-worker issues independently.",
  },
  {
    title: "exam supervisor & tech support",
    company: "Cork Educate Together",
    dates: "Jun 2021 - Jul 2021",
    description: "ensured a smooth exam experience for students by providing attentive supervision and technical assistance. demonstrated flexibility and quick thinking by troubleshooting and resolving technical issues on the spot.",
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
    description: "a severely damaged device presented with a broken earpiece, low battery health, shattered screen, and constant bootlooping. successfully diagnosed, refurbished, and restored to full functionality for a net 80 euro profit.",
    tags: ["iOS", "Refurbishment", "Diagnostics"],
    details: [
      "identified bootloop root cause via deep panic log analysis.",
      "replaced screen and battery with high-quality, tested components.",
      "repaired Face ID flex via micro-soldering to restore earpiece functionality.",
      "conducted full system stress-test post-closure to guarantee stability.",
    ],
  },
  {
    title: "panic log analysis: SMC crash",
    subtitle: "deep diagnostic challenge",
    description: "diagnosed a device that kept restarting randomly after a third-party repair. used kernel panic logs to trace the issue back to faulty thermal sensors and corrupted battery monitoring data.",
    tags: ["Panic Logs", "SMC", "Thermal Sensors"],
    details: [
      "extracted and parsed kernel logs via 3uTools and iOS diagnostics.",
      "identified SMC crash caused by incorrect data from the MagSafe flex thermal sensor.",
      "isolated battery level monitoring as a secondary failure point.",
      "educated customer on the importance of component sourcing and repair quality.",
    ],
  },
];

export const hardwareSkills = [
  { icon: Search, title: "panic log mastery 🔍", desc: "proficient in interpreting kernel panic logs to isolate hardware failures in SMC, thermal sensors, and power management ICs, turning guesswork into science." },
  { icon: Zap, title: "micro-soldering ⚡", desc: "experienced in precise component-level work, including 2-point solder jobs on delicate Face ID and earpiece flex cables under magnification." },
  { icon: ShieldAlert, title: "quality control ✅", desc: "strict adherence to pre-closure component testing and post-repair system validation to guarantee long-term reliability and zero-defect handovers." },
];

// ── Support & Admin ──────────────────────────────────────────────────
export interface LabService {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const labServices: LabService[] = [
  { name: "Docker", description: "containerised environment for local services, ensuring isolation and easy deployment.", icon: Database },
  { name: "OpenWebUI", description: "local LLM interface for private workflows and scripting assistance.", icon: Terminal },
  { name: "Jellyfin", description: "self-hosted media management and streaming suite with hardware transcoding.", icon: Server },
  { name: "Tailscale", description: "secure mesh VPN for frictionless remote access to home infrastructure from anywhere.", icon: Shield },
  { name: "WOL Beacon", description: "raspberry pi configured as a Wake-on-LAN trigger for remote power management.", icon: Zap },
  { name: "Kali Linux", description: "dedicated VM for network penetration testing, security auditing, and learning.", icon: Network },
];

export const operatingSystems = [
  { name: "Linux (Ubuntu/Kali)", level: 90, desc: "server admin, pen testing, VMs." },
  { name: "macOS", level: 95, desc: "primary workstation, env. optimisation." },
  { name: "Windows", level: 85, desc: "desktop support, home server management." },
  { name: "Android/iOS", level: 95, desc: "advanced diagnostics & mobile internals." },
];

export const techStack = [
  "VMware", "WSL", "Docker", "SSH", "RDP", "Tailscale",
  "Wireshark", "VS Code", "3uTools", "Parsec", "OBS Studio", "GIMP", "Photoshop",
];

export const examSaveSteps = [
  { label: "rapid diagnosis:", text: "identified the OS failure as the bottleneck within seconds, ruling out hardware issues." },
  { label: "creative solution:", text: "swapped the failing drive for a pre-configured Ubuntu/LibreOffice SSD i kept on hand." },
  { label: "result:", text: "the student resumed the exam in under 5 minutes with full document compatibility and zero data loss. 🎉" },
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
    description: "python workflow that extracts work rosters from unstructured text or images and converts them into standardised, perfectly formatted calendar events.",
    icon: Calendar,
    tech: ["Python", "LLM", "iCal"],
  },
  {
    title: "raycast environment macros",
    description: "custom Raycast macros and AppleScript keybinds designed to instantly open pre-configured development and support environments with a single command.",
    icon: MousePointer2,
    tech: ["Raycast", "AppleScript", "macOS"],
  },
  {
    title: "server update pipeline",
    description: "automated update workflows using Winget and UnigetUI to keep home server applications, services, and games current with minimal manual intervention.",
    icon: Cpu,
    tech: ["Winget", "UnigetUI", "CMD"],
  },
];

export const scriptingTools = [
  { name: "Python", tag: "automation", isAccent: true },
  { name: "AppleScript", tag: "macros", isAccent: false },
  { name: "CMD", tag: "system admin", isAccent: false },
];
