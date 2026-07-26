const benefits = [
  {
    icon: "📚",
    title: "Kenali gaya belajar anak",
    desc: "Tahu cara belajar dan cara berpikir yang paling sesuai dengan desain alami otaknya.",
    accent: "cyan",
  },
  {
    icon: "🎯",
    title: "Arahkan minat & jurusan sejak dini",
    desc: "Pilih ekstrakurikuler, jurusan sekolah, hingga arah kuliah yang benar-benar sesuai potensinya.",
    accent: "gold",
  },
  {
    icon: "❤️",
    title: "Pola asuh lebih tepat",
    desc: "Pahami cara memotivasi dan berkomunikasi sesuai karakter asli anak, bukan cara yang sama untuk semua.",
    accent: "purple",
  },
  {
    icon: "✅",
    title: "Kurangi stres orang tua & anak",
    desc: "Tidak perlu lagi memaksakan arah yang sebenarnya tidak cocok untuk anak.",
    accent: "green",
  },
];

type AccentKey = "cyan" | "gold" | "purple" | "green";

const accentMap: Record<AccentKey, { border: string; text: string; bg: string }> = {
  cyan: { border: "border-cyan/25", text: "text-cyan", bg: "bg-cyan/10" },
  gold: { border: "border-neon-gold/25", text: "text-neon-gold", bg: "bg-neon-gold/10" },
  purple: { border: "border-neon-purple/25", text: "text-neon-purple", bg: "bg-neon-purple/10" },
  green: { border: "border-neon-green/20", text: "text-neon-green", bg: "bg-neon-green/8" },
};

export default function Benefits() {
  return (
    <section id="manfaat" className="relative bg-void-2 py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute inset-0 dot-bg opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-void-3 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
              Manfaat
            </span>
          </div>
          <h2 className="font-display text-[28px] font-bold text-white sm:text-[34px] lg:text-[38px]">
            Kenapa perlu tes{" "}
            <span className="text-cyan">sejak dini?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const a = accentMap[b.accent as AccentKey];
            return (
              <div
                key={b.title}
                className={`group relative overflow-hidden rounded-2xl border ${a.border} bg-void-3 p-6 transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div className={`mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-xl ${a.bg} text-[22px]`}>
                  {b.icon}
                </div>
                <h3 className={`text-[16px] font-bold ${a.text}`}>{b.title}</h3>
                <p className="mt-2.5 text-[14px] text-slate-light leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
