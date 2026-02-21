'use client';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Feature() {
  return (
    <main>
      <div className="container-fluid bg-header py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-white fw-bold" data-aos="fade-up">Features</h1>
              <p className="text-white-50" data-aos="fade-up" data-aos-delay="150">Home &nbsp;/&nbsp; Features</p>
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
            <h5 className="fw-bold text-primary text-uppercase" data-aos="fade-up">Why Choose Us</h5>
            <h1 className="mb-0" data-aos="fade-up" data-aos-delay="150">We Are Here to Grow Your Business Exponentially</h1>
          </motion.div>

          <motion.div
            className="row g-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="col-lg-4" data-aos="fade-right">
              <div className="row g-5">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-cubes text-white"></i>
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-3">Best In Industry</h5>
                      <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-award text-white"></i>
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-3">Award Winning</h5>
                      <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <motion.img
                className="img-fluid rounded"
                src="/img/feature.jpg"
                alt="Feature"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            <div className="col-lg-4" data-aos="fade-left">
              <div className="row g-5">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-users text-white"></i>
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-3">Professional Staff</h5>
                      <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-3">24/7 Support</h5>
                      <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                  </div>
                </div>
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
