import ServiceAccordion from "@/components/service-accordion";
import VastuSection from "@/components/vastu-section";
import ProcessTimeline from "@/components/process-timeline";

export const metadata = {
  title: "Services & Spatial Disciplines | PARĀ — The Sthapatya Studio",
  description: "Explore PARĀ's architectural services: Architecture, Interior Design, Vastu, Pranic FengShui, Landscape, Revamp, and Décor Curation.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServiceAccordion />
      <VastuSection />
      <ProcessTimeline />
    </div>
  );
}
