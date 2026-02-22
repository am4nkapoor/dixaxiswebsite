export default function TestimonialSection() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/img/testimonial-1.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">CEO, SaaS Company</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">DivAxis delivered our web platform on time and within budget. Their team understood our requirements quickly and the code quality was excellent. We would definitely work with them again.</div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">CTO, Tech Startup</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">Professional, responsive, and technically strong. They built our mobile app and backend API and the whole experience was smooth. Highly recommend for software projects.</div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/img/testimonial-3.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Operations Director</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">We needed a custom ERP module and DivAxis understood our workflow from day one. The solution is stable, scalable, and their support team is always available when we need them.</div>
          </div>
          <div className="testimonial-item bg-light my-4">
            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img className="img-fluid rounded" src="/img/testimonial-4.jpg" style={{ width: 60, height: 60 }} alt="" />
              <div className="ps-4">
                <h4 className="text-primary mb-1">Client Name</h4>
                <small className="text-uppercase">Product Manager</small>
              </div>
            </div>
            <div className="pt-4 pb-5 px-5">Clear communication, agile delivery, and a focus on quality. DivAxis feels like an extension of our own team. Great choice for any serious software development project.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
