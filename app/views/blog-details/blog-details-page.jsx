"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  ImageIcon,
  Info,
  Link2,
  List,
  Mail,
  MessageCircle,
  Phone,
  Share2,
  Tag,
} from "lucide-react";
import { CONTACT_INFO } from "@/app/const";
import "../../styles/additional-styles/blog-content.css";
import PageWrapper from "../layouts/page-wrapper";
import { Avatar, formatDate } from "../blogs/components/blog-card";
import SectionHeader, { Eyebrow } from "../layouts/section-header";

/* ------------------------------------------------------------------ */
/* Blog details page:  <BlogDetailsPage blog={blog} basePath="/blogs" /> */
/*                                                                     */
/* Uses blog.details: hero, content (HTML), cta, faqs, tags, relatedBlogs. */
/* The HTML `content` is rendered inside .blog-content and styled by   */
/* blog-content.css. Only render HTML you control (your own editor).   */
/* The "On this page" list is built from the <h2> tags in the content. */
/* ------------------------------------------------------------------ */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CC6B70]";

/* keeps "+" so international numbers dial correctly */
const telHref = (p = "") => `tel:${String(p).replace(/[^\d+]/g, "")}`;

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const stripTags = (s) =>
  s
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();

/* Adds an id to every <h2> and returns the headings for the table of contents */
function prepareContent(html = "") {
  const headings = [];
  const used = new Set();

  const out = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attrs, inner) => {
      const text = stripTags(inner);
      const existing = /id\s*=\s*["']([^"']+)["']/i.exec(attrs);
      const base = existing ? existing[1] : slugify(text) || "section";

      let id = base;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);

      headings.push({ id, text });
      return existing ? match : `<h2${attrs} id="${id}">${inner}</h2>`;
    },
  );

  return { html: out, headings };
}

/* ---------- small pieces ---------- */
function ShareCard({ title, className = "" }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setUrl(window.location.href.split("#")[0]);
    setCanShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url });
    } catch {}
  };

  const btn = `grid h-11 w-11 place-items-center rounded-full border border-[#35183F]/12 bg-white text-[#35183F] transition-colors hover:border-[#CC6B70] hover:text-[#CC6B70] ${focusRing}`;

  return (
    <div
      className={`rounded-3xl border border-[#35183F]/8 bg-white p-5 ${className}`}
    >
      <p className="text-sm font-semibold text-[#35183F]">Share this article</p>
      <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={copy}
          aria-label="Copy link"
          className={btn}
        >
          {copied ? (
            <Check className="h-[18px] w-[18px] text-[#CC6B70]" aria-hidden />
          ) : (
            <Link2 className="h-[18px] w-[18px]" aria-hidden />
          )}
        </button>
        {canShare && (
          <button
            type="button"
            onClick={nativeShare}
            aria-label="Share"
            className={btn}
          >
            <Share2 className="h-[18px] w-[18px]" aria-hidden />
          </button>
        )}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className={btn}
        >
          <MessageCircle className="h-[18px] w-[18px]" aria-hidden />
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
          aria-label="Share by email"
          className={btn}
        >
          <Mail className="h-[18px] w-[18px]" aria-hidden />
        </a>
        <span role="status" className="ml-1 text-sm text-[#CC6B70]">
          {copied ? "Link copied" : ""}
        </span>
      </div>
    </div>
  );
}

/* Plum call-to-action card, filled from details.cta */
function CtaCard({ cta, className = "" }) {
  if (!cta) return null;
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-secondary-500 p-6 text-white ${className}`}
    >
      {/* soft glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-500/30 blur-3xl"
      />
      <div className="relative">
        <span className="btn btn-primary size-12 px-0">
          <Phone aria-hidden />
        </span>
        <p className="mt-4 text-lg font-semibold tracking-tight">{cta.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/70">
          {cta.description}
        </p>

        <Link
          href={cta.href ?? "/contact"}
          className="mt-5 btn w-full btn-primary"
        >
          {cta.buttonText}
          <span className="btn-icon">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>

        <a
          href={telHref(CONTACT_INFO.phone)}
          className="mt-3 btn w-full btn-outline"
          // className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 text-sm font-semibold transition-colors hover:border-[#F0A3A0] hover:text-[#F0A3A0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0A3A0]"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call us
        </a>
      </div>
    </div>
  );
}

function TocList({ headings, activeId, onGo }) {
  return (
    <ul className="space-y-0.5">
      {headings.map((h) => {
        const on = activeId === h.id;
        return (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => onGo(e, h.id)}
              aria-current={on ? "true" : undefined}
              className={`flex items-start gap-3 rounded-2xl px-3 py-2.5 text-sm leading-snug transition-colors ${focusRing} ${
                on
                  ? "bg-[#35183F] font-semibold text-white"
                  : "font-medium text-[#35183F] hover:bg-[#FBF1F0]"
              }`}
            >
              <span
                aria-hidden
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${on ? "bg-[#F0A3A0]" : "bg-[#CC6B70]"}`}
              />
              {h.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function FaqItem({ item, open, onToggle, buttonId, panelId }) {
  const answer = Array.isArray(item.answer) ? item.answer : [item.answer];
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 motion-reduce:transition-none ${
        open
          ? "border-[#35183F] bg-[#35183F]"
          : "border-[#35183F]/8 bg-white hover:border-[#35183F]/20"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left sm:px-6 ${focusRing}`}
        >
          <span
            className={`text-base font-semibold leading-snug ${open ? "text-white" : "text-[#35183F]"}`}
          >
            {item.question}
          </span>
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${
              open
                ? "bg-[#F0A3A0] text-[#35183F]"
                : "bg-[#FBF1F0] text-[#35183F]"
            }`}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
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
          <div className="space-y-3 px-5 pb-6 text-[0.9375rem] leading-[1.75] text-white/80 sm:px-6">
            {answer.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Related posts only carry id, slug, title and image, so the card is compact */
function RelatedBlogCard({ item, basePath }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#35183F]/8 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#CC6B70]/40 hover:shadow-[0_30px_60px_-38px_rgba(53,24,63,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#F4C9C6] via-[#F7D9D6] to-[#EBD6EE]">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
          />
        ) : (
          <span
            aria-hidden
            className="absolute inset-0 grid place-items-center text-[#CC6B70]/35"
          >
            <ImageIcon className="h-10 w-10" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="line-clamp-2 text-xl font-semibold leading-snug tracking-tight text-[#35183F] transition-colors group-hover:text-[#CC6B70]">
          <Link
            href={`${basePath}/${item.slug}`}
            className={`after:absolute after:inset-0 ${focusRing}`}
          >
            {item.title}
          </Link>
        </h3>
        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#CC6B70]">
          Read article
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </article>
  );
}

/* ---------- page ---------- */
export default function BlogDetailsPage({ blog, basePath = "/blogs" }) {
  const baseId = useId();
  const articleRef = useRef(null);
  const tocRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const {
    hero,
    faqs = [],
    tags = [],
    content,
    relatedBlogs = [],
    cta,
  } = blog || {};

  const { html, headings } = useMemo(() => prepareContent(content), [content]);
  const [activeId, setActiveId] = useState(headings[0]?.id);

  /* Reading progress bar */
  useEffect(() => {
    const el = articleRef.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [blog]);

  /* Highlight the heading currently being read (works scrolling up and down) */
  useEffect(() => {
    if (!headings.length) return;
    let frame = 0;

    const update = () => {
      let current = headings[0].id;
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 150) current = h.id;
        else break;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [html]);

  if (!blog) return null;

  const goTo = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    tocRef.current?.removeAttribute("open"); // close the mobile list
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
  };

  const shareTitle = hero?.title ?? blog.card?.title ?? "";

  return (
    <>
      {/* Reading progress */}
      <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-1">
        <div
          className="h-full origin-left bg-[#CC6B70]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* ---------- Header ---------- */}
      <PageWrapper
        as="header"
        className="border-b border-[#35183F]/5 bg-primary-50"
        containerClassName="text-center pt-10"
      >
        {hero?.category && <Eyebrow>{hero.category}</Eyebrow>}

        <h1 className="mx-auto mt-5 max-w-4xl text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-[#35183F] sm:text-5xl lg:text-6xl">
          {hero?.title}
        </h1>

        {hero?.subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-balance text-[1.0625rem] leading-relaxed text-[#5B4663] sm:text-lg">
            {hero.subtitle}
          </p>
        )}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#5B4663]">
          {hero?.author && (
            <span className="flex items-center gap-2.5">
              <Avatar name={hero.author} className="h-9 w-9 text-sm" />
              <span className="font-semibold text-[#35183F]">
                {hero.author}
              </span>
            </span>
          )}
          {hero?.publishedAt && (
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-[#CC6B70]" aria-hidden />
              <time dateTime={hero.publishedAt}>
                {formatDate(hero.publishedAt)}
              </time>
            </span>
          )}
          {hero?.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#CC6B70]" aria-hidden />
              {hero.readTime}
            </span>
          )}
        </div>

        {/* ---------- Cover image ---------- */}
        <div className="mt-10 lg:mt-14">
          <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl rounded-br-[2.5rem] rounded-tl-[2.5rem] bg-gradient-to-br from-[#F4C9C6] via-[#F7D9D6] to-[#EBD6EE] shadow-[0_40px_80px_-45px_rgba(53,24,63,0.55)] ring-4 ring-white sm:rounded-br-[4rem] sm:rounded-tl-[4rem] sm:ring-8">
            {hero?.image && (
              <img
                src={hero.image}
                alt={hero.imageAlt || hero.title || ""}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </PageWrapper>

      {/* ---------- Article + sidebar ---------- */}
      <PageWrapper
        as="section"
        className="bg-white"
        paddingY="py-12 sm:py-16 lg:py-20"
        containerClassName="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-20"
      >
        <div className="min-w-0">
          <div className="mx-auto max-w-3xl lg:mx-0">
            {/* Mobile / tablet table of contents */}
            {headings.length > 1 && (
              <details
                ref={tocRef}
                className="group mb-8 rounded-3xl border border-[#35183F]/8 bg-[#FBF1F0]/60 lg:hidden"
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-3 rounded-3xl px-5 py-4 text-sm font-semibold text-[#35183F] [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  <span className="flex items-center gap-2.5">
                    <List className="h-4 w-4 text-[#CC6B70]" aria-hidden />
                    In this article
                  </span>
                  <ChevronDown
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="px-2 pb-3">
                  <TocList
                    headings={headings}
                    activeId={activeId}
                    onGo={goTo}
                  />
                </div>
              </details>
            )}

            {/* The article: your HTML, styled by blog-content.css */}
            <div ref={articleRef}>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-12 flex flex-wrap items-center gap-2.5 border-t border-[#35183F]/8 pt-8">
                <Tag className="h-4 w-4 text-[#CC6B70]" aria-hidden />
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#FBF1F0] px-4 py-2 text-sm font-medium text-[#35183F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-semibold tracking-tight text-[#35183F] sm:text-3xl">
                  Frequently asked questions
                </h2>
                <div className="mt-6 space-y-3">
                  {faqs.map((item, i) => (
                    <FaqItem
                      key={item.question}
                      item={item}
                      open={openFaq === i}
                      onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                      buttonId={`${baseId}-faq-button-${i}`}
                      panelId={`${baseId}-faq-panel-${i}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Medical disclaimer */}
            <div className="mt-10 flex items-start gap-3 rounded-2xl bg-[#FBF1F0]/70 p-4 text-sm leading-relaxed text-[#5B4663] sm:p-5">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-[#CC6B70]"
                aria-hidden
              />
              <p>
                This article is for general information and does not replace
                advice from your doctor.
              </p>
            </div>

            {/* Mobile / tablet: share + CTA under the article */}
            <div className="mt-10 space-y-4 lg:hidden">
              <ShareCard title={shareTitle} />
              <CtaCard cta={cta} />
            </div>
          </div>
        </div>

        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            {headings.length > 1 && (
              <nav
                aria-label="On this page"
                className="max-h-[calc(100vh-22rem)] min-h-[8rem] overflow-y-auto overscroll-contain rounded-3xl border border-[#35183F]/8 bg-white p-3"
              >
                <p className="px-3 pb-2 pt-2 text-sm font-semibold text-[#35183F]">
                  On this page
                </p>
                <TocList headings={headings} activeId={activeId} onGo={goTo} />
              </nav>
            )}
            <ShareCard title={shareTitle} />
            <CtaCard cta={cta} />
          </div>
        </aside>
      </PageWrapper>

      {/* ---------- Related blogs ---------- */}
      {relatedBlogs.length > 0 && (
        <PageWrapper
          as="section"
          className="bg-primary-50"
        >
          <SectionHeader title={'Keep Reading'} description={''}/>


          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.slice(0, 3).map((item) => (
              <li key={item.id}>
                <RelatedBlogCard item={item} basePath={basePath} />
              </li>
            ))}
          </ul>
        </PageWrapper>
      )}
    </>
  );
}
