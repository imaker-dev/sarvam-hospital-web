
import Link from "next/link";
import { ArrowUpRight, Clock, ImageIcon } from "lucide-react";

const DEFAULT_BASE_PATH = "/blogs";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

export const formatDate = (iso) => {
  if (!iso) return "";

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

export function Avatar({ name = "", className = "" }) {
  const initial = name
    .replace(/^(dr|mr|mrs|ms)\.?\s+/i, "")
    .trim()
    .charAt(0)
    .toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={`grid place-items-center rounded-full bg-primary-100 font-semibold text-secondary-500 ${className}`}
    >
      {initial || "?"}
    </span>
  );
}

export default function BlogCard({
  blog,
  basePath = DEFAULT_BASE_PATH,
}) {
  const { slug, card = {} } = blog;

  const {
    title,
    excerpt,
    image,
    category,
    author,
    publishedAt,
    readTime,
  } = card;

  const formattedDate = formatDate(publishedAt);
  const href = `${basePath}/${slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-secondary-500/10 bg-white transition-[border-color,box-shadow] duration-300 hover:border-primary-500/40 hover:shadow-[0_30px_60px_-38px_rgba(2,53,118,0.3)]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-50">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center text-primary-500/40"
          >
            <ImageIcon className="h-10 w-10" />
          </span>
        )}

        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-secondary-500 backdrop-blur-md">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-secondary-900/70 sm:text-[0.8125rem]">
          {formattedDate && (
            <time dateTime={publishedAt}>{formattedDate}</time>
          )}

          {formattedDate && readTime && (
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-primary-500"
            />
          )}

          {readTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock
                className="h-3.5 w-3.5 text-primary-600"
                aria-hidden="true"
              />
              {readTime}
            </span>
          )}
        </p>

        <h3 className="mt-3 line-clamp-2 text-xl font-semibold leading-snug tracking-tight text-secondary-500 transition-colors group-hover:text-primary-600">
          <Link
            href={href}
            className={`after:absolute after:inset-0 ${FOCUS_RING}`}
          >
            {title}
          </Link>
        </h3>

        {excerpt && (
          <p className="mt-3 line-clamp-3 text-[0.9375rem] leading-relaxed text-secondary-900/75">
            {excerpt}
          </p>
        )}

        {/* Author and action icon */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div className="flex min-w-0 items-center gap-3">
            <Avatar
              name={author}
              className="h-10 w-10 shrink-0 text-sm"
            />

            <p className="truncate text-sm font-semibold text-secondary-500">
              {author || "Editorial Team"}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary-500 text-white transition-colors group-hover:bg-primary-600"
          >
            <ArrowUpRight className="h-[18px] w-[18px]" />
          </span>
        </div>
      </div>
    </article>
  );
}
