"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Usia berapa anak bisa mengikuti tes STIFIN?",
    a: "Tes bisa diikuti sejak usia ±2,5 tahun, karena pola sidik jari sudah terbentuk sejak lahir dan tidak berubah seumur hidup. Idealnya dilakukan di usia keemasan (3–7 tahun) agar hasilnya bisa segera dimanfaatkan untuk arah belajar anak.",
  },
  {
    q: "Berapa lama prosesnya?",
    a: "Proses scan sidik jari hanya butuh beberapa menit dan hasilnya bisa langsung keluar. Sesi konsultasi hasil biasanya berlangsung 30–60 menit. Tes ini juga cukup dilakukan satu kali seumur hidup.",
  },
  {
    q: "Apakah tesnya sakit atau ribet?",
    a: "Tidak. Prosesnya hanya berupa pemindaian sidik jari, aman dan nyaman untuk anak-anak, tanpa jarum atau tindakan medis apa pun.",
  },
  {
    q: "Hasil tes dalam bentuk apa?",
    a: "Orang tua akan menerima laporan tertulis berisi pemetaan kecerdasan dan kepribadian anak, dilengkapi rekomendasi arah belajar yang dijelaskan langsung oleh konsultan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-void py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute right-0 bottom-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/8 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-purple animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-neon-purple">
              Pertanyaan Umum
            </span>
          </div>
          <h2 className="font-display text-[28px] font-bold text-white sm:text-[34px] lg:text-[38px]">
            Yang sering{" "}
            <span className="text-cyan">ditanyakan</span>
          </h2>
        </div>

        <div className="max-w-2xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`rounded-2xl border bg-void-3 overflow-hidden transition-all duration-300 ${
                open === i ? "border-cyan/35" : "border-slate-dim/20"
              }`}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`text-[16px] font-bold transition-colors ${open === i ? "text-cyan" : "text-white"}`}>
                  {faq.q}
                </span>
                <span
                  className={`ml-4 shrink-0 font-display text-xl text-cyan transition-transform duration-300 ${
                    open === i ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-gradient-to-r from-cyan/30 to-transparent mb-4" />
                  <p className="text-[15px] text-slate-light leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
