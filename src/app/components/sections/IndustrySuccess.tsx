export default function IndustrySuccess() {
  const industries = [
    "Private Yacht",
    "Aviation",
    "Real Estate",
    "Startups",
    "Manufacturing",
  ];

  return (
    <section className="py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="text-sm uppercase tracking-widest text-white/40 mb-12">
          Industries
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="bg-background p-12 hover:bg-white/5 transition-colors duration-500 min-h-[300px] flex items-end"
            >
              <h4 className="text-2xl font-display">{industry}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
