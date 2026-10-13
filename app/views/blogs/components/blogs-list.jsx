
"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import PageWrapper from "../../layouts/page-wrapper";
import BlogCard from "./blog-card";

const PAGE_SIZE = 6;

const DEFAULT_CONTENT = {
  searchLabel: "Search articles",
  searchPlaceholder: "Search articles",
  allLabel: "All",
  loadMore: "Load more articles",
  emptyTitle: "No articles found",
  emptyText: "Try a different word or choose another category.",
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

export default function BlogsList({ blogs = [], content = {} }) {
  const c = { ...DEFAULT_CONTENT, ...content };

  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Sort blogs by publication date, newest first.
  const sorted = useMemo(
    () =>
      [...blogs].sort(
        (a, b) =>
          new Date(b.card.publishedAt) - new Date(a.card.publishedAt),
      ),
    [blogs],
  );

  // Generate categories and their counts.
  const categories = useMemo(() => {
    const counts = new Map();

    sorted.forEach((blog) => {
      const name = blog.card.category;

      if (name) {
        counts.set(name, (counts.get(name) ?? 0) + 1);
      }
    });

    return [...counts.entries()].map(([name, count]) => ({
      name,
      count,
    }));
  }, [sorted]);

  // Filter by category and search query.
  const q = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      sorted.filter((blog) => {
        const { title, excerpt, category: blogCategory } = blog.card;

        const matchesCategory =
          category === "all" || blogCategory === category;

        const matchesSearch =
          !q ||
          [title, excerpt, blogCategory]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(q);

        return matchesCategory && matchesSearch;
      }),
    [sorted, category, q],
  );

  // Pagination.
  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  const pick = (value) => {
    setCategory(value);
    setVisible(PAGE_SIZE);
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
    setVisible(PAGE_SIZE);
  };

  const pill = (active) =>
    `inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${focusRing} ${
      active
        ? "border-secondary-500 bg-secondary-500 text-white"
        : "border-secondary-500/15 bg-white text-secondary-500 hover:border-primary-500/50 hover:bg-primary-50"
    }`;

  const countBadge = (active, count) => (
    <span
      className={`grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-xs ${
        active
          ? "bg-primary-300 text-secondary-500"
          : "bg-primary-50 text-secondary-900"
      }`}
    >
      {count}
    </span>
  );

  const resetFilters = () => {
    setQuery("");
    pick("all");
  };

  return (
    <PageWrapper
      as="section"
      className="bg-white"
      paddingY="py-12 sm:py-16 lg:py-20"
      containerClassName="mx-auto"
    >
      {/* Search and categories */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="relative order-1 lg:order-2 lg:w-80">
          <label htmlFor="blog-search" className="sr-only">
            {c.searchLabel}
          </label>

          <Search
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-600"
            aria-hidden="true"
          />

          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={handleSearch}
            placeholder={c.searchPlaceholder}
            autoComplete="off"
            className="h-12 w-full rounded-full border border-secondary-500/15 bg-primary-50/60 pl-14 pr-12 text-[0.9375rem] text-secondary-500 placeholder:text-secondary-900/60 focus-visible:border-primary-500 focus-visible:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 [&::-webkit-search-cancel-button]:hidden"
          />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setVisible(PAGE_SIZE);
              }}
              aria-label="Clear search"
              className={`absolute right-2.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-secondary-500 text-white transition-colors hover:bg-secondary-600 ${focusRing}`}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div
          role="group"
          aria-label="Filter articles by category"
          className="order-2 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 lg:order-1 [&::-webkit-scrollbar]:hidden"
        >
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => pick("all")}
            className={pill(category === "all")}
          >
            {c.allLabel}
            {countBadge(category === "all", sorted.length)}
          </button>

          {categories.map(({ name, count }) => (
            <button
              key={name}
              type="button"
              aria-pressed={category === name}
              onClick={() => pick(name)}
              className={pill(category === name)}
            >
              {name}
              {countBadge(category === name, count)}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p
        className="mt-6 text-sm text-secondary-900/75"
        role="status"
        aria-live="polite"
      >
        {filtered.length}{" "}
        {filtered.length === 1 ? "article" : "articles"}

        {category !== "all" && (
          <>
            {" "}in{" "}
            <span className="font-semibold text-secondary-500">
              {category}
            </span>
          </>
        )}

        {q && (
          <>
            {" "}for{" "}
            <span className="font-semibold text-secondary-500">
              &ldquo;{query.trim()}&rdquo;
            </span>
          </>
        )}
      </p>

      {/* Blog grid */}
      {filtered.length > 0 ? (
        <>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((blog) => (
              <li key={blog.id ?? blog.slug}>
                <BlogCard blog={blog} />
              </li>
            ))}
          </ul>

          {remaining > 0 && (
            <div className="mt-12 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setVisible((current) => current + PAGE_SIZE)
                }
                className="btn btn-lg btn-outline"
              >
                {c.loadMore}
              </button>

              <p className="text-sm text-secondary-900/75">
                Showing {shown.length} of {filtered.length}
              </p>
            </div>
          )}
        </>
      ) : (
        /* Empty state */
        <div className="mt-8 rounded-3xl bg-primary-50 px-6 py-16 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-primary-600">
            <Search className="h-6 w-6" aria-hidden="true" />
          </span>

          <p className="mt-5 text-xl font-semibold text-secondary-500">
            {c.emptyTitle}
          </p>

          <p className="mx-auto mt-2 max-w-sm text-[0.9375rem] text-secondary-900/75">
            {c.emptyText}
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="btn btn-md btn-primary mt-6"
          >
            Show all articles
          </button>
        </div>
      )}
    </PageWrapper>
  );
}
