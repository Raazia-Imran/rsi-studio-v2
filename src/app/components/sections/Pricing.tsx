export default function Pricing() {
  return (
    <section className="py-32 px-6">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["2k", "5k", "10k"].map((price) => (
          <div
            key={price}
            className="h-[500px] border border-white/10 hover:border-primary/50 transition-colors p-8 flex flex-col justify-between"
          >
            <span className="text-4xl font-display">${price}</span>
            <button className="w-full py-4 border-t border-white/10 hover:bg-white hover:text-black transition-colors">
              Select Tier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
