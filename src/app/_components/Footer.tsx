export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-start">
            <div className="col-lg-3 col-md-6">
              <div className="bg-primary rounded p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                    <svg width="32" height="32" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="6" y="6" width="20" height="24" rx="6" fill="none" stroke="#0b2c3f" strokeWidth="4"></rect>
                      <rect x="14" y="14" width="8" height="8" transform="rotate(45 18 18)" fill="#0b2c3f"></rect>
                      <rect x="17" y="17" width="2" height="2" transform="rotate(45 18 18)" fill="#ffffff"></rect>
                      <path d="M30 8 V28" stroke="#f26b21" strokeWidth="6" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <h2 className="text-white ms-3 mb-0">DivAxis Consultancy</h2>
                </div>
                <p className="text-white-50">
                  Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat
                  lorem stet eos. Diam amet et kasd eos duo.
                </p>
                <div className="position-relative mb-3" style={{ maxWidth: 360 }}>
                  <input className="form-control bg-light border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your Email" />
                  <button type="button" className="btn btn-dark py-2 position-absolute top-0 end-0 mt-2 me-2">
                    Sign Up
                  </button>
                </div>
                <div className="d-flex">
                  <a href="#" className="me-2" style={{ width: 44, height: 44, background: '#08aeea', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="me-2" style={{ width: 44, height: 44, background: '#08aeea', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a href="#" className="me-2" style={{ width: 44, height: 44, background: '#08aeea', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#" style={{ width: 44, height: 44, background: '#08aeea', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Get In Touch</h4>
              <div className="mb-3" style={{ width: 60, height: 3, backgroundColor: '#0dcaf0' }}></div>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2"></i>info@example.com
              </p>
              <p className="mb-3">
                <i className="bi bi-telephone text-primary me-2"></i>+012 345 67890
              </p>
              <div className="d-flex">
                <a className="btn btn-outline-light btn-square me-2" href="#"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-square me-2" href="#"><i className="fa fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-square me-2" href="#"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-outline-light btn-square" href="#"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Links</h4>
              <div className="mb-3" style={{ width: 60, height: 3, backgroundColor: '#0dcaf0' }}></div>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Home</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>About Us</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Our Services</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Meet The Team</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Latest Blog</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Contact Us</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Popular Links</h4>
              <div className="mb-3" style={{ width: 60, height: 3, backgroundColor: '#0dcaf0' }}></div>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Home</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>About Us</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Our Services</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Meet The Team</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Latest Blog</a>
              <a className="btn btn-link" href="#"><i className="fa fa-angle-right text-primary me-2"></i>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
