import { MARQUEE_ITEMS } from "../data.js";

const chip = {
  fontFamily: "'Bebas Neue',sans-serif",
  fontSize: "clamp(20px,3vw,28px)",
  letterSpacing: 1,
  color: "#0c0c0c",
  padding: "0 22px",
  whiteSpace: "nowrap",
};
const dot = { color: "#0c0c0c", fontSize: 20 };

function Group({ items }) {
  return (
    <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span style={chip}>{item}</span>
          <span style={dot}>●</span>
        </span>
      ))}
    </span>
  );
}

/**
 * Yellow scrolling ticker. The item list is duplicated once so the
 * CSS keyframe (translateX -50%) loops seamlessly.
 */
export default function Marquee({ items = MARQUEE_ITEMS }) {
  return (
    <div
      style={{
        background: "#FFCE00",
        borderTop: "2px solid #0c0c0c",
        borderBottom: "2px solid #0c0c0c",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <div className="marquee-track">
        <Group items={items} />
        <Group items={items} />
      </div>
    </div>
  );
}
