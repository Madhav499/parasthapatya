import StudioIntro from "@/components/studio-intro";
import IndianIdentity from "@/components/indian-identity";
import ThreePillars from "@/components/three-pillars";
import FounderSection from "@/components/founder-section";
import MaterialGallery from "@/components/material-gallery";

export const metadata = {
  title: "Studio & Philosophy | PARĀ — The Sthapatya Studio",
  description: "Learn about PARĀ studio philosophy, Principal Architect Ar. Urval Dhruve, Indian spatial heritage, and material craft.",
};

export default function StudioPage() {
  return (
    <div className="pt-20">
      <StudioIntro />
      <IndianIdentity />
      <ThreePillars />
      <FounderSection />
      <MaterialGallery />
    </div>
  );
}
