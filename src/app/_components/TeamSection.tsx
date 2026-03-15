const TEAM_MEMBERS = [
  { name: "Aman Kapoor", designation: "Co-Founder", image: "/img/team-1.jpg" },
  { name: "Amit Kumar", designation: "Managing Director", image: "/img/team-2.jpg" },
  { name: "Nitin Singh", designation: "Chief Technology Officer", image: "/img/team-3.jpg" },
];

export default function TeamSection() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <style dangerouslySetInnerHTML={{ __html: `
        .team-section-img { height: 480px; }
        @media (min-width: 768px) { .team-section-img { height: 520px; } }
      `}} />
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
          <h5 className="fw-bold text-primary text-uppercase">Our Leadership</h5>
          <h1 className="mb-0">Meet the People Behind DivAxis</h1>
        </div>
        <div className="row g-5">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={member.name}
              className="col-lg-4 wow slideInUp"
              data-wow-delay={`${0.3 + i * 0.3}s`}
            >
              <div className="team-item bg-light rounded overflow-hidden h-100 d-flex flex-column">
                <div className="team-img team-section-img position-relative overflow-hidden flex-shrink-0">
                  <img
                    className="img-fluid w-100 h-100"
                    src={member.image}
                    alt={member.name}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="team-social">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-twitter fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">{member.name}</h4>
                  <p className="text-uppercase m-0">{member.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
