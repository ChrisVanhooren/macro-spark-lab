const items = [
  { sym: "SPX", val: "5,420.21", chg: "+0.42%", up: true },
  { sym: "NDX", val: "19,210.04", chg: "+0.78%", up: true },
  { sym: "DXY", val: "104.21", chg: "+0.11%", up: true },
  { sym: "US10Y", val: "4.21%", chg: "-3bp", up: false },
  { sym: "US2Y", val: "4.78%", chg: "-1bp", up: false },
  { sym: "GOLD", val: "$2,310.45", chg: "+1.20%", up: true },
  { sym: "OIL", val: "$81.20", chg: "+0.83%", up: true },
  { sym: "BTC", val: "$68,421", chg: "-2.14%", up: false },
  { sym: "USD/JPY", val: "157.48", chg: "+0.36%", up: true },
  { sym: "EUR/USD", val: "1.0824", chg: "-0.18%", up: false },
  { sym: "VIX", val: "14.22", chg: "-1.42%", up: false },
  { sym: "HG (Cu)", val: "4.512", chg: "+1.95%", up: true },
];

export function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="fixed bottom-0 inset-x-0 h-8 border-t border-border bg-surface overflow-hidden z-40">
      <div className="flex whitespace-nowrap animate-ticker h-full items-center gap-10 font-mono text-[11px] tracking-wider">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-muted-foreground">{it.sym}</span>
            <span className="text-foreground">{it.val}</span>
            <span className={it.up ? "text-signal" : "text-danger"}>{it.chg}</span>
            <span className="text-border">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
