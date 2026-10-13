import { ArrowUpRight, Baby, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageWrapper from "./page-wrapper";
import { BRAND_LOGO, CONTACT_INFO } from "@/app/const";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/app/icons/social-icons";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* ------------------------------------------------------------------ */
const DEFAULT_CONTENT = {
  brand: {
    name: "Sarvam",
    href: "/",
    description:
      "A hospital dedicated to the health of women and children, with caring specialists and round-the-clock emergency care.",
  },
  cta: {
    title: "Schedule your consultation today",
    description: "We are open 24/7, every day of the year.",
    label: "Book an appointment",
    href: `${CONTACT_INFO.phone}`,
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
        { label: "Blog", href: "/blog" },
        { label: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Maternity care", href: "/services/maternity" },
        { label: "Prenatal scans", href: "/services/prenatal" },
        { label: "Gynecology", href: "/services/gynecology" },
        { label: "Fertility & IVF", href: "/services/ivf" },
        { label: "Pediatrics", href: "/services/pediatrics" },
      ],
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

const linkCls = `text-[0.9375rem] text-white/70 hover:text-primary-500 ${focusRing}`;
const headingCls = "text-base font-semibold text-white";

function Logo({ brand }) {
  return (
    <Link
      href={brand.href}
      className={`inline-flex items-center gap-2.5 ${focusRing}`}
    >
      <img src={BRAND_LOGO} alt="logo" className="w-14" />
    </Link>
  );
}

export default function Footer({ content }) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <PageWrapper as="footer" className="bg-secondary-500">
      {/* ---------- Link grid ---------- */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.4fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo brand={c.brand} />
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-white/70">
            {c.brand.description}
          </p>

          <ul className="mt-6 flex gap-3">
            {c.socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className={`grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white hover:border-primary-500 hover:text-primary-500 ${focusRing}`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {c.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className={headingCls}>{col.title}</h3>
            <ul className="mt-5 space-y-3.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkCls}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className={headingCls}>{c.contact.title}</h3>
          <ul className="mt-5 space-y-4">
            {c.contact.items.map(({ icon: Icon, text, href }) => (
              <li
                key={text}
                className="flex items-start gap-3 text-[0.9375rem] leading-snug text-white/70"
              >
                <Icon
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary-500"
                  aria-hidden
                />
                {href ? (
                  <a
                    href={href}
                    className={`hover:text-primary-500 ${focusRing}`}
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

      {/* ---------- Bottom bar ---------- */}
      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
        <p>
          © {new Date().getFullYear()} {c.brand.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {c.legal.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={`hover:text-white ${focusRing}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}
