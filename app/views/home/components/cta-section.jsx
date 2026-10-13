import Link from "next/link"; // React Router? Use: import { Link } from "react-router-dom" and replace href= with to=
import { ArrowUpRight, CalendarCheck, Phone } from "lucide-react";
import { APPOINTMENT_URL, CONTACT_INFO } from "@/app/const";
import PageWrapper from "../../layouts/page-wrapper";
import SectionHeader from "../../layouts/section-header";


const telHref = (p = "") => `tel:${String(p).replace(/[^\d+]/g, "")}`;

/* ---------- illustration: phone, heart + heartbeat, chat, calendar ---------- */
function CareIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 480 420"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* backdrop rings */}
      <circle cx="240" cy="210" r="190" fill="#fff" fillOpacity=".05" />
      <circle cx="240" cy="210" r="140" fill="#fff" fillOpacity=".06" />
      <circle
        cx="240"
        cy="210"
        r="200"
        fill="none"
        stroke="#83D1D5"
        strokeOpacity=".35"
        strokeWidth="2"
        strokeDasharray="4 10"
      />

      {/* phone */}
      <g transform="rotate(-5 240 210)">
        <rect
          x="170"
          y="62"
          width="140"
          height="296"
          rx="30"
          fill="#023576"
          stroke="#83D1D5"
          strokeOpacity=".5"
          strokeWidth="2"
        />
        <rect x="179" y="71" width="122" height="278" rx="23" fill="#F0FAFA" />
        <rect x="222" y="79" width="36" height="7" rx="3.5" fill="#023576" />

        {/* heart badge */}
        <circle cx="240" cy="150" r="42" fill="#83D1D5" />
        <g transform="translate(218.4 128.4) scale(1.8)">
          <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            fill="#047C85"
          />
        </g>

        {/* heartbeat line */}
        <path
          d="M195 226 H218 L226 206 L238 244 L248 219 L254 226 H285"
          fill="none"
          stroke="#047C85"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* text placeholders */}
        <rect
          x="200"
          y="258"
          width="80"
          height="8"
          rx="4"
          fill="#023576"
          fillOpacity=".15"
        />
        <rect
          x="212"
          y="274"
          width="56"
          height="8"
          rx="4"
          fill="#023576"
          fillOpacity=".15"
        />

        {/* button */}
        <rect x="205" y="298" width="70" height="30" rx="15" fill="#047C85" />
        <path
          d="M231 313 l6 6 l12 -12"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* chat bubble (top left) */}
      <g className="cta-float-a">
        <rect x="46" y="66" width="108" height="64" rx="20" fill="#83D1D5" />
        <path d="M76 128 L66 152 L104 128 Z" fill="#83D1D5" />
        <circle cx="80" cy="98" r="5.5" fill="#023576" />
        <circle cx="100" cy="98" r="5.5" fill="#023576" />
        <circle cx="120" cy="98" r="5.5" fill="#023576" />
      </g>

      {/* calendar card (right) */}
      <g className="cta-float-b">
        <rect x="326" y="118" width="108" height="112" rx="20" fill="#fff" />
        <rect x="326" y="118" width="108" height="32" rx="20" fill="#047C85" />
        <rect x="326" y="134" width="108" height="16" fill="#047C85" />
        <rect x="352" y="108" width="7" height="20" rx="3.5" fill="#023576" />
        <rect x="401" y="108" width="7" height="20" rx="3.5" fill="#023576" />
        {[352, 376, 400].map((x) => (
          <circle
            key={`a${x}`}
            cx={x}
            cy="172"
            r="4.5"
            fill="#023576"
            fillOpacity=".2"
          />
        ))}
        <circle cx="352" cy="204" r="4.5" fill="#023576" fillOpacity=".2" />
        <circle cx="400" cy="204" r="4.5" fill="#023576" fillOpacity=".2" />
        <circle cx="376" cy="204" r="12" fill="#83D1D5" />
        <path
          d="M370 204 l4.5 4.5 l8 -9"
          fill="none"
          stroke="#fff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* call button (bottom left) */}
      <g className="cta-float-c">
        <circle cx="104" cy="306" r="36" fill="#047C85" />
        <circle
          cx="104"
          cy="306"
          r="46"
          fill="none"
          stroke="#047C85"
          strokeOpacity=".35"
          strokeWidth="2"
        />
        <g transform="translate(84.8 286.8) scale(1.6)">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* plus signs, sparkles, dots */}
      <path
        d="M392 306 v26 M379 319 h26"
        stroke="#83D1D5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M62 204 v18 M53 213 h18"
        stroke="#fff"
        strokeOpacity=".6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M410 34 Q412 54 432 56 Q412 58 410 78 Q408 58 388 56 Q408 54 410 34Z"
        fill="#83D1D5"
      />
      <path
        d="M158 22 Q159.5 33.5 171 35 Q159.5 36.5 158 48 Q156.5 36.5 145 35 Q156.5 33.5 158 22Z"
        fill="#fff"
        fillOpacity=".7"
      />
      <circle cx="446" cy="262" r="5" fill="#83D1D5" />
      <circle cx="34" cy="150" r="4" fill="#fff" fillOpacity=".5" />
      <circle cx="318" cy="386" r="6" fill="#047C85" fillOpacity=".8" />
      <circle cx="170" cy="392" r="4" fill="#fff" fillOpacity=".4" />
    </svg>
  );
}

/* ---------- section ---------- */
export default function CtaSection({
  title = "Expert care is just a call away",
  highlight = "a call away",
  description = "Speak to our team or book a visit with a specialist. We are open 24 hours, every day, and happy to help you take the next step.",
  appointmentLabel = "Book an appointment",
  appointmentHref = APPOINTMENT_URL,
  phone = CONTACT_INFO?.phone,
}) {
  return (
    <PageWrapper aria-label="Book an appointment or call us">
      <style>{`
        @keyframes cta-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        .cta-float-a { animation: cta-float 6s ease-in-out infinite; }
        .cta-float-b { animation: cta-float 7s ease-in-out -2s infinite; }
        .cta-float-c { animation: cta-float 8s ease-in-out -4s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cta-float-a, .cta-float-b, .cta-float-c { animation: none; }
        }
      `}</style>

      <div className="relative isolate overflow-hidden rounded-[32px] bg-secondary-500 text-white sm:rounded-[40px]">
        {/* ---------- decoration ---------- */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <span
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage: "linear-gradient(135deg, black 0%, transparent 60%)",
              WebkitMaskImage:
                "linear-gradient(135deg, black 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10">
          {/* ---------- text + buttons ---------- */}
          <div>
            <SectionHeader
              title={title}
              highlight={highlight}
              description={description}
              align={"start"}
              light={true}
            />

            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <Link href={appointmentHref} className="btn btn-lg btn-primary">
                <span className="flex items-center gap-2.5">
                  <CalendarCheck className="h-[18px] w-[18px]" aria-hidden />
                  {appointmentLabel}
                </span>
                <span className="btn-icon">
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>

              <a href={telHref(phone)} className="btn btn-lg btn-outline">
                <Phone className="h-[18px] w-[18px]" aria-hidden />
                Call now
              </a>
            </div>
          </div>

          {/* ---------- illustration (desktop only) ---------- */}
          <div className="hidden lg:block">
            <CareIllustration className="mx-auto h-auto w-full max-w-[25rem]" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
