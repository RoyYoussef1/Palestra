import { useState } from "react";
import { INTEREST_OPTIONS, WHATSAPP_NUMBER } from "../data.js";

/**
 * Contact-page booking form. Controlled inputs held in React state;
 * on submit it builds a pre-filled message and opens WhatsApp.
 */
export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "Free Trial Session",
    message: "",
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, phone, plan, message } = form;
    const lines = [
      `Hi Palestra! I'd like to book: ${plan}`,
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      message ? `Note: ${message}` : null,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const labelStyle = { fontSize: 13, fontWeight: 700, color: "#B8B5AE" };
  const fieldWrap = { display: "flex", flexDirection: "column", gap: 8 };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "#161616",
        border: "1px solid #262626",
        borderRadius: 16,
        padding: "clamp(24px,4vw,40px)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, margin: 0 }}>
        Book Your Free Trial Session
      </h2>

      <div style={fieldWrap}>
        <label htmlFor="bf-name" style={labelStyle}>Full Name</label>
        <input
          id="bf-name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={set("name")}
          className="field-input"
        />
      </div>

      <div style={fieldWrap}>
        <label htmlFor="bf-phone" style={labelStyle}>Phone Number</label>
        <input
          id="bf-phone"
          type="tel"
          placeholder="70 xxx xxx"
          value={form.phone}
          onChange={set("phone")}
          className="field-input"
        />
      </div>

      <div style={fieldWrap}>
        <label htmlFor="bf-plan" style={labelStyle}>Interested In</label>
        <select id="bf-plan" value={form.plan} onChange={set("plan")} className="field-select">
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div style={fieldWrap}>
        <label htmlFor="bf-msg" style={labelStyle}>Message (optional)</label>
        <textarea
          id="bf-msg"
          placeholder="Tell us your goals or preferred days/times"
          value={form.message}
          onChange={set("message")}
          rows={4}
          className="field-textarea"
        />
      </div>

      <button
        type="submit"
        style={{
          background: "#FFCE00",
          color: "#0c0c0c",
          fontWeight: 800,
          padding: 16,
          borderRadius: 8,
          fontSize: 16,
          border: "none",
          cursor: "pointer",
          marginTop: 6,
        }}
      >
        Send via WhatsApp
      </button>

      <p style={{ color: "#6b6862", fontSize: 12.5, margin: 0, textAlign: "center" }}>
        Submitting opens WhatsApp with your details pre-filled.
      </p>
    </form>
  );
}
