"use client";

import { useEffect, useId, useMemo, useState } from "react";

import Link from "next/link";
import { ArrowUpRight, Phone, Search, X } from "lucide-react";

import PageWrapper from "../../layouts/page-wrapper";

import { FAQS } from "@/app/data/faqs";

import { APPOINTMENT_URL, CONTACT_INFO } from "@/app/const";

import FaqItem from "./faq-item";

/* ------------------------------------------------------------------ */
/* FAQ page body: search + category navigation + accordion.            */
/* Questions live in ./faq-data.js.                                    */
/* Deep links: /faq#pregnancy, /faq#newborn, /faq#child-care           */
/* ------------------------------------------------------------------ */

const DEFAULT_CONTENT = {
  searchLabel: "Search questions",
  searchPlaceholder: "Search all questions",

  help: {
    title: "Still have questions?",
    text: "Our care team is available 24/7 to help you.",
    phone: CONTACT_INFO.phone,
    phoneHref: `tel:${CONTACT_INFO.phone}`,
    cta: { label: "Book an appointment", href: APPOINTMENT_URL },
  },

  disclaimer:
    "This information is for general guidance and does not replace advice from your doctor. In an emergency, call us or come to the hospital straight away.",
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

/* ---------- helpers ---------- */

const withIds = (cat) =>
  cat.items.map((item, i) => ({
    ...item,
    id: `${cat.key}-${i}`,
    n: i + 1,
  }));

const matches = (item, q) =>
  [item.question, ...item.answer].join(" ").toLowerCase().includes(q);

/* What to show: the active category, or every category filtered by search */
function getGroups(categories, activeKey, q) {
  if (!q) {
    const cat =
      categories.find((c) => c.key === activeKey) ?? categories[0];

    return cat ? [{ ...cat, items: withIds(cat) }] : [];
  }

  return categories
    .map((cat) => ({
      ...cat,
      items: withIds(cat).filter((item) => matches(item, q)),
    }))
    .filter((g) => g.items.length > 0);
}

/* ---------- help card ---------- */

function HelpCard({ help, className = "" }) {
  return (
    <div
      className={`rounded-3xl bg-secondary-500 p-6 text-white sm:p-7 ${className}`}
    >
      <h3 className="text-xl font-semibold tracking-tight">
        {help.title}
      </h3>

      <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/70">
        {help.text}
      </p>

      <a
        href={help.phoneHref}
        className={`mt-5 flex items-center gap-3 rounded-full ${focusRing}`}
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-300 text-secondary-500">
          <Phone className="h-[18px] w-[18px]" aria-hidden />
        </span>

        <span className="font-semibold">{help.phone}</span>
      </a>

      <Link
        href={help.cta.href}
        className={`group mt-6 inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary-300 pl-6 pr-2 text-[0.9375rem] font-semibold text-secondary-500 hover:bg-primary-400 ${focusRing}`}
      >
        {help.cta.label}

        <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary-500/10">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </Link>
    </div>
  );
}

/* ---------- section ---------- */

export default function FaqSection({ categories = FAQS, content }) {
  const c = { ...DEFAULT_CONTENT, ...content };
  const baseId = useId();

  const [activeKey, setActiveKey] = useState(
    () => categories[0]?.key ?? ""
  );

  const [query, setQuery] = useState("");

  const [openId, setOpenId] = useState(
    () => (categories[0] ? `${categories[0].key}-0` : null)
  );

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const groups = useMemo(
    () => getGroups(categories, activeKey, q),
    [categories, activeKey, q]
  );

  const resultCount = groups.reduce(
    (sum, g) => sum + g.items.length,
    0
  );

  const active =
    categories.find((cat) => cat.key === activeKey) ?? categories[0];

  /* Open /faq#newborn directly on that category */
  useEffect(() => {
    const syncCategoryFromHash = () => {
      const key = window.location.hash.slice(1);

      if (categories.some((cat) => cat.key === key)) {
        setActiveKey(key);
        setOpenId(`${key}-0`);
        setQuery("");
      }
    };

    syncCategoryFromHash();

    window.addEventListener("hashchange", syncCategoryFromHash);

    return () => {
      window.removeEventListener("hashchange", syncCategoryFromHash);
    };
  }, [categories]);

  const selectCategory = (key) => {
    setActiveKey(key);
    setQuery("");
    setOpenId(`${key}-0`);

    window.history.replaceState(null, "", `#${key}`);
  };

  const onSearch = (value) => {
    setQuery(value);

    const next = getGroups(
      categories,
      activeKey,
      value.trim().toLowerCase()
    );

    setOpenId(next[0]?.items[0]?.id ?? null);
  };

  const clearSearch = () => {
    setQuery("");
    setOpenId(`${activeKey}-0`);
  };

  return (
    <PageWrapper
      as="section"
      className="bg-white"
      paddingY="py-10 sm:py-14 lg:py-20"
      containerClassName="mx-auto grid gap-6 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[21rem_minmax(0,1fr)] xl:gap-16"
    >
      {/* ---------- Sidebar: search, categories, help card ---------- */}

      <aside className="lg:sticky lg:top-28">
        <div className="relative">
          <label htmlFor={`${baseId}-search`} className="sr-only">
            {c.searchLabel}
          </label>

          <Search
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-600"
            aria-hidden
          />

          <input
            id={`${baseId}-search`}
            type="search"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            placeholder={c.searchPlaceholder}
            autoComplete="off"
            className={`h-14 w-full rounded-full border border-secondary-500/10 bg-primary-50/60 pl-14 pr-12 text-[0.9375rem] text-secondary-500 placeholder:text-secondary-900/70 focus-visible:border-primary-500 focus-visible:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 [&::-webkit-search-cancel-button]:hidden`}
          />

          {searching && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              className={`absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-secondary-500 text-white hover:bg-secondary-600 ${focusRing}`}
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>

        {/* Desktop category list */}

        <nav
          aria-label="FAQ categories"
          className="mt-6 hidden flex-col gap-2 lg:flex"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const on = !searching && cat.key === activeKey;

            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => selectCategory(cat.key)}
                aria-current={on ? "true" : undefined}
                className={`flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left ${focusRing} ${
                  on
                    ? "border-secondary-500 bg-secondary-500 text-white shadow-[0_20px_40px_-26px_rgba(2,53,118,0.35)]"
                    : "border-secondary-500/10 bg-white text-secondary-500 hover:border-secondary-500/25"
                }`}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                    on
                      ? "bg-primary-300 text-secondary-500"
                      : "bg-primary-50 text-primary-600"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>

                <span className="flex-1 font-semibold leading-tight">
                  {cat.label}
                </span>

                <span
                  className={`grid h-6 min-w-6 place-items-center rounded-full px-1.5 text-xs font-semibold ${
                    on
                      ? "bg-white/15 text-white"
                      : "bg-primary-50 text-secondary-900"
                  }`}
                >
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </nav>

        <HelpCard help={c.help} className="mt-6 hidden lg:block" />
      </aside>

      {/* ---------- Main ---------- */}

      <div className="min-w-0">
        {/* Mobile category bar */}

        {!searching && (
          <nav
            aria-label="FAQ categories"
            className="sticky top-[4.5rem] z-30 -mx-5 border-b border-secondary-500/10 bg-white/90 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:hidden"
          >
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const on = cat.key === activeKey;

                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => selectCategory(cat.key)}
                    aria-current={on ? "true" : undefined}
                    className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold ${focusRing} ${
                      on
                        ? "border-secondary-500 bg-secondary-500 text-white"
                        : "border-secondary-500/10 bg-white text-secondary-500"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        on ? "text-primary-300" : "text-primary-600"
                      }`}
                      aria-hidden
                    />

                    {cat.short}

                    <span
                      className={`grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-xs ${
                        on
                          ? "bg-primary-300 text-secondary-500"
                          : "bg-primary-50 text-secondary-900"
                      }`}
                    >
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}

        {/* Heading */}

        <div className="mt-6 lg:mt-0">
          {searching ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2
                className="text-2xl font-semibold tracking-tight text-secondary-500 sm:text-3xl"
                aria-live="polite"
              >
                {resultCount} {resultCount === 1 ? "result" : "results"} for
                {" "}“{query.trim()}”
              </h2>

              <button
                type="button"
                onClick={clearSearch}
                className={`text-sm font-semibold text-primary-600 hover:text-secondary-500 ${focusRing}`}
              >
                Clear search
              </button>
            </div>
          ) : (
            active && (
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                  <active.icon className="h-6 w-6" aria-hidden />
                </span>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-secondary-500 sm:text-3xl">
                    {active.label}
                  </h2>

                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-secondary-900 sm:text-base">
                    {active.intro}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Questions */}

        {groups.length > 0 ? (
          <div className="mt-7 space-y-9">
            {groups.map((group) => (
              <div key={group.key}>
                {searching && (
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-secondary-900">
                    <group.icon
                      className="h-4 w-4 text-primary-600"
                      aria-hidden
                    />
                    {group.label}
                  </p>
                )}

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <FaqItem
                      key={item.id}
                      item={item}
                      open={openId === item.id}
                      onToggle={() =>
                        setOpenId(openId === item.id ? null : item.id)
                      }
                      buttonId={`${baseId}-button-${item.id}`}
                      panelId={`${baseId}-panel-${item.id}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-3xl bg-primary-50 px-6 py-14 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-primary-600">
              <Search className="h-6 w-6" aria-hidden />
            </span>

            <p className="mt-5 text-xl font-semibold text-secondary-500">
              No questions match “{query.trim()}”
            </p>

            <p className="mx-auto mt-2 max-w-sm text-[0.9375rem] text-secondary-900">
              Try a different word, or ask our care team directly. We are
              here 24/7.
            </p>

            <button
              type="button"
              onClick={clearSearch}
              className="btn btn-md btn-primary mt-6"
            >
              Clear search
            </button>
          </div>
        )}

        <p className="mt-9 text-sm leading-relaxed text-secondary-900">
          {c.disclaimer}
        </p>

        {/* Help card on mobile and tablet */}

        <HelpCard help={c.help} className="mt-8 lg:hidden" />
      </div>
    </PageWrapper>
  );
}