import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <Link href="/" className="navbar-brand p-0" data-aos="fade-down">
        <h1 className="m-0 d-inline-flex align-items-center">
          <span className="me-2 d-inline-flex align-items-center">
            <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M40 18 H32 C24 18 20 22 20 30 V70 C20 78 24 82 32 82 H40"
                fill="none" stroke="#0A4964" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M60 18 H68 C76 18 80 22 80 30 V70 C80 78 76 82 68 82 H60"
                fill="none" stroke="#F26B21" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M44 35 L60 50 L44 65"
                fill="none" stroke="#0A4964" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="49" y="46" width="8" height="8" transform="rotate(45 53 50)" fill="#0A4964"/>
            </svg>
          </span>
          <span className="fw-bold">DivAxis</span>&nbsp;<span className="fw-normal">Consultancy</span>
        </h1>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link href="/" className="nav-item nav-link" data-aos="fade-down" data-aos-delay="50">
            Home
          </Link>
          <Link href="/about" className="nav-item nav-link" data-aos="fade-down" data-aos-delay="100">
            About
          </Link>
          <Link href="/services" className="nav-item nav-link" data-aos="fade-down" data-aos-delay="150">
            Services
          </Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-aos="fade-down" data-aos-delay="200" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <Link href="/feature" className="dropdown-item" data-aos="fade-up">
                Our features
              </Link>
              <Link href="/team" className="dropdown-item" data-aos="fade-up" data-aos-delay="100">
                Team Members
              </Link>
              <Link href="/testimonial" className="dropdown-item" data-aos="fade-up" data-aos-delay="200">
                Testimonial
              </Link>
              <Link href="/quote" className="dropdown-item" data-aos="fade-up" data-aos-delay="300">
                Free Quote
              </Link>
            </div>
          </div>
          <Link href="/contact" className="nav-item nav-link" data-aos="fade-down" data-aos-delay="250">
            Contact
          </Link>
        </div>
        <button type="button" className="btn text-primary ms-3" data-aos="fade-down" data-aos-delay="300" data-bs-toggle="modal" data-bs-target="#searchModal">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
}
