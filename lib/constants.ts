export const WA_NUMBER = "6285211618899";
export const WA_DISPLAY = "0852-1161-8899";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE =
  "Halo, saya ingin konsultasi tes minat bakat anak di STIFIN Brain - Talenta Pemalang";
