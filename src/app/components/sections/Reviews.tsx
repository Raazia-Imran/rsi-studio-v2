export default function Reviews() {
  return (
    <section className="py-24 overflow-hidden">
      {/* Reel 1: Moving Left */}
      <div className="flex gap-8 mb-8 whitespace-nowrap opacity-50">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-80 h-40 bg-white/5 rounded-xl border border-white/10 shrink-0"
          />
        ))}
      </div>
      {/* Reel 2: Moving Right */}
      <div className="flex gap-8 whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-80 h-40 bg-white/5 rounded-xl border border-white/10 shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
