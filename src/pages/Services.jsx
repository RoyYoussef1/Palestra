import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PricingCard from "../components/PricingCard.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import { Eyebrow, PageHeader, CtaBanner } from "../components/ui.jsx";
import { SERVICES, PLANS } from "../data.js";

export default function Services() {
  return (
    <>
      <Header />

      <PageHeader
        eyebrow="SERVICES"
        title="What we coach"
        intro="Every program runs in small groups of 3-4, coached directly by Richard Saleh."
      />

      {/* SERVICE CARDS */}
      <section
        style={{
          padding: "20px clamp(20px,5vw,40px) clamp(56px,9vw,100px)",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 28,
        }}
      >
        {SERVICES.map((svc) => (
          <RevealOnScroll
            key={svc.id}
            id={svc.id}
            className="card-hover"
            style={{
              background: "#161616",
              border: "1px solid #262626",
              borderRadius: 14,
              overflow: "hidden",
              scrollMarginTop: 96,
            }}
          >
            <img
              src={svc.img}
              alt={svc.title}
              style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: 26 }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 21 }}>{svc.title}</h3>
              <p style={{ margin: 0, color: "#B8B5AE", fontSize: 14.5, lineHeight: 1.65 }}>{svc.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        style={{
          padding: "clamp(56px,9vw,100px) clamp(20px,5vw,40px)",
          background: "#141414",
          borderTop: "1px solid #262626",
          borderBottom: "1px solid #262626",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealOnScroll style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
            <Eyebrow style={{ marginBottom: 10 }}>MEMBERSHIP PLANS</Eyebrow>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,48px)", margin: "0 0 16px" }}>
              Simple monthly plans, no session math
            </h2>
            <p style={{ color: "#B8B5AE", fontSize: 17, lineHeight: 1.6, margin: 0 }}>
              Every plan includes full programming and coaching from Richard. Pick the frequency that
              fits your week — upgrade or downgrade anytime.
            </p>
          </RevealOnScroll>

          <div className="snap-carousel snap-carousel--plans snap-carousel--plans-narrow">
            {PLANS.map((plan) => (
              <PricingCard key={plan.name} plan={plan} variant="detail" ctaHref="/contact" />
            ))}
          </div>

          <p style={{ textAlign: "center", color: "#8A8780", fontSize: 13.5, margin: "32px 0 0" }}>
            Billed monthly. No long-term contract. Zumba &amp; kickboxing drop-ins available separately
            — ask us for details.
          </p>
        </div>
      </section>

      <CtaBanner
        heading="Try before you commit"
        sub="Your first semi-private session is free — no card, no contract. Just show up and train."
        pad="clamp(56px,9vw,80px) clamp(20px,5vw,40px)"
      />

      <Footer />
    </>
  );
}
