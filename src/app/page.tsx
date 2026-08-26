"use client";

import LoadingExperience from "@/components/loading-experience";
import Hero from "@/components/hero";
import StudioIntro from "@/components/studio-intro";
import IndianIdentity from "@/components/indian-identity";
import ThreePillars from "@/components/three-pillars";
import PhilosophySequence from "@/components/philosophy-sequence";
import ProjectShowcase from "@/components/project-showcase";
import ServiceAccordion from "@/components/service-accordion";
import VastuSection from "@/components/vastu-section";
import ProcessTimeline from "@/components/process-timeline";
import FounderSection from "@/components/founder-section";
import MaterialGallery from "@/components/material-gallery";
import Testimonials from "@/components/testimonials";
import InstagramSection from "@/components/instagram-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <LoadingExperience />
      <Hero />
      <StudioIntro />
      <IndianIdentity />
      <ThreePillars />
      <PhilosophySequence />
      <ProjectShowcase />
      <ServiceAccordion />
      <VastuSection />
      <ProcessTimeline />
      <FounderSection />
      <MaterialGallery />
      <Testimonials />
      <InstagramSection />
      <ContactSection />
    </>
  );
}
