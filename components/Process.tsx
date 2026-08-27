const steps = [
  { num: "01", icon: "💬", title: "Booking via WhatsApp", desc: "Hubungi admin untuk atur jadwal tes sesuai waktu luangmu.", accent: "text-blue-700", border: "border-blue-100", bg: "bg-blue-50" },
  { num: "02", icon: "🖐️", title: "Tes fingerprint", desc: "Proses cepat dan nyaman, hanya butuh beberapa menit.", accent: "text-yellow-700", border: "border-yellow-100", bg: "bg-yellow-50" },
  { num: "03", icon: "🎓", title: "Sesi konsultasi hasil", desc: "Bahas hasil tes bersama konsultan, tatap muka atau online.", accent: "text-green-700", border: "border-green-100", bg: "bg-green-50" },
  { num: "04", icon: "📋", title: "Terima laporan lengkap", desc: "Dapatkan laporan potensi dan rekomendasi arah pengembangan anak.", accent: "text-red-700", border: "border-red-100", bg: "bg-red-50" },
];

export default function Process() {
  return (
    <section className="relative bg-white py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute right-0 top-0 w-80 h-80 rounded-full bg-blue-50 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
              Alur Konsultasi
            </span>
          </div>
          <h2 className="font-display text-[26px] font-bold text-slate-light sm:text-[32px] lg:text-[36px]">
            Prosesnya{" "}
            <span className="gradient-text-cyan">sederhana, kok</span>
          </h2>
          <p className="mt-3 max-w-[50ch] text-[16px] text-slate-mid">
            Tanpa psikotes panjang dan ribet. Cukup empat langkah untuk mengenal potensi asli anakmu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute top-[22px] left-[calc(100%-8px)] z-10 hidden h-px w-8 bg-gradient-to-r from-blue-300 to-transparent md:block" />
              )}
              <div className={`rounded-2xl border ${step.border} ${step.bg} p-5 h-full`}>
                <div className={`mb-3 font-display text-[11px] font-bold tracking-[0.2em] ${step.accent} opacity-60`}>
                  STEP {step.num}
                </div>
                <div className={`mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-white shadow-sm text-[22px]`}>
                  {step.icon}
                </div>
                <h3 className={`text-[15px] font-bold ${step.accent}`}>{step.title}</h3>
                <p className="mt-2 text-[14px] text-slate-mid leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
