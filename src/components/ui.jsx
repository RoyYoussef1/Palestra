import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll.jsx";

export function Eyebrow({ children, style }) {
  return (
    <div
      style={{
        color: "#FFCE00",
        fontWeight: 700,
        letterSpacing: 2,
        fontSize: 13,
        marginBottom: 14,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ButtonFilled({ to, href, children, style }) {
  const s = {
    background: "#FFCE00",
    color: "#0c0c0c",
    fontWeight: 800,
    padding: "16px 28px",
    borderRadius: 6,
    fontSize: 15.5,
    display: "inline-block",
    ...style,
  };
  return href ? (
    <a href={href} style={s}>{children}</a>
  ) : (
    <Link to={to} style={s}>{children}</Link>
  );
}

export function ButtonOutline({ to, href, children, style }) {
  const s = {
    border: "1.5px solid #F5F3EE",
    color: "#F5F3EE",
    fontWeight: 700,
    padding: "16px 28px",
    borderRadius: 6,
    fontSize: 15.5,
    display: "inline-block",
    ...style,
  };
  return href ? (
    <a href={href} style={s}>{children}</a>
  ) : (
    <Link to={to} style={s}>{children}</Link>
  );
}

/** Centered eyebrow + H1 + intro used at the top of inner pages. */
export function PageHeader({ eyebrow, title, intro }) {
  return (
    <RevealOnScroll
      as="section"
      style={{
        padding: "clamp(56px,9vw,80px) clamp(20px,5vw,40px) clamp(40px,6vw,60px)",
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Eyebrow style={{ marginBottom: 10 }}>{eyebrow}</Eyebrow>
      <h1
        style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "clamp(38px,8vw,64px)",
          margin: "0 0 18px",
          letterSpacing: 0.5,
        }}
      >
        {title}
      </h1>
      {intro && (
        <p
          style={{
            color: "#B8B5AE",
            fontSize: "clamp(15px,2.2vw,18px)",
            maxWidth: 680,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          {intro}
        </p>
      )}
    </RevealOnScroll>
  );
}

export function CtaBanner({ heading, sub, cta = "Book My Trial", to = "/contact", maxWidth = 1000, pad }) {
  return (
    <RevealOnScroll
      as="section"
      style={{
        padding: pad || "clamp(64px,9vw,90px) clamp(20px,5vw,40px)",
        maxWidth,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(28px,5vw,48px)", margin: "0 0 14px" }}>
        {heading}
      </h2>
      <p style={{ color: "#B8B5AE", fontSize: 16, margin: "0 0 28px" }}>{sub}</p>
      <ButtonFilled to={to} style={{ padding: "16px 34px", fontSize: 16 }}>
        {cta}
      </ButtonFilled>
    </RevealOnScroll>
  );
}
