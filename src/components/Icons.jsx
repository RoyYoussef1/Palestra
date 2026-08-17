// Stroke-based inline SVG icons — no icon-library dependency.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function CheckIcon({ size = 16, strokeWidth = 2.2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function UserIcon({ size = 24, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function UsersIcon({ size = 24, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function TargetIcon({ size = 24, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function ChartIcon({ size = 24, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 19, strokeWidth = 1.8, color = "#25D366" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function PhoneIcon({ size = 19, strokeWidth = 1.8, color = "#FFCE00" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function InstagramIcon({ size = 19, strokeWidth = 1.8, color = "#E1306C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

export function PinIcon({ size = 19, strokeWidth = 1.8, color = "#FFCE00" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ size = 19, strokeWidth = 1.8, color = "#FFCE00" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function CoreIcon({ size = 28, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <path d="M8.2 3.8C9.4 2.8 10.6 2.3 12 2.3s2.6.5 3.8 1.5v9c0 3.4-1.5 6.8-3.8 8.6-2.3-1.8-3.8-5.2-3.8-8.6v-9z" />
      <path d="M9.2 8.6h5.6M9.2 11.6h5.6M9.6 14.6h4.8" />
    </svg>
  );
}

export function StretchIcon({ size = 28, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <circle cx="7.5" cy="5.5" r="2.1" />
      <path d="M8 7.8v5.2l4 3" />
      <path d="M8 13.2 20 8.2" />
      <path d="M12 16.2 16.2 21" />
      <path d="M8 13.2H3.8" />
    </svg>
  );
}

export function PostureIcon({ size = 28, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <circle cx="12" cy="4.8" r="2.1" />
      <path d="M12 7v8.2" />
      <path d="M12 10.2 6.8 8.4" />
      <path d="M12 10.2 17.5 8.6" />
      <path d="M12 15.2 8.2 21" />
      <path d="M12 15.2 16.6 18.4 15.4 21" />
    </svg>
  );
}

export function LotusIcon({ size = 28, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <path d="M12 20s-7.2-4-7.2-10.2c0-2.6 2.2-4.4 4.2-3.6.5 1.8 1.8 3.6 3 4.8 1.2-1.2 2.5-3 3-4.8 2-.8 4.2 1 4.2 3.6C19.2 16 12 20 12 20z" />
      <path d="M12 11.2C10.4 8.6 10 5.6 11 3.2c.7 2.2 2 3.8 1 8z" />
      <path d="M6.8 18.4c2.2.2 3.8-.5 5.2-2.2 1.4 1.7 3 2.4 5.2 2.2" />
    </svg>
  );
}

// Maps a plan.icon key -> component (used by PricingCard).
export const PLAN_ICONS = {
  users: UsersIcon,
  target: TargetIcon,
  chart: ChartIcon,
  user: UserIcon,
};

export const PILATES_ICONS = {
  core: CoreIcon,
  flex: StretchIcon,
  posture: PostureIcon,
  mind: LotusIcon,
};
