"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectFade, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import PageWrapper from "../../layouts/page-wrapper";
import SectionHeader from "../../layouts/section-header";

import "swiper/css";
import "swiper/css/effect-fade";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* `avatar` / `src` are optional; initials are shown without them.     */
/* ------------------------------------------------------------------ */
const DEFAULT_CONTENT = {
  badge: "Testimonials",
  title: "Heartfelt reviews from our loving families",
  highlight: "our loving families",
  stats: {
    value: "1,000+",
    label: "Happy families",
    caption: "Real stories. Real care. Real families.",
    avatars: [
      { name: "Aarti Shah", src: "" },
      { name: "Meera Patel", src: "" },
      { name: "Rohan Desai", src: "" },
    ],
  },
  reviews: [
    {
      rating: 5,
      quote:
        "From our first scan to the day we brought our daughter home, every doctor and nurse treated us like family. We always knew what was happening and why.",
      name: "Aarti Shah",
      role: "Mother of a newborn",
      avatar: "",
    },
    {
      rating: 5,
      quote:
        "Our son was unwell late at night and the emergency team saw him within minutes. Calm, kind and clear with us the whole time. We are grateful.",
      name: "Rohan Desai",
      role: "Father of a 4-year-old",
      avatar: "",
    },
    {
      rating: 5,
      quote:
        "After years of trying, the fertility team gave us a plan we could understand and trust. They celebrated with us when the good news came.",
      name: "Meera Patel",
      role: "Mother of twins",
      avatar: "",
    },
    {
      rating: 5,
      quote:
        "The pediatric ward feels designed for children, not just for treatment. My daughter was relaxed, and so were we.",
      name: "Kavita Joshi",
      role: "Mother of two",
      avatar: "",
    },
  ],
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

const pad = (n) => String(n).padStart(2, "0");

function Avatar({ src, name, className = "" }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return src ? (
    <img src={src} alt="" loading="lazy" className={`rounded-full object-cover ${className}`} />
  ) : (
    <span
      aria-hidden
      className={`grid place-items-center rounded-full bg-primary-100 font-semibold text-primary-500 ${className}`}
    >
      {initial}
    </span>
  );
}

export default function TestimonialSection({ content }) {
  const c = { ...DEFAULT_CONTENT, ...content };
  const total = c.reviews.length;
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  const navBtn = `grid h-11 w-11 place-items-center rounded-full bg-primary-500 text-white hover:bg-secondary-500 ${focusRing}`;

  return (
    <PageWrapper
      as="section"
      className="bg-secondary-500"
      paddingY="py-16 sm:py-20 lg:py-24"
      containerClassName="mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24"
    >
      {/* ---------- Content ---------- */}
      <div>
        <SectionHeader badge={c.badge} title={c.title} highlight={c.highlight} align="start" light />

        <div aria-hidden className="mb-8 h-px w-full bg-white/15 lg:mb-10" />

        <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
          <ul className="flex -space-x-3">
            {c.stats.avatars.map((a) => (
              <li key={a.name}>
                <Avatar src={a.src} name={a.name} className="h-12 w-12 ring-2 ring-secondary-500" />
              </li>
            ))}
          </ul>
          <div>
            <p className="text-lg font-semibold text-white">
              {c.stats.value} {c.stats.label}
            </p>
            <p className="mt-0.5 text-sm text-white/70">{c.stats.caption}</p>
          </div>
        </div>
      </div>

      {/* ---------- Slider card ---------- */}
      <div className="min-w-0 rounded-3xl bg-white/10 p-6 ring-1 ring-white/10 sm:p-9">
        {/* Fade slider. No autoHeight: Swiper keeps the wrapper as tall as the
            longest review, so the card never changes height between slides. */}
        <Swiper
          modules={[A11y, EffectFade, Keyboard]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={500}
          rewind
          grabCursor
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: "Previous review",
            nextSlideMessage: "Next review",
            slideLabelMessage: "Review {{index}} of {{slidesLength}}",
          }}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActive(s.realIndex)}
          aria-label="Family reviews"
        >
          {c.reviews.map((r) => (
            <SwiperSlide key={r.name} className="!h-auto">
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-1" role="img" aria-label={`Rated ${r.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`h-[18px] w-[18px] ${s < r.rating ? "fill-primary-500 text-primary-500" : "text-white/25"}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <Quote className="h-9 w-9 shrink-0 fill-white/10 text-white/10" aria-hidden />
                </div>

                <blockquote className="mt-5 text-[1.0625rem] leading-[1.75] text-white sm:text-xl sm:leading-[1.7]">
                  {r.quote}
                </blockquote>

                <div className="mt-auto flex items-center gap-3.5 pt-8">
                  <Avatar src={r.avatar} name={r.name} className="h-12 w-12 shrink-0" />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">{r.name}</p>
                    <p className="truncate text-sm text-white/70">{r.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer: counter on the left, arrows on the right */}
        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-sm font-medium tabular-nums text-white/60" aria-hidden>
            <span className="text-white">{pad(active + 1)}</span> / {pad(total)}
          </p>

          <div className="flex gap-2.5">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => swiperRef.current?.slidePrev()}
              className={navBtn}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => swiperRef.current?.slideNext()}
              className={navBtn}
            >
              <ArrowRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}