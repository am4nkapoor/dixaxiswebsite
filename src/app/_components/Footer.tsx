export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Address</h4>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2"></i>info@example.com
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone text-primary me-2"></i>+012 345 6789
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Quick Links</h4>
              <a className="btn btn-link" href="#">
                Home
              </a>
              <a className="btn btn-link" href="#">
                About Us
              </a>
              <a className="btn btn-link" href="#">
                Our Services
              </a>
              <a className="btn btn-link" href="#">
                Meet The Team
              </a>
              <a className="btn btn-link" href="#">
                Contact Us
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                  SignUp
                </button>
              </div>
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
