export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-24 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-2xl font-display mb-8">RSI STUDIO</h2>
          <p className="text-white/40 text-sm max-w-xs">
            Engineering digital dominance for the future.
          </p>
        </div>
        <div className="flex gap-16 text-sm text-white/60">
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase tracking-widest text-xs">
              Sitemap
            </span>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Work</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase tracking-widest text-xs">
              Socials
            </span>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-24 text-center text-xs text-white/20">
        © 2026 RSI Studio. All Systems Nominal.
      </div>
    </footer>
  );
}
