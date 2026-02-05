export default function Services() {
  const services = [
    "Web Design",
    "Web Development",
    "Custom Software",
    "Blogging",
    "Monthly Web Presence",
    "Web Automations",
  ];

  return (
    <section className="py-32 px-6 flex flex-col items-center">
      <div className="border border-white/10 rounded-full p-20 relative">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
        <h2 className="text-3xl font-display text-center">CORE SYSTEM</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 text-center">
        {services.map((service, i) => (
          <span
            key={i}
            className="text-white/60 hover:text-primary transition-colors cursor-default"
          >
            {service}
          </span>
        ))}
      </div>
    </section>
  );
}
