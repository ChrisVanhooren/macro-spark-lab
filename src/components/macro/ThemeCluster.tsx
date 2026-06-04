import { Sparkline } from "./Sparkline";

export interface Cluster {
  id: string;
  name: string;
  status: "ACTIVE" | "STABLE" | "VOLATILE" | "EMERGING";
  delta: string;
  blurb: string;
  conviction: number; // 0-100
  spark: number[];
  active?: boolean;
}

const statusColor: Record<Cluster["status"], string> = {
  ACTIVE: "text-signal",
  STABLE: "text-muted-foreground",
  VOLATILE: "text-warn",
  EMERGING: "text-accent",
};

export function ThemeCluster({ c }: { c: Cluster }) {
  const sparkColor = c.status === "VOLATILE" ? "var(--warn)" : c.status === "ACTIVE" ? "var(--signal)" : "var(--accent)";
  return (
    <button
      className={`w-full text-left p-3 border-l-2 transition-all group ${
        c.active
          ? "bg-surface border-accent"
          : "border-transparent hover:bg-surface/50 hover:border-border"
      }`}
    >
      <div className="flex justify-between items-start mb-1.5">
        <span className={`text-sm font-medium ${c.active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
          {c.name}
        </span>
        <span className={`text-[10px] font-mono ${statusColor[c.status]}`}>{c.delta}</span>
      </div>
      <p className="text-[11px] text-muted-foreground leading-snug mb-2 line-clamp-2">{c.blurb}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 -mb-1">
          <Sparkline data={c.spark} color={sparkColor} height={20} />
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-1 h-3 ${
                i < Math.round(c.conviction / 20) ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </button>
  );
}
