// import React from 'react'

// const ContactPage = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ContactPage

"use client";

import { useEffect, useId, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Info,
  Loader2,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { CONTACT_INFO } from "@/app/const";
import PageHeader from "../layouts/page-header";
import PageWrapper from "../layouts/page-wrapper";

/* ------------------------------------------------------------------ */
/* Contact section: hours / location / contact cards, map + form.      */
/*                                                                     */
/*   <ContactSection />                          open 24 hours (default) */
/*   <ContactSection hours={CUSTOM_HOURS} />     fixed opening hours     */
/*   <ContactSection onSubmit={async (v) => {}} /> send form to your API */
/*                                                                     */
/* Without `onSubmit`, the form opens the visitor's email app with the */
/* message filled in.                                                  */
/* ------------------------------------------------------------------ */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

/* Monday first. `i` matches Date.getDay() (0 = Sunday) */
const WEEK = [
  { i: 1, short: "Mon", full: "Monday" },
  { i: 2, short: "Tue", full: "Tuesday" },
  { i: 3, short: "Wed", full: "Wednesday" },
  { i: 4, short: "Thu", full: "Thursday" },
  { i: 5, short: "Fri", full: "Friday" },
  { i: 6, short: "Sat", full: "Saturday" },
  { i: 0, short: "Sun", full: "Sunday" },
];

/* Example of fixed hours (pass as the `hours` prop instead of "24/7"):
const CUSTOM_HOURS = [
  { label: "Monday – Friday", days: [1,2,3,4,5], open: "08:00", close: "18:00" },
  { label: "Saturday", days: [6], open: "09:00", close: "14:00" },
  { label: "Sunday", days: [0], closed: true },
];  */

const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + (m || 0);
};

const telHref = (p = "") => `tel:${String(p).replace(/[^\d+]/g, "")}`;

/* ------------------------------------------------------------------ */
/* Hook: today's weekday (+ "open now" for fixed hours). Client only,  */
/* so server and browser HTML always match.                            */
/* ------------------------------------------------------------------ */
function useToday(hours, timeZone) {
  const fixed = Array.isArray(hours);
  const [state, setState] = useState({ today: null, open: null });

  useEffect(() => {
    const compute = () => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone }));
      const today = now.getDay();
      if (!fixed) return setState({ today, open: true });
      const mins = now.getHours() * 60 + now.getMinutes();
      const slot = hours.find((h) => h.days.includes(today) && !h.closed);
      setState({
        today,
        open:
          !!slot &&
          mins >= toMinutes(slot.open) &&
          mins < toMinutes(slot.close),
      });
    };
    compute();
    if (!fixed) return; // 24/7: nothing changes during the day, no timer needed
    const t = setInterval(compute, 60_000);
    return () => clearInterval(t);
  }, [hours, timeZone, fixed]);

  return state;
}

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */
const TONES = {
  light: {
    box: "bg-gray-100 text-slate-800",
    icon: "text-secondary-500/65",
    line: "border-slate-700/10",
  },
  coral: {
    box: "bg-primary-500 text-white",
    icon: "text-white/90",
    line: "border-white/25",
  },
  plum: {
    box: "bg-secondary-500 text-white",
    icon: "text-white/80",
    line: "border-white/15",
  },
};

function InfoCard({
  title,
  icon: Icon,
  tone,
  badge,
  className = "",
  children,
}) {
  const t = TONES[tone];
  return (
    <div
      className={`flex flex-col rounded-[28px] p-6 sm:p-7 ${t.box} ${className}`}
    >
      <div className="flex min-h-[2.25rem] items-center justify-between gap-4">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          {badge}
        </div>
        <Icon
          className={`h-7 w-7 shrink-0 ${t.icon}`}
          strokeWidth={1.3}
          aria-hidden
        />
      </div>
      <div className={`mt-4 flex flex-1 flex-col border-t pt-5 ${t.line}`}>
        {children}
      </div>
    </div>
  );
}

function OpenBadge({ open }) {
  if (open === null) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        open
          ? "bg-[#E3F3E8] text-[#1F7A43]"
          : "bg-[#35183F]/8 text-[#35183F]/70"
      }`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25A25A] opacity-60 motion-reduce:animate-none" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${open ? "bg-[#25A25A]" : "bg-[#35183F]/40"}`}
        />
      </span>
      {open ? "Open now" : "Closed now"}
    </span>
  );
}

/* Schedule body for "24/7" */
function AllDayBody({ today }) {
  return (
    <>
      <p className="text-[2.75rem] font-bold leading-none tracking-tight sm:text-5xl">
        24<span className="text-primary-500">/</span>7
      </p>
      <p className="mt-2.5 text-[0.9375rem] font-medium text-secondary-500">
        Open 24 hours, every day of the week
      </p>

      <ul
        aria-label="Open every day of the week"
        className="mt-auto grid grid-cols-7 gap-1.5 pt-6"
      >
        {WEEK.map((d) => {
          const isToday = today === d.i;
          return (
            <li
              key={d.i}
              className={`grid h-10 place-items-center rounded-xl text-[0.6875rem] font-semibold sm:text-xs ${
                isToday
                  ? "bg-secondary-500 text-white"
                  : "bg-white text-secondary-500 ring-1 ring-secondary-500/8"
              }`}
            >
              <abbr title={d.full} className="no-underline">
                {d.short}
              </abbr>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/* Schedule body for fixed opening hours */
function FixedHoursBody({ hours, today }) {
  return (
    <ul className="space-y-3.5">
      {hours.map((h) => {
        const isToday = today !== null && h.days.includes(today);
        return (
          <li
            key={h.label}
            className={`flex items-center justify-between gap-4 text-[0.9375rem] ${
              isToday ? "font-semibold text-[#35183F]" : "text-[#5B4663]"
            }`}
          >
            <span className="flex items-center gap-2">
              {isToday && (
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-[#CC6B70]"
                />
              )}
              {h.label}
            </span>
            <span className="tabular-nums">
              {h.closed ? "Closed" : `${h.open} – ${h.close}`}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Form (own component: typing never re-renders the cards or the map)  */
/* ------------------------------------------------------------------ */
const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  website: "", // honeypot
};

const inputCls = (invalid) =>
  `block w-full rounded-xl border bg-white px-4 text-[0.9375rem] text-secondary-500 placeholder:text-secondary-500/40 transition-colors focus:outline-none focus:ring-2 ${
    invalid
      ? "border-red-500 focus:ring-red-500/25"
      : "border-transparent focus:border-primary-500 focus:ring-primary-500/25"
  }`;

function Field({ label, htmlFor, error, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-secondary-500"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${htmlFor}-error`}
          className="mt-1.5 text-[0.8125rem] text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm({ email, onSubmit }) {
  const uid = useId();
  const id = (name) => `${uid}-${name}`;

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const set = (key) => (e) => {
    const { value } = e.target;
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.firstName.trim())
      er.firstName = "Please enter your first name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      er.email = "Please enter a valid email address.";
    if (values.phone && values.phone.replace(/\D/g, "").length < 7)
      er.phone = "Please enter a valid phone number.";
    if (values.message.trim().length < 10)
      er.message = "Please write a short message (10+ characters).";
    return er;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(id(Object.keys(er)[0]))?.focus();
      return;
    }

    if (values.website) return setStatus("success"); // honeypot: send nothing

    setStatus("loading");
    try {
      if (onSubmit) {
        const { website, ...clean } = values;
        await onSubmit(clean);
      } else {
        const body = [
          `Name: ${values.firstName} ${values.lastName}`.trim(),
          `Email: ${values.email}`,
          values.phone ? `Phone: ${values.phone}` : "",
          "",
          values.message,
        ].join("\n");
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          "Website enquiry",
        )}&body=${encodeURIComponent(body)}`;
      }
      setValues(EMPTY);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const bad = (k) => !!errors[k];
  const aria = (k) => ({
    "aria-invalid": bad(k) || undefined,
    "aria-describedby": bad(k) ? `${id(k)}-error` : undefined,
  });

  return (
    <div className="flex flex-col rounded-[28px] bg-[#F6F3F5] p-6 sm:p-10">
      <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        Send us a <span className="text-primary-500">message</span>
      </h2>

      {status === "success" ? (
        <div
          role="status"
          className="mt-8 flex flex-1 flex-col items-start justify-center gap-4 rounded-2xl bg-white p-6 sm:p-8"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E3F3E8] text-[#1F7A43]">
            <Check className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-lg font-semibold text-secondary-500">
              Thank you, your message is on its way.
            </p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-secondary-300">
              We will get back to you as soon as possible.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className={`text-sm font-semibold text-primary-500 underline underline-offset-4 hover:text-secondary-500 ${focusRing}`}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          noValidate
          className="mt-8 flex flex-1 flex-col gap-4 sm:gap-5"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <Field
              label="First name"
              htmlFor={id("firstName")}
              error={errors.firstName}
            >
              <input
                id={id("firstName")}
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                value={values.firstName}
                onChange={set("firstName")}
                className={`${inputCls(bad("firstName"))} h-14`}
                {...aria("firstName")}
              />
            </Field>
            <Field label="Last name" htmlFor={id("lastName")}>
              <input
                id={id("lastName")}
                type="text"
                autoComplete="family-name"
                placeholder="Last name"
                value={values.lastName}
                onChange={set("lastName")}
                className={`${inputCls(false)} h-14`}
              />
            </Field>
            <Field label="Email" htmlFor={id("email")} error={errors.email}>
              <input
                id={id("email")}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={set("email")}
                className={`${inputCls(bad("email"))} h-14`}
                {...aria("email")}
              />
            </Field>
            <Field
              label="Phone (optional)"
              htmlFor={id("phone")}
              error={errors.phone}
            >
              <input
                id={id("phone")}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone number"
                value={values.phone}
                onChange={set("phone")}
                className={`${inputCls(bad("phone"))} h-14`}
                {...aria("phone")}
              />
            </Field>
          </div>

          <Field label="Message" htmlFor={id("message")} error={errors.message}>
            <textarea
              id={id("message")}
              rows={4}
              placeholder="Write your message…"
              value={values.message}
              onChange={set("message")}
              className={`${inputCls(bad("message"))} resize-y py-4`}
              {...aria("message")}
            />
          </Field>

          {/* honeypot: hidden from people, bots tend to fill it */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={values.website}
            onChange={set("website")}
            className="hidden"
          />

          {status === "error" && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl bg-[#FBE7E8] px-4 py-3 text-sm text-[#8C2F37]"
            >
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              Something went wrong while sending. Please try again or call us.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-lg w-full btn-primary"
          >
            {status === "loading" ? "Sending…" : "Submit message"}
            <span className="btn-icon">
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:rotate-45"
                  aria-hidden
                />
              )}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function ContactPage({
  hours = "24/7", // "24/7" or an array of { label, days, open, close, closed }
  timeZone = "Asia/Kolkata", // used for "today" and, with fixed hours, "Open now"
  locationNote = "Providing expert care with the latest technology.",
  address = typeof CONTACT_INFO?.address === "string"
    ? CONTACT_INFO.address
    : "123 Ipsum Road, Loremton, Dolorshire LO1 2RM",
  phone = CONTACT_INFO?.phone ?? "+91 98765 43210",
  email = CONTACT_INFO?.email ?? "info@example.com",
  contactNote = "Reach out any time for personalised support.",
  onSubmit,
}) {
  const allDay = hours === "24/7";
  const { today, open } = useToday(hours, timeZone);

  const embed = CONTACT_INFO.mapEmbedUrl;
  const directions = CONTACT_INFO.mapDirectionUrl;

  return (
    <>
      <PageHeader title={"Contact Us"} highlight={"Us"} />

      <PageWrapper>
        {/* ---------------- info cards ---------------- */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title={allDay ? "Opening hours" : "Schedule hours"}
            icon={Clock}
            tone="light"
            badge={<OpenBadge open={allDay ? true : open} />}
          >
            {allDay ? (
              <AllDayBody today={today} />
            ) : (
              <FixedHoursBody hours={hours} today={today} />
            )}
          </InfoCard>

          <InfoCard title="Our location" icon={MapPin} tone="coral">
            {/* <p className="text-[0.9375rem] leading-relaxed text-white/90">
              {locationNote}
            </p> */}
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className={`group mt-4 block text-lg font-semibold leading-snug ${focusRing} focus-visible:outline-white`}
            >
              {address}
              <ArrowUpRight
                className="ml-1.5 inline h-4 w-4 align-[-2px] opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden
              />
            </a>
          </InfoCard>

          <InfoCard
            title="Contact us"
            icon={Phone}
            tone="plum"
            className="md:col-span-2 lg:col-span-1"
          >
            <p className="text-[0.9375rem] leading-relaxed text-white/80">
              {contactNote}
            </p>
            <div className="mt-4 space-y-2 text-lg font-semibold leading-snug">
              <a
                href={telHref(phone)}
                className={`flex items-center gap-2.5 transition-colors hover:text-primary-300 ${focusRing} focus-visible:outline-primary-300`}
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-primary-300"
                  aria-hidden
                />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className={`flex items-center gap-2.5 break-all transition-colors hover:text-primary-300 ${focusRing} focus-visible:outline-primary-300`}
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-primary-300"
                  aria-hidden
                />
                {email}
              </a>
            </div>
          </InfoCard>
        </div>

        {/* ---------------- map + form ---------------- */}
        <div className="mt-5 grid gap-5 lg:mt-8 lg:grid-cols-2 lg:gap-6">
          <div className="relative min-h-[20rem] overflow-hidden rounded-[28px] bg-[#EDE7EA] sm:min-h-[26rem] lg:min-h-full">
            <iframe
              title="Map showing our location"
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 btn btn-sm btn-outline "
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get directions
            </a>
          </div>

          <ContactForm email={email} onSubmit={onSubmit} />
        </div>
      </PageWrapper>
    </>
  );
}
