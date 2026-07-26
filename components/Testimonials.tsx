const testimonials = [
  {
    quote: "Setelah tes, jadi lebih paham kenapa anak saya susah diam saat belajar dengan cara biasa.",
    name: "Bu Sari",
    loc: "Ibu dari Kayla, 8 tahun",
    initial: "S",
    accent: "cyan",
  },
  {
    quote: "Prosesnya cepat, hasilnya dijelaskan dengan gampang dimengerti. Jadi lebih tenang soal pilihan sekolah.",
    name: "Pak Andi",
    loc: "Ayah dari Rafi, 11 tahun",
    initial: "A",
    accent: "gold",
  },
  {
    quote: "Konsultannya sabar jelasin, jadi tahu cara mendampingi anak sesuai karakternya.",
    name: "Ibu Wulan",
    loc: "Ibu dari Naya, 6 tahun",
    initial: "W",
    accent: "purple",
  },
];

type Accent = "cyan" | "gold" | "purple";
const accentMap: Record<Accent, { border: string; bg: string; text: string }> = {
  cyan: { border: "border-cyan/30", bg: "bg-cyan/10", text: "text-cyan" },
  gold: { border: "border-neon-gold/30", bg: "bg-neon-gold/10", text: "text-neon-gold" },
  purple: { border: "border-neon-purple/30", bg: "bg-neon-purple/10", text: "text-neon-purple" },
};

export default function Testimonials() {
  return (
    <section className="relative bg-void-2 py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute inset-0 hex-pattern opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-void-3 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
              Kata Orang Tua
            </span>
          </div>
          <h2 className="font-display text-[28px] font-bold text-white sm:text-[34px] lg:text-[38px]">
            Testimoni dari{" "}
            <span className="text-cyan">mereka yang sudah tes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => {
            const a = accentMap[t.accent as Accent];
            return (
              <div
                key={t.name}
                className={`group relative overflow-hidden rounded-2xl border ${a.border} bg-void-3 p-6 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Stars */}
                <div className="mb-3 text-[14px] tracking-[3px] text-neon-gold/80">★★★★★</div>

                {/* Quote */}
                <p className="text-[15px] italic text-slate-light leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3">
                  <div className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${a.bg} border ${a.border} font-display font-bold ${a.text}`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white">{t.name}</div>
                    <div className="text-[13px] text-slate-light">{t.loc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
