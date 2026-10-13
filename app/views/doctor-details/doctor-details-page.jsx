import React from "react";
import Link from "next/link"; // React Router? Use: import { Link } from "react-router-dom" and replace href= with to=
import {
  Phone,
  Stethoscope,
  GraduationCap,
  Briefcase,
  CalendarDays,
  Clock,
  BadgeCheck,
  ChevronRight,
  ArrowUpRight,
  HeartPulse,
  Baby,
  Activity,
  Check,
  Home,
} from "lucide-react";
import PageWrapper from "../layouts/page-wrapper";
import { Eyebrow } from "../layouts/section-header";
import { CONTACT_INFO } from "@/app/const";


/* ------------------------------------------------------------------ */
/*  Brand icons (lucide no longer ships these)                         */
/* ------------------------------------------------------------------ */
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M5.2 9.2h3v9.6h-3V9.2Zm1.5-4.7a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10.1 9.2H13v1.3h.04c.4-.76 1.4-1.56 2.88-1.56 3.08 0 3.65 2.03 3.65 4.67v5.2h-3v-4.6c0-1.1-.02-2.5-1.53-2.5-1.53 0-1.77 1.2-1.77 2.43v4.67h-3V9.2Z" />
  </svg>
);

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const ACCENT = "#E58A93"; // soft coral used for accent words, icons and ticks

const detailIcons = {
  "area of expertise": Stethoscope,
  specialization: Stethoscope,
  qualification: GraduationCap,
  experience: Briefcase,
  "working days": CalendarDays,
  availability: Clock,
};

const serviceIcons = {
  paediatrics: Baby,
  "newborn-neonatal-care": HeartPulse,
  sonography: Activity,
};

const telHref = (p = "") => `tel:${p.replace(/\s/g, "")}`;

/* "Book an Appointment" -> ["Book an", "Appointment"] */
const splitLast = (text = "") => {
  const i = text.lastIndexOf(" ");
  return i === -1 ? ["", text] : [text.slice(0, i), text.slice(i + 1)];
};

/* Two-tone heading: dark title + coral accent word(s) */
const Heading = ({ title, accent, className = "" }) => (
  <h2
    className={`text-3xl font-bold tracking-tight text-[#2B1A2E] sm:text-4xl ${className}`}
  >
    {title} <span style={{ color: ACCENT }}>{accent}</span>
  </h2>
);

const Intro = ({ children }) => (
  <p className="mt-3 max-w-2xl text-base leading-7 text-[#6B5F6E]">
    {children}
  </p>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const DoctorDetailsPage = ({ data }) => {
  if (!data) return null;

  const {
    hero,
    about,
    professionalDetails = [],
    specializations = [],
    services = [],
    appointment,
    social = {},
  } = data;

  const bookLabel = "Book Appointment";

  /* ---- hours only appear in the booking card; days stay in the stats bar ---- */
  const hoursItem = professionalDetails.find((d) =>
    /hour|timing/i.test(d.label),
  );
  const daysItem = professionalDetails.find((d) =>
    /days|availability/i.test(d.label),
  );
  const stats = professionalDetails.filter((d) => d !== hoursItem);

  const experienceValue = professionalDetails.find(
    (d) => d.label === "Experience",
  )?.value;

  const hourSlots = (hoursItem?.value || "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);

  const socialLinks = Object.entries(social).filter(
    ([name, href]) => href && socialIcons[name],
  );

  const [apptHead, apptLast] = splitLast(
    appointment?.title || "Book an Appointment",
  );

  return (
    <>
      <style>{`
        .dd-focus:focus-visible{outline:2px solid #9C3D58;outline-offset:3px}
        @keyframes dd-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .dd-float{animation:dd-float 6s ease-in-out infinite}
        @media (prefers-reduced-motion:reduce){.dd-float{animation:none}}
      `}</style>

      {/* ============================ HERO ============================ */}
      <PageWrapper
        className="relative overflow-hidden"
        containerClassName="pt-16"
      >
        {/* light background layers */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFF3F1_0%,#FFFAF8_100%)]" />
        <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[#E6EFE8]/80 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#D9B3BC 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "linear-gradient(180deg, black 0%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(180deg, black 0%, transparent 75%)",
          }}
        />

        <div className="relative pb-10 lg:pb-20">
          {/* breadcrumb */}

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            {/* ---------- text ---------- */}
            <div className="order-2 lg:order-1">
              <Eyebrow>{hero?.specialty}</Eyebrow>

              <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-[#2B1A2E] sm:text-6xl">
                {hero?.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#5E4D60] sm:text-lg">
                {hero?.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href={telHref(CONTACT_INFO.phone)} className="btn btn-lg btn-primary">
                  {bookLabel}
                  <span className="btn-icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href={telHref(CONTACT_INFO.phone)}
                  className="dd-focus group inline-flex items-center gap-3 rounded-full px-2 py-2 text-sm font-semibold text-[#2B1A2E]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-[#E8C9D0] bg-white text-[#9C3D58] transition group-hover:bg-[#9C3D58] group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-medium text-[#7B6A7E]">
                      Call us
                    </span>
                    {CONTACT_INFO.phone}
                  </span>
                </a>
              </div>
            </div>

            {/* ---------- image (4:3) ---------- */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                {/* layered back shapes */}
                <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[36px] bg-gradient-to-br from-[#F3C6CF] to-[#E6EFE8]" />
                <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full border-2 border-dashed border-[#D9A3B0]" />

                <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] bg-[#F6E3E6] shadow-2xl shadow-[#6B2A44]/25 ring-8 ring-white">
                  <img
                    src={hero?.image}
                    alt={hero?.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B1A2E]/25 via-transparent to-transparent" />
                </div>

                {/* floating chip: experience */}
                {experienceValue && (
                  <div className="dd-float absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#F6E3E6] text-[#9C3D58]">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-lg font-semibold leading-none text-[#2B1A2E]">
                        {experienceValue}
                      </p>
                      <p className="mt-1 text-xs text-[#7B6A7E]">
                        of clinical practice
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ======================= QUICK FACTS BAR ======================= */}
        {stats.length > 0 && (
          <div className="relative">
            <dl className="grid grid-cols-1 divide-y divide-[#F0E1E4] overflow-hidden rounded-[28px] border border-[#F0E1E4] bg-white shadow-[0_40px_80px_-40px_rgba(90,30,60,0.4)] sm:grid-cols-2 sm:divide-y-0 lg:flex lg:divide-x">
              {stats.map((item) => {
                const Icon =
                  detailIcons[item.label.toLowerCase()] || BadgeCheck;
                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 p-6 transition hover:bg-[#FFF6F5] lg:flex-1"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F6E3E6] text-[#9C3D58] transition group-hover:bg-[#9C3D58] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs font-medium text-[#7B6A7E]">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-[15px] font-semibold leading-snug text-[#2B1A2E]">
                        {item.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        )}
      </PageWrapper>

      {/* ============================ CONTENT ============================ */}
      <PageWrapper>
        <div className="mx-auto grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          {/* ------------------------- main column ------------------------- */}
          <div className="min-w-0 divide-y divide-[#EFE4E6]">
            {/* About */}
            {about && (
              <section className="pb-10">
                <Heading title="About" accent={hero?.title || about.title} />
                <div className="mt-5 space-y-4 text-base leading-8 text-[#6B5F6E] sm:text-[17px]">
                  {about.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className={i === 0 ? "font-medium text-[#2B1A2E]" : ""}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Expertise */}
            {specializations.length > 0 && (
              <section className="py-10">
                <Heading title="Areas of" accent="expertise" />
                <Intro>
                  Focused, personal care for newborns, infants and children.
                </Intro>

                <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {specializations.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3.5 rounded-2xl bg-[#F7F3F4] px-4 py-3.5"
                    >
                      <span
                        className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] font-medium leading-6 text-[#2B1A2E] sm:text-base">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Services */}
            {services.length > 0 && (
              <section className="pt-10">
                <Heading title="Services" accent="offered" />
                <Intro>
                  Care and procedures available under her supervision.
                </Intro>

                <ul className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {services.map((s) => {
                    const Icon = serviceIcons[s.id] || Stethoscope;
                    return (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="dd-focus group flex h-full flex-col rounded-[28px] bg-[#F7F3F4] p-6 transition hover:bg-[#FBE9EC]"
                        >
                          <Icon
                            className="h-9 w-9"
                            style={{ color: ACCENT }}
                            strokeWidth={1.4}
                          />
                          <h3 className="mt-5 flex-1 text-lg font-bold leading-snug text-[#2B1A2E]">
                            {s.title}
                          </h3>
                          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#9C3D58]">
                            Learn more
                            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </div>

          {/* --------------------------- sidebar --------------------------- */}
          <aside className="lg:sticky lg:top-6">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FBE6EA] via-[#FFF3F1] to-[#E9F1EB] p-7 ring-1 ring-[#F2DCE0] sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/60 blur-3xl" />

              <div className="relative">
                <Heading
                  title={apptHead}
                  accent={apptLast}
                  className="!text-3xl"
                />
                {appointment?.description && (
                  <p className="mt-3 text-[15px] leading-7 text-[#6B5F6E]">
                    {appointment.description}
                  </p>
                )}

                {/* timings */}
                {(daysItem || hourSlots.length > 0) && (
                  <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#F0E1E4]">
                    {daysItem && (
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F6E3E6] text-[#9C3D58]">
                          <CalendarDays className="h-[18px] w-[18px]" />
                        </span>
                        <div>
                          <p className="text-xs text-[#7B6A7E]">
                            {daysItem.label}
                          </p>
                          <p className="text-[15px] font-bold text-[#2B1A2E]">
                            {daysItem.value}
                          </p>
                        </div>
                      </div>
                    )}

                    {hourSlots.length > 0 && (
                      <div className="mt-4 border-t border-[#F3E6E8] pt-4">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F6E3E6] text-[#9C3D58]">
                            <Clock className="h-[18px] w-[18px]" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-[#7B6A7E]">
                              {hoursItem?.label}
                            </p>
                            <ul className="mt-1 space-y-0.5">
                              {hourSlots.map((slot) => (
                                <li
                                  key={slot}
                                  className="text-[15px] font-bold leading-snug text-[#2B1A2E]"
                                >
                                  {slot}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* actions */}
                <a
                  href={telHref(CONTACT_INFO.phone)}
                  className="dd-focus group mt-6 flex w-full items-center justify-between rounded-full bg-secondary-500 py-2 pl-7 pr-2 text-sm font-semibold text-white shadow transition hover:bg-secondary-600"
                >
                  {bookLabel}
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#2B1A2E] transition group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                <a
                  href={telHref(CONTACT_INFO.phone)}
                  className="dd-focus mt-3 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-[#2B1A2E] transition hover:text-[#9C3D58]"
                >
                  <Phone className="h-4 w-4 text-[#9C3D58]" />
                  {CONTACT_INFO.phone}
                </a>

                {socialLinks.length > 0 && (
                  <div className="mt-4 flex items-center justify-center gap-2.5 border-t border-[#F0D9DD] pt-5">
                    <span className="mr-1 text-sm text-[#7B6A7E]">Follow</span>
                    {socialLinks.map(([name, href]) => {
                      const Icon = socialIcons[name];
                      return (
                        <a
                          key={name}
                          href={href}
                          aria-label={name}
                          target="_blank"
                          rel="noreferrer"
                          className="dd-focus grid h-10 w-10 place-items-center rounded-full bg-white text-[#2B1A2E] ring-1 ring-[#F0E1E4] transition hover:bg-[#9C3D58] hover:text-white hover:ring-[#9C3D58]"
                        >
                          <Icon className="h-[17px] w-[17px]" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </PageWrapper>
    </>
  );
};

export default DoctorDetailsPage;
