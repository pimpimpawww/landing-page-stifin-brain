const points = [
  {
    icon: "🧠",
    text: "Anak susah fokus belajar, sebenarnya kenapa ya?",
  },
  {
    icon: "🔍",
    text: "Bakatnya sebenarnya di bidang apa, kok belum kelihatan?",
  },
  {
    icon: "🎯",
    text: "Nanti pilih jurusan sekolah atau kuliah yang cocok apa?",
  },
  {
    icon: "💡",
    text: "Pola asuh yang sama, kenapa hasilnya beda tiap anak?",
  },
];

export default function PainPoints() {
  return (
    <section className="relative bg-void-2 py-16 md:py-20 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 hex-pattern opacity-50" />
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-neon-purple/6 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/8 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-purple animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-neon-purple/90">
              Sering dirasakan orang tua
            </span>
          </div>
          <h2 className="font-display text-[28px] font-bold text-white sm:text-[34px] lg:text-[38px]">
            Pernah kepikiran hal-hal ini{" "}
            <span className="text-cyan">soal anakmu?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <div
              key={point.text}
              className="group relative overflow-hidden rounded-2xl border-glow glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-card-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan/8 to-transparent rounded-bl-3xl" />

              <div className="mb-4 text-[32px]">{point.icon}</div>
              <div className="font-display text-[28px] leading-none text-cyan/30 mb-2">&ldquo;</div>
              <p className="text-[15px] font-semibold text-white leading-snug">{point.text}</p>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Answer teaser */}
        <div className="mt-10 text-center">
          <p className="text-[16px] text-white/90">
            Semua pertanyaan itu bisa dijawab dengan satu tes.{" "}
            <span className="text-cyan font-semibold">Tes STIFIN Brain.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
