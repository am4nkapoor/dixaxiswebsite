import Link from "next/link";
import PageHeader from "../_components/PageHeader";
import CarouselInitializer from "../_components/CarouselInitializer";
import TestimonialSection from "../_components/TestimonialSection";

export default function Service() {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <PageHeader
          title="Services"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/service" },
          ]}
        />
      </div>

      {/* Service Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-shield-alt text-white"></i>
                </div>
                <h4 className="mb-3">Cyber Security</h4>
                <p className="m-0">Protect your systems and data with security audits, penetration testing, and compliance-focused solutions.</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-chart-pie text-white"></i>
                </div>
                <h4 className="mb-3">Data Analytics</h4>
                <p className="m-0">Turn data into decisions with dashboards, reporting, and analytics solutions tailored to your business.</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-code text-white"></i>
                </div>
                <h4 className="mb-3">Web Development</h4>
                <p className="m-0">Custom websites, web apps, and APIs built with modern frameworks for performance and scale.</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fab fa-android text-white"></i>
                </div>
                <h4 className="mb-3">Apps Development</h4>
                <p className="m-0">Native and cross-platform mobile apps for iOS and Android that users love.</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-search text-white"></i>
                </div>
                <h4 className="mb-3">SEO Optimization</h4>
                <p className="m-0">Improve visibility and rankings with technical SEO, content strategy, and analytics.</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">Discuss your project with our team. We respond quickly and provide clear, competitive quotes.</p>
                <h2 className="text-white mb-0">+91 8929450470</h2>
              </div>
            </div>
          </div>
        </div>
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
