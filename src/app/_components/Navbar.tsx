import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-user-tie me-2"></i>Startup
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
        <a href="https://htmlcodex.com/downloading/?item=1858" className="btn btn-primary py-2 px-4 ms-3">
          Buy Pro Version
        </a>
      </div>
    </nav>
  );
}
