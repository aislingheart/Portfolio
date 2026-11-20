import { Terminal, Shield, Cpu, Lock, Globe, Layers, HardDrive, Sparkles } from "lucide-react";
import searchOverlayImg from "../assets/komorebi/search-overlay.webp";
import searchCalculatorImg from "../assets/komorebi/search-calculator.webp";
import extensionsStoreImg from "../assets/komorebi/extensions-store.webp";
import settingsImg from "../assets/komorebi/settings.webp";
import searchSettingsImg from "../assets/komorebi/search-settings.webp";

const komorebiScreens = [
  { src: searchOverlayImg, label: "Command Palette", alt: "Komorebi universal command palette overlay" },
  { src: searchCalculatorImg, label: "Calculator & Currency", alt: "Komorebi live calculator and currency converter" },
  { src: extensionsStoreImg, label: "Extensions & Store", alt: "Komorebi Raycast and Vicinae extensions store" },
  { src: settingsImg, label: "Settings", alt: "Komorebi Material 3 Expressive settings" },
  { src: searchSettingsImg, label: "Search & Triggers", alt: "Komorebi search and gesture trigger settings" },
];

/**
 * Real Komorebi app screenshots from GitHub paired with a concise
 * architecture strip covering universal search, extension runtime, and assistant.
 */
export function KomorebiVisual() {
  return (
    <div
      className="rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.08] p-4 sm:p-5 space-y-4 overflow-hidden"
      aria-label="Komorebi screenshots and architecture overview"
    >
      {/* Real screenshots strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {komorebiScreens.map((shot) => (
          <figure key={shot.label} className="space-y-1.5 group/shot">
            <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-black/50 aspect-[9/19.5] shadow-md">
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/shot:scale-[1.03]"
              />
            </div>
            <figcaption className="text-[11px] font-mono text-zinc-400 text-center truncate">
              {shot.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* 3-stage capability pipeline */}
      <div className="grid sm:grid-cols-3 gap-2.5 pt-1 font-mono text-xs">
        <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
            <Layers size={13} className="text-accent" />
            <span>1. universal search</span>
          </div>
          <p className="text-[11px] text-zinc-500 font-sans leading-snug">
            Apps, files, contacts, live calculator/currency, and offline ML Kit OCR photo search
          </p>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
            <Terminal size={13} className="text-accent" />
            <span>2. extension store</span>
          </div>
          <p className="text-[11px] text-zinc-500 font-sans leading-snug">
            Native Raycast &amp; Vicinae JS/TS runtime in Compose with compatibility checks &amp; OAuth
          </p>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
            <Sparkles size={13} className="text-accent" />
            <span>3. assistant &amp; device</span>
          </div>
          <p className="text-[11px] text-zinc-500 font-sans leading-snug">
            On-device assistant, private Health Connect queries, AGSL ripple trigger &amp; optional Shizuku/root
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Illustrative pharmacokinetics serum-level simulation chart matching MyHRT's
 * multi-dose ester modelling across administration routes.
 */
export function MyHrtVisual() {
  return (
    <div
      className="rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.08] p-4 sm:p-5 space-y-3 overflow-hidden"
      aria-label="Illustrative pharmacokinetics serum concentration curve modeled by MyHRT"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
        <span className="text-zinc-300">serum E2 simulation · steady-state curve</span>
        <div className="flex items-center gap-3 text-zinc-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-soft" />
            IM / SubQ ester
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            sublingual
          </span>
        </div>
      </div>

      <svg
        viewBox="0 0 420 120"
        className="w-full h-28 overflow-visible"
        role="img"
        aria-label="Serum estradiol concentration over days showing smooth ester curve versus rapid sublingual peaks"
      >
        <defs>
          <linearGradient id="myhrt-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#e74c3c" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Horizontal reference grid */}
        <line x1="0" y1="25" x2="420" y2="25" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 4" />
        <line x1="0" y1="60" x2="420" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 4" />
        <line x1="0" y1="95" x2="420" y2="95" stroke="rgba(255,255,255,0.06)" />

        {/* Target range band */}
        <rect x="0" y="34" width="420" height="36" fill="rgba(16,185,129,0.05)" />

        {/* Sublingual rapid-peak comparison curve */}
        <path
          d="M 0 92 Q 20 35, 45 78 T 95 76 Q 115 32, 140 78 T 190 76 Q 210 34, 235 78 T 285 76 Q 305 33, 330 78 T 380 76 Q 400 40, 420 74"
          fill="none"
          stroke="rgba(161,161,170,0.45)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Smooth steady-state injectable ester curve */}
        <path
          d="M 0 88 C 35 28, 70 30, 120 56 C 155 24, 195 26, 240 54 C 275 24, 315 26, 360 52 C 385 32, 405 30, 420 44 L 420 95 L 0 95 Z"
          fill="url(#myhrt-fill)"
        />
        <path
          d="M 0 88 C 35 28, 70 30, 120 56 C 155 24, 195 26, 240 54 C 275 24, 315 26, 360 52 C 385 32, 405 30, 420 44"
          fill="none"
          stroke="#e74c3c"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Dose markers */}
        {[120, 240, 360].map((x) => (
          <g key={x}>
            <circle cx={x} cy={54} r="3.5" fill="#0a0a0c" stroke="#e74c3c" strokeWidth="2" />
            <text x={x} y="112" textAnchor="middle" fill="rgba(161,161,170,0.65)" fontSize="9" fontFamily="monospace">
              dose
            </text>
          </g>
        ))}

        <text x="6" y="46" fill="rgba(52,211,153,0.75)" fontSize="8.5" fontFamily="monospace">
          target band
        </text>
      </svg>
    </div>
  );
}

/**
 * Accurate architectural topology of the self-hosted CachyOS server stack:
 * Tailscale/LAN -> nginx subpath proxy -> Homarr, RTX 5050 GPU stack, and
 * Gluetun VPN-isolated *arr/qBittorrent namespace.
 */
export function HomelabDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl bg-[#0a0a0c]/80 border border-white/[0.08] p-4 sm:p-6 space-y-4 overflow-hidden"
      aria-label="Homelab server architecture diagram showing Tailscale and LAN ingress through nginx subpath proxy to Homarr, GPU media and AI stack, and Gluetun VPN namespace"
    >
      {/* Top Ingress Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
          <Globe size={15} className="text-zinc-400 shrink-0" />
          <div>
            <div className="text-xs font-mono text-zinc-200">LAN / Tailscale Mesh</div>
            <div className="text-[11px] text-zinc-500">zero public ports exposed</div>
          </div>
        </div>

        <div className="hidden sm:block text-zinc-600 font-mono text-xs shrink-0">──▶</div>

        <div className="flex-1 flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-accent/10 border border-accent/25">
          <div className="flex items-center gap-2.5">
            <Shield size={15} className="text-accent shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-100">nginx reverse proxy (:80)</div>
              <div className="text-[11px] text-zinc-400">
                subpath routing · sub_filter · WebSocket upgrade map
              </div>
            </div>
          </div>
          <span className="hidden md:inline text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-300">
            CachyOS Host
          </span>
        </div>
      </div>

      {/* Three Downstream Zones */}
      <div className={`grid ${compact ? "md:grid-cols-3" : "md:grid-cols-3"} gap-3`}>
        {/* Zone 1: Dashboard */}
        <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-accent">/</span>
            <span className="text-[10px] font-mono text-zinc-500">dashboard-as-code</span>
          </div>
          <div className="text-sm font-medium text-zinc-200">Homarr v1</div>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            Provisioned from versioned JSON over tRPC API; single entry hub for all internal apps.
          </p>
        </div>

        {/* Zone 2: GPU Media + AI */}
        <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-accent">/jellyfin · /unmanic · /ai</span>
            <Cpu size={13} className="text-zinc-400" />
          </div>
          <div className="text-sm font-medium text-zinc-200">RTX 5050 GPU Stack</div>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            Jellyfin HW transcoding, Unmanic NVENC HEVC compression, Open WebUI → Ollama (gemma2).
          </p>
        </div>

        {/* Zone 3: Gluetun Isolated Namespace */}
        <div className="p-3.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-emerald-400">service:gluetun</span>
            <Lock size={13} className="text-emerald-400" />
          </div>
          <div className="text-sm font-medium text-zinc-200">VPN-Isolated *arr Stack</div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            qBittorrent, Sonarr, Radarr, Lidarr, Prowlarr, Bazarr &amp; Byparr behind OpenVPN killswitch.
          </p>
        </div>
      </div>

      {/* Bottom Storage Bar */}
      {!compact && (
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
          <span className="inline-flex items-center gap-1.5 text-zinc-400">
            <HardDrive size={13} className="text-accent" />
            shared storage mount: /mnt/2TB/JellyFin/Media → /data
          </span>
          <span>healthcheck gated · FIREWALL_OUTBOUND_SUBNETS=172.16.0.0/12</span>
        </div>
      )}
    </div>
  );
}
