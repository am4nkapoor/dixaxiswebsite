const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, NIIT Limited",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop",
    quote: "DivAxis delivered our web platform on time and within budget. Their team understood our requirements quickly and the code quality was excellent. We would definitely work with them again.",
  },
  {
    name: "Rahul Verma",
    role: "CTO, Max Life Insurance",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    quote: "Professional, responsive, and technically strong. They built our mobile app and backend API and the whole experience was smooth. Highly recommend for software projects.",
  },
  {
    name: "Sarah Mitchell",
    role: "Digital Director, USA Today",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop",
    quote: "We needed a custom ERP module and DivAxis understood our workflow from day one. The solution is stable, scalable, and their support team is always available when we need them.",
  },
  {
    name: "Vikram Singh",
    role: "Head of Product, Samsung",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
    quote: "Clear communication, agile delivery, and a focus on quality. DivAxis feels like an extension of our own team. Great choice for any serious software development project.",
  },
  {
    name: "James Chen",
    role: "VP Technology, Citi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote: "DivAxis helped us modernize our internal tools with clean architecture and on-time delivery. A reliable partner for enterprise software.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
          {testimonials.map((item, i) => (
            <div key={i} className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img
                  className="img-fluid rounded"
                  src={item.image}
                  alt={item.name}
                  style={{ width: 60, height: 60, objectFit: "cover" }}
                />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">{item.name}</h4>
                  <small className="text-uppercase">{item.role}</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">{item.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
