import PageHeader from "../_components/PageHeader";
import CarouselInitializer from "../_components/CarouselInitializer";
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

      {/* Vendor Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
          <div className="bg-white">
            <div className="owl-carousel vendor-carousel">
              <img src="/img/vendor-1.jpg" alt="" />
              <img src="/img/vendor-2.jpg" alt="" />
              <img src="/img/vendor-3.jpg" alt="" />
              <img src="/img/vendor-4.jpg" alt="" />
              <img src="/img/vendor-5.jpg" alt="" />
              <img src="/img/vendor-6.jpg" alt="" />
              <img src="/img/vendor-7.jpg" alt="" />
              <img src="/img/vendor-8.jpg" alt="" />
              <img src="/img/vendor-9.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <CarouselInitializer />
    </>
  );
}
