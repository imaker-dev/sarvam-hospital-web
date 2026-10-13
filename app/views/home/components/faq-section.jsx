"use client";

import { useId, useState } from "react";
import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";
import PageWrapper from "../../layouts/page-wrapper";
import SectionHeader from "../../layouts/section-header";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* Suggested image size: 900x1100 (portrait) or anything 4:3 to 4:5.   */
/* ------------------------------------------------------------------ */
const DEFAULT_CONTENT = {
  badge: "FAQs",
  title: "Your Questions, Answered",
  highlight: "Answered",
  description:
    "Find answers to common questions about our services, appointments and patient care.",

  image: {
    src: "/Images/faq.webp",
    alt: "Doctor speaking with an expecting mother",
  },
  note: { title: "Answered by our doctors", text: "Clear, honest, no jargon" },
  cta: { label: "View all questions", href: "/faq" },
  items: [
    {
      question: "Is the hospital open 24/7 for emergencies?",
      answer:
        "Yes. Our emergency department is open every day, around the clock, including holidays, with obstetric and pediatric specialists on call.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book online, call our helpline or visit the front desk. Same-day slots are often available for urgent concerns.",
    },
    {
      question: "Can my partner stay with me during delivery?",
      answer:
        "In most cases, yes. One family member or your partner can stay with you through labor and delivery. Our team will explain the details at admission.",
    },
    {
      question: "Do you treat newborns and children of all ages?",
      answer:
        "Our pediatric team cares for newborns through teenagers, from vaccinations and growth checks to treatment for everyday and serious illnesses.",
    },
    {
      question: "What should I bring for my first visit?",
      answer:
        "Bring a photo ID, any previous medical reports, a list of current medicines and your insurance details if you have them.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "We work with most major insurers. Share your policy details with our billing desk and they will guide you before your visit.",
    },
  ],
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

function FaqItem({ item, index, open, onToggle, buttonId, panelId }) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 motion-reduce:transition-none ${
        open
          ? "border-secondary-500 bg-secondary-500 shadow-[0_24px_50px_-28px_rgba(53,24,63,0.6)]"
          : "border-primary-500/8 bg-white hover:border-primary-500/20"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-center gap-4 rounded-2xl px-5 py-5 text-left sm:gap-5 sm:px-6 ${focusRing}`}
        >
          <span
            aria-hidden
            className={`w-6 shrink-0 text-sm font-semibold tabular-nums ${open ? "text-primary-300" : "text-primary-500"}`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`flex-1 text-[1rem] font-semibold leading-snug sm:text-[1.0625rem] ${
              open ? "text-white" : "text-secondary-500"
            }`}
          >
            {item.question}
          </span>
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${
              open
                ? "bg-primary-500 text-white"
                : "bg-primary-50 text-secondary-500"
            }`}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden ${open ? "visible" : "invisible"} transition-[visibility] duration-300`}
        >
          <p className="pb-6 pl-[3.75rem] pr-14 text-[0.9375rem] leading-[1.7] text-white/75 sm:pl-[4.25rem] sm:pr-16">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection({ content }) {
  const c = { ...DEFAULT_CONTENT, ...content };
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageWrapper
      as="section"
      className="bg-secondary-50"
      containerClassName="mx-auto grid gap-8 lg:items-start lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-14"
    >
      {/* ---------- Image: same petal shape as the hero, stays in view while questions open ---------- */}
      <div className="relative mx-auto w-full max-w-lg lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl rounded-br-[3rem] rounded-tl-[3rem] bg-gradient-to-br from-primary-200 via-primary-100 to-primary-200 sm:rounded-br-[4rem] sm:rounded-tl-[4rem] md:aspect-[16/10] lg:aspect-[4/5]">
          {c.image.src && (
            <img
              src={c.image.src}
              alt={c.image.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
            />
          )}

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary-500/45 to-transparent"
          />

          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3.5 rounded-2xl bg-white/85 p-3 pr-5 shadow-[0_10px_40px_-12px_rgba(53,24,63,0.35)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-auto">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-500">
              <MessageCircle className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block font-semibold leading-tight text-slate-800">
                {c.note.title}
              </span>
              <span className="block text-sm text-slate-600">
                {c.note.text}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* ---------- Content ---------- */}
      <div>
        <SectionHeader
          badge={c.badge}
          title={c.title}
          highlight={c.highlight}
          description={c.description}
          align={"start"}
        />

        <div className="space-y-3">
          {c.items.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              buttonId={`${baseId}-button-${i}`}
              panelId={`${baseId}-panel-${i}`}
            />
          ))}
        </div>

        <Link href={c.cta.href} className="mt-8 btn  btn-lg btn-primary">
          {c.cta.label}
          <span className="btn-icon">
            <ArrowUpRight size={16} aria-hidden />
          </span>
        </Link>
      </div>
    </PageWrapper>
  );
}
