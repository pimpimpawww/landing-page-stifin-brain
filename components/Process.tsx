const steps = [
  {
    num: "01",
    icon: "💬",
    title: "Booking via WhatsApp",
    desc: "Hubungi admin untuk atur jadwal tes sesuai waktu luangmu.",
    accent: "text-cyan",
    border: "border-cyan/30",
    bg: "bg-cyan/8",
  },
  {
    num: "02",
    icon: "🖐️",
    title: "Tes fingerprint",
    desc: "Proses cepat dan nyaman, hanya butuh beberapa menit.",
    accent: "text-neon-gold",
    border: "border-neon-gold/30",
    bg: "bg-neon-gold/8",
  },
  {
    num: "03",
    icon: "🎓",
    title: "Sesi konsultasi hasil",
    desc: "Bahas hasil tes bersama konsultan, tatap muka atau online.",
    accent: "text-neon-purple",
    border: "border-neon-purple/30",
    bg: "bg-neon-purple/8",
  },
  {
    num: "04",
    icon: "📋",
    title: "Terima laporan lengkap",
    desc: "Dapatkan laporan potensi dan rekomendasi arah pengembangan anak.",
    accent: "text-neon-green",
    border: "border-neon-green/25",
    bg: "bg-neon-green/6",
  },
];

export default function Process() {
  return (
    <section className="relative bg-void-2 py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute right-0 top-0 w-80 h-80 rounded-full bg-cyan/4 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/8 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-purple animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-neon-purple">
              Alur Konsultasi
            </span>
          </div>
          <h2 className="font-display text-[28px] font-bold text-white sm:text-[34px] lg:text-[38px]">
            Prosesnya{" "}
            <span className="text-cyan">sederhana, kok</span>
          </h2>
          <p className="mt-3 max-w-[50ch] text-[16px] text-slate-light">
            Tanpa psikotes panjang dan ribet. Cukup empat langkah untuk mengenal potensi asli anakmu.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute top-[22px] left-[calc(100%-8px)] z-10 hidden h-px w-8 bg-gradient-to-r from-cyan/40 to-transparent md:block" />
              )}

              <div className={`rounded-2xl border ${step.border} bg-void-3 p-5 h-full`}>
                {/* Step number */}
                <div className={`mb-3 font-display text-[11px] font-bold tracking-[0.2em] ${step.accent} opacity-60`}>
                  STEP {step.num}
                </div>

                {/* Icon circle */}
                <div className={`mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-xl ${step.bg} text-[22px]`}>
                  {step.icon}
                </div>

                <h3 className={`text-[16px] font-bold ${step.accent}`}>{step.title}</h3>
                <p className="mt-2 text-[14px] text-slate-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
