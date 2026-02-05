export default function FAQ() {
  return (
    <section className="py-32 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-display mb-12">Common Queries</h2>
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="border-b border-white/10 py-6 group cursor-pointer"
        >
          <div className="flex justify-between items-center group-hover:text-primary transition-colors">
            <span>What is your typical timeline?</span>
            <span>+</span>
          </div>
        </div>
      ))}
    </section>
  );
}
