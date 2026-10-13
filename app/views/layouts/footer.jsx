import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import PageWrapper from "./page-wrapper";
import { BRAND_LOGO, CONTACT_INFO } from "@/app/const";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/app/icons/social-icons";
import { getServicesNav } from "@/app/data/services";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* ------------------------------------------------------------------ */

const serviceLinks = getServicesNav().map(({ slug, title }) => ({
  label: title,
  href: `/services/${slug}`,
}));

const DEFAULT_CONTENT = {
  brand: {
    name: "Sarvam",
    href: "/",
    heading: "About us",
    description:
      "A hospital dedicated to the health of women and children, with caring specialists and round-the-clock emergency care.",
  },
  socials: [
    {
      label: "Facebook",
      icon: FacebookIcon,
      href: CONTACT_INFO.social.facebook,
    },
    { label: "X", icon: XIcon, href: CONTACT_INFO.social.twitter },
    {
      label: "Instagram",
      icon: InstagramIcon,
      href: CONTACT_INFO.social.instagram,
    },
    { label: "YouTube", icon: YoutubeIcon, href: CONTACT_INFO.social.youtube },
  ],
  columns: [
    {
      title: "Quick links",
      links: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Our doctors", href: "/doctors" },
        { label: "Gallery", href: "/gallery" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "FAQs", href: "/faq" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: serviceLinks,
    },
  ],
  contact: {
    title: "Get in touch",
    items: [
      {
        icon: MapPin,
        text: CONTACT_INFO.address,
        href: CONTACT_INFO.mapDirectionUrl,
      },
      {
        icon: Phone,
        text: CONTACT_INFO.phone,
        href: `tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`,
      },
      {
        icon: Mail,
        text: CONTACT_INFO.email,
        href: `mailto:${CONTACT_INFO.email}`,
      },
      { icon: Clock, text: "Open 24/7, every day" },
    ],
  },
  legal: [
    { label: "Support", href: "/support" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms & conditions", href: "/terms" },
  ],
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

/* Heading with a hairline separator and a short teal accent on it */
function ColumnHeading({ children }) {
  return (
    <h3 className="relative border-b border-secondary-500/15 pb-4 text-base font-semibold text-secondary-500 after:absolute after:-bottom-px after:left-0 after:h-0.5 after:w-12 after:rounded-full after:bg-primary-500">
      {children}
    </h3>
  );
}

export default function Footer({ content }) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[#F3F5F8] to-[#E9EDF2] text-secondary-500">
      {/* Hairline of teal light along the top edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
      />

      {/* ---------- Columns ---------- */}
      <PageWrapper as="div">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.4fr] lg:gap-10 xl:gap-14">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <ColumnHeading>{c.brand.heading}</ColumnHeading>

            <Link
              href={c.brand.href}
              aria-label={c.brand.name}
              className={`mt-6 inline-block rounded-full ${focusRing}`}
            >
              <img
                src={BRAND_LOGO}
                alt=""
                className="h-16 w-16 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-secondary-500/75">
              {c.brand.description}
            </p>

            <ul className="mt-6 flex gap-2.5">
              {c.socials.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`grid h-10 w-10 place-items-center rounded-xl border border-secondary-500/10 bg-white text-secondary-500 shadow-sm transition-colors hover:border-primary-500 hover:text-primary-600 ${focusRing}`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="col-span-2 grid grid-cols-2 gap-x-5 sm:gap-x-8 lg:col-span-2 lg:contents">
            {c.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <ColumnHeading>{col.title}</ColumnHeading>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`group flex items-center text-[0.9375rem] text-secondary-500/75 transition-colors hover:text-primary-600 ${focusRing}`}
                      >
                        <ChevronRight
                          className="h-3.5 w-0 shrink-0 text-primary-500 opacity-0 transition-all duration-200 group-hover:w-3.5 group-hover:opacity-100 motion-reduce:transition-none"
                          aria-hidden
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <ColumnHeading>{c.contact.title}</ColumnHeading>
            <ul className="mt-2">
              {c.contact.items.map(({ icon: Icon, text, href }) => (
                <li
                  key={text}
                  className="flex items-start gap-3.5 py-2 text-[0.9375rem] leading-snug text-secondary-500/80"
                >
                  <Icon
                    className="mt-1 h-4 w-4 shrink-0 text-primary-600"
                    aria-hidden
                  />
                  {href ? (
                    <a
                      href={href}
                      className={`transition-colors hover:text-primary-600 ${focusRing}`}
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageWrapper>

      {/* ---------- Bottom bar (slightly darker band) ---------- */}
      <div className="border-t border-secondary-500/10 bg-secondary-500/[0.04]">
        <PageWrapper
          as="div"
          paddingY="py-5"
          containerClassName="flex flex-col items-center gap-3 text-center text-sm text-secondary-500/70 sm:flex-row sm:justify-between sm:text-left"
        >
          <p>
            © {new Date().getFullYear()} {c.brand.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center">
            {c.legal.map((l) => (
              <li
                key={l.label}
                className="border-l border-secondary-500/15 px-4 first:border-l-0 first:pl-0 last:pr-0"
              >
                <Link
                  href={l.href}
                  className={`transition-colors hover:text-primary-600 ${focusRing}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </PageWrapper>
      </div>
    </footer>
  );
}
