"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Info,
  Phone,
  Stethoscope,
} from "lucide-react";

import PageWrapper from "../layouts/page-wrapper";

import { Eyebrow } from "../layouts/section-header";

import { CONTACT_INFO } from "@/app/const";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

const pad = (n) => String(n).padStart(2, "0");

const ServiceDetailsPage = ({ data }) => {
  const { hero, subServices = [], cta } = data || {};

  const [activeId, setActiveId] = useState(subServices[0]?.id);

  /* Highlight the sub-service that is currently in view */

  useEffect(() => {
    if (!subServices.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },

      { rootMargin: "-30% 0px -60% 0px" },
    );

    subServices.forEach((s) => {
      const el = document.getElementById(s.id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data]);

  const scrollTo = (e, id) => {
    e.preventDefault();

    setActiveId(id);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!data) return null;

  const total = pad(subServices.length);

  return (
    <>
      {/* ---------- Hero ---------- */}

      <PageWrapper
        as="section"
        paddingY="py-0"
        className="relative isolate overflow-hidden border-b border-secondary-500/5 bg-secondary-50 lg:flex lg:min-h-[min(100dvh,46rem)] lg:items-center"
        containerClassName="grid w-full items-center gap-10 pb-12 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-16"
      >
        <div>
          {/* Breadcrumb */}

          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-secondary-900">
              <li>
                <Link
                  href="/"
                  className={`font-medium text-secondary-500 hover:text-primary-600 ${focusRing}`}
                >
                  Home
                </Link>
              </li>

              <li aria-hidden className="text-secondary-500/40">
                /
              </li>

              <li>
                <Link
                  href="/services"
                  className={`font-medium text-secondary-500 hover:text-primary-600 ${focusRing}`}
                >
                  Services
                </Link>
              </li>

              <li aria-hidden className="text-secondary-500/40">
                /
              </li>

              <li aria-current="page">{data.title}</li>
            </ol>
          </nav>

          <div className="mt-6">
            <Eyebrow>{data.title}</Eyebrow>
          </div>

          <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-secondary-500 sm:text-5xl lg:text-[3.25rem]">
            {hero?.title}
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-secondary-900 sm:text-lg">
            {hero?.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/appointment" className="btn btn-lg btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden />
              Book Appointment
            </Link>

            <Link href="/contact" className="btn btn-lg btn-outline">
              <Phone className="h-4 w-4" aria-hidden />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero image: 4:3, petal corners like the home hero */}

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl rounded-br-[3rem] rounded-tl-[3rem] bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-50 shadow-[0_30px_70px_-40px_rgba(2,53,118,0.35)] sm:rounded-br-[4rem] sm:rounded-tl-[4rem]">
            {hero?.image ? (
              <img
                src={hero.image}
                alt={hero.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center text-primary-600/40"
              >
                <Stethoscope className="h-14 w-14" />
              </span>
            )}
          </div>
        </div>
      </PageWrapper>

      {/* ---------- Mobile / tablet quick nav (sticks under the fixed navbar) ---------- */}

      {subServices.length > 0 && (
        <div className="sticky top-[4.5rem] z-20 border-b border-secondary-500/8 bg-white/90 backdrop-blur-xl lg:hidden">
          <div className="flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
            {subServices.map((s) => {
              const on = activeId === s.id;

              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollTo(e, s.id)}
                  aria-current={on ? "true" : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold ${focusRing} ${
                    on
                      ? "border-secondary-500 bg-secondary-500 text-white"
                      : "border-secondary-500/12 bg-white text-secondary-500"
                  }`}
                >
                  {s.title}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* ---------- Content ---------- */}

      <PageWrapper
        as="section"
        className="bg-white"
        paddingY="py-12 sm:py-16 lg:py-20"
        containerClassName="grid gap-8 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[20rem_minmax(0,1fr)] xl:gap-14"
      >
        {/* Sidebar */}

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <nav
              aria-label="In this service"
              className="rounded-3xl border border-secondary-500/8 bg-white p-3"
            >
              <div className="flex items-center justify-between px-3 pb-3 pt-2">
                <p className="text-sm font-semibold text-secondary-500">
                  In this service
                </p>

                <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold tabular-nums text-secondary-900">
                  {total}
                </span>
              </div>

              <ul className="space-y-1">
                {subServices.map((s, i) => {
                  const on = activeId === s.id;

                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => scrollTo(e, s.id)}
                        title={s.title}
                        aria-current={on ? "true" : undefined}
                        className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm ${focusRing} ${
                          on
                            ? "bg-secondary-500 font-semibold text-white"
                            : "font-medium text-secondary-500 hover:bg-primary-50"
                        }`}
                      >
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-semibold tabular-nums ${
                            on
                              ? "bg-primary-300 text-secondary-500"
                              : "bg-primary-50 text-primary-600 group-hover:bg-white"
                          }`}
                        >
                          {pad(i + 1)}
                        </span>

                        <span className="line-clamp-2 min-w-0 flex-1 leading-snug">
                          {s.title}
                        </span>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 ${
                            on
                              ? "text-primary-300"
                              : "text-primary-600 opacity-0 group-hover:opacity-100"
                          }`}
                          aria-hidden
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Help card */}

            <div className="rounded-3xl bg-secondary-500 p-6 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-300 text-secondary-500">
                <Phone className="h-[18px] w-[18px]" aria-hidden />
              </span>

              <p className="mt-4 text-lg font-semibold tracking-tight">
                Need help choosing?
              </p>

              <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                Our care team will guide you to the right service.
              </p>

              <Link
                href="/contact"
                className="group mt-5 inline-flex h-12 w-full items-center justify-between rounded-full bg-primary-300 pl-6 pr-2 text-sm font-semibold text-secondary-500 hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
              >
                Talk to us
                <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary-500/10">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Sub-service cards */}

        <div className="min-w-0 space-y-6">
          {subServices.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="group scroll-mt-40 overflow-hidden rounded-3xl border border-secondary-500/8 bg-white hover:border-primary-600/40 hover:shadow-[0_30px_60px_-38px_rgba(2,53,118,0.3)] lg:scroll-mt-28"
            >
              <div className="grid md:grid-cols-[17.5rem_1fr] lg:grid-cols-[20rem_1fr]">
                {/* Image */}

                <div className="p-3 sm:p-4 md:pr-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-50">
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="absolute inset-0 grid place-items-center text-primary-600/40"
                      >
                        <Stethoscope className="h-9 w-9" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}

                <div className="flex flex-col p-5 sm:p-6 lg:p-7">
                  <p className="text-xs font-semibold tabular-nums tracking-wider text-primary-600">
                    {pad(i + 1)}

                    <span className="text-secondary-500/30"> / {total}</span>
                  </p>

                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-secondary-500 sm:text-2xl">
                    {s.title}
                  </h2>

                  {s.description && (
                    <p className="mt-3 text-[0.9375rem] leading-[1.75] text-secondary-900">
                      {s.description}
                    </p>
                  )}

                  {s.additionalContent && (
                    <p className="mt-2.5 text-[0.9375rem] leading-[1.75] text-secondary-900">
                      {s.additionalContent}
                    </p>
                  )}

                  {(s.bulletIntro || s.bullets?.length > 0) && (
                    <div className="mt-5 border-t border-secondary-500/8 pt-5">
                      {s.bulletIntro && (
                        <p className="mb-3 text-sm font-semibold text-secondary-500">
                          {s.bulletIntro}
                        </p>
                      )}

                      {s.bullets?.length > 0 && (
                        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-1">
                          {s.bullets.map((b, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-secondary-500"
                            >
                              <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-600">
                                <Check
                                  className="h-3 w-3"
                                  strokeWidth={3}
                                  aria-hidden
                                />
                              </span>

                              <span className="leading-snug">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {s.note && (
                    <div className="mt-5 flex items-start gap-3 rounded-2xl bg-primary-50 px-4 py-3.5">
                      <Info
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-600"
                        aria-hidden
                      />

                      <p className="text-[0.8125rem] leading-relaxed text-secondary-900">
                        {s.note}
                      </p>
                    </div>
                  )}

                  <div className="mt-auto pt-6">
                    <Link
                      href="/appointment"
                      className={`inline-flex items-center gap-2.5 text-sm font-semibold text-secondary-500 hover:text-primary-600 ${focusRing}`}
                    >
                      Consult a specialist
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary-500 text-white group-hover:bg-primary-600">
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageWrapper>

      {/* ---------- Bottom CTA ---------- */}

      {cta && (
        <PageWrapper
          as="section"
          className="bg-white"
          paddingY="pb-16 sm:pb-20 lg:pb-24"
          containerClassName="mx-auto"
        >
          <div className="flex flex-col items-start justify-between gap-7 rounded-[2rem] bg-secondary-500 px-6 py-9 sm:px-10 sm:py-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {cta.title}
              </h3>

              <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/70">
                {cta.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointment"
                className="group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary-300 pl-6 pr-2 text-[0.9375rem] font-semibold text-secondary-500 hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
              >
                Book Appointment
                <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary-500/10">
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/25 px-6 text-[0.9375rem] font-semibold text-white hover:border-primary-300 hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call Us
              </a>
            </div>
          </div>
        </PageWrapper>
      )}
    </>
  );
};

export default ServiceDetailsPage;
