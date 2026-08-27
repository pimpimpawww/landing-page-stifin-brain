const points = [
  { icon: "🧠", text: "Anak susah fokus belajar, sebenarnya kenapa ya?" },
  { icon: "🔍", text: "Bakatnya sebenarnya di bidang apa, kok belum kelihatan?" },
  { icon: "🎯", text: "Nanti pilih jurusan sekolah atau kuliah yang cocok apa?" },
  { icon: "💡", text: "Pola asuh yang sama, kenapa hasilnya beda tiap anak?" },
];

export default function PainPoints() {
  return (
    <section className="relative bg-[#1565C0] py-16 md:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-bg opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">
              Sering dirasakan orang tua
            </span>
          </div>
          <h2 className="font-display text-[26px] font-bold text-white sm:text-[32px] lg:text-[36px]">
            Pernah kepikiran hal-hal ini{" "}
            <span className="text-yellow-300">soal anakmu?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.text}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <div className="mb-4 text-[32px]">{point.icon}</div>
              <div className="font-display text-[28px] leading-none text-yellow-300/40 mb-2">&ldquo;</div>
              <p className="text-[15px] font-semibold text-white leading-snug">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[15px] text-white/80">
            Semua pertanyaan itu bisa dijawab dengan satu tes.{" "}
            <span className="text-yellow-300 font-semibold">Tes STIFIN Brain.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
