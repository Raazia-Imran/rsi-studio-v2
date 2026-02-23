export default function Comparison() {
  return (
    <section className="py-32 px-6 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-20 text-center">
          System Comparison
        </h2>
        <div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-12 md:p-16 bg-white/5 border-r border-white/10">
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-10">
              Standard Agencies
            </h3>
            <ul className="space-y-6">
              {[
                "Template-based delivery",
                "Fragmented communication",
                "Variable quality control",
                "Hidden maintenance fees",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white/60 text-sm font-medium border-b border-white/5 pb-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-12 md:p-16 bg-[#FF6B6B]/5">
            <h3 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-10">
              RSI Studio
            </h3>
            <ul className="space-y-6">
              {[
                "Custom architectural engineering",
                "Direct dedicated Slack access",
                "Absolute aesthetic authority",
                "Flat monthly system management",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white text-sm font-bold border-b border-[#FF6B6B]/20 pb-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
