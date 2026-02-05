export default function Comparison() {
  return (
    <section className="py-32 px-6 container mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-12 border border-white/10 rounded-2xl opacity-50">
          <h3 className="text-xl mb-8">Typical Agency</h3>
          <ul className="space-y-4 text-white/60">
            <li>Generic Templates</li>
            <li>Slow Communication</li>
            <li>Hidden Fees</li>
          </ul>
        </div>
        <div className="p-12 border border-primary/50 bg-primary/5 rounded-2xl">
          <h3 className="text-xl mb-8 text-primary">RSI Studio</h3>
          <ul className="space-y-4">
            <li>Custom Engineering</li>
            <li>Direct Slack Access</li>
            <li>Flat Monthly Rate</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
