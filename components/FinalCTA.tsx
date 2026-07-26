import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-void-2 pb-16 pt-0 md:pb-20">
      <div className="relative mx-4 overflow-hidden rounded-[28px] border border-cyan/25 bg-void-3 sm:mx-6">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/6 blur-[80px]" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[400px] h-[200px] bg-neon-purple/5 blur-[60px]" />

        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

        <div className="relative px-6 py-14 text-center sm:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-void px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
              Mulai Sekarang
            </span>
          </div>

          <h2 className="mx-auto max-w-[26ch] font-display text-[28px] font-bold text-white sm:text-[34px] lg:text-[42px] leading-[1.15]">
            Ojo puteg maneh, ayo kenali potensi bocahmu bareng{" "}
            <span className="text-cyan">STIFIN Brain</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[52ch] text-[16px] text-slate-light">
            Chat admin sekarang untuk atur jadwal tes dan konsultasi. Prosesnya cepat, hasilnya
            bisa jadi panduan seumur hidup.
          </p>

          <div className="mt-8 flex justify-center">
            <WaButton href={waLink(WA_DEFAULT_MESSAGE)}>Chat Admin via WhatsApp</WaButton>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-gold/30 to-transparent" />
      </div>
    </section>
  );
}
