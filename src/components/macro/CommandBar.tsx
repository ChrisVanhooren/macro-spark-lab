import { useEffect, useRef, useState } from "react";

const suggestions = [
  "correlation: USD/JPY vs US10Y last 30d",
  "summarize fed minutes delta",
  "themes touching copper supply",
  "what changed in EM debt today",
];

export function CommandBar() {
  const [val, setVal] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="border-y border-border bg-surface/40">
      <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center gap-4">
        <span className="font-mono text-[10px] text-accent tracking-widest">AGENT&gt;</span>
        <input
          ref={ref}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Ask the agent — e.g. 'why is the curve steepening into CPI?'"
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground font-mono"
        />
        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
          {suggestions.slice(0, 2).map((s) => (
            <button
              key={s}
              onClick={() => setVal(s)}
              className="px-2 py-1 border border-border rounded hover:border-accent hover:text-accent transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
        <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border text-[10px] font-mono text-muted-foreground">⌘K</kbd>
      </div>
    </div>
  );
}
