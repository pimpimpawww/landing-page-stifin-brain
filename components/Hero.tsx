import Image from "next/image";
import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";

const trustPoints = [
  { icon: "◈", text: "Tes fingerprint, bukan tebak-tebakan" },
  { icon: "◈", text: "Hasil permanen sejak lahir" },
  { icon: "◈", text: "Didampingi konsultan STIFIN" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Tes STIFIN Brain"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Blue-toned overlay — gelap di kiri, foto keliatan di kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d47a1]/90 via-[#1565C0]/70 to-[#1976D2]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d47a1]/60 via-transparent to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] grid-bg opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">
              Konsultasi Minat &amp; Bakat Anak · Metode STIFIN
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[40px] font-bold leading-[1.1] sm:text-[52px] lg:text-[64px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Ojo Puteg,
            <span className="block mt-2 text-yellow-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Kenali Potensi Anak
            </span>
            <span className="block text-[0.55em] text-white/90 font-medium italic mt-1">
              Kenali Talenta Anak Anda, Dukung Potensi Terbaiknya
            </span>
          </h1>

          <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-white/90 font-medium">
            Setiap anak lahir dengan kecerdasan unik yang terukir di sidik jarinya. Lewat tes
            fingerprint STIFIN, orang tua bisa memahami cara belajar, minat, dan arah masa depan
            anak secara terarah — tanpa perlu bingung menerka-nerka.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WaButton href={waLink(WA_DEFAULT_MESSAGE)}>Konsultasi Sekarang</WaButton>
            <a
              href="#metode"
              className="text-[15px] font-semibold text-white underline-offset-4 hover:text-yellow-300 transition-colors"
            >
              Pelajari metodenya →
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5">
            {trustPoints.map((p) => (
              <span
                key={p.text}
                className="flex items-center gap-2 text-[14px] font-semibold text-white/90"
              >
                <span className="text-yellow-300">{p.icon}</span>
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
