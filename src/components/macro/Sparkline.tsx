interface SparklineProps {
  data: number[];
  color?: string;
  height?: number;
  fill?: boolean;
}

export function Sparkline({ data, color = "var(--accent)", height = 36, fill = true }: SparklineProps) {
  const w = 100;
  const h = height;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return [x, y] as const;
  });
  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  const last = points[points.length - 1];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="w-full" style={{ height }}>
      {fill && (
        <>
          <defs>
            <linearGradient id={`sg-${color}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#sg-${color})`} />
        </>
      )}
      <path d={path} fill="none" stroke={color} strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
      <circle cx={last[0]} cy={last[1]} r="1.6" fill={color} />
    </svg>
  );
}
