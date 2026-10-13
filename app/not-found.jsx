
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageWrapper from "./views/layouts/page-wrapper";
import { CONTACT_INFO } from "./const";

export const metadata = { title: "Page not found" };

/* ------------------------------------------------------------------ */
/* Centralized content. Edit here, the UI follows.                     */
/* Place this file at app/not-found.jsx (Next.js app router).          */
/* ------------------------------------------------------------------ */

const CONTENT = {
  title: "We can't find that page",
  description:
    "The page you're looking for may have moved or no longer exists. Let's get you back to caring for your family.",
  primaryCta: { label: "Back to home", href: "/" },

  emergency: {
    text: "Need urgent care? Call us 24/7 on",
    phone: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
  },
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

export default function NotFound() {
  const c = CONTENT;

  return (
    <PageWrapper
      as="section"
      className="flex min-h-[100dvh] items-center bg-primary-50"
      paddingY="py-0"
      containerClassName="w-full pb-16 pt-28 text-center lg:pt-24"
    >
      <div className="mx-auto max-w-2xl">
        {/* 404 */}
        <p
          aria-hidden="true"
          className="flex select-none items-center justify-center text-[7.5rem] font-semibold leading-none tracking-[-0.04em] text-secondary-500 sm:text-[10rem] lg:text-[12rem]"
        >
          <span>4</span>
          <span className="text-primary-500">0</span>
          <span>4</span>
        </p>

        {/* Heading */}
        <h1 className="mt-8 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-secondary-500 sm:text-4xl xl:text-[2.75rem]">
          {c.title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-[1.7] text-secondary-900/75 sm:text-lg">
          {c.description}
        </p>

        {/* Primary CTA */}
        <div className="mt-9 flex items-center justify-center">
          <Link
            href={c.primaryCta.href}
            className="btn btn-lg btn-primary"
          >
            {c.primaryCta.label}
            <span className="btn-icon">
              <ArrowRight size={18} aria-hidden />
            </span>
          </Link>
        </div>

        {/* Emergency contact */}
        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-secondary-500/10 pt-8 text-sm text-secondary-900/75">
          <Phone
            className="h-4 w-4 text-primary-600"
            aria-hidden
          />

          {c.emergency.text}

          <a
            href={c.emergency.href}
            className={`font-semibold text-secondary-500 transition-colors hover:text-primary-600 ${focusRing}`}
          >
            {c.emergency.phone}
          </a>
        </p>
      </div>
    </PageWrapper>
  );
}
