import Link from "next/link";

type PageHeaderProps = {
  title: string;
  breadcrumb: { label: string; href: string }[];
};

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">{title}</h1>
          {breadcrumb.map((item, i) => (
            <span key={item.href}>
              {i > 0 && <i className="far fa-circle text-white px-2"></i>}
              <Link href={item.href} className="h5 text-white text-decoration-none">
                {item.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
