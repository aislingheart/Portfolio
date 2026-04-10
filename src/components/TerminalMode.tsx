import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "motion/react";

interface TerminalModeProps {
  onClose: () => void;
}

export default function TerminalMode({ onClose }: TerminalModeProps) {
  const [history, setHistory] = useState<React.ReactNode[]>([
    "aisling-os v1.0.4 (tty1)",
    "run 'neofetch' to view system specs, or 'help' for available commands.",
    ""
  ]);
  const [inputVal, setInputVal] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom and keep input focused
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    // Prevent focus loss
    const keepFocus = () => inputRef.current?.focus();
    window.addEventListener("click", keepFocus);
    inputRef.current?.focus();
    return () => window.removeEventListener("click", keepFocus);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    let response: React.ReactNode | React.ReactNode[] = "";

    if (!trimmed) {
      setHistory(prev => [...prev, `guest@aisling-os:~$ ${cmd}`]);
      return;
    }

    const args = trimmed.split(" ");
    const base = args[0].toLowerCase();

    switch (base) {
      case "help":
        response = [
          "Available commands:",
          "  ls           List directory contents",
          "  cat [file]   Read a file",
          "  whoami       Print effective userid",
          "  uname        Print operating system name",
          "  clear        Clear the terminal screen",
          "  neofetch     System information tool",
          "  exit         Close the terminal"
        ];
        break;
      case "ls":
        response = "about.txt  hardware.md  resume.pdf  projects/  syslog  config.yaml";
        break;
      case "cat":
        if (args[1] === "about.txt") {
          response = "hardware diagnostic specialist, software empath, and terminal enthusiast.";
        } else if (args[1] === "hardware.md") {
          response = "WARNING: logic board schematic requires root privileges to view.";
        } else if (args[1] === "resume.pdf") {
          response = "cat: resume.pdf: cannot display binary file... just kidding, it's pretty good though.";
        } else if (args[1] === "config.yaml") {
          response = [
            "theme: dark",
            "accent: #c0392b",
            "easter_eggs: true",
            "coffee_level: critical"
          ];
        } else if (args[1] === "syslog") {
          response = "kernel: [12.345] BUG: scheduling while atomic... wait, just a CSS issue.";
        } else if (!args[1]) {
          response = "cat: missing file operand";
        } else if (args[1] === "projects/") {
          response = "cat: projects/: Is a directory";
        } else {
          response = `cat: ${args[1]}: No such file or directory`;
        }
        break;
      case "whoami":
        response = "guest";
        break;
      case "uname":
        response = "AislingOS x86_64";
        break;
      case "neofetch":
        const infoCol = "text-zinc-300 font-mono";
        const labelCol = "text-[#c0392b] font-bold font-mono";
        const userHost = "text-[#c0392b] font-bold font-mono";
        
        // Sampled beige/peach color directly from the provided image
        const cat = "text-[#d2b09a] font-bold font-mono";

        const Row = ({ logo, l, v }: { logo: React.ReactNode, l: string, v: string }) => (
          <div className="grid grid-cols-[260px_1fr] md:grid-cols-[300px_1fr] gap-2 md:gap-4 items-center">
            <span className={`${cat} whitespace-pre`}>{logo}</span>
            <span className={infoCol}>{l ? <span className={labelCol}>{l}: </span> : ""}{l ? "" : <span className={userHost}>{v}</span>}</span>
          </div>
        );

        response = [
          <Row key="1" logo="                                   " l="" v="aislingcreed@Aisling-Portfolio.local" />,
          <Row key="2" logo="       .=#@*@@%#+++*@*             " l="" v="------------------------------------" />,
          <Row key="3" logo="         :=##+=-:---=--.           " l="OS" v="Aisling Web Environment" />,
          <Row key="4" logo="          =--++=-.--++-=*          " l="Host" v="Portfolio Simulator" />,
          <Row key="5" logo="         +*+=:..:.    :*@@         " l="Kernel" v="React 18.2" />,
          <Row key="6" logo="       :@%+==. .=-  .-#+=%%        " l="Uptime" v="Too many hours" />,
          <Row key="7" logo="    .#@@@**#*=-.-=::-++=::@        " l="Packages" v="42 (npm)" />,
          <Row key="8" logo="  -@@@#+#*+**-.--  +--:  :@:       " l="Shell" v="bash 5.9" />,
          <Row key="9" logo=":@%@#*+======++=:  .::. .=%+       " l="Resolution" v="1920x1080" />,
          <Row key="10" logo="%*##+++=-+===:.. ::.    :+@@       " l="DE" v="Framer Motion" />,
          <Row key="11" logo="*=#+++==-=-:::.         .-@@       " l="WM" v="Vite Compositor" />,
          <Row key="12" logo="+-**++++++=:            .-%@       " l="WM Theme" v="Crimson Dark" />,
          <Row key="13" logo="+-+#*#***++=-....       :-##       " l="Terminal" v="React.js" />,
          <Row key="14" logo="*-=*+*#***+*+=:::........:+.       " l="Terminal Font" v="Monaco 13" />,
          <Row key="15" logo="#-=+==*@#*++++++-::::::--:         " l="CPU" v="Human Brain" />,
          <Row key="16" logo="                                   " l="GPU" v="Hardware Diagnostic Scope" />,
          <Row key="17" logo="                                   " l="Memory" v="Full of schematics" />,
          <div key="18" className="grid grid-cols-[260px_1fr] md:grid-cols-[300px_1fr] gap-2 md:gap-4 items-center mt-2">
            <span className="whitespace-pre"> </span>
            <div className="flex gap-0">
               <div className="w-4 h-4 bg-zinc-900"></div><div className="w-4 h-4 bg-red-600"></div><div className="w-4 h-4 bg-green-600"></div><div className="w-4 h-4 bg-yellow-600"></div><div className="w-4 h-4 bg-blue-600"></div><div className="w-4 h-4 bg-purple-600"></div><div className="w-4 h-4 bg-cyan-600"></div><div className="w-4 h-4 bg-zinc-200"></div>
            </div>
          </div>
        ];
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        onClose();
        return;
      default:
        response = `bash: ${base}: command not found`;
    }

    setHistory(prev => {
      const updated = [...prev, `guest@aisling-os:~$ ${cmd}`];
      if (Array.isArray(response)) {
        return [...updated, ...response, ""];
      }
      return [...updated, response, ""];
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
      setInputVal("");
    } else if (e.ctrlKey && e.key === "c") {
      setHistory(prev => [...prev, `guest@aisling-os:~$ ${inputVal}`, "^C", ""]);
      setInputVal("");
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="fixed inset-0 z-[100] bg-[#050000] text-zinc-300 font-mono p-4 md:p-8 overflow-y-auto"
      >
        <div className="max-w-4xl mx-auto flex flex-col min-h-full pb-16">
          {history.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap leading-relaxed tracking-tight break-words">
              {typeof line === "string" && line.startsWith("guest@aisling-os:~$") ? (
                <>
                  <span className="text-[#c0392b] font-bold">guest@aisling-os:~$</span>
                  <span className="text-zinc-100">{" " + line.slice(19)}</span>
                </>
              ) : typeof line === "string" ? (
                <span className="text-zinc-400">{line || " "}</span>
              ) : (
                line
              )}
            </div>
          ))}
          <div className="flex gap-2 mt-1">
            <span className="shrink-0 text-[#c0392b] font-bold">guest@aisling-os:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none flex-grow text-zinc-100 font-inherit caret-[#c0392b]"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={endRef} />
        </div>

        {/* CRT Scanline Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20 Mix-blend-overlay" />
      </m.div>
    </AnimatePresence>
  );
}
