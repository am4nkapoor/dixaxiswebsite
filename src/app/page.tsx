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
          <div className="row gx-0">
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
          </div>
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Vendors</h5>
            <h1 className="mb-0">Trusted Partners</h1>
          </div>
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
