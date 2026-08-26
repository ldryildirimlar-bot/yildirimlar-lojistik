import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import LogisticsGuide from "@/components/LogisticsGuide";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Gallery />
        <HowWeWork />
        <Services />
        <WhyChooseUs />
        <QuoteForm />
        <Testimonials />
        <LogisticsGuide />
      </main>
      <Footer />
    </>
  );
}
