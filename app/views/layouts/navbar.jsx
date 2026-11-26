import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  ChevronDown,
  CircleSmall,
  Images,
  Menu,
  MessageCircle,
  Newspaper,
  Quote,
  Stethoscope,
  X,
} from "lucide-react";

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
/* Navigation configuration                                            */
/* ------------------------------------------------------------------ */

const SERVICE_NAV_ITEMS = getServicesNav().map(
  ({ id, slug, title, description }) => ({
    id,
    icon: Stethoscope,
    label: title,
    desc: description,
    href: `/services/${slug}`,
  }),
);

const BRAND = {
  name: "Sarvam",
  href: "/",
};

const GOOGLE_REVIEWS_URL = "https://share.google/laDvFRsp8dPQFB5nO";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    columns: 2,
    itemsPerColumn: 4,
    viewAll: {
      label: "View all services",
      href: "/services",
    },
    children: SERVICE_NAV_ITEMS,
  },
  {
    label: "Our doctors",
    href: "/doctors",
  },
  {
    label: "More",
    children: [
      {
        label: "Blogs",
        desc: "Health insights & updates",
        href: "/blogs",
        icon: Newspaper,
      },
      {
        label: "Gallery",
        desc: "Our hospital & moments",
        href: "/gallery",
        icon: Images,
      },
      {
        label: "Google Reviews",
        desc: "Stories from our families",
        href: GOOGLE_REVIEWS_URL,
        icon: Quote,
        external: true,
      },
      {
        label: "FAQs",
        desc: "Answers to common questions",
        href: "/faq",
        icon: MessageCircle,
      },
    ],
  },
  {
    label: "Contact us",
    href: "/contact",
  },
];

const CTA = {
  label: "Call now",
  href: `tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`,
};

const SOCIALS = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: CONTACT_INFO.social.facebook,
  },
  {
    label: "X",
    icon: XIcon,
    href: CONTACT_INFO.social.twitter,
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: CONTACT_INFO.social.instagram,
  },
  {
    label: "YouTube",
    icon: YoutubeIcon,
    href: CONTACT_INFO.social.youtube,
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

/* ------------------------------------------------------------------ */
/* Small components                                                    */
/* ------------------------------------------------------------------ */

function Logo({ onClick }) {
  return (
    <Link
      href={BRAND.href}
      onClick={onClick}
      className={`flex items-center gap-2.5 ${focusRing}`}
    >
      <img
        src={BRAND_LOGO}
        alt={`${BRAND.name} logo`}
        className="w-14 lg:w-16"
      />
    </Link>
  );
}

function CtaButton({ onClick }) {
  return (
    <a
      href={CTA.href}
      onClick={onClick}
      className="btn w-full lg:w-fit btn-primary"
    >
      {CTA.label}

      <span className="btn-icon">
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </span>
    </a>
  );
}

const isActive = (item, activeHref) =>
  item.href === activeHref ||
  item.children?.some((child) => !child.external && child.href === activeHref);

/* ------------------------------------------------------------------ */
/* Utility                                                             */
/* ------------------------------------------------------------------ */

const chunk = (arr, size) => {
  const out = [];

  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }

  return out;
};

/* ------------------------------------------------------------------ */
/* Desktop navigation                                                  */
/* ------------------------------------------------------------------ */

function DesktopNav({ activeHref }) {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item, activeHref);

          const base = `relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[0.9375rem] font-medium transition-colors hover:bg-white/70 hover:text-secondary-500 ${focusRing} ${
            active ? "text-secondary-500" : "text-secondary-900"
          }`;

          const perColumn = item.itemsPerColumn;

          const visibleChildren =
            item.children && perColumn && item.columns
              ? item.children.slice(0, perColumn * item.columns)
              : item.children;

          const groups = visibleChildren
            ? perColumn
              ? chunk(visibleChildren, perColumn)
              : [visibleChildren]
            : [];

          const multi = groups.length > 1;

          return (
            <li key={item.label} className="group relative">
              {item.href ? (
                <Link href={item.href} className={base}>
                  {item.label}
                </Link>
              ) : (
                <button type="button" className={base}>
                  {item.label}

                  {item.children && (
                    <ChevronDown
                      className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden
                    />
                  )}
                </button>
              )}

              {item.children && (
                <div className="invisible absolute left-0 top-full z-10 translate-y-1 pt-4 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
                  <div
                    className={`relative max-w-[calc(100vw-2rem)] rounded-3xl border border-secondary-500/8 bg-white p-2.5 shadow-[0_30px_70px_-25px_rgba(2,53,118,0.35)] ${
                      multi ? "" : "w-[21rem]"
                    }`}
                    style={
                      multi
                        ? {
                            width: `${groups.length * (item.columnWidth ?? 23)}rem`,
                          }
                        : undefined
                    }
                  >
                    <span
                      aria-hidden
                      className="absolute -top-1.5 left-6 h-3 w-3 rotate-45 border-l border-t border-secondary-500/8 bg-white"
                    />

                    <div
                      className={
                        multi ? "grid divide-x divide-secondary-500/8" : ""
                      }
                      style={
                        multi
                          ? {
                              gridTemplateColumns: `repeat(${groups.length}, minmax(0, 1fr))`,
                            }
                          : undefined
                      }
                    >
                      {groups.map((group, gi) => (
                        <ul
                          key={gi}
                          className={`space-y-0.5 ${
                            multi ? (gi === 0 ? "pr-1.5" : "pl-1.5") : ""
                          }`}
                        >
                          {group.map((child) => {
                            const Icon = child.icon;

                            const childActive =
                              !child.external && child.href === activeHref;

                            const className =
                              "group/item flex items-center gap-3.5 rounded-2xl p-3 transition-colors hover:bg-primary-50 focus-visible:bg-primary-50 focus-visible:outline-none";

                            const content = (
                              <>
                                {Icon && (
                                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-50 text-secondary-500 transition-colors group-hover/item:bg-secondary-500 group-hover/item:text-white group-focus-visible/item:bg-secondary-500 group-focus-visible/item:text-white">
                                    <Icon
                                      className="h-[18px] w-[18px]"
                                      aria-hidden
                                    />
                                  </span>
                                )}

                                <span className="min-w-0 flex-1">
                                  <span
                                    className={`block text-[0.9375rem] font-semibold leading-tight ${
                                      childActive
                                        ? "text-primary-500"
                                        : "text-secondary-500"
                                    }`}
                                  >
                                    {child.label}
                                  </span>

                                  {child.desc && (
                                    <span className="mt-0.5 block truncate text-[0.8125rem] leading-snug text-secondary-900">
                                      {child.desc}
                                    </span>
                                  )}
                                </span>

                                <ArrowUpRight
                                  className="h-4 w-4 shrink-0 -translate-x-1 text-primary-500 opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100"
                                  aria-hidden
                                />
                              </>
                            );

                            return (
                              <li key={child.label}>
                                {child.external ? (
                                  <a
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={className}
                                  >
                                    {content}
                                  </a>
                                ) : (
                                  <Link href={child.href} className={className}>
                                    {content}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      ))}
                    </div>

                    {item.viewAll && (
                      <Link
                        href={item.viewAll.href}
                        className="mt-2 flex items-center justify-between rounded-2xl bg-primary-50 px-4 py-3.5 text-sm font-semibold text-secondary-500 transition-colors hover:text-primary-500 focus-visible:text-primary-500 focus-visible:outline-none"
                      >
                        {item.viewAll.label}

                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile drawer                                                        */
/* ------------------------------------------------------------------ */

function MobileDrawer({ open, onClose, activeHref, closeRef }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  const stagger = (i) => ({
    transitionDelay: open ? `${140 + i * 45}ms` : "0ms",
  });

  const itemClass = `transition duration-300 motion-reduce:transition-none ${
    open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
  }`;

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${
        open ? "visible" : "invisible delay-300"
      } transition-[visibility]`}
    >
      {/* Overlay */}

      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-y-0 left-0 flex w-[75%] max-w-sm flex-col bg-white shadow-[0_0_60px_-10px_rgba(2,53,118,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-secondary-500/8 px-5">
          <Logo onClick={onClose} />

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className={`grid h-10 w-10 place-items-center rounded-xl bg-secondary-500 text-white transition-colors hover:bg-secondary-600 ${focusRing}`}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-3"
        >
          <ul>
            {NAV_ITEMS.map((navItem, i) => {
              const hasChildren = !!navItem.children;

              const isOpen = expanded === navItem.label;

              const active = isActive(navItem, activeHref);

              const labelClass = `flex-1 py-4 text-[1.0625rem] font-medium ${
                active ? "text-primary-500" : "text-secondary-500"
              }`;

              return (
                <li
                  key={navItem.label}
                  style={stagger(i)}
                  className={`border-b border-secondary-500/8 ${itemClass}`}
                >
                  <div className="flex items-center">
                    {navItem.href ? (
                      <Link
                        href={navItem.href}
                        onClick={onClose}
                        className={`${labelClass} ${focusRing}`}
                      >
                        {navItem.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(isOpen ? null : navItem.label)
                        }
                        className={`${labelClass} text-left ${focusRing}`}
                      >
                        {navItem.label}
                      </button>
                    )}

                    {hasChildren && (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={`${
                          isOpen ? "Collapse" : "Expand"
                        } ${navItem.label}`}
                        onClick={() =>
                          setExpanded(isOpen ? null : navItem.label)
                        }
                        className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${focusRing} ${
                          isOpen
                            ? "bg-primary-500 text-white"
                            : "bg-secondary-500 text-white"
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="overflow-hidden" aria-hidden={!isOpen}>
                        {navItem.children.map((child) => {
                          const childClass = `flex items-center gap-3 py-3 pl-1 text-[0.9375rem] text-secondary-900 transition-colors hover:text-secondary-500 ${focusRing}`;

                          return (
                            <li key={child.label}>
                              {child.external ? (
                                <a
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={onClose}
                                  tabIndex={isOpen ? 0 : -1}
                                  className={childClass}
                                >
                                  <CircleSmall className="h-4 w-4 text-primary-500" />
                                  {child.label}
                                </a>
                              ) : (
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  tabIndex={isOpen ? 0 : -1}
                                  className={childClass}
                                >
                                  <CircleSmall className="h-4 w-4 text-primary-500" />
                                  {child.label}
                                </Link>
                              )}
                            </li>
                          );
                        })}

                        <li aria-hidden className="h-2" />
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 space-y-5 border-t border-secondary-500/8 bg-primary-50/60 px-5 pb-6 pt-5">
          <CtaButton onClick={onClose} />

          <div className="flex items-center justify-center gap-4">
            <ul className="flex gap-2">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`grid h-9 w-9 place-items-center rounded-lg border border-secondary-500/12 bg-white text-secondary-500 transition-colors hover:border-primary-500 hover:text-primary-500 ${focusRing}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

export default function Navbar({ activeHref = "/" }) {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const menuBtnRef = useRef(null);

  const closeBtnRef = useRef(null);

  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  // Sticky style change on scroll

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lock, Escape to close, close on desktop resize

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKey = (e) => e.key === "Escape" && close();

    const onResize = () => window.innerWidth >= 1024 && close();

    window.addEventListener("keydown", onKey);

    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", onKey);

      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Focus management

  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
    } else if (wasOpen.current) {
      menuBtnRef.current?.focus();
    }

    wasOpen.current = open;
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <PageWrapper
          as="header"
          className={`border-b transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none ${
            scrolled
              ? "border-secondary-500/10 bg-primary-50/70 backdrop-blur-2xl backdrop-saturate-150"
              : "border-transparent bg-transparent"
          }`}
          paddingY="py-0"
        >
          <div className="mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[1fr_auto] items-center lg:h-20 lg:grid-cols-[1fr_auto_1fr]">
            <div className="justify-self-start">
              <Logo />
            </div>

            <DesktopNav activeHref={activeHref} />

            <div className="flex items-center justify-self-end">
              <div className="hidden xl:block">
                <CtaButton />
              </div>

              <button
                ref={menuBtnRef}
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                className={`grid h-11 w-11 place-items-center rounded-full border border-secondary-500/15 bg-white/60 text-secondary-500 transition-colors hover:border-secondary-500/40 lg:hidden ${focusRing}`}
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </PageWrapper>
      </div>

      <MobileDrawer
        open={open}
        onClose={close}
        activeHref={activeHref}
        closeRef={closeBtnRef}
      />
    </>
  );
}
