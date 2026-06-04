export function Nav() {
  return (
    <nav className="border-b border-border bg-canvas/85 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="relative size-3">
              <div className="absolute inset-0 bg-accent rounded-full animate-signal-pulse" />
              <div className="absolute inset-0 bg-accent rounded-full opacity-40 scale-150 animate-signal-pulse" />
            </div>
            <span className="font-bold tracking-tight text-foreground text-sm">
              MacroSignal <span className="text-muted-foreground font-mono font-normal">v1.0</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-xs font-mono uppercase tracking-widest">
            <a href="#" className="text-foreground border-b border-accent pb-px">Terminal</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Thematics</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Briefings</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Archive</a>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono">
          <span className="text-signal hidden sm:inline">SYNCED · 102MS</span>
          <span className="text-muted-foreground hidden md:inline">USER · RESEARCH_ALPHA</span>
          <div className="size-7 rounded-full bg-surface-elevated border border-border grid place-items-center text-[10px] font-mono">RA</div>
        </div>
      </div>
    </nav>
  );
}
