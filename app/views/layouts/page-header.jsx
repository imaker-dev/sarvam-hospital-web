"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PageWrapper from "./page-wrapper";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const formatLabel = (segment) =>
  decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const renderTitle = (title, highlight) => {
  if (!highlight?.trim()) return title;

  const match = new RegExp(`\\b${escapeRegExp(highlight.trim())}\\b`, "i").exec(
    title,
  );

  if (!match) return title;

  const start = match.index;
  const end = start + match[0].length;

  return (
    <>
      {title.slice(0, start)}
      <span className="text-primary-600">{title.slice(start, end)}</span>
      {title.slice(end)}
    </>
  );
};

const getBreadcrumbs = (pathname, title) => {
  const segments = pathname.split("/").filter(Boolean);

  return [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;

      return {
        label: index === segments.length - 1 ? title : formatLabel(segment),
        href,
      };
    }),
  ];
};

export default function PageHeader({ title, highlight, className = "" }) {
  const pathname = usePathname();
  const crumbs = getBreadcrumbs(pathname, title);

  return (
    <PageWrapper
      as="header"
      paddingY="py-0"
      className={`relative isolate overflow-hidden border-b border-secondary-500/10 bg-gradient-to-br from-primary-50 via-white to-secondary-50 ${className}`}
      containerClassName="relative pb-14 pt-32 text-center sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 -z-10 h-64 w-64 rounded-full border border-primary-500/15 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full border border-secondary-500/10 sm:h-80 sm:w-80"
      >
        <span className="absolute bottom-[14%] left-[12%] h-3 w-3 rounded-full bg-primary-500/50" />
      </div>

      {/* Title */}
      <h1 className="mx-auto max-w-4xl text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-secondary-500 sm:text-6xl lg:text-7xl">
        {renderTitle(title, highlight)}
      </h1>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mt-5 sm:mt-6">
        <ol className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[0.9375rem] sm:text-base">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <li
                key={`${crumb.label}-${index}`}
                className="flex items-center gap-2.5"
              >
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-secondary-900/70"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={`font-medium text-secondary-500 transition-colors hover:text-primary-600 ${focusRing}`}
                  >
                    {crumb.label}
                  </Link>
                )}

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="text-secondary-500/35"
                  >
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </PageWrapper>
  );
}
