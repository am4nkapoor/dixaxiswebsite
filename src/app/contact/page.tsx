import ContactForm from "../_components/ContactForm";
import PageHeader from "../_components/PageHeader";

export default function Contact() {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <PageHeader
          title="Contact Us"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </div>

      {/* Contact Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+91 8929450470</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Email to get free quote</h5>
                  <h4 className="text-primary mb-0">info@divaxis.com</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Visit our office</h5>
                  <h4 className="text-primary mb-0">1086B, 4th Floor, Sector 57, Gurugram 122003</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <h4 className="mb-4">Get in touch with us. Send your message and we will respond as soon as possible.</h4>
              <ContactForm />
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                className="position-relative rounded w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0!2d77.071!3d28.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5b3b2b2b2b%3A0x0!2zMjjCsDI3JzA2IiBOIDc3wrAwNCcxNiIiRQ!5e0!3m2!1sen!2sin!4v1603794290143!5m2!1sen!2sin"
                frameBorder={0}
                style={{ minHeight: 350, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Office location"
              />
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
