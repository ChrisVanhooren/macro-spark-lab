interface Signal {
  t: string;
  kind: "signal" | "alert" | "note";
  text: string;
}

const stream: Signal[] = [
  { t: "14:22", kind: "alert", text: "EUR/USD correlation break vs DXY (90d rolling)" },
  { t: "14:18", kind: "signal", text: "Reverse repo facility drains $40B overnight" },
  { t: "14:12", kind: "note", text: "Oil tankers rerouting from Bab al-Mandab — +6%" },
  { t: "14:05", kind: "alert", text: "Crypto liquidity pool drain detected — $112M" },
  { t: "13:51", kind: "signal", text: "BoJ rate path repriced +14bp by 2026" },
  { t: "13:34", kind: "note", text: "TSMC capex guide revised +18%" },
  { t: "13:12", kind: "signal", text: "Copper warehouse stocks at decade low" },
];

const kindStyles = {
  signal: { dot: "bg-signal", text: "text-foreground", label: "SIGNAL" },
  alert: { dot: "bg-warn", text: "text-warn", label: "ALERT" },
  note: { dot: "bg-accent", text: "text-muted-foreground", label: "NOTE" },
};

export function SignalStream() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 px-2">
        <h2 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Raw Signal Stream</h2>
        <span className="text-[10px] font-mono text-signal flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-signal animate-signal-pulse" />
          LIVE
        </span>
      </div>
      <div className="space-y-px">
        {stream.map((s, i) => {
          const k = kindStyles[s.kind];
          return (
            <div key={i} className="flex gap-3 px-2 py-1.5 hover:bg-surface/60 transition-colors group cursor-pointer font-mono text-[11px]">
              <span className="text-muted-foreground/70 w-10 shrink-0">{s.t}</span>
              <span className={`size-1.5 rounded-full mt-1.5 shrink-0 ${k.dot}`} />
              <span className={`${k.text} leading-snug`}>{s.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
