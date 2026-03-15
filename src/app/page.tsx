import Link from "next/link";
import CarouselInitializer from "./_components/CarouselInitializer";
import ClientLogosCarousel from "./_components/ClientLogosCarousel";
import CounterUp from "./_components/CounterUp";
import QuoteForm from "./_components/QuoteForm";
import TeamSection from "./_components/TeamSection";
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {
  return (
    <main>
      {/* Navbar & Carousel */}
      <div className="container-fluid position-relative p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <Link href="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Link>
                  <Link href="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <Link href="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Link>
                  <Link href="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
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

      {/* Facts Start */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-users text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Happy Clients</h5>
                  <h1 className="text-white mb-0"><CounterUp to={60} suffix="+" className="text-white" /></h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-primary mb-0">Projects Done</h5>
                  <h1 className="mb-0"><CounterUp to={100} suffix="+" /></h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-award text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Win Awards</h5>
                  <h1 className="text-white mb-0"><CounterUp to={12} suffix="+" className="text-white" /></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                <h1 className="mb-0">The Best IT Solution With 10+ Years of Experience</h1>
              </div>
              <p className="mb-4">DivAxis is an IT software company that helps businesses grow through custom software, web and mobile development, and digital transformation. We combine technical expertise with agile delivery to build scalable, secure solutions that drive results.</p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+91 8929450470</h4>
                </div>
              </div>
              <Link href="/quote" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</Link>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="/img/about.jpg" style={{ objectFit: "cover" }} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-cubes text-white"></i>
                    </div>
                    <h4 className="mb-0 ms-3">Best In Industry</h4>
                  </div>
                  <p className="mb-0">Enterprise-grade software and cloud solutions built for reliability and scale.</p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-award text-white"></i>
                    </div>
                    <h4 className="mb-0 ms-3">Award Winning</h4>
                  </div>
                  <p className="mb-0">Quality-driven delivery and industry recognition for excellence in software and support.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: 350 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="/img/feature.jpg" style={{ objectFit: "cover" }} alt="Feature" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-users-cog text-white"></i>
                    </div>
                    <h4 className="mb-0 ms-3">Professional Staff</h4>
                  </div>
                  <p className="mb-0">Skilled engineers and consultants who bring best practices and clean, maintainable code.</p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 60, height: 60 }}>
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <h4 className="mb-0 ms-3">24/7 Support</h4>
                  </div>
                  <p className="mb-0">Round-the-clock technical support and maintenance so your systems stay running.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <p className="m-0">Turn data into decisions with dashboards, reporting, and analytics tailored to your business.</p>
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
       
              </div>
              <p className="mb-4">Tell us about your requirements. Our team will review your request and get back to you with a tailored quote. We work across web, mobile, cloud, and enterprise software to deliver scalable solutions that fit your goals and budget.</p>
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

      <TestimonialSection />

      <TeamSection />

      <ClientLogosCarousel />
      <CarouselInitializer />
    </main>
  );
}
