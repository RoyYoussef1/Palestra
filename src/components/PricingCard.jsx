import { Link } from "react-router-dom";
import { PLAN_ICONS } from "./Icons.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

/**
 * Pricing / membership card.
 * variant="teaser"  -> Home section (gradient featured card, price 56/64px)
 * variant="detail"  -> Services #pricing (flat featured card, price 52px)
 */
export default function PricingCard({ plan, variant = "teaser", ctaHref = "/contact" }) {
  const Icon = PLAN_ICONS[plan.icon];
  const isTeaser = variant === "teaser";
  const features = isTeaser ? plan.featuresShort : plan.featuresLong;
  const cadence = isTeaser ? plan.cadenceShort : plan.cadenceLong;

  const featuredCardStyle = isTeaser
    ? {
        position: "relative",
        background: "linear-gradient(160deg, #1c1a10, #0c0c0c 55%)",
        border: "2px solid #FFCE00",
        borderRadius: 18,
        padding: "46px 30px 40px",
        boxShadow: "0 20px 50px rgba(255,206,0,0.08)",
      }
    : {
        position: "relative",
        background: "#0c0c0c",
        border: "2px solid #FFCE00",
        borderRadius: 16,
        padding: "40px 32px",
      };

  const plainCardStyle = {
    background: "#0c0c0c",
    border: "1px solid #262626",
    borderRadius: isTeaser ? 18 : 16,
    padding: isTeaser ? "40px 30px" : "40px 32px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    gap: isTeaser ? 16 : 18,
    height: "100%",
    ...(plan.featured ? featuredCardStyle : plainCardStyle),
  };

  const priceSize = isTeaser ? (plan.featured ? 64 : 56) : 52;
  const cadenceUnit = isTeaser ? "/ mo" : "/ month";

  return (
    <RevealOnScroll className={isTeaser ? "plan-card" : "card-hover"} style={cardStyle}>
      {plan.featured && (
        <div
          style={{
            position: "absolute",
            top: isTeaser ? -16 : -14,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#FFCE00",
            color: "#0c0c0c",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: 0.5,
            padding: isTeaser ? "7px 18px" : "6px 16px",
            borderRadius: 100,
            whiteSpace: "nowrap",
          }}
        >
          MOST POPULAR
        </div>
      )}

      {isTeaser && Icon && (
        <div
          style={{
            width: 44,
            height: 44,
            background: plan.featured ? "rgba(255,206,0,0.16)" : "rgba(255,206,0,0.1)",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFCE00",
          }}
        >
          <Icon size={22} />
        </div>
      )}

      {isTeaser ? (
        <>
          <div
            style={{
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: 1,
              color: plan.featured ? "#FFCE00" : "#F5F3EE",
            }}
          >
            {plan.name}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: priceSize, lineHeight: 1 }}>
              {plan.price}
            </span>
            <span style={{ color: plan.featured ? "#B8B5AE" : "#8A8780", fontSize: 14 }}>
              {cadenceUnit}
            </span>
          </div>
          <div style={{ color: plan.featured ? "#B8B5AE" : "#8A8780", fontSize: 14 }}>{cadence}</div>
          <div style={{ height: 1, background: plan.featured ? "#333" : "#262626", margin: "6px 0" }} />
        </>
      ) : (
        <>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: 0.5,
                color: plan.featured ? "#FFCE00" : "#F5F3EE",
              }}
            >
              {plan.name}
            </div>
            <div style={{ color: "#8A8780", fontSize: 14, marginTop: 4 }}>{cadence}</div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: priceSize }}>
              {plan.price}
            </span>
            <span style={{ color: "#8A8780", fontSize: 14 }}>{cadenceUnit}</span>
          </div>
          <div style={{ height: 1, background: "#262626" }} />
        </>
      )}

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: isTeaser ? 10 : 12,
          fontSize: 14.5,
          color: "#D8D5CE",
          flex: isTeaser ? 1 : "unset",
        }}
      >
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <PlanCta plan={plan} isTeaser={isTeaser} ctaHref={ctaHref} />
    </RevealOnScroll>
  );
}

function PlanCta({ plan, isTeaser, ctaHref }) {
  const filled = {
    textAlign: "center",
    background: "#FFCE00",
    color: "#0c0c0c",
    fontWeight: 800,
    padding: 14,
    borderRadius: 8,
    fontSize: 15,
    ...(isTeaser ? null : { marginTop: 10, borderRadius: 6 }),
  };
  const outlined = {
    textAlign: "center",
    border: "1.5px solid #F5F3EE",
    color: "#F5F3EE",
    fontWeight: 700,
    padding: 14,
    borderRadius: 8,
    fontSize: 15,
    ...(isTeaser ? null : { marginTop: 10, borderRadius: 6 }),
  };
  const style = plan.featured ? filled : outlined;

  // Home teaser links to an in-page anchor; Services links to the contact page.
  if (ctaHref.startsWith("/services#")) {
    return (
      <Link to={ctaHref} style={style}>
        {plan.cta}
      </Link>
    );
  }
  return (
    <Link to={ctaHref} style={style}>
      {plan.cta}
    </Link>
  );
}
