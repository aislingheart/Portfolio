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
  MousePointer2, Globe, Lock, Layers, LayoutDashboard,
} from "lucide-react";

// ── Projects ──────────────────────────────────────────────────────────
/**
 * Curated rather than auto-fetched from the GitHub API.
 *
 * The public profile has other repos that aren't worth listing on their own:
 * forks like OmniWM, empty or single-file repos (`web`, embed-weather,
 * penelope), and companion feeds like komorebi-extensions. The five entries
 * below with a `githubUrl` are the standalone projects that represent real
 * work, and every one of them is public.
 *
 * `githubUrl` is optional; add it when a project has a public repo.
 */
export interface Project {
  title: string;
  summary: string;
  featuredSummary?: string;
  details: string[];
  tech: string[];
  category: "code" | "infrastructure" | "repair";
  status?: "active" | "ongoing" | "complete";
  featured?: boolean;
  visual?: "komorebi" | "myhrt" | "homelab";
  githubUrl?: string;
  demoUrl?: string;
  caseStudyPath?: string;
}

export const projects: Project[] = [
  {
    title: "Komorebi",
    summary:
      "a fast, extensible Android command palette, universal launcher, and Raycast / Vicinae extension runtime built with Jetpack Compose and Material 3 Expressive.",
    featuredSummary:
      "open-source Android command palette and universal launcher running Raycast & Vicinae JS/TS extensions natively in Compose, with offline ML Kit photo search, live calculator/converter, and on-device Health Connect assistant.",
    details: [
      "universal command palette searching apps, shortcuts, contacts, local files, system settings, custom web engines, and third-party providers — with context-aware ranking and offline ML Kit OCR semantic photo search.",
      "native Raycast Store & Vicinae Store browser with automatic Android compatibility analysis (Full / Partial Support), running @raycast/api and @vicinae/api JS/TS extensions natively in Jetpack Compose with OAuth and deep-link support.",
      "built-in productivity tools: live math, unit, timezone & currency converter (cached rates + offline fallback), clipboard history, quicklinks & dynamic snippets, emoji/kaomoji picker, native internet speed test, nearby bus times, and QR/UUID/password generators.",
      "on-device assistant and private Health Connect queries (steps, sleep, heart rate, weight, workouts) with deterministic tools for media, alarms, notification digests, calendar, tasks, routines, and screen context.",
      "Pixel-inspired Material 3 Expressive UI (Pitch-Black AMOLED, AGSL gesture ripple reveal, default assistant & universal search gesture triggers), optional Shizuku/root privileged commands, JSON config backup, and built-in GitHub Releases updater (Android 8.0+, MIT).",
    ],
    tech: ["Kotlin", "Android", "Jetpack Compose", "Material 3", "QuickJS", "ML Kit OCR", "Health Connect", "Shizuku"],
    category: "code",
    status: "active",
    featured: true,
    visual: "komorebi",
    githubUrl: "https://github.com/aislingheart/komorebi",
  },
  {
    title: "nginx subpath routing",
    summary:
      "a write-up of serving many self-hosted apps from one hostname and one port behind path prefixes, weighted toward the failure modes rather than the happy path.",
    details: [
      "the four things that actually break, none of which point at the cause: the proxy_pass trailing slash, the websocket map, sub_filter silently no-op'ing on gzipped bodies, and apps needing their own base URL set.",
      "config validated with nginx -t rather than eyeballed, which is how the map-directive context error got caught.",
      "the `sub_filter` section explains why the defaults make a page half-work instead of fail — the most confusing symptom to debug.",
    ],
    tech: ["nginx", "Docker", "sub_filter", "reverse proxy"],
    category: "code",
    status: "complete",
    githubUrl: "https://github.com/aislingheart/nginx-subpath-routing",
  },
  {
    title: "this portfolio",
    summary:
      "the site you're looking at. a dark glassmorphic portfolio built with React 19, TypeScript and Tailwind, deployed to GitHub Pages.",
    details: [
      "cursor-reactive particle canvas with an autonomous mode for touch devices.",
      "lazy-loaded routes, code-split per page to keep the initial bundle small.",
      "full keyboard navigation, visible focus rings, printable CV route, and reduced-motion support.",
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
    featuredSummary:
      "offline-first Kotlin Android app simulating serum estradiol & testosterone curves over time by route and ester type, with reboot-safe reminders.",
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
    featured: true,
    visual: "myhrt",
    githubUrl: "https://github.com/aislingheart/MyHRT",
  },
  {
    title: "homelab media & AI server",
    summary:
      "a self-hosted stack on CachyOS combining media automation, VPN namespace isolation, GPU-accelerated Jellyfin/Unmanic, and a local LLM behind one nginx reverse proxy.",
    featuredSummary:
      "self-hosted CachyOS server running 10+ containerized services behind one nginx subpath proxy, Gluetun VPN killswitch isolation, and RTX 5050 GPU acceleration.",
    details: [
      "full *arr automation stack (Sonarr, Radarr, Lidarr, Prowlarr, Bazarr) driving qBittorrent on a 2TB library mount, all sharing Gluetun's VPN network namespace with an always-on firewall killswitch.",
      "nginx reverse proxy with subpath routing, so ten services live under one host without port juggling.",
      "used surgical nginx sub_filter rules to fix Open WebUI's hardcoded asset paths and SvelteKit base-path routing under /ai/.",
      "ollama serving gemma2 locally alongside RTX 5050 hardware transcoding in Jellyfin and NVENC HEVC compression in Unmanic.",
      "everything in docker compose with healthcheck gating, so the media and AI stacks come up cleanly from one command each.",
      "migrated the whole stack off Windows to CachyOS, repairing the SQLite database paths left behind by the Windows install.",
      "the Homarr dashboard is provisioned over its tRPC API from a JSON layout, so it's reviewable in a diff and reproducible after a rebuild.",
    ],
    tech: ["CachyOS", "Docker Compose", "nginx", "Gluetun", "Jellyfin", "Unmanic", "Sonarr", "Radarr", "Prowlarr", "qBittorrent", "Ollama", "Open WebUI", "Homarr", "Python"],
    category: "infrastructure",
    status: "active",
    featured: true,
    visual: "homelab",
    githubUrl: "https://github.com/aislingheart/homelab-stack",
    caseStudyPath: "/support-admin",
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
    caseStudyPath: "/hardware",
  },
];

// ── Home ──────────────────────────────────────────────────────────────
export const qualifications = [
  "IT support & systems admin.",
  "Linux & Docker infrastructure.",
  "hardware diagnostic specialist.",
  "Android & tooling developer.",
  "workflow automation builder.",
  "micro-soldering technician.",
];

// ── About ─────────────────────────────────────────────────────────────
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

export const quickFacts = [
  { label: "based in", value: "Limerick, Ireland 🇮🇪" },
  { label: "target roles", value: "IT Support · Sysadmin · Android" },
  { label: "fav OS", value: "Linux (CachyOS) / Android / macOS" },
  { label: "go-to tool", value: "the spudger 🫡" },
  { label: "fav repair", value: "the more complex, the better" },
  { label: "music", value: "vocaloid 🎵" },
  { label: "pets", value: "Milo 🐱 Luna 🐱 Becky 🐶" },
  { label: "hobbies", value: "📸 🎮 🎬" },
  { label: "fun fact", value: "fluent in Irish 🇮🇪" },
  { label: "obsession", value: "Pixel ↔ Mac continuity" },
];

export const coreSkills = [
  "root-cause diagnostics", "customer support", "incident triage",
  "clear documentation", "attention to detail", "time management",
  "cross-platform troubleshooting", "adaptability", "clear communication",
];

export type CapabilityTier = "daily" | "production" | "hands-on";

export interface CapabilityItem {
  name: string;
  tier: CapabilityTier;
  proof: string;
}

export interface CapabilityCategory {
  category: string;
  items: CapabilityItem[];
}

export const technicalCapabilities: CapabilityCategory[] = [
  {
    category: "systems & infrastructure",
    items: [
      {
        name: "Linux (CachyOS / Arch / Ubuntu)",
        tier: "daily",
        proof: "Self-hosted server admin, systemd, SQLite migrations, Docker Compose stacks, live exam Ubuntu SSD rescues.",
      },
      {
        name: "Docker & Docker Compose",
        tier: "production",
        proof: "10+ containerized media, download, and local AI services with healthcheck gating and GPU passthrough.",
      },
      {
        name: "nginx Reverse Proxy",
        tier: "production",
        proof: "Subpath routing, WebSocket $connection_upgrade maps, surgical sub_filter rewrites, validated via nginx -t.",
      },
      {
        name: "Windows & macOS",
        tier: "daily",
        proof: "Workstation provisioning, Winget/UnigetUI automation, ticketing support, Raycast/AppleScript macros.",
      },
      {
        name: "Android & iOS Internals",
        tier: "daily",
        proof: "Shizuku/ADB shell tooling, Accessibility & Notification APIs, iOS kernel panic log triage and component repair.",
      },
      {
        name: "VMware & WSL",
        tier: "hands-on",
        proof: "Isolated Linux security VMs (Kali), cross-OS dev and test environments.",
      },
    ],
  },
  {
    category: "development & automation",
    items: [
      {
        name: "Kotlin & Jetpack Compose",
        tier: "production",
        proof: "Built and shipped Komorebi (command palette + QuickJS runner) and MyHRT (pharmacokinetics simulator) as Android APKs.",
      },
      {
        name: "TypeScript & React",
        tier: "production",
        proof: "React 19 + Vite + Tailwind portfolio, plus TypeScript/JS extensions targeting @raycast/api and @vicinae/api.",
      },
      {
        name: "Bash / Zsh, Python & PowerShell",
        tier: "daily",
        proof: "Unattended server update pipelines, JSON-driven Homarr dashboard provisioning, string/build validation scripts.",
      },
      {
        name: "Git, Gradle & GitHub Actions",
        tier: "daily",
        proof: "Multi-ABI Android release builds, automated CI type-checking, GitHub Releases auto-updaters, GitHub Pages deploys.",
      },
    ],
  },
  {
    category: "networking & remote",
    items: [
      {
        name: "Gluetun VPN Namespace Isolation",
        tier: "production",
        proof: "Routes 7 containers through an OpenVPN killswitch via shared service network namespaces and outbound firewall rules.",
      },
      {
        name: "Tailscale, SSH & Wake-on-LAN",
        tier: "daily",
        proof: "Mesh VPN access to homelab services, key-based SSH administration, Raspberry Pi WOL power triggers.",
      },
      {
        name: "Wireshark & Remote Support",
        tier: "hands-on",
        proof: "Packet inspection, RDP/Parsec low-latency remote sessions, network adapter and routing diagnostics.",
      },
    ],
  },
  {
    category: "hardware & diagnostics",
    items: [
      {
        name: "iOS / Android Repair & QA",
        tier: "daily",
        proof: "Screens, batteries, charging ports, flex assemblies, and pre/post-closure bench validation at Fone Connection.",
      },
      {
        name: "Kernel Panic Log Analysis",
        tier: "daily",
        proof: "Pinpointing SMC crashes, missing thermal sensors, and power IC faults via 3uTools and iOS diagnostic logs.",
      },
      {
        name: "Micro-Soldering",
        tier: "hands-on",
        proof: "Component-level work under magnification including 2-point Face ID and earpiece flex restorations.",
      },
    ],
  },
];

export interface Job {
  title: string;
  company: string;
  dates: string;
  description: string;
  highlights: string[];
  isCurrent?: boolean;
}

export const jobs: Job[] = [
  {
    title: "sales assistant / mobile repair tech",
    company: "Fone Connection",
    dates: "Mar 2025 - Present",
    isCurrent: true,
    description:
      "on the bench handling mobile hardware repairs and software troubleshooting across iOS and Android, paired with front-of-house customer support in a busy shop environment. alongside the role, independently building production Linux infrastructure, Android apps, and automation tooling.",
    highlights: [
      "diagnose hardware and board-level faults across iOS and Android using kernel panic logs, thermal/SMC traces, and systematic component isolation.",
      "perform screens, batteries, flex cables, and micro-soldering repairs under magnification with pre- and post-closure bench QA.",
      "translate complex technical failures into clear, jargon-free explanations for walk-in customers so handovers stay calm and transparent.",
    ],
  },
  {
    title: "IT support technician assistant",
    company: "EPS Water Ireland",
    dates: "Feb 2023",
    description:
      "assisted internal IT staff with workstation provisioning, legacy hardware upgrades, and day-to-day user support across office PCs and mobile devices.",
    highlights: [
      "imaged and prepped fresh Windows workstations and mobile devices for onboarding staff.",
      "upgraded legacy office hardware (storage and memory) to extend device lifespan and cut boot/app slowdowns.",
      "worked alongside the IT team on incoming ticketing queues to triage and resolve staff hardware and software issues.",
    ],
  },
  {
    title: "exam supervisor & tech support",
    company: "Cork Educate Together",
    dates: "Jun 2021 - Jul 2021",
    description:
      "provided live, on-site IT support and supervision during state/school exam sessions where downtime directly risked student progress.",
    highlights: [
      "resolved sudden hardware, OS boot, and peripheral failures on the fly under strict time pressure.",
      "executed a live SSD swap with a pre-loaded Ubuntu + LibreOffice drive to recover a crashed Windows exam laptop in under 5 minutes with zero lost work.",
    ],
  },
];

export interface Education {
  title: string;
  institution: string;
  dates: string;
}

export const education: Education[] = [
  { title: "leaving certificate", institution: "Coláiste Dáibhéid", dates: "Completed May 2025" },
  { title: "junior certificate", institution: "Cork Educate Together", dates: "Completed Jun 2024" },
];

// ── Hardware ──────────────────────────────────────────────────────────
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
    subtitle: "from bootloop to reliable daily driver",
    description:
      "a heavily damaged iPhone 12 came in with a shattered screen, dead battery, broken earpiece, and a constant bootloop. diagnosed the board panic, replaced the components, micro-soldered the flex, and brought it back to 100% functionality.",
    tags: ["iOS", "Refurbishment", "Diagnostics"],
    details: [
      "traced the bootloop cause by analyzing kernel panic logs instead of blindly swapping parts.",
      "replaced screen and battery with tested components.",
      "repaired the Face ID / earpiece flex via micro-soldering to restore audio and proximity sensing.",
      "ran post-repair stress and thermal tests before handover so the fix held long term.",
    ],
  },
  {
    title: "panic log analysis: SMC crash",
    subtitle: "deep diagnostic challenge",
    description:
      "diagnosed a device restarting randomly every few minutes after a third-party repair. used kernel panic logs to trace the issue back to faulty thermal sensors and corrupted battery monitoring data.",
    tags: ["Panic Logs", "SMC", "Thermal Sensors"],
    details: [
      "extracted and parsed panic-full logs via 3uTools and iOS analytics.",
      "identified the SMC watchdog reset triggered by missing thermal sensor readings.",
      "isolated corrupted battery gas-gauge data as a secondary failure point.",
      "explained the root cause clearly to the customer so they understood why the prior repair failed.",
    ],
  },
];

export const hardwareSkills = [
  {
    icon: Search,
    title: "panic log mastery 🔍",
    desc: "reading kernel panic logs to pinpoint exact hardware failures in SMC, thermal sensors, and power ICs instead of guessing.",
  },
  {
    icon: Zap,
    title: "micro-soldering ⚡",
    desc: "component-level work under magnification, including 2-point soldering on delicate Face ID and earpiece flex cables.",
  },
  {
    icon: ShieldAlert,
    title: "quality control ✅",
    desc: "pre-closure bench testing and thorough post-repair validation checks to ensure long-term device reliability.",
  },
];

export interface PanicAnnotation {
  line: string;
  highlight?: boolean;
  note?: string;
}

export const panicLogSample: PanicAnnotation[] = [
  { line: `"bug_type": "210", "os_version": "iPhone OS 17.x"` },
  { line: `panic(cpu 0 caller 0xfffffff01a2c4b10):` },
  {
    line: `  userspace watchdog timeout: no successful checkins from thermalmonitord in 180s`,
    highlight: true,
    note: "3-minute reboot loop signature — points directly at thermal/SMC telemetry rather than NAND or software.",
  },
  {
    line: `  Missing sensor(s): Prs0, TG0B`,
    highlight: true,
    note: "Prs0 = barometric/charging port flex sensor; TG0B = battery gas-gauge thermal line. narrows bench test to 2 flexes immediately.",
  },
  { line: `  service: thermalmonitord, total successful checkins since wake: 0` },
  { line: `  BootArgs: ... i2c_bus_error_count=4` },
];

// ── Support & Admin ───────────────────────────────────────────────────
export interface LabService {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const labServices: LabService[] = [
  {
    name: "nginx Subpath Proxy",
    description: "single port-80 entry point routing 10 self-hosted apps by path prefix, with WebSocket upgrade maps and sub_filter rewrites.",
    icon: Globe,
  },
  {
    name: "Gluetun VPN Gateway",
    description: "OpenVPN container with an always-on killswitch; 7 download and *arr containers share its network namespace so traffic cannot leak.",
    icon: Lock,
  },
  {
    name: "Docker Compose Stacks",
    description: "reproducible media and AI compose files on CachyOS with healthcheck dependencies and clean one-command updates.",
    icon: Database,
  },
  {
    name: "Jellyfin & Unmanic",
    description: "RTX 5050 hardware-accelerated streaming and automated NVENC HEVC library compression over a 2TB mount.",
    icon: Server,
  },
  {
    name: "Ollama & Open WebUI",
    description: "local LLM inference (gemma2) exposed cleanly at /ai/ with custom SvelteKit base-path and auth-guard sub_filter fixes.",
    icon: Terminal,
  },
  {
    name: "Homarr (Dashboard-as-Code)",
    description: "root dashboard provisioned over Homarr's tRPC API from a version-controlled JSON layout so rebuilds are repeatable.",
    icon: LayoutDashboard,
  },
  {
    name: "Tailscale Mesh VPN",
    description: "encrypted remote access to homelab services from anywhere without exposing ports to the public internet.",
    icon: Shield,
  },
  {
    name: "WOL Beacon",
    description: "Raspberry Pi configured as a Wake-on-LAN trigger for remote machine power management.",
    icon: Zap,
  },
  {
    name: "Kali Linux VM",
    description: "isolated VM for packet analysis, network testing, and hands-on security labs.",
    icon: Network,
  },
];

export interface OsCapability {
  name: string;
  tier: CapabilityTier;
  desc: string;
}

export const operatingSystems: OsCapability[] = [
  { name: "Linux (CachyOS / Arch / Ubuntu)", tier: "daily", desc: "Docker host admin, nginx reverse proxy, systemd, SQLite migrations, live SSD rescues." },
  { name: "macOS", tier: "daily", desc: "primary dev workstation, CLI tooling, Raycast & AppleScript automation." },
  { name: "Windows", tier: "daily", desc: "workstation provisioning, ticketing support, PowerShell & Winget automation." },
  { name: "Android & iOS", tier: "daily", desc: "Kotlin/Compose app development, ADB/Shizuku, kernel panic log diagnostics." },
];

export const techStack = [
  "Linux (CachyOS/Ubuntu)", "Docker Compose", "nginx", "Gluetun",
  "Tailscale", "SSH", "Git", "Kotlin", "TypeScript", "Python",
  "Bash / Zsh", "PowerShell", "VMware", "WSL", "Wireshark",
  "3uTools", "RDP / Parsec",
];

export const examSaveSteps = [
  { label: "rapid diagnosis:", text: "spotted the OS boot crash right away and ruled out hardware failure within seconds." },
  { label: "creative solution:", text: "swapped in a spare SSD pre-loaded with Ubuntu and LibreOffice that I had ready." },
  { label: "result:", text: "the student was back working on their exam in under 5 minutes with zero lost work." },
];

export const subpathIncidentSteps = [
  {
    label: "symptom:",
    text: "Open WebUI's login page rendered at /ai/ and POST /ai/api/v1/auths/signin returned HTTP 200, yet the browser immediately showed a 404 while every nginx log line stayed green.",
  },
  {
    label: "root cause:",
    text: "SvelteKit bakes base: \"\" into the HTML, so the client-side router tried to match /ai/ from root and failed before any request hit nginx — then fixing base exposed an infinite ?redirect= loop on pathname!==\"/auth\".",
  },
  {
    label: "fix & verification:",
    text: "paired surgical nginx sub_filter rewrites for base and the auth guard with a proper $connection_upgrade WebSocket map, validated with nginx -t and live browser inspection.",
  },
];

// ── Automation ────────────────────────────────────────────────────────
export interface AutomationProject {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
}

export const automations: AutomationProject[] = [
  {
    title: "Komorebi command palette & extension runtime",
    description:
      "Android universal launcher and command palette running Raycast & Vicinae JS/TS extensions natively in Compose, with live conversions, quicklinks, dynamic snippets, on-device assistant routines, and optional Shizuku/root system actions.",
    icon: Terminal,
    tech: ["Kotlin", "Jetpack Compose", "QuickJS", "Shizuku"],
  },
  {
    title: "Homarr dashboard-as-code",
    description:
      "provisions the homelab dashboard over Homarr's tRPC API from a version-controlled JSON layout, so layout changes are reviewable in git diffs and reproducible after any rebuild.",
    icon: Layers,
    tech: ["Python", "JSON", "tRPC API", "Docker"],
  },
  {
    title: "server update pipeline",
    description:
      "non-interactive update scripts driving Winget, UnigetUI, and Docker Compose pulls with traceable logs so systems stay patched without manual babysitting.",
    icon: Cpu,
    tech: ["Docker Compose", "Bash", "Winget", "PowerShell"],
  },
  {
    title: "raycast environment macros",
    description:
      "custom Raycast commands and AppleScript shortcuts that wrap repetitive terminal invocations and daily support tools behind a single keystroke.",
    icon: MousePointer2,
    tech: ["Raycast", "AppleScript", "macOS"],
  },
];

export const scriptingTools = [
  { name: "Bash / Zsh", tag: "linux & docker ops", isAccent: true },
  { name: "Python", tag: "api provisioning & validation", isAccent: true },
  { name: "Kotlin", tag: "android & extension runtimes", isAccent: false },
  { name: "PowerShell / CMD", tag: "windows automation", isAccent: false },
  { name: "AppleScript", tag: "macos macros", isAccent: false },
];
