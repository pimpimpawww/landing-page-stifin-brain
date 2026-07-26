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
        {/* Dark overlay — cukup gelap di kiri untuk teks, foto tetap keliatan di kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-void/88 via-void/60 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] grid-bg opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-void/60 backdrop-blur px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
              Konsultasi Minat &amp; Bakat Anak · Metode STIFIN
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[40px] font-bold leading-[1.1] sm:text-[52px] lg:text-[64px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Ojo Puteg,
            <span className="block mt-2 text-cyan drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">
              Kenali Potensi
            </span>
            <span className="block text-[0.65em] text-white font-medium italic mt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              bocahmu lewat sains sidik jari
            </span>
          </h1>

          <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-white font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Setiap anak lahir dengan kecerdasan unik yang terukir di sidik jarinya. Lewat tes
            fingerprint STIFIN, orang tua bisa memahami cara belajar, minat, dan arah masa depan
            anak secara terarah — tanpa perlu bingung menerka-nerka.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WaButton href={waLink(WA_DEFAULT_MESSAGE)}>Konsultasi Sekarang</WaButton>
            <a
              href="#metode"
              className="text-[15px] font-semibold text-white underline-offset-4 hover:text-cyan transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            >
              Pelajari metodenya →
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap gap-5">
            {trustPoints.map((p) => (
              <span
                key={p.text}
                className="flex items-center gap-2 text-[14px] font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
              >
                <span className="text-cyan">{p.icon}</span>
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-void to-transparent pointer-events-none z-10" />
    </section>
  );
}
