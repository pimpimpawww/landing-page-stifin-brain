import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "STIFIN Brain – Semar Ojo Puteg | Konsultasi Minat & Bakat Anak",
  description:
    "Ojo puteg, wes wayahe ngerti potensi bocahmu. Konsultasi minat dan bakat anak lewat tes fingerprint STIFIN Brain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-body text-slate-light antialiased bg-void">{children}</body>
    </html>
  );
}
