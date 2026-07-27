import { useEffect, useRef, useState } from "react";

/**
 * Wraps children in a div that fades / slides in when scrolled into view.
 * Mirrors the original `.reveal` behavior: IntersectionObserver with a
 * threshold of 0.1 and a rootMargin bottom offset, plus a safety fallback
 * that force-reveals after 3s if the observer never fires.
 */
export default function RevealOnScroll({
  children,
  as: Tag = "div",
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShown(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
    } else {
      setShown(true);
    }

    // Fallback: never leave content hidden.
    const fallback = setTimeout(() => setShown(true), 3000);

    return () => {
      if (observer) observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " in" : ""}${className ? " " + className : ""}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
