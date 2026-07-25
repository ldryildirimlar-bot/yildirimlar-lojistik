"use client";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceOffer from "@/components/services/ServiceOffer";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceWhyChoose from "@/components/services/ServiceWhyChoose";
import ServiceFaq from "@/components/services/ServiceFaq";
import * as content from "./data";

// Imports the icon-bearing content directly inside this Client Component
// rather than receiving it as props from the Server Component page — icon
// references (functions) can't cross the Server→Client prop boundary, only
// plain data or already-rendered elements can.
export default function ServicePageContent() {
  return (
    <>
      <ServiceHero {...content.hero} />
      <ServiceOverview {...content.overview} />
      <ServiceOffer {...content.offer} />
      <ServiceProcess {...content.process} />
      <ServiceWhyChoose {...content.whyChoose} />
      <ServiceFaq {...content.faq} />
    </>
  );
}
