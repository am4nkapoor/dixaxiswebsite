import CarouselInitializer from "../_components/CarouselInitializer";
import ClientLogosCarousel from "../_components/ClientLogosCarousel";
import PageHeader from "../_components/PageHeader";
import TeamSection from "../_components/TeamSection";

export default function Team() {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <PageHeader
          title="Team Members"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Team Members", href: "/team" },
          ]}
        />
      </div>

      <TeamSection />

      <ClientLogosCarousel />
      <CarouselInitializer />
    </>
  );
}
