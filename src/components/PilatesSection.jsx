import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll.jsx";
import { PILATES_ICONS } from "./Icons.jsx";
import { PILATES } from "../data.js";

/**
 * Flyer-inspired Pilates block: dark studio photo, gold accents, 8-session offer.
 */
export default function PilatesSection() {
  return (
    <section id="pilates" className="pilates-section">
      <img className="pilates-section-img" src={PILATES.img} alt="Pilates reformer training at Palestra" />
      <div className="pilates-section-shade" />
      <div className="pilates-section-inner">
        <RevealOnScroll className="pilates-copy">
          <div className="pilates-brand">
            <span className="pilates-brand-name">PALESTRA</span>
            <span className="pilates-brand-sub">Fitness Studio</span>
          </div>
          <h2 className="pilates-title">{PILATES.title}</h2>
          <p className="pilates-tagline">{PILATES.tagline}</p>
          <p className="pilates-sub">{PILATES.sub}</p>

          <div className="pilates-offer">
            <div className="pilates-offer-glow" aria-hidden="true" />
            <span className="pilates-offer-sessions">{PILATES.sessions}</span>
            <span className="pilates-offer-price">{PILATES.price}</span>
          </div>

          <Link to="/contact" className="pilates-cta">
            Book Pilates
          </Link>

          <div className="pilates-benefits">
            {PILATES.benefits.map(({ icon, label }) => {
              const Icon = PILATES_ICONS[icon];
              return (
                <div key={label} className="pilates-benefit">
                  <div className="pilates-benefit-icon">
                    <Icon />
                  </div>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>

          <p className="pilates-mantra">{PILATES.mantra}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
