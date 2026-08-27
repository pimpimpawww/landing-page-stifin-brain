import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";

export default function GoldenAge() {
  return (
    <section className="relative overflow-hidden bg-[#1565C0] py-14 md:py-16">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[24px] border border-white/20 bg-white/10 backdrop-blur p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/50 bg-yellow-300/15 px-4 py-1.5 mb-4">
                <span className="text-[16px]">⏰</span>
                <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-yellow-300">
                  Golden Age
                </span>
              </div>
              <h2 className="font-display text-[26px] font-bold text-white sm:text-[30px] lg:text-[34px]">
                Usia{" "}
                <span className="text-yellow-300">3–7 tahun</span>{" "}
                tidak akan terulang
              </h2>
              <p className="mt-3 text-[16px] text-white/85 leading-relaxed">
                Periode ini paling menentukan cara belajar, rasa percaya diri, pola berpikir, dan
                karakter anak di masa depan. Setiap tahun yang terlewat tanpa memahami potensi asli
                anak adalah kesempatan yang tidak bisa diulang.
              </p>
            </div>
            <div className="shrink-0">
              <WaButton href={waLink(WA_DEFAULT_MESSAGE)}>
                Jangan Tunda, Konsultasi Sekarang
              </WaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
