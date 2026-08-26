export default function VideoSection() {
  return (
    <section className="relative bg-void-2 py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/5 blur-[80px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-void-3 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
              Lihat Prosesnya
            </span>
          </div>
          <h2 className="font-display text-[26px] font-bold text-white sm:text-[32px] lg:text-[36px]">
            Gimana sih proses{" "}
            <span className="text-cyan">tes STIFIN Brain?</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-light">
            Cepat, mudah, dan langsung bisa dikonsultasikan hasilnya.
          </p>
        </div>

        {/* Video embed */}
        <div className="relative overflow-hidden rounded-[20px] border border-cyan/20 bg-void-3 shadow-neon-cyan">
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent z-10" />

          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/hFtLgxAkWKk?rel=0&modestbranding=1&color=white"
              title="Proses Tes STIFIN Brain - Semar Ojo Puteg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
