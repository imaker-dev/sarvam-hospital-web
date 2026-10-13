import React from "react";
import Link from "next/link";
import {
  Phone,
  Stethoscope,
  GraduationCap,
  Briefcase,
  CalendarDays,
  Clock,
  BadgeCheck,
  ArrowUpRight,
  HeartPulse,
  Baby,
  Activity,
  Check,
} from "lucide-react";
import { Eyebrow } from "../layouts/section-header";
import { CONTACT_INFO } from "@/app/const";
import PageWrapper from "../layouts/page-wrapper";

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

const ACCENT = "#04949F";

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

const Heading = ({ title, accent, className = "" }) => (
  <h2
    className={`text-3xl font-bold tracking-tight text-secondary-500 sm:text-4xl ${className}`}
  >
    {title} <span className="text-primary-600">{accent}</span>
  </h2>
);

const Intro = ({ children }) => (
  <p className="mt-3 max-w-2xl text-base leading-7 text-secondary-500/80">
    {children}
  </p>
);

/* ------------------------------------------------------------------ */
/* Page                                                               */
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
  } = data;

  const bookLabel = "Book Appointment";

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

  return (
    <div>
      <style>{`
        .dd-focus:focus-visible {
          outline: 2px solid #04949F;
          outline-offset: 3px;
        }

        @keyframes dd-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .dd-float {
          animation: dd-float 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .dd-float { animation: none; }
        }
      `}</style>

      {/* ============================ HERO ============================ */}

      <PageWrapper
        className="relative overflow-hidden bg-primary-50"
        containerClassName="pt-16 "
      >
        {/* Hero content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 pb-10 lg:pb-20">
          <div className="order-2 lg:order-1">
            <Eyebrow>{hero?.specialty}</Eyebrow>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-secondary-500 sm:mt-6 sm:text-4xl md:text-5xl lg:mt-7 lg:text-6xl lg:leading-[1.02]">
              {hero?.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-secondary-500/80 sm:text-lg">
              {hero?.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={telHref(CONTACT_INFO.phone)}
                className="btn btn-lg btn-primary"
              >
                {bookLabel}
                <span className="btn-icon">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href={telHref(CONTACT_INFO.phone)}
                className="dd-focus group inline-flex items-center gap-3 rounded-full px-2 py-2 text-sm font-semibold text-secondary-500"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-primary-200 bg-white text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </span>

                <span className="text-left leading-tight">
                  <span className="block text-xs font-medium text-secondary-500/70">
                    Call us
                  </span>
                  {CONTACT_INFO.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Doctor image */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] bg-primary-50 shadow-2xl shadow-secondary-500/15 ring-8 ring-white">
                <img
                  src={hero?.image}
                  alt={hero?.title}
                  className="h-full w-full object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary-500/25 via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              {experienceValue && (
                <div className="dd-float absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary-600">
                    <BadgeCheck className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-lg font-semibold leading-none text-secondary-500">
                      {experienceValue}
                    </p>

                    <p className="mt-1 text-xs text-secondary-500/70">
                      of clinical practice
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ======================= QUICK FACTS BAR ======================= */}

        {stats.length > 0 && (
          <div className="relative">
            <dl className="grid grid-cols-1 divide-y divide-primary-100 overflow-hidden rounded-[28px] border border-primary-100 bg-white shadow-[0_40px_80px_-40px_rgba(4,148,159,0.25)] sm:grid-cols-2 sm:divide-y-0 lg:flex lg:divide-x">
              {stats.map((item) => {
                const Icon =
                  detailIcons[item.label.toLowerCase()] || BadgeCheck;

                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 p-6 transition hover:bg-primary-50 lg:flex-1"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>

                    <div className="min-w-0">
                      <dt className="text-xs font-medium text-secondary-500/70">
                        {item.label}
                      </dt>

                      <dd className="mt-0.5 text-[15px] font-semibold leading-snug text-secondary-500">
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
          {/* Main column */}

          <div className="min-w-0 divide-y divide-primary-100">
            {/* About */}
            {about && (
              <section className="pb-10">
                <Heading title="About" accent={hero?.title || about.title} />

                <div className="mt-5 space-y-4 text-base leading-8 text-secondary-500/80 sm:text-[17px]">
                  {about.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0 ? "font-medium text-secondary-500" : ""
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Areas of expertise */}

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
                      className="flex items-center gap-3.5 rounded-2xl bg-primary-50 px-4 py-3.5"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-600 text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>

                      <span className="text-[15px] font-medium leading-6 text-secondary-500 sm:text-base">
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
                          className="dd-focus group flex h-full flex-col rounded-[28px] bg-primary-50 p-6 transition hover:bg-primary-100"
                        >
                          <Icon
                            className="h-9 w-9"
                            style={{ color: ACCENT }}
                            strokeWidth={1.4}
                          />

                          <h3 className="mt-5 flex-1 text-lg font-bold leading-snug text-secondary-500">
                            {s.title}
                          </h3>

                          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
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

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-[0_12px_40px_-20px_rgba(4,148,159,0.25)]">
              {/* Header */}
              <div className="relative overflow-hidden bg-secondary-500 px-6 py-5">
                <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full border border-white/10" />

                <div className="relative">
                  <h3
                    className={`text-xl font-bold tracking-tight text-white sm:text-2xl`}
                  >
                    {appointment.title}
                  </h3>

                  {appointment?.description && (
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      {appointment.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {/* Availability */}
                {(daysItem || hourSlots.length > 0) && (
                  <div>
                    <h3 className="text-sm font-bold text-secondary-500">
                      Consultation hours
                    </h3>

                    {daysItem && (
                      <div className="mt-3 flex items-center gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-600">
                          <CalendarDays className="h-4 w-4" />
                        </span>

                        <div>
                          <p className="text-xs text-secondary-500/60">
                            {daysItem.label}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-secondary-500">
                            {daysItem.value}
                          </p>
                        </div>
                      </div>
                    )}

                    {hourSlots.length > 0 && (
                      <div className="mt-3 divide-y divide-primary-100 rounded-2xl border border-primary-100 bg-primary-50/50 px-3">
                        {hourSlots.map((slot, index) => (
                          <div
                            key={slot}
                            className="flex items-center gap-3 py-3"
                          >
                            <Clock className="h-4 w-4 shrink-0 text-primary-600" />

                            <div className="min-w-0 flex-1">
                              <p className="text-xs text-secondary-500/60">
                                {index === 0 ? "Morning" : "Evening"}
                              </p>
                              <p className="mt-0.5 text-sm font-semibold text-secondary-500">
                                {slot}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="mt-5 space-y-2.5">
                  <a
                    href={appointment?.cta?.href || telHref(CONTACT_INFO.phone)}
                    className="btn w-full btn-primary"
                  >
                    {appointment?.cta?.label || bookLabel}

                    <span className="btn-icon">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>

                  <a
                    href={telHref(CONTACT_INFO.phone)}
                    className="btn w-full btn-outline"
                  >
                    <Phone className="h-4 w-4 text-primary-600" />
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                <p className="mt-3 text-center text-xs text-secondary-500/60">
                  Call to confirm your consultation time.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </PageWrapper>
    </div>
  );
};

export default DoctorDetailsPage;
