import { ArrowUpRight, Award, Check, Phone, Play } from "lucide-react";
import PageWrapper from "../../layouts/page-wrapper";
import { CONTACT_INFO } from "@/app/const";
import SectionHeader from "../../layouts/section-header";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* Images are optional: without `src` a soft gradient is shown.        */
/* Suggested sizes: video 600x600 (or 16:9), wide 1200x750 (16:10).    */
/* ------------------------------------------------------------------ */
const DEFAULT_CONTENT = {
  title: "Compassionate care for every family",
  highlight: "every family",

  description:
    "At Sarvam Hospital, experienced doctors and a caring team provide personalised healthcare for women, newborns and children in a safe and supportive environment.",

  stat: {
    title: "16+ years of experience",
    text: "Trusted medical care with a personal approach.",
  },

  images: {
    video: {
      src: "",
      alt: "Doctor caring for a mother and her newborn",
      href: "#tour",
      label: "Watch our hospital video",
    },

    wide: {
      src: "/Images/about.webp",
      alt: "Pediatrician caring for a child",
    },
  },

  features: [
    "Women's health & maternity care",
    "Pregnancy & delivery care",
    "Newborn & child healthcare",
    "Fertility & IUI/IVF care",
    "Sonography & diagnostics",
    "Personalised patient care",
  ],

  cta: {
    label: "More About Us",
    href: "/about",
  },

  contact: {
    label: "Call us anytime",
    phone: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
  },
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

const placeholder = "bg-primary-100";

function Photo({ src, alt, className = "" }) {
  return src ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  ) : (
    <div aria-hidden className={`h-full w-full ${placeholder} ${className}`} />
  );
}

export default function AboutSection({ content }) {
  const c = { ...DEFAULT_CONTENT, ...content };
  const { video, wide } = c.images;

  return (
    <PageWrapper
      as="section"
      className="bg-white"
      paddingY="py-16 sm:py-20 lg:py-24"
      containerClassName="mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20"
    >
      {/* ---------- Copy (first on mobile) ---------- */}
      <div className="lg:order-2">
        <SectionHeader
          badge={"About us"}
          title={c.title}
          highlight={c.highlight}
          description={c.description}
          align={"left"}
        />

        <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {c.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-[0.9375rem] font-medium text-slate-700"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-500">
                <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link href={c.cta.href} className="btn btn-lg btn-primary">
            {c.cta.label}
            <span className="btn-icon">
              <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden />
            </span>
          </Link>
          <a
            href={c.contact.href}
            className={`group flex items-center gap-3.5 rounded-full ${focusRing}`}
          >
            <span className="btn btn-secondary size-12 px-0">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-slate-600">
                {c.contact.label}
              </span>
              <span className="block text-lg font-semibold leading-tight text-slate-700">
                {c.contact.phone}
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* ---------- Collage ---------- */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-[1.5fr_1fr] sm:gap-5 lg:order-1">
        {/* Experience card */}
        <div className="col-span-2 flex flex-col justify-between gap-8 rounded-3xl bg-primary-100 p-6 sm:col-span-1 sm:p-7">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-primary-500 shadow-[0_10px_30px_-15px_rgba(53,24,63,0.35)]">
            <Award className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-xl font-semibold tracking-tight text-slate-700">
              {c.stat.title}
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
              {c.stat.text}
            </p>
          </div>
        </div>

        {/* Video thumbnail */}
        <a
          href={video.href}
          aria-label={video.label}
          className={`group relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl sm:col-span-1 sm:aspect-auto sm:min-h-[12rem] ${focusRing}`}
        >
          <Photo src={video.src} alt={video.alt} />
          <span className="absolute inset-0 grid place-items-center bg-primary-500/10 group-hover:bg-primary-500/25">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-slate-700 shadow-[0_10px_30px_-10px_rgba(53,24,63,0.5)] group-hover:bg-primary-500 group-hover:text-white">
              <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
            </span>
          </span>
        </a>

        {/* Wide image */}
        <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
          <Photo src={wide.src} alt={wide.alt} />
        </div>
      </div>
    </PageWrapper>
  );
}
