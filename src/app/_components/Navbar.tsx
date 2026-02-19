import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0 d-inline-flex align-items-center">
          <span className="me-2 d-inline-flex align-items-center">
            <svg width="32" height="32" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="6" y="6" width="20" height="24" rx="6" fill="none" stroke="#0b2c3f" strokeWidth="4"></rect>
              <rect x="14" y="14" width="8" height="8" transform="rotate(45 18 18)" fill="#0b2c3f"></rect>
              <rect x="17" y="17" width="2" height="2" transform="rotate(45 18 18)" fill="#ffffff"></rect>
              <path d="M30 8 V28" stroke="#f26b21" strokeWidth="6" strokeLinecap="round"></path>
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
          <Link href="/" className="nav-item nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-item nav-link">
            About
          </Link>
          <Link href="/service" className="nav-item nav-link">
            Services
          </Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <Link href="/feature" className="dropdown-item">
                Our features
              </Link>
              <Link href="/team" className="dropdown-item">
                Team Members
              </Link>
              <Link href="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
              <Link href="/quote" className="dropdown-item">
                Free Quote
              </Link>
            </div>
          </div>
          <Link href="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
}
