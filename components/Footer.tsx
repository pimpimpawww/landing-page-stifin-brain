import Image from "next/image";
import { WA_DISPLAY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-100 bg-white px-6 pb-28 pt-10 text-center md:pb-10">
      <div className="mx-auto mb-4 flex max-w-6xl flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Logo STIFIN Brain Semar Ojo Puteg"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border-2 border-cyan object-cover"
          />
          <div className="text-left">
            <div className="font-display text-[16px] font-bold text-cyan-dark">STIFIN BRAIN</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-mid">
              Semar Ojo Puteg
            </div>
          </div>
        </div>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <p className="text-[13px] text-slate-mid">
          WhatsApp Pendaftaran: <span className="text-cyan font-semibold">{WA_DISPLAY}</span>
        </p>
        <p className="text-[12px] text-slate-dim">
          © 2026 STIFIN Brain – Semar Ojo Puteg. Ojo puteg, wes wayahe ngerti potensi bocahmu.
        </p>
      </div>
    </footer>
  );
}
