import { useEffect, useId } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// REPLACE the two constants below with your real AdSense values after approval:
//   AD_CLIENT  →  your Publisher ID, e.g. "ca-pub-1234567890123456"
//   slot prop  →  the individual ad-unit slot ID from your AdSense dashboard
// ─────────────────────────────────────────────────────────────────────────────
export const AD_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX";

export type AdFormat =
  | "auto"           // responsive auto
  | "rectangle"      // 300×250 medium rectangle
  | "horizontal"     // 728×90 leaderboard / 320×50 mobile banner
  | "vertical"       // 160×600 wide skyscraper
  | "in-article"     // native in-article (fluid)
  | "in-feed";       // native in-feed (fluid)

interface AdSlotProps {
  /** The data-ad-slot value from your AdSense ad unit. */
  slot: string;
  format?: AdFormat;
  /** Extra Tailwind classes to apply to the outer wrapper. */
  className?: string;
  /** Show the "Advertisement" label above the ad (required by AdSense policy). */
  label?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * Renders a single Google AdSense ad unit.
 *
 * Usage:
 *   <AdSlot slot="1234567890" format="rectangle" />
 *
 * The component is safe to render in a React SPA — it calls
 * `adsbygoogle.push({})` inside a useEffect so each mount triggers
 * a fresh ad request without duplicating the global script tag.
 */
const AdSlot = ({ slot, format = "auto", className = "", label = true }: AdSlotProps) => {
  // Unique key per instance so React doesn't reuse the same <ins> element
  const uid = useId();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense blocked or not loaded — silently ignore
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const isFluid = format === "in-article" || format === "in-feed";

  return (
    <div className={`adsense-wrapper ${className}`} aria-label="Advertisement">
      {label && (
        <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60 select-none">
          Advertisement
        </p>
      )}
      <ins
        key={uid}
        className="adsbygoogle"
        style={{ display: isFluid ? "block" : "block", minHeight: isFluid ? undefined : 60 }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={isFluid ? "fluid" : format}
        data-full-width-responsive="true"
        {...(isFluid ? { "data-ad-layout": format === "in-article" ? "in-article" : "in-feed" } : {})}
      />
    </div>
  );
};

export default AdSlot;
