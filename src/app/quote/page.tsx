export default function Quote() {
  return (
    <main>
      <div className="container-fluid bg-header py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="text-white fw-bold">Free Quote</h1>
              <p className="text-white-50">Home &nbsp;/&nbsp; Free Quote</p>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4">
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
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et sea ea at dolor, justo ipsum
                duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
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
                    <input name="name" type="text" className="form-control bg-light border-0" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input name="email" type="email" className="form-control bg-light border-0" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <select name="service" className="form-select bg-light border-0">
                      <option>Select A Service</option>
                      <option>Cyber Security</option>
                      <option>Data Analytics</option>
                      <option>Web Development</option>
                      <option>Apps Development</option>
                      <option>SEO Optimization</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <textarea name="message" className="form-control bg-light border-0" rows={4} placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark w-100 py-3">Request A Quote</button>
                </form>
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
