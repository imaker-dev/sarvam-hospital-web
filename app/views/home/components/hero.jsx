import { ArrowUpRight, HeartPulse, Play } from "lucide-react";
import PageWrapper from "../../layouts/page-wrapper";
import Link from "next/link";
import { APPOINTMENT_URL } from "@/app/const";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* `slides` is an array on purpose: one item today, a slider later.    */
/*                                                                     */
/* IMAGE: transparent PNG/WebP cutout, aspect ratio 4:5 (portrait),    */
/* e.g. 1200x1500. Crop the subject at the bottom edge (waist/chest)   */
/* and leave ~8% of space above the heads. The bottom edge of the      */
/* image sits exactly on top of the stats band.                        */
/* ------------------------------------------------------------------ */
const DEFAULT_CONTENT = {
  title: "Trusted care for",
  highlight: "women & children",
  description:
    "A hospital built around the health of women and children, with specialist doctors, modern facilities and round-the-clock emergency care under one roof.",
  primaryCta: { label: "Book a Visit", href: APPOINTMENT_URL },
  secondaryCta: { label: "Explore Clinic", href: "#tour" },
  stats: [
    { value: "15", suffix: "+", label: "Years of care" },
    { value: "50", suffix: "+", label: "Specialist doctors" },
    { value: "10K", suffix: "+", label: "Happy families" },
  ],
  slides: [
    {
      image: {
        src: "/Images/hero.png", // e.g. "/images/hero-doctors.png"
        alt: "Two smiling doctors standing back to back",
      },
      badge: "24/7 Emergency care",
    },
  ],
};

const COLS =
  "lg:grid-cols-[minmax(0,1fr)_26rem] xl:grid-cols-[minmax(0,1fr)_36rem]";

/* ------------------------------------------------------------------ */
/* One slide = cutout image + overlay chip. Reuse it inside any slider.*/
/* ------------------------------------------------------------------ */
function MediaSlide({ slide }) {
  const { image, badge } = slide;

  return (
    <>
      {image.src && (
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 z-20 h-full w-full object-contain object-bottom"
          fetchPriority="high"
        />
      )}

      {badge && (
        <span className="absolute bottom-5 left-3 z-30 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-sm font-semibold text-secondary-500 shadow-[0_10px_30px_-12px_rgba(53,24,63,0.35)] backdrop-blur-md xl:-left-[4%] xl:bottom-auto xl:top-[4%]">
          <HeartPulse className="h-4 w-4 text-primary-500" aria-hidden />
          {badge}
        </span>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Media column. On desktop its top lines up with the copy, and it     */
/* continues down over the stats band (-mb-28 = band height) to the    */
/* bottom edge of the hero. Layers: disc z-0 < band z-10 < people z-20,*/
/* so the band passes BEHIND the people and the disc rises from it.    */
/* Keep `lg:-mb-28` equal to the band's `lg:h-28`.                     */
/*                                                                     */
/* Slider later (e.g. Swiper): replace the single <MediaSlide /> with  */
/*   <Swiper className="h-full">                                       */
/*     {slides.map((s, i) => (                                         */
/*       <SwiperSlide key={i}><MediaSlide slide={s} /></SwiperSlide>   */
/*     ))}                                                             */
/*   </Swiper>                                                         */
/* ------------------------------------------------------------------ */
function HeroMedia({ slides }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md lg:-mb-28 lg:mx-0 lg:aspect-auto lg:min-h-[28rem] lg:max-w-none">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 z-0 aspect-square w-[104%] -translate-x-1/2 rounded-full border border-primary-500/25"
      >
        <div className="absolute inset-[6%] rounded-full bg-primary-200" />
      </div>

      <MediaSlide slide={slides[0]} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stats band: full width, closes the hero. The stats live in the      */
/* first (copy) column only; the second column is where the people     */
/* stand in front of the band.                                         */
/* ------------------------------------------------------------------ */
function StatsBand({ stats }) {
  return (
    <div className="relative z-10 border-t border-white/10 bg-secondary-500">
      <PageWrapper
        as="div"
        paddingY="py-0"
        containerClassName={`grid w-full ${COLS}`}
      >
        <dl className="grid auto-cols-fr grid-flow-col divide-x divide-white/15 py-6 lg:col-start-1 lg:h-28 lg:items-center lg:py-0">
          {stats.map((s) => (
            <div key={s.label} className="px-2 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {s.value}
                  <span className="text-primary-500">{s.suffix}</span>
                </span>
                <span
                  aria-hidden
                  className="mt-1 block text-xs text-white/70 sm:text-sm"
                >
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </PageWrapper>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* Desktop height = the screen, capped at 60rem so the people never    */
/* get stretched on very tall monitors.                                */
/* ------------------------------------------------------------------ */
export default function Hero({ content }) {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <section className="relative isolate overflow-hidden bg-primary-50 lg:flex lg:min-h-[min(100dvh,60rem)] lg:flex-col">
      <PageWrapper
        as="div"
        paddingY="py-0"
        className="flex lg:flex-1"
        containerClassName={`grid w-full gap-6 pt-24 lg:gap-8 lg:pt-20 ${COLS}`}
      >
        {/* ---------- Copy ---------- */}
        <div className="max-w-xl lg:max-w-none lg:self-center ">
          <h1 className="text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]">
            {c.title}
            <span className="block text-primary-500">{c.highlight}</span>
          </h1>

          <p className="mt-7 max-w-md text-[1.0625rem] leading-[1.7] text-slate-700 sm:text-lg">
            {c.description}
          </p>

          <div className="mt-10 flex items-center gap-3">
            <Link href={c.primaryCta.href} className="btn btn-lg btn-primary">
              {c.primaryCta.label}
              <span className="btn-icon">
                <ArrowUpRight size={18} aria-hidden />
              </span>
            </Link>

            <Link href={c.secondaryCta.href} className="btn btn-lg btn-outline">
              <Play className="h-4 w-4 fill-current" aria-hidden />
              {c.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* ---------- Media (cutout + shapes, slider-ready) ---------- */}
        <HeroMedia slides={c.slides} />
      </PageWrapper>

      {/* ---------- Stats band ---------- */}
      <StatsBand stats={c.stats} />
    </section>
  );
}
