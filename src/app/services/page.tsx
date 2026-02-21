'use client';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <main>
      <div className="container-fluid bg-header py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-white fw-bold" data-aos="fade-up">Services</h1>
              <p className="text-white-50" data-aos="fade-up" data-aos-delay="150">Home &nbsp;/&nbsp; Services</p>
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
            <h5 className="fw-bold text-primary text-uppercase" data-aos="fade-up">Our Services</h5>
            <h1 className="mb-0" data-aos="fade-up" data-aos-delay="150">Custom IT Solutions for Your Successful Business</h1>
          </motion.div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="bg-light rounded p-4 h-100 service-item">
                <div className="service-icon">
                  <i className="fa fa-shield-alt text-white"></i>
                </div>
                <h5 className="mb-3">Cyber Security</h5>
                <p className="mb-4">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
                <a className="btn btn-light" href="#"><i className="fa fa-plus text-primary"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-light rounded p-4 h-100 service-item">
                <div className="service-icon">
                  <i className="fa fa-chart-line text-white"></i>
                </div>
                <h5 className="mb-3">Data Analytics</h5>
                <p className="mb-4">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
                <a className="btn btn-light" href="#"><i className="fa fa-plus text-primary"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-light rounded p-4 h-100 service-item">
                <div className="service-icon">
                  <i className="fa fa-code text-white"></i>
                </div>
                <h5 className="mb-3">Web Development</h5>
                <p className="mb-4">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
                <a className="btn btn-light" href="#"><i className="fa fa-plus text-primary"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="bg-light rounded p-4 h-100 service-item">
                <div className="service-icon">
                  <i className="fa fa-mobile-alt text-white"></i>
                </div>
                <h5 className="mb-3">Apps Development</h5>
                <p className="mb-4">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
                <a className="btn btn-light" href="#"><i className="fa fa-plus text-primary"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-light rounded p-4 h-100 service-item">
                <div className="service-icon">
                  <i className="fa fa-search text-white"></i>
                </div>
                <h5 className="mb-3">SEO Optimization</h5>
                <p className="mb-4">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
                <a className="btn btn-light" href="#"><i className="fa fa-plus text-primary"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-primary text-white rounded p-5 h-100 d-flex flex-column justify-content-center">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p>Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod.</p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
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
