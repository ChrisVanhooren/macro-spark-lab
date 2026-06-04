import { Sparkline } from "./Sparkline";

interface ThemeCardProps {
  title: string;
  tags: string[];
  blurb: string;
  conviction: number;
  agent: string;
  metrics: { label: string; value: string; delta: string; up: boolean; spark: number[] }[];
  image?: string;
  imageAlt?: string;
  badge?: string;
}

export function ThemeCard({ title, tags, blurb, conviction, agent, metrics, image, imageAlt, badge }: ThemeCardProps) {
  return (
    <article className="bg-surface border border-border rounded-xl overflow-hidden group">
      {image && (
        <div className="relative aspect-[21/9] overflow-hidden">
          <img src={image} alt={imageAlt ?? title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
          {badge && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-canvas/80 backdrop-blur border border-accent/40 text-accent font-mono text-[10px] tracking-widest rounded">
              {badge}
            </span>
          )}
          <div className="absolute bottom-3 right-3 flex items-center gap-2 font-mono text-[10px]">
            <span className="text-muted-foreground">CONVICTION</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className={`w-1.5 h-3 ${i < conviction / 10 ? "bg-accent" : "bg-border/60"}`} />
              ))}
            </div>
            <span className="text-accent">{conviction}</span>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex gap-2 mb-3 flex-wrap">
          {tags.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted-foreground rounded-sm uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{blurb}</p>

        <div className="grid grid-cols-3 gap-3 mb-5 border-y border-border py-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[10px] font-mono text-muted-foreground uppercase">{m.label}</span>
                <span className={`text-[10px] font-mono ${m.up ? "text-signal" : "text-danger"}`}>{m.delta}</span>
              </div>
              <div className="text-sm font-mono text-foreground mb-1">{m.value}</div>
              <Sparkline data={m.spark} color={m.up ? "var(--signal)" : "var(--danger)"} height={22} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-7 rounded bg-surface-elevated border border-border grid place-items-center text-[9px] font-mono text-accent">
              σ
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">Compiled by {agent}</span>
          </div>
          <button className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
            Deep dive <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
