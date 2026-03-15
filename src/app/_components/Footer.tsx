import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <Link href="/" className="navbar-brand">
                  <h1 className="m-0 text-white d-inline-flex align-items-center">
                    <span className="me-2 d-inline-flex align-items-center">
                      <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect x="6" y="6" width="20" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="4"></rect>
                        <rect x="14" y="14" width="8" height="8" transform="rotate(45 18 18)" fill="currentColor"></rect>
                        <path d="M30 8 V28" stroke="#f26b21" strokeWidth="6" strokeLinecap="round"></path>
                      </svg>
                    </span>
                    DivAxis
                  </h1>
                </Link>
                <p className="mt-3 mb-4">DivAxis is an IT software company delivering custom software, web and mobile solutions, and digital transformation for businesses worldwide. Partner with us to build scalable, secure, and innovative technology.</p>
                <NewsletterSignup />
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">1086B, 4th Floor, Sector 57, Gurugram 122003</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">info@divaxis.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+91 8929450470</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="text-light mb-2 text-decoration-none" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/service"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/team"><i className="bi bi-arrow-right text-primary me-2"></i>Our Leadership</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/testimonial"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                    <Link className="text-light text-decoration-none" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="text-light mb-2 text-decoration-none" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/service"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/team"><i className="bi bi-arrow-right text-primary me-2"></i>Our Leadership</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/testimonial"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                    <Link className="text-light text-decoration-none" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white" style={{ background: "#061429" }}>
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div className="d-flex align-items-center justify-content-center" style={{ height: 75 }}>
                <p className="mb-0">&copy; 2026 <Link className="text-white border-bottom text-decoration-none" href="/">DivAxis Consultancy</Link>. Made with <span className="text-danger">♥</span> love. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  );
}
