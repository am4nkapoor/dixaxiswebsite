'use client';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
export default function Testimonial() {
  return (
    <main>
      <div className="container-fluid bg-header py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-white fw-bold" data-aos="fade-up">Testimonial</h1>
              <p className="text-white-50" data-aos="fade-up" data-aos-delay="150">Home &nbsp;/&nbsp; Testimonial</p>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid py-5">
        <div className="container py-5">
          <motion.div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 700 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h5 className="fw-bold text-primary text-uppercase" data-aos="fade-up">Testimonial</h5>
            <h1 className="mb-0" data-aos="fade-up" data-aos-delay="150">What Our Clients Say About Our Digital Services</h1>
          </motion.div>

          <div id="page-testimonial" className="owl-carousel owl-theme testimonial-carousel">
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img className="img-fluid rounded" src="/img/testimonial-1.jpg" style={{ width: 80, height: 80 }} alt="" />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos.</div>
            </div>
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img className="img-fluid rounded" src="/img/testimonial-2.jpg" style={{ width: 80, height: 80 }} alt="" />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos.</div>
            </div>
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img className="img-fluid rounded" src="/img/testimonial-3.jpg" style={{ width: 80, height: 80 }} alt="" />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos.</div>
            </div>
          </div>
          
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
