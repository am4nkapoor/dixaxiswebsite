'use client';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
export default function Testimonial() {
  return (
    <main className="container py-5">
      <motion.div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
        <h1 className="mb-0">What Clients Say</h1>
      </motion.div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
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
    </main>
  );
}
