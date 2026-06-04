const cells = [
  ["US", "EU", "JP", "CN", "EM"],
  ["Equity", "Rates", "FX", "Cmdty", "Credit"],
];

// deterministic pseudo-random
function v(i: number, j: number) {
  const x = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function Heatmap() {
  return (
    <div className="bg-surface border border-border rounded-md p-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Cross-Asset Pulse</span>
        <span className="text-[10px] font-mono text-signal">LIVE</span>
      </div>
      <div className="grid grid-cols-[auto_repeat(5,1fr)] gap-px text-[9px] font-mono">
        <div />
        {cells[0].map((c) => (
          <div key={c} className="text-center text-muted-foreground py-1">{c}</div>
        ))}
        {cells[1].map((row, i) => (
          <div key={row} className="contents">
            <div className="text-muted-foreground pr-2 flex items-center justify-end">{row}</div>
            {cells[0].map((_, j) => {
              const val = v(i, j);
              const isPos = val > 0.5;
              const intensity = Math.abs(val - 0.5) * 2;
              const color = isPos
                ? `color-mix(in oklab, var(--signal) ${intensity * 80}%, var(--surface-elevated))`
                : `color-mix(in oklab, var(--danger) ${intensity * 80}%, var(--surface-elevated))`;
              return (
                <div
                  key={`${i}-${j}`}
                  className="aspect-square flex items-center justify-center text-foreground/80"
                  style={{ backgroundColor: color }}
                  title={`${cells[1][i]} / ${cells[0][j]}`}
                >
                  {(val * 4 - 2).toFixed(1)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
