import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f0f6ff] pb-16 pt-0 md:pb-20">
      <div className="relative mx-4 overflow-hidden rounded-[28px] border-2 border-[#1565C0] bg-gradient-to-br from-[#1565C0] to-[#0d47a1] sm:mx-6">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <div className="relative px-6 py-14 text-center sm:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">
              Mulai Sekarang
            </span>
          </div>

          <h2 className="mx-auto max-w-[26ch] font-display text-[28px] font-bold text-white sm:text-[34px] lg:text-[42px] leading-[1.15]">
            Kenali Talenta Unik Anak Anda dan Dukung{" "}
            <span className="text-yellow-300">Perkembangan Serta Potensi Terbaiknya</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[52ch] text-[16px] text-white/85">
            Chat admin sekarang untuk atur jadwal tes dan konsultasi. Prosesnya cepat, hasilnya
            bisa jadi panduan seumur hidup.
          </p>

          <div className="mt-8 flex justify-center">
            <WaButton href={waLink(WA_DEFAULT_MESSAGE)}>Chat Admin via WhatsApp</WaButton>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      </div>
    </section>
  );
}
