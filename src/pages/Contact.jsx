import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BookingForm from "../components/BookingForm.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import { PageHeader } from "../components/ui.jsx";
import {
  WhatsAppIcon,
  PhoneIcon,
  InstagramIcon,
  PinIcon,
  ClockIcon,
} from "../components/Icons.jsx";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, INSTAGRAM_URL } from "../data.js";

const quickBtn = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "#161616",
  border: "1px solid #262626",
  padding: "16px 26px",
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 15,
  color: "#F5F3EE",
};

const infoCardHeading = {
  margin: "0 0 18px",
  fontSize: 18,
  display: "flex",
  alignItems: "center",
  gap: 10,
};

export default function Contact() {
  return (
    <>
      <Header />

      <PageHeader
        eyebrow="CONTACT & BOOKING"
        title="Let's get you in the room"
        intro="Send a message or reach us directly — Richard replies personally to every request."
      />

      {/* QUICK CONTACT BUTTONS */}
      <RevealOnScroll
        as="section"
        style={{
          padding: "0 clamp(20px,5vw,40px) clamp(40px,6vw,60px)",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="card-hover" style={quickBtn}>
          <WhatsAppIcon />
          WhatsApp Us
        </a>
        <a href={`tel:+${WHATSAPP_NUMBER}`} className="card-hover" style={quickBtn}>
          <PhoneIcon />
          Call {PHONE_DISPLAY}
        </a>
        <a href={INSTAGRAM_URL} className="card-hover" style={quickBtn}>
          <InstagramIcon />
          DM @palestra.lb
        </a>
      </RevealOnScroll>

      {/* BOOKING FORM + INFO */}
      <section
        id="book"
        style={{
          padding: "20px clamp(20px,5vw,40px) clamp(56px,9vw,100px)",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "clamp(28px,5vw,48px)",
          alignItems: "start",
        }}
      >
        <RevealOnScroll style={{ display: "block" }}>
          <BookingForm />
        </RevealOnScroll>

        <RevealOnScroll style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            className="card-hover"
            style={{ background: "#161616", border: "1px solid #262626", borderRadius: 16, padding: 32 }}
          >
            <h3 style={infoCardHeading}>
              <PinIcon />
              Studio Location
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "#D8D5CE", fontSize: 15, lineHeight: 1.6 }}>
              <div>Jdeideh, Ossaily Street</div>
              <div>Haykal Building, Ground 0</div>
              <div>Jdeideh, Lebanon</div>
              <div style={{ color: "#8A8780", fontSize: 13.5, marginTop: 4 }}>Parking available on-site</div>
            </div>
          </div>

          <div
            className="card-hover"
            style={{ background: "#161616", border: "1px solid #262626", borderRadius: 16, padding: 32 }}
          >
            <h3 style={infoCardHeading}>
              <ClockIcon />
              Hours
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#D8D5CE",
                fontSize: 15,
                padding: "8px 0",
                borderBottom: "1px solid #262626",
              }}
            >
              <span>Monday – Saturday</span>
              <span style={{ color: "#FFCE00", fontWeight: 700 }}>9:00 – 18:00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#8A8780", fontSize: 15, padding: "8px 0" }}>
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>

          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #262626" }}>
            <iframe
              title="Palestra studio location"
              src="https://www.google.com/maps?q=Jdeideh,+Ossaily+Street,+Lebanon&output=embed"
              style={{ width: "100%", height: 220, border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </>
  );
}
