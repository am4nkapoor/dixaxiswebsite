import CarouselInitializer from "../_components/CarouselInitializer";
import ClientLogosCarousel from "../_components/ClientLogosCarousel";
import PageHeader from "../_components/PageHeader";
import TeamSection from "../_components/TeamSection";

export default function Team() {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <PageHeader
          title="Our Leadership"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Our Leadership", href: "/team" },
          ]}
        />
      </div>

      <TeamSection />

      <ClientLogosCarousel />
      <CarouselInitializer />
    </>
  );
}
