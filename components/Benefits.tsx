const benefits = [
  { icon: "📚", title: "Kenali gaya belajar anak", desc: "Tahu cara belajar dan cara berpikir yang paling sesuai dengan desain alami otaknya.", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700" },
  { icon: "🎯", title: "Arahkan minat & jurusan sejak dini", desc: "Pilih ekstrakurikuler, jurusan sekolah, hingga arah kuliah yang benar-benar sesuai potensinya.", bg: "bg-yellow-50", border: "border-yellow-100", text: "text-yellow-700" },
  { icon: "❤️", title: "Pola asuh lebih tepat", desc: "Pahami cara memotivasi dan berkomunikasi sesuai karakter asli anak, bukan cara yang sama untuk semua.", bg: "bg-red-50", border: "border-red-100", text: "text-red-700" },
  { icon: "✅", title: "Kurangi stres orang tua & anak", desc: "Tidak perlu lagi memaksakan arah yang sebenarnya tidak cocok untuk anak.", bg: "bg-green-50", border: "border-green-100", text: "text-green-700" },
];

export default function Benefits() {
  return (
    <section id="manfaat" className="relative bg-[#f0f6ff] py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">Manfaat</span>
          </div>
          <h2 className="font-display text-[26px] font-bold text-slate-light sm:text-[32px] lg:text-[36px]">
            Kenapa perlu tes{" "}
            <span className="gradient-text-cyan">sejak dini?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`group relative overflow-hidden rounded-2xl border ${b.border} ${b.bg} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-glow`}
            >
              <div className="mb-4 text-[28px]">{b.icon}</div>
              <h3 className={`text-[16px] font-bold ${b.text}`}>{b.title}</h3>
              <p className="mt-2.5 text-[14px] text-slate-mid leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
