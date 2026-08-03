import { Link } from "react-router-dom";
import { INSTAGRAM_URL, PHONE_DISPLAY, NAV_LINKS, SERVICES } from "../data.js";
import { InstagramIcon, PinIcon, ClockIcon } from "./Icons.jsx";
import logo from "/assets/PalestraLogoBig.jpeg";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jdeideh+Ossaily+Street+Lebanon";

const colHeading = {
  fontWeight: 700,
  margin: "0 0 22px",
  fontSize: 12,
  letterSpacing: 1.6,
  color: "#FFCE00",
  textTransform: "uppercase",
};

const linkStyle = {
  color: "#B8B5AE",
  fontSize: 15,
  lineHeight: 1.2,
  transition: "color 0.2s ease",
};

/** Site-wide rich footer — brand, pages, services, visit/connect. */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          {/* Brand */}
          <div className="site-footer-brand">
            <div className="site-footer-logo">
              <img src={logo} alt="Palestra" />
            </div>
            <p>
              Semi-private fitness studio in Jdeideh. <br></br>Max 4 per group, coached by <b>Richard Saleh</b>
            </p>
            <a href="tel:+96170156375" className="site-footer-phone">
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Pages */}
          <div>
            <h3 style={colHeading}>Pages</h3>
            <nav className="site-footer-links">
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="site-footer-link" style={linkStyle}>
                  {link.label === "Services & Pricing" ? "Services" : link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services — standalone column */}
          <div>
            <h3 style={colHeading}>Services</h3>
            <nav className="site-footer-links">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/services#${svc.id}`}
                  className="site-footer-link"
                  style={linkStyle}
                >
                  {svc.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Visit — hours, location, Instagram */}
          <div>
            <h3 style={colHeading}>Visit</h3>
            <div className="site-footer-visit">
              <div className="site-footer-visit-row">
                <ClockIcon size={18} color="#FFCE00" />
                <div>
                  <div className="site-footer-visit-label">Working hours</div>
                  <div className="site-footer-visit-text">
                    Mon – Sat: 9:00 – 18:00
                    <br />
                    Sunday: Closed
                  </div>
                </div>
              </div>

              <div className="site-footer-visit-row">
                <PinIcon size={18} color="#FFCE00" />
                <div>
                  <div className="site-footer-visit-label">Location</div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer-link"
                    style={{ ...linkStyle, display: "block" }}
                  >
                    Jdeideh, Ossaily Street
                    <br />
                    Haykal Building, Ground 0
                  </a>
                </div>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-ig"
                aria-label="Instagram @palestra.lb"
              >
                <InstagramIcon size={20} color="#FFCE00" />
                <span>@palestra.lb</span>
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© 2026 Palestra Fitness Studio. All rights reserved.</span>
          <div className="site-footer-bottom-icons">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-icon-btn"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} color="currentColor" />
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-icon-btn"
              aria-label="Location"
            >
              <PinIcon size={16} color="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
