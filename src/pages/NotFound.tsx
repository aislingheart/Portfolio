import { m } from "motion/react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Terminal } from "lucide-react";
import { fadeInUp } from "../lib/theme";

export default function NotFound() {
  return (
    <m.section
      {...fadeInUp}
      className="glass-card p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[60vh]"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(192,57,43,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <p className="font-mono text-accent text-sm mb-4 relative z-10">error 404</p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 relative z-10">
        this page doesn't exist.
      </h1>
      <p className="text-zinc-400 max-w-md leading-relaxed mb-10 relative z-10">
        the link you followed is broken, or the page was moved. head back to the
        homepage, or open the terminal and check the logs.
      </p>

      <div className="flex flex-wrap gap-4 justify-center relative z-10">
        <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/"
            className="px-6 py-3 bg-zinc-100 text-zinc-900 font-medium rounded-full hover:bg-white transition-colors flex items-center gap-2"
          >
            <HomeIcon size={16} /> back to home
          </Link>
        </m.div>
        <m.p className="font-mono text-xs text-zinc-600 self-center">
          <Terminal size={12} className="inline" /> try <code>help</code> in the terminal
        </m.p>
      </div>
    </m.section>
  );
}
