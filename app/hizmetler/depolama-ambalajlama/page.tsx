import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ServicePageContent from "./ServicePageContent";
import { metadata as pageMetadata } from "./data";

export const metadata: Metadata = pageMetadata;

export default function DepolamaAmbalajlamaPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ServicePageContent />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
