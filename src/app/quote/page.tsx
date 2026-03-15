import CarouselInitializer from "../_components/CarouselInitializer";
import ClientLogosCarousel from "../_components/ClientLogosCarousel";
import PageHeader from "../_components/PageHeader";
import QuoteForm from "../_components/QuoteForm";

export default function Quote() {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <PageHeader
          title="Free Quote"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Free Quote", href: "/quote" },
          ]}
        />
      </div>

      {/* Quote Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
              </div>
              <div className="row gx-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                </div>
              </div>
              <p className="mb-4">Tell us about your project—whether you need a new application, integration, or support. Our team will review your request and get back with a tailored quote. We work across web, mobile, cloud, and enterprise software to deliver solutions that fit your goals and timeline.</p>
              <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+91 8929450470</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
              <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientLogosCarousel />
      <CarouselInitializer />
    </>
  );
}
