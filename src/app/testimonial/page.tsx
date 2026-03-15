import CarouselInitializer from "../_components/CarouselInitializer";
import ClientLogosCarousel from "../_components/ClientLogosCarousel";
import PageHeader from "../_components/PageHeader";
import TestimonialSection from "../_components/TestimonialSection";

export default function Testimonial() {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <PageHeader
          title="Testimonial"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Testimonial", href: "/testimonial" },
          ]}
        />
      </div>

      <TestimonialSection />

      <ClientLogosCarousel />
      <CarouselInitializer />
    </>
  );
}
