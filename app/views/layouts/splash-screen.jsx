import { BRAND_ICON } from "@/app/const";

/* ------------------------------------------------------------------ */
/* Loading screen: centered logo with two rotating arcs.              */
/* Uses the existing primary and secondary theme colors.              */
/* ------------------------------------------------------------------ */

export default function SplashScreen({ label = "Loading" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] grid place-items-center bg-white"
    >
      <span className="sr-only">{label}</span>

      {/* Centered logo and rotating arcs */}
      <div
        className="relative grid h-32 w-32 place-items-center sm:h-36 sm:w-36"
        aria-hidden="true"
      >
        {/* Outer rotating arc */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full animate-spin motion-reduce:animate-none [animation-duration:2.2s]"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="var(--color-primary-500)"
            strokeOpacity="0.8"
            strokeWidth="0.8"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="30 20"
          />
        </svg>

        {/* Inner rotating arc */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-[9%] h-[82%] w-[82%] animate-spin motion-reduce:animate-none [animation-direction:reverse] [animation-duration:3.4s]"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="var(--color-secondary-500)"
            strokeOpacity="0.55"
            strokeWidth="0.8"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="16 34"
          />
        </svg>

        {/* Brand logo */}
        <img
          src={BRAND_ICON}
          alt=""
          className="w-14 object-contain sm:w-16"
        />
      </div>
    </div>
  );
}