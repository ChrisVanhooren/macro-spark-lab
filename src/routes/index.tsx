import { createFileRoute } from "@tanstack/react-router";
import heroTheme from "@/assets/hero-theme.jpg";
import heatmapImg from "@/assets/heatmap.jpg";
import { Nav } from "@/components/macro/Nav";
import { CommandBar } from "@/components/macro/CommandBar";
import { ThemeCluster, type Cluster } from "@/components/macro/ThemeCluster";
import { ThemeCard } from "@/components/macro/ThemeCard";
import { SignalStream } from "@/components/macro/SignalStream";
import { Heatmap } from "@/components/macro/Heatmap";
import { Ticker } from "@/components/macro/Ticker";
import { Sparkline } from "@/components/macro/Sparkline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MacroSignal — Macro Research Terminal" },
      { name: "description", content: "A visual macro research terminal: themes, signals, and a research agent that surfaces what moved and why." },
      { property: "og:title", content: "MacroSignal — Macro Research Terminal" },
      { property: "og:description", content: "Themes, signals, and an agent that surfaces what moved and why." },
    ],
  }),
  component: Terminal,
});

const clusters: Cluster[] = [
  {
    id: "1",
    name: "Liquidity Reversal",
    status: "ACTIVE",
    delta: "+12.4%",
    blurb: "Reverse repo drains accelerating as Treasury issuance front-loads Q3.",
    conviction: 86,
    spark: [4, 6, 5, 7, 9, 8, 11, 13, 12, 15, 18, 17, 21],
    active: true,
  },
  {
    id: "2",
    name: "Yield Curve Shifts",
    status: "STABLE",
    delta: "FLAT",
    blurb: "Inversion patterns across G7 holding despite repricing in front-end rates.",
    conviction: 52,
    spark: [10, 11, 10, 9, 10, 11, 12, 11, 10, 11, 10, 11, 10],
  },
  {
    id: "3",
    name: "AI Compute Scarcity",
    status: "VOLATILE",
    delta: "±7σ",
    blurb: "GPU allocation cycles dislocating mid-cap semis from index beta.",
    conviction: 71,
    spark: [8, 12, 6, 14, 9, 18, 7, 16, 11, 20, 8, 17, 12],
  },
  {
    id: "4",
    name: "Strategic Metals Reshoring",
    status: "EMERGING",
    delta: "NEW",
    blurb: "Andean policy gazettes show 400% jump in 'mineral sovereignty' mentions.",
    conviction: 64,
    spark: [3, 4, 4, 5, 6, 7, 9, 10, 12, 14, 15, 17, 19],
  },
  {
    id: "5",
    name: "JPY Carry Unwind",
    status: "ACTIVE",
    delta: "+4.1%",
    blurb: "USD/JPY positioning concentrated; intervention probability re-rated higher.",
    conviction: 78,
    spark: [12, 14, 13, 15, 14, 16, 18, 17, 19, 20, 22, 21, 24],
  },
  {
    id: "6",
    name: "Suez Re-routing Premium",
    status: "VOLATILE",
    delta: "+12%",
    blurb: "Bab al-Mandab transits collapsed; shipping spot rates spiking off lows.",
    conviction: 58,
    spark: [5, 7, 6, 9, 12, 10, 15, 13, 17, 14, 19, 16, 21],
  },
];

const upSpark = [10, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19, 22];
const downSpark = [22, 20, 21, 18, 19, 16, 17, 14, 15, 12, 13, 10];
const volSpark = [12, 16, 10, 18, 13, 19, 11, 20, 14, 17, 12, 21];

function Terminal() {
  return (
    <div className="min-h-screen bg-canvas text-foreground pb-12">
      <Nav />
      <CommandBar />

      <main className="max-w-[1600px] mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* LEFT — Theme cluster rail */}
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Active Clusters</h2>
              <span className="text-[10px] font-mono text-muted-foreground">{clusters.length}</span>
            </div>
            <div className="border border-border rounded-md divide-y divide-border bg-surface/30">
              {clusters.map((c) => (
                <ThemeCluster key={c.id} c={c} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Global Pulse</h2>
              <span className="text-[10px] font-mono text-accent">↻ 14:02</span>
            </div>
            <div className="relative rounded-md overflow-hidden border border-border">
              <img src={heatmapImg} alt="Global cross-asset heatmap" loading="lazy" width={640} height={512} className="w-full aspect-[4/3] object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">52 markets · 12 sectors</span>
            </div>
          </section>
        </aside>

        {/* CENTER — Intelligence feed */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <div className="flex items-end justify-between border-b border-border pb-3">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Intelligence Layer
              </h1>
              <p className="text-xs text-muted-foreground mt-1 font-mono">3 themes shifted · 14 signals · 02 Jun</p>
            </div>
            <div className="flex gap-1.5">
              <button className="px-3 py-1.5 bg-accent text-accent-foreground text-[10px] font-mono font-semibold uppercase tracking-wider rounded">
                Recent
              </button>
              <button className="px-3 py-1.5 bg-surface text-muted-foreground hover:text-foreground text-[10px] font-mono uppercase tracking-wider rounded border border-border">
                High Signal
              </button>
              <button className="px-3 py-1.5 bg-surface text-muted-foreground hover:text-foreground text-[10px] font-mono uppercase tracking-wider rounded border border-border">
                Pinned
              </button>
            </div>
          </div>

          <ThemeCard
            title="The Lithium Hegemony — Supply Chain Realignment"
            tags={["Deglobalization", "Strategic Metals", "EVs"]}
            blurb="Andean policy shifts are creating a new bottleneck for automotive manufacturers. The agent detected a 400% increase in legislative mentions of 'mineral sovereignty' across South American government gazettes this quarter — historically a leading indicator of export controls within 9–14 months."
            conviction={84}
            agent="Agent σ-Resource"
            image={heroTheme}
            imageAlt="Data center corridor representing strategic infrastructure"
            badge="DEEP DIVE"
            metrics={[
              { label: "Lithium Carb.", value: "$14,820/t", delta: "+8.2%", up: true, spark: upSpark },
              { label: "FCX Equity", value: "$48.21", delta: "+2.1%", up: true, spark: upSpark },
              { label: "EV Margins", value: "11.4%", delta: "-180bp", up: false, spark: downSpark },
            ]}
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface border border-border rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono text-signal uppercase tracking-widest">Trend Up</span>
                <Sparkline data={upSpark} color="var(--signal)" height={20} />
              </div>
              <h4 className="text-foreground font-medium mb-2 leading-snug">Semi-conductor Lead Times</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">Cycle times in Southeast Asian fabs dropping to 24-week lows — first inflection since 2021.</p>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-canvas border border-border rounded">$SOX</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-canvas border border-border rounded">$TSM</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-canvas border border-border rounded">$ASML</span>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono text-warn uppercase tracking-widest">Signal Alert</span>
                <Sparkline data={volSpark} color="var(--warn)" height={20} />
              </div>
              <h4 className="text-foreground font-medium mb-2 leading-snug">Freight Congestion Index</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">Unexpected 12% spike in Suez transit costs over 48 hours — supply re-routing premium re-emerging.</p>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-canvas border border-border rounded">$BDRY</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-canvas border border-border rounded">$ZIM</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-canvas border border-border rounded">BRENT</span>
              </div>
            </div>
          </div>

          <Heatmap />
        </div>

        {/* RIGHT — System + stream */}
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-surface/40 border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[10px] font-mono text-foreground uppercase tracking-widest">Agent Parameters</h2>
              <span className="text-[10px] font-mono text-signal">ONLINE</span>
            </div>
            <div className="space-y-4">
              <Param label="Signal Threshold" value="> 8.4σ" pct={75} tone="accent" />
              <Param label="Latency Cap" value="REAL-TIME" pct={100} tone="signal" />
              <Param label="Theme Breadth" value="32 / 80" pct={40} tone="accent" />
              <Param label="Source Coverage" value="148 feeds" pct={88} tone="signal" />
            </div>
            <button className="w-full mt-5 py-2 bg-surface-elevated hover:bg-accent hover:text-accent-foreground text-[10px] font-mono uppercase tracking-widest rounded transition-colors">
              Reconfigure
            </button>
          </div>

          <SignalStream />

          <div className="bg-surface/40 border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-2 rounded-full bg-accent animate-signal-pulse" />
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Agent Suggests</span>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-4">
              Front-end vol is mispricing the EM debt exposure inside your Liquidity Reversal cluster. Re-run with a rotation overlay?
            </p>
            <div className="flex gap-2">
              <button className="flex-1 bg-accent text-accent-foreground text-[10px] font-mono font-semibold uppercase tracking-wider py-2 rounded">
                Run
              </button>
              <button className="flex-1 border border-border text-muted-foreground hover:text-foreground text-[10px] font-mono uppercase tracking-wider py-2 rounded">
                Dismiss
              </button>
            </div>
          </div>
        </aside>
      </main>

      <Ticker />
    </div>
  );
}

function Param({ label, value, pct, tone }: { label: string; value: string; pct: number; tone: "accent" | "signal" }) {
  const color = tone === "signal" ? "bg-signal" : "bg-accent";
  const text = tone === "signal" ? "text-signal" : "text-accent";
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] font-mono">
        <span className="text-muted-foreground uppercase tracking-wider">{label}</span>
        <span className={text}>{value}</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
