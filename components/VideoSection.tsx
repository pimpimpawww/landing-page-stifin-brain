export default function VideoSection() {
  return (
    <section className="relative bg-[#f0f6ff] py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
              Video Promosi
            </span>
          </div>
          <h2 className="font-display text-[26px] font-bold text-slate-light sm:text-[32px] lg:text-[36px]">
            Kenali STIFIN Brain{" "}
            <span className="gradient-text-cyan">lebih dekat</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-mid">
            Temukan potensi asli anakmu dan mulai perjalanan terbaik bersama STIFIN Brain.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[20px] border border-blue-100 bg-white shadow-soft">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1565C0] via-[#F9A825] to-[#1565C0]" />
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/2o1SIAowFGI?rel=0&modestbranding=1&color=white"
              title="Video Promosi STIFIN Brain - Semar Ojo Puteg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
