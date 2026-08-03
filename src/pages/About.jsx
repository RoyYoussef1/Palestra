import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import StatBlock from "../components/StatBlock.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import { Eyebrow, PageHeader, CtaBanner } from "../components/ui.jsx";
import gymInterior from "/assets/gym-interior.jpeg";

const BIO_STATS = [
  { value: "4", label: "Max per group" },
  { value: "1:1", label: "Coaching attention" },
  { value: "100%", label: "Programs personalized" },
];

const PHILOSOPHY = [
  {
    title: "Cheaper than 1-on-1",
    body: "You still get direct coaching, at a fraction of private-session pricing.",
  },
  {
    title: "More energy than solo",
    body: "Training with the same 3-4 faces builds accountability and momentum.",
  },
  {
    title: "Never lost in a crowd",
    body: "Small enough that Richard sees every form break before it becomes an injury.",
  },
];

export default function About() {
  return (
    <>
      <Header />

      <PageHeader
        eyebrow="ABOUT PALESTRA"
        title="Built around the coach, not the crowd"
        intro="Palestra started with a simple frustration: gyms were full of equipment and empty of real coaching. So Richard Saleh built the opposite."
      />

      {/* RICHARD BIO */}
      <RevealOnScroll
        as="section"
        style={{
          padding: "20px clamp(20px,5vw,40px) clamp(56px,9vw,100px)",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "clamp(28px,5vw,56px)",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.pexels.com/photos/4853661/pexels-photo-4853661.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt="Richard Saleh coaching"
          style={{
            width: "100%",
            height: "clamp(320px,45vw,520px)",
            objectFit: "cover",
            borderRadius: 16,
            display: "block",
          }}
        />
        <div>
          <Eyebrow style={{ marginBottom: 10 }}>THE COACH</Eyebrow>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,44px)", margin: "0 0 20px" }}>
            Richard Saleh
          </h2>
          <p style={{ color: "#D8D5CE", fontSize: 16, lineHeight: 1.75, margin: "0 0 10px" }}>
            Richard opened Palestra in Jdeideh with one rule: never train more people than he can
            actually coach. <br></br>Every session (strength, conditioning, Zumba, or kickboxing) runs under
            his eye, capped at 3 to 4 people so every rep gets corrected and every client gets seen.
          </p>
          <p style={{ color: "#D8D5CE", fontSize: 16, lineHeight: 1.75, margin: "0 0 18px" }}>
            Years of coaching everyday people, not athletes chasing records but parents, students,
            and professionals fitting fitness into real life.
          </p>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 28 }}>
            {BIO_STATS.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} size="sm" />
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* PHILOSOPHY */}
      <section
        style={{
          padding: "clamp(56px,9vw,90px) clamp(20px,5vw,40px)",
          background: "#141414",
          borderTop: "1px solid #262626",
          borderBottom: "1px solid #262626",
        }}
      >
        <RevealOnScroll style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,46px)", margin: "0 0 40px" }}>
            Why semi-private, not solo or a crowd
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 28,
              textAlign: "left",
            }}
          >
            {PHILOSOPHY.map((card) => (
              <div
                key={card.title}
                className="card-hover"
                style={{ background: "#0c0c0c", border: "1px solid #262626", borderRadius: 12, padding: 30 }}
              >
                <h3 style={{ fontSize: 18, margin: "0 0 10px" }}>{card.title}</h3>
                <p style={{ color: "#B8B5AE", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* STUDIO */}
      <section
        style={{
          padding: "clamp(56px,9vw,100px) clamp(20px,5vw,40px)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <RevealOnScroll style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
          <Eyebrow style={{ marginBottom: 10 }}>THE STUDIO</Eyebrow>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,5vw,44px)", margin: "0 0 16px" }}>
            A real training floor, not a showroom
          </h2>
        </RevealOnScroll>
        <RevealOnScroll style={{ borderRadius: 16, overflow: "hidden" }}>
          <img
            src={gymInterior}
            alt="Palestra training floor"
            style={{ width: "100%", maxHeight: 520, objectFit: "cover", display: "block" }}
          />
        </RevealOnScroll>
      </section>

      <CtaBanner
        heading="Come meet Richard and the group"
        sub="Your first semi-private session is on us."
        pad="70px clamp(20px,5vw,40px) clamp(56px,9vw,100px)"
      />

      <Footer />
    </>
  );
}
