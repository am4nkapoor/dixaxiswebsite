export default function Footer() {
  return (
    <>
      <div className="container-fluid mt-5 p-0">
        <div className="row g-0">
          {/* Left blue panel */}
          <div className="col-lg-4 footer-left text-light p-5 d-flex align-items-start">
            <div className="pe-lg-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M40 18 H32 C24 18 20 22 20 30 V70 C20 78 24 82 32 82 H40"
                      fill="none" stroke="#0A4964" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M60 18 H68 C76 18 80 22 80 30 V70 C80 78 76 82 68 82 H60"
                      fill="none" stroke="#F26B21" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M44 35 L60 50 L44 65"
                      fill="none" stroke="#0A4964" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="49" y="46" width="8" height="8" transform="rotate(45 53 50)" fill="#0A4964"/>
                  </svg>
                </div>
                <h2 className="text-white ms-3 mb-0">Startup</h2>
              </div>
              <p className="text-white-50">
                Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat
                lorem stet eos. Diam amet et kasd eos duo.
              </p>
              <div className="position-relative mb-3" style={{ maxWidth: 420 }}>
                <input className="form-control bg-light border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your Email" />
                <button type="button" className="btn btn-dark py-2 position-absolute top-0 end-0 mt-2 me-2">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          {/* Right dark panel */}
          <div className="col-lg-8 footer-right text-light p-5">
            <div className="container-fluid px-0">
              <div className="row g-5">
                <div className="col-md-4">
                  <h4 className="text-white mb-3">Get In Touch</h4>
                  <div className="mb-3" style={{ width: 60, height: 3, backgroundColor: '#0dcaf0' }}></div>
                  <ul className="list-unstyled footer-contact mb-3">
                    <li className="d-flex align-items-center mb-2"><i className="bi bi-geo-alt text-primary me-2"></i><span>123 Street, New York, USA</span></li>
                    <li className="d-flex align-items-center mb-2"><i className="bi bi-envelope-open text-primary me-2"></i><span>info@example.com</span></li>
                    <li className="d-flex align-items-center"><i className="bi bi-telephone text-primary me-2"></i><span>+012 345 67890</span></li>
                  </ul>
                  <div className="footer-social">
                    <a aria-label="Facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a aria-label="LinkedIn" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a aria-label="Instagram" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4 className="text-white mb-3">Quick Links</h4>
                  <div className="mb-3" style={{ width: 60, height: 3, backgroundColor: '#0dcaf0' }}></div>
                  <ul className="list-unstyled footer-links mb-0">
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Home</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>About Us</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Our Services</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Meet The Team</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Latest Blog</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="text-white mb-3">Popular Links</h4>
                  <div className="mb-3" style={{ width: 60, height: 3, backgroundColor: '#0dcaf0' }}></div>
                  <ul className="list-unstyled footer-links mb-0">
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Home</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>About Us</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Our Services</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Meet The Team</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Latest Blog</span></a></li>
                    <li><a href="#"><i className="fa fa-arrow-right"></i><span>Contact Us</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center text-light py-3">
          © Your Site Name. All Rights Reserved. Designed by <a href="#" className="text-decoration-none text-info">HTML Codex</a>
          &nbsp;&nbsp;Distributed By: <a href="#" className="text-decoration-none text-info">ThemeWagon</a>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
