import Image from "next/image";
import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-baru.jpg"
            alt="Logo STIFIN Brain Talenta Pemalang"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border-2 border-cyan object-cover"
          />
          <div>
            <div className="font-display text-[17px] font-bold leading-tight text-cyan-dark">
              STIFIN BRAIN
            </div>
            <div className="font-body text-[10px] font-semibold uppercase tracking-widest text-slate-mid">
              Talenta Pemalang
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {["Metode", "Manfaat", "Harga", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-medium text-slate-mid transition-colors hover:text-cyan"
            >
              {item}
            </a>
          ))}
        </nav>

        <WaButton href={waLink(WA_DEFAULT_MESSAGE)} size="sm">
          Chat Admin
        </WaButton>
      </div>
    </header>
  );
}
