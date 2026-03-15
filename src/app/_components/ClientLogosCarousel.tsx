const CLIENT_LOGOS = [
  { name: "NIIT Limited", logo: "/img/clients/niit.svg" },
  { name: "Max Life Insurance", logo: "/img/clients/maxlife.svg" },
  { name: "Samsung", logo: "/img/clients/samsung.png" },
  { name: "USA Today", logo: "/img/clients/usatoday.png" },
  { name: "Citi", logo: "/img/clients/Citi.svg" },
];

export default function ClientLogosCarousel() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <div className="owl-carousel vendor-carousel">
            {CLIENT_LOGOS.map((client) => (
              <div key={client.name} className="d-flex align-items-center justify-content-center" style={{ height: 60 }}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="img-fluid"
                  style={{ maxHeight: 50, width: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
