import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Marquee from "../components/Marquee.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import StatBlock from "../components/StatBlock.jsx";
import PricingCard from "../components/PricingCard.jsx";
import PilatesSection from "../components/PilatesSection.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import { Eyebrow, ButtonFilled, ButtonOutline } from "../components/ui.jsx";
import { CheckIcon, UsersIcon, TargetIcon, ChartIcon } from "../components/Icons.jsx";
import { SERVICE_ROWS, HOME_STATS, PLANS } from "../data.js";
import gymInterior from "/assets/gym-interior.jpeg";

const OFFERINGS = [
  {
    Icon: UsersIcon,
    title: "Max 4 Per Group",
    body: "Small enough that Richard corrects your form, not just your rep count.",
  },
  {
    Icon: TargetIcon,
    title: "Programmed, Not Random",
    body: "Every session is built around your goals: strength, fat loss, or performance.",
  },
  {
    Icon: ChartIcon,
    title: "Community, Not Crowd",
    body: "Train alongside the same 3-4 people: accountability built in, every week.",
  },
];

const CHECKLIST = ["Personal Training, Small Groups", "Programmed Around Your Goals"];

export default function Home() {
  return (
    <>
      <Header />
      <section
        style={{
          position: "relative",
          minHeight: "clamp(560px,92vh,720px)",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={gymInterior}
            alt="Palestra training floor"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.55) 40%, rgba(12,12,12,0.97) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            padding: "0 clamp(20px,5vw,56px) clamp(48px,7vw,72px)",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 1, background: "#FFCE00" }} />
            <span style={{ color: "#FFCE00", fontWeight: 700, fontSize: 13, letterSpacing: 2 }}>
              JDEIDEH, LEBANON
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(52px,11vw,128px)",
              lineHeight: 0.92,
              margin: 0,
              letterSpacing: 0.5,
              maxWidth: 1000,
            }}
          >
            YOUR BODY.
            <br />
            YOUR PROGRESS.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 24,
              maxWidth: 1200,
            }}
          >
            <p
              style={{
                fontSize: "clamp(15px,2vw,18px)",
                lineHeight: 1.6,
                color: "#D8D5CE",
                margin: 0,
                maxWidth: 480,
              }}
            >
              Semi-private coaching with <b>Richard Saleh</b> <br></br>Max 4 people per group, full attention, a
              program built for you.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <ButtonFilled to="/contact">Claim Your Free Session</ButtonFilled>
              <ButtonOutline to="/about">More About Us</ButtonOutline>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section
        style={{
          padding: "clamp(64px,10vw,110px) clamp(20px,5vw,56px)",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <RevealOnScroll
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 8,
          }}
        >
          <div>
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(34px,6vw,58px)",
                margin: 0,
                letterSpacing: 0.5,
                maxWidth: 640,
                lineHeight: 1.02,
              }}
            >
              Whatever your goal, <br></br>Palestra gets you there.
            </h2>
          </div>
          <Link
            to="/services"
            style={{
              border: "1.5px solid #F5F3EE",
              color: "#F5F3EE",
              fontWeight: 700,
              padding: "14px 24px",
              borderRadius: 6,
              fontSize: 14.5,
              whiteSpace: "nowrap",
            }}
          >
            Our Services
          </Link>
        </RevealOnScroll>

        <div className="snap-carousel snap-carousel--services" style={{ marginTop: 36 }}>
          {SERVICE_ROWS.map((row) => (
            <ServiceCard
              key={row.number}
              number={row.number}
              title={row.title}
              img={row.img}
              to={row.to}
            />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          position: "relative",
          padding: "clamp(60px,9vw,90px) clamp(20px,5vw,56px)",
          background: "#141414",
          borderTop: "1px solid #262626",
          borderBottom: "1px solid #262626",
        }}
      >
        <RevealOnScroll
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
            gap: 32,
            textAlign: "center",
          }}
        >
          {HOME_STATS.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </RevealOnScroll>
      </section>

      {/* WHAT WE OFFER */}
      <section
        style={{
          padding: "clamp(64px,10vw,110px) clamp(20px,5vw,56px)",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <RevealOnScroll style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
          <Eyebrow>WHAT WE OFFER</Eyebrow>
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(32px,6vw,48px)",
              margin: 0,
              letterSpacing: 0.5,
            }}
          >
            The main thing for us is your result
          </h2>
        </RevealOnScroll>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24,
          }}
        >
          {OFFERINGS.map(({ Icon, title, body }) => (
            <RevealOnScroll
              key={title}
              className="card-hover"
              style={{
                background: "#161616",
                border: "1px solid #262626",
                borderRadius: 14,
                padding: 32,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "rgba(255,206,0,0.12)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFCE00",
                  marginBottom: 20,
                }}
              >
                <Icon />
              </div>
              <h3 style={{ fontSize: 20, margin: "0 0 10px", fontWeight: 800 }}>{title}</h3>
              <p style={{ color: "#B8B5AE", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{body}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "clamp(64px,10vw,110px) clamp(20px,5vw,56px)",
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "clamp(32px,6vw,64px)",
          alignItems: "center",
        }}
      >
        <RevealOnScroll style={{ width: "100%" }}>
          <img
            src="https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Coach with clients"
            style={{
              width: "100%",
              height: "clamp(340px,45vw,540px)",
              objectFit: "cover",
              borderRadius: 16,
              display: "block",
            }}
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <Eyebrow>WHY CHOOSE US</Eyebrow>
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(32px,6vw,52px)",
              margin: "0 0 20px",
              letterSpacing: 0.5,
              lineHeight: 1.02,
            }}
          >
            Palestra has the coaching, not the crowd
          </h2>
          <p style={{ color: "#B8B5AE", fontSize: 16, lineHeight: 1.7, margin: "0 0 28px", maxWidth: 520 }}>
            Big-box gyms hand you a card and a corner. Richard caps every group at four so no
            rep, no form break, and no goal gets missed.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {CHECKLIST.map((item, i) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 0",
                  borderTop: "1px solid #262626",
                  ...(i === CHECKLIST.length - 1 ? { borderBottom: "1px solid #262626" } : null),
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "rgba(255,206,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFCE00",
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon />
                </div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{item}</div>
              </div>
            ))}
          </div>
          <ButtonFilled to="/about" style={{ marginTop: 28, padding: "15px 28px", fontSize: 15, fontWeight: 800 }}>
            Get Started
          </ButtonFilled>
        </RevealOnScroll>
      </section>

      {/* MEMBERSHIP */}
      <section
        style={{
          position: "relative",
          padding: "clamp(64px,10vw,120px) clamp(20px,5vw,40px)",
          background: "#141414",
          borderTop: "1px solid #262626",
          borderBottom: "1px solid #262626",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 360,
            height: 360,
            background: "radial-gradient(circle, rgba(255,206,0,0.14) 0%, rgba(255,206,0,0) 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -100,
            width: 340,
            height: 340,
            background: "radial-gradient(circle, rgba(255,206,0,0.08) 0%, rgba(255,206,0,0) 70%)",
            pointerEvents: "none",
          }}
        />
        <RevealOnScroll
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto 52px",
            textAlign: "center",
          }}
        >
          <Eyebrow style={{ marginBottom: 10 }}>MEMBERSHIP</Eyebrow>
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(38px,7vw,64px)",
              margin: "0 0 16px",
              letterSpacing: 0.5,
            }}
          >
            Pick your training frequency
          </h2>
        </RevealOnScroll>
        <div className="snap-carousel snap-carousel--plans">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} variant="teaser" ctaHref="/services#pricing" />
          ))}
        </div>
        <RevealOnScroll
          as="p"
          style={{
            position: "relative",
            textAlign: "center",
            color: "#6b6862",
            fontSize: 13.5,
            margin: "36px 0 0",
          }}
        >
          Billed monthly, no long-term contract · Personal training $35/session ·{" "}
          <a href="#pilates" style={{ color: "#FFCE00", fontWeight: 700 }}>
            Pilates 8 sessions $120
          </a>{" "}
          ·{" "}
          <Link to="/services" style={{ color: "#FFCE00", fontWeight: 700 }}>
            Compare full plan details →
          </Link>
        </RevealOnScroll>
      </section>

      <PilatesSection />

      {/* FREE TRIAL BANNER */}
      <RevealOnScroll
        as="section"
        style={{
          padding: "clamp(64px,9vw,90px) clamp(20px,5vw,40px)",
          maxWidth: 1000,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5.5vw,48px)", margin: "0 0 14px" }}>
          Not sure yet? Try a session on us.
        </h2>
        <p style={{ color: "#B8B5AE", fontSize: 16, margin: "0 0 28px" }}>
          One free semi-private session, zero commitment. Meet Richard, feel the format, then decide.
        </p>
        <ButtonFilled to="/contact" style={{ padding: "16px 32px" }}>
          Book My Free Trial
        </ButtonFilled>
      </RevealOnScroll>

      <Footer />
    </>
  );
}
