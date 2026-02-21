'use client';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <main>
      <div className="container-fluid bg-header py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-white fw-bold" data-aos="fade-up">Contact Us</h1>
              <p className="text-white-50" data-aos="fade-up" data-aos-delay="150">Home &nbsp;/&nbsp; Contact</p>
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
            <h5 className="fw-bold text-primary text-uppercase" data-aos="fade-up">Contact Us</h5>
            <h1 className="mb-0" data-aos="fade-up" data-aos-delay="150">If You Have Any Query, Feel Free To Contact Us</h1>
          </motion.div>

          <motion.div
            className="row g-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="col-lg-7" data-aos="fade-up">
              <div className="row g-3 mb-4">
                <div className="col-sm-4">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-phone-alt text-primary me-3"></i>
                    <div>
                      <small className="text-uppercase">Call to ask any question</small>
                      <h6 className="text-primary mb-0">+012 345 6789</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-envelope-open text-primary me-3"></i>
                    <div>
                      <small className="text-uppercase">Email to get free quote</small>
                      <h6 className="text-primary mb-0">info@example.com</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-map-marker-alt text-primary me-3"></i>
                    <div>
                      <small className="text-uppercase">Visit our office</small>
                      <h6 className="text-primary mb-0">123 Street, NY, USA</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary rounded p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <input type="text" className="form-control bg-light border-0" placeholder="Your Name" data-aos="fade-up" />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" className="form-control bg-light border-0" placeholder="Your Email" data-aos="fade-up" data-aos-delay="100" />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control bg-light border-0" placeholder="Subject" data-aos="fade-up" data-aos-delay="200" />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control bg-light border-0" rows={4} placeholder="Message" data-aos="fade-up" data-aos-delay="300"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-dark w-100 py-3" data-aos="zoom-in" data-aos-delay="150">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="150">
              <div className="rounded h-100 overflow-hidden">
                <iframe
                  title="map"
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24177.5620869419!2d-74.006015!3d40.712728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  style={{ minHeight: 350, border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
