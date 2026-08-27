"use client";

import { useState } from "react";
import PopupStifin from "./PopupStifin";

const types = [
  {
    badge: "S",
    name: "Sensing",
    desc: "Detail, teliti, dan praktis dalam bertindak",
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    detail: {
      belajar: "Belajar paling efektif lewat praktik langsung, bukan teori panjang. Butuh langkah-langkah yang jelas dan terstruktur.",
      karir: "Cocok di bidang teknik, medis, militer, pertanian, atau pekerjaan yang membutuhkan ketelitian tinggi.",
      karakter: "Disiplin, konsisten, bertanggung jawab, dan sangat andal dalam menyelesaikan tugas.",
    },
  },
  {
    badge: "T",
    name: "Thinking",
    desc: "Logis, analitis, suka memecahkan masalah",
    color: "from-gray-50 to-gray-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-700",
    detail: {
      belajar: "Belajar paling baik dengan memahami konsep dan logika di balik sesuatu. Suka menganalisis dan berdebat ide.",
      karir: "Cocok di bidang sains, teknologi, hukum, keuangan, atau profesi yang butuh pemikiran kritis.",
      karakter: "Objektif, mandiri, tegas, dan selalu mencari solusi paling efisien.",
    },
  },
  {
    badge: "I",
    name: "Intuiting",
    desc: "Kreatif, visioner, penuh ide baru",
    color: "from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-700",
    detail: {
      belajar: "Belajar paling baik lewat eksplorasi bebas dan mengikuti minat. Tidak suka aturan kaku, butuh ruang berimajinasi.",
      karir: "Cocok di bidang seni, desain, riset, kewirausahaan, atau pekerjaan yang membutuhkan inovasi.",
      karakter: "Imajinatif, penuh inisiatif, mudah bosan dengan rutinitas, dan selalu punya ide baru.",
    },
  },
  {
    badge: "F",
    name: "Feeling",
    desc: "Peka, empatik, kuat dalam relasi sosial",
    color: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    textColor: "text-red-700",
    detail: {
      belajar: "Belajar paling baik dalam suasana harmonis dan dengan motivasi dari orang-orang sekitar. Suka diskusi dan kerja tim.",
      karir: "Cocok di bidang pendidikan, psikologi, sosial, kesehatan, atau profesi yang berhubungan langsung dengan orang.",
      karakter: "Hangat, peduli, mudah bergaul, dan sangat peka terhadap perasaan orang lain.",
    },
  },
  {
    badge: "In",
    name: "Insting",
    desc: "Fleksibel, adaptif, mengandalkan naluri",
    color: "from-green-50 to-green-100",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    detail: {
      belajar: "Belajar paling baik lewat pengalaman langsung dan intuisi. Mampu beradaptasi cepat di berbagai situasi.",
      karir: "Cocok di bidang kepemimpinan, entrepeneurship, negosiasi, atau pekerjaan yang dinamis dan penuh tantangan.",
      karakter: "Spontan, berani mengambil risiko, cepat mengambil keputusan, dan sangat adaptif.",
    },
  },
];

const facts = [
  { icon: "⚡", text: "Bisa dites sejak usia ±2,5 tahun" },
  { icon: "♾️", text: "Cukup 1x tes seumur hidup" },
  { icon: "⏱️", text: "Hasil keluar hanya beberapa menit" },
];

export default function StifinExplainer() {
  const [selected, setSelected] = useState<typeof types[0] | null>(null);

  return (
    <section id="metode" className="relative bg-white py-16 overflow-hidden md:py-20">
      <div className="pointer-events-none absolute right-0 top-0 w-96 h-96 rounded-full bg-blue-50 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-cyan">
                Kenalan dengan Metode
              </span>
            </div>
            <h2 className="font-display text-[30px] font-bold text-slate-light sm:text-[36px] lg:text-[42px]">
              Apa itu{" "}
              <span className="gradient-text-cyan">STIFIN?</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-mid">
              Tes STIFIN Brain membaca pola sidik jari anak yang terhubung dengan mesin kecerdasan
              atau belahan otak dominannya. Berbeda dari kuesioner biasa yang hasilnya bisa
              berubah-ubah, pola sidik jari terbentuk sejak lahir dan tidak akan berubah seumur
              hidup — jadi cukup dites satu kali saja.
            </p>

            <div className="mt-7 space-y-3">
              {facts.map((fact) => (
                <div
                  key={fact.text}
                  className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3"
                >
                  <span className="text-lg">{fact.icon}</span>
                  <span className="text-[15px] font-bold text-slate-light">{fact.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[13px] font-semibold text-slate-mid">
              👆 Klik kartu untuk lihat detail tiap tipe
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {types.map((type) => (
                <button
                  key={type.badge}
                  onClick={() => setSelected(type)}
                  className={`group relative overflow-hidden rounded-2xl border ${type.borderColor} bg-gradient-to-br ${type.color} p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-glow cursor-pointer`}
                >
                  <div className={`mx-auto mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 ${type.borderColor} bg-white font-display text-xl font-bold ${type.textColor}`}>
                    {type.badge}
                  </div>
                  <h3 className={`font-body text-[15px] font-bold ${type.textColor}`}>{type.name}</h3>
                  <p className="mt-1.5 text-[12px] text-slate-mid">{type.desc}</p>
                  <div className={`mt-2 text-[11px] font-semibold ${type.textColor} opacity-70`}>
                    Tap untuk detail →
                  </div>
                </button>
              ))}

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1 flex items-center justify-center rounded-2xl border border-dashed border-blue-300 bg-blue-50 p-5 text-center">
                <div>
                  <div className="font-display text-[13px] text-slate-mid mb-1">Anakmu tipe apa?</div>
                  <div className="text-[13px] font-bold text-cyan">Cek lewat tes →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <PopupStifin type={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
