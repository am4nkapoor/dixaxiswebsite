'use client';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <main>
      <div className="container-fluid bg-header py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-white fw-bold" data-aos="fade-up">About Us</h1>
              <p className="text-white-50" data-aos="fade-up" data-aos-delay="150">Home &nbsp;/&nbsp; About</p>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid py-5">
        <div className="container py-5">
          <motion.div
            className="row g-5 align-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4" data-aos="fade-up">
                <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
              </div>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="150">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod
                magna dolore erat amet.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6">
                  <h5 className="mb-3" data-aos="fade-right">
                    <i className="fa fa-check text-primary me-3"></i>Award Winning
                  </h5>
                  <h5 className="mb-3" data-aos="fade-right" data-aos-delay="150">
                    <i className="fa fa-check text-primary me-3"></i>Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6">
                  <h5 className="mb-3" data-aos="fade-left">
                    <i className="fa fa-check text-primary me-3"></i>24/7 Support
                  </h5>
                  <h5 className="mb-3" data-aos="fade-left" data-aos-delay="150">
                    <i className="fa fa-check text-primary me-3"></i>Fair Prices
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: 450 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src="/img/about.jpg" style={{ objectFit: "cover" }} alt="About" data-aos="fade-left" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="container py-5">
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
      </section>
    </main>
  );
}
