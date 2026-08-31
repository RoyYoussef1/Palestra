import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../data.js";
import logo from "/assets/PalestraLogoBig.jpeg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#0c0c0c",
        borderBottom: "1px solid #262626",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px clamp(16px,4vw,40px)",
      }}
    >
      <Link to="/" onClick={close} style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div className="site-header-logo">
          <img src={logo} alt="Palestra Fitness Studio" style={{ height: 40, display: "block" }} />
        </div>
      </Link>

      <nav className={`nav-links${isMenuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={close}
            style={({ isActive }) => ({
              color: isActive ? "#FFCE00" : "#F5F3EE",
              fontWeight: isActive ? 700 : 600,
              fontSize: 15,
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Link
          to="/contact"
          onClick={close}
          style={{
            background: "#FFCE00",
            color: "#0c0c0c",
            fontWeight: 800,
            padding: "10px 16px",
            borderRadius: 6,
            fontSize: 13.5,
            whiteSpace: "nowrap",
          }}
        >
          Book Trial
        </Link>
        <button
          className={`hamburger${isMenuOpen ? " open" : ""}`}
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
