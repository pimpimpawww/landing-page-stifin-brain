import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import PainPoints from "@/components/PainPoints";
import StifinExplainer from "@/components/StifinExplainer";
import Benefits from "@/components/Benefits";
import GoldenAge from "@/components/GoldenAge";
import Process from "@/components/Process";
import VideoSection from "@/components/VideoSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import PopupWelcome from "@/components/PopupWelcome";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Divider />
      <ScrollReveal><PainPoints /></ScrollReveal>
      <ScrollReveal delay={100}><StifinExplainer /></ScrollReveal>
      <ScrollReveal delay={100}><Benefits /></ScrollReveal>
      <ScrollReveal delay={100}><GoldenAge /></ScrollReveal>
      <ScrollReveal delay={100}><Process /></ScrollReveal>
      <ScrollReveal delay={100}><VideoSection /></ScrollReveal>
      <ScrollReveal delay={100}><Pricing /></ScrollReveal>
      <ScrollReveal delay={100}><Testimonials /></ScrollReveal>
      <ScrollReveal delay={100}><FAQ /></ScrollReveal>
      <ScrollReveal delay={100}><FinalCTA /></ScrollReveal>
      <Footer />
      <MobileBar />
      <PopupWelcome />
    </>
  );
}
