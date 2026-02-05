export default function Portfolio() {
  return (
    <>
      {/* Part A: Design Monks (Inverse White) */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display mb-16">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[9/16] bg-gray-200 rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Part B: Levan Rho (Minimal Slideshow) */}
      <section className="h-screen bg-black flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]" />
        <h2 className="text-white/30 text-xl tracking-[0.5em] uppercase">
          Visual System
        </h2>
      </section>
    </>
  );
}
