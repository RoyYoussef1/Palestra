/**
 * Big Bebas Neue number with a caption below.
 * `size="lg"` = Home stats band, `size="sm"` = About bio mini-stats.
 */
export default function StatBlock({ value, label, size = "lg" }) {
  if (size === "sm") {
    return (
      <div>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 34, color: "#FFCE00" }}>
          {value}
        </div>
        <div style={{ color: "#8A8780", fontSize: 13 }}>{label}</div>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "clamp(44px,7vw,72px)",
          color: "#FFCE00",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div style={{ color: "#B8B5AE", fontSize: 13.5, letterSpacing: 1, marginTop: 8 }}>
        {label}
      </div>
    </div>
  );
}
