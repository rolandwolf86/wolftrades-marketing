export interface ProofPoint {
  value: string;
  label: string;
}

export interface ProofBarProps {
  points?: ProofPoint[];
}

export function ProofBar({ points = [] }: ProofBarProps) {
  if (points.length === 0) return null;

  return (
    <section className="border-y border-white/5 bg-black2">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {points.map((point) => (
          <div key={point.label}>
            <div className="font-display text-3xl text-gold">
              {point.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-gray">
              {point.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
