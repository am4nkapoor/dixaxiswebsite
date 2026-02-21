'use client';
import { motion } from "framer-motion";
import VendorCarouselInit from "./_components/VendorCarouselInit";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main>
      <div className="container-fluid position-relative p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <a href="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                    Free Quote
                  </a>
                  <a href="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <a href="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                    Free Quote
                  </a>
                  <a href="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <motion.div
            className="row gx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="col-lg-4">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-users text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Happy Clients</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-primary mb-0">Projects Done</h5>
                  <h1 className="mb-0" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-award text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Win Awards</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="container-fluid py-5" data-wow-delay="0.1s">
        <div className="container py-5">
          <motion.div
            className="row g-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase" data-aos="fade-up">About Us</h5>
                <h1 className="mb-0" data-aos="fade-up" data-aos-delay="150">The Best IT Solution With 10 Years of Experience</h1>
              </div>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod
                magna dolore erat amet.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Award Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>24/7 Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Fair Prices
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
              <a href="/quote" className="btn btn-primary py-3 px-5 mt-3">
                Request A Quote
              </a>
            </div>
            <motion.div
              className="col-lg-5"
              style={{ minHeight: 500 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src="/img/about.jpg" style={{ objectFit: "cover" }} alt="About" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="container py-5">
          <motion.div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
          </motion.div>
          <motion.div
            className="row g-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-cubes text-white"></i>
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-3" data-aos="fade-right">Best In Industry</h5>
                      <p className="mb-0" data-aos="fade-right" data-aos-delay="100">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-award text-white"></i>
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-3" data-aos="fade-right">Award Winning</h5>
                      <p className="mb-0" data-aos="fade-right" data-aos-delay="100">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
          <div id="home-testimonial" className="owl-carousel owl-theme testimonial-carousel">
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img className="img-fluid rounded" src="/img/testimonial-1.jpg" style={{ width: 80, height: 80 }} alt="" />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</div>
            </div>
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img className="img-fluid rounded" src="/img/testimonial-2.jpg" style={{ width: 80, height: 80 }} alt="" />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</div>
            </div>
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img className="img-fluid rounded" src="/img/testimonial-3.jpg" style={{ width: 80, height: 80 }} alt="" />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</div>
            </div>
          </div>
          
        </div>
      </section>
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
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-shield-alt text-white"></i>
                  </div>
                  <h5 className="mb-0 ps-4">Cyber Security</h5>
                </div>
                <p className="mb-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-chart-line text-white"></i>
                  </div>
                  <h5 className="mb-0 ps-4">Data Analytics</h5>
                </div>
                <p className="mb-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-code text-white"></i>
                  </div>
                  <h5 className="mb-0 ps-4">Web Development</h5>
                </div>
                <p className="mb-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-mobile-alt text-white"></i>
                  </div>
                  <h5 className="mb-0 ps-4">Apps Development</h5>
                </div>
                <p className="mb-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-search text-white"></i>
                  </div>
                  <h5 className="mb-0 ps-4">SEO Optimization</h5>
                </div>
                <p className="mb-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
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
          <motion.div
            className="row g-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check text-primary me-3"></i>
                    <h5 className="mb-0">Reply within 24 hours</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check text-primary me-3"></i>
                    <h5 className="mb-0">24 hrs telephone support</h5>
                  </div>
                </div>
              </div>
              <p className="mb-4">
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et sea ea at dolor, justo ipsum duo rebum sea
                invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus
                sed et. Takimata takimata sanctus sed.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary rounded p-5">
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <select className="form-select bg-light border-0">
                      <option>Select A Service</option>
                      <option>Cyber Security</option>
                      <option>Data Analytics</option>
                      <option>Web Development</option>
                      <option>Apps Development</option>
                      <option>SEO Optimization</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <textarea className="form-control bg-light border-0" rows={4} placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark w-100 py-3">
                    Request A Quote
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="container py-5">
          <motion.div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Our Vendors</h5>
            <h1 className="mb-0">Trusted Partners</h1>
          </motion.div>
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
      <VendorCarouselInit />
    </main>
  );
}
