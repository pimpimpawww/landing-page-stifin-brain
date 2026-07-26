export const WA_NUMBER = "6281325876722";
export const WA_DISPLAY = "081 325 876 722";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE =
  "Halo, saya ingin konsultasi tes minat bakat anak di STIFIN Brain - Semar Ojo Puteg";
