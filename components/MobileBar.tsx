import WaButton from "./WaButton";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/constants";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center border-t border-cyan/15 bg-void/95 px-4 py-3 backdrop-blur-lg shadow-[0_-8px_30px_rgba(0,212,255,0.1)] md:hidden">
      <WaButton href={waLink(WA_DEFAULT_MESSAGE)} className="w-full justify-center">
        Konsultasi via WhatsApp
      </WaButton>
    </div>
  );
}
