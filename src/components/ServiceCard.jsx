import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll.jsx";

/**
 * Image-backed service tile for the Home "What We Do" grid.
 * Number + title sit low-left over a dark gradient — accent bar grows on hover.
 */
export default function ServiceCard({ number, title, img, to = "/services" }) {
  return (
    <RevealOnScroll style={{ height: "100%" }}>
      <Link to={to} className="svc-card">
        <img className="svc-card-img" src={img} alt="" aria-hidden="true" loading="lazy" />
        <div className="svc-card-shade" />
        <div className="svc-card-copy">
          <span className="svc-card-num">{number}</span>
          <span className="svc-card-title">{title}</span>
          <span className="svc-card-bar" aria-hidden="true" />
        </div>
      </Link>
    </RevealOnScroll>
  );
}
