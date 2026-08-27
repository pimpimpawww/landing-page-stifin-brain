const testimonials = [
  { quote: "Setelah tes, jadi lebih paham kenapa anak saya susah diam saat belajar dengan cara biasa.", name: "Bu Sari", loc: "Ibu dari Kayla, 8 tahun", initial: "S", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700" },
  { quote: "Prosesnya cepat, hasilnya dijelaskan dengan gampang dimengerti. Jadi lebih tenang soal pilihan sekolah.", name: "Pak Andi", loc: "Ayah dari Rafi, 11 tahun", initial: "A", bg: "bg-yellow-50", border: "border-yellow-100", text: "text-yellow-700" },
  { quote: "Konsultannya sabar jelasin, jadi tahu cara mendampingi anak sesuai karakternya.", name: "Ibu Wulan", loc: "Ibu dari Naya, 6 tahun", initial: "W", bg: "bg-green-50", border: "border-green-100", text: "text-green-700" },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#f0f6ff] py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute inset-0 hex-pattern opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">Kata Orang Tua</span>
          </div>
          <h2 className="font-display text-[26px] font-bold text-slate-light sm:text-[32px] lg:text-[36px]">
            Testimoni dari{" "}
            <span className="gradient-text-cyan">mereka yang sudah tes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`group relative overflow-hidden rounded-2xl border ${t.border} ${t.bg} p-6 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="mb-3 text-[14px] tracking-[3px] text-yellow-500">★★★★★</div>
              <p className="text-[15px] italic text-slate-mid leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white border ${t.border} font-display font-bold ${t.text}`}>
                  {t.initial}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-slate-light">{t.name}</div>
                  <div className="text-[13px] text-slate-mid">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
