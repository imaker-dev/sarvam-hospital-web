"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowUpRight, Stethoscope } from "lucide-react";

import "swiper/css";
import PageWrapper from "../../layouts/page-wrapper";
import Link from "next/link";
import { getServices } from "@/app/data/services";
import ServiceCard from "../../services/components/service-card";
import SectionHeader from "../../layouts/section-header";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* `image` is optional: without it a soft placeholder with the icon    */
/* is shown. Swap <img> for next/image if you prefer.                  */
/* ------------------------------------------------------------------ */
const DEFAULT_CONTENT = {
  title: "Specialist care for women and children",
  highlight: "women and children",
  description:
    "From the first scan to the first vaccination, our departments work together so your family always has one clear plan.",
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function OurServices({ content }) {
  const services = getServices();

  const c = { ...DEFAULT_CONTENT, ...content };
  const swiperRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const sync = (s) => setEdge({ start: s.isBeginning, end: s.isEnd });

  const navBtn = `btn btn-primary size-12 px-0 disabled:cursor-not-allowed disabled:opacity-35 ${focusRing}`;

  return (
    <PageWrapper as="section" className="overflow-hidden bg-primary-50">
      <div className="grid items-center gap-10 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[22rem_minmax(0,1fr)] xl:gap-16">
        {/* ---------- Heading + controls ---------- */}
        <div className="flex flex-col items-center lg:items-start">
          <SectionHeader
            title={c.title}
            highlight={c.highlight}
            description={c.description}
            align={"start"}
          />

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous services"
              disabled={edge.start}
              onClick={() => swiperRef.current?.slidePrev()}
              className={navBtn}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next services"
              disabled={edge.end}
              onClick={() => swiperRef.current?.slideNext()}
              className={navBtn}
            >
              <ArrowRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* ---------- Slider ---------- */}
        {/* Slides keep a fixed card width and bleed to the screen's right edge.   */}
        {/* On lg+ the left side is clipped so slides never slide under the title. */}
        <Swiper
          modules={[A11y, Keyboard]}
          slidesPerView="auto"
          spaceBetween={20}
          grabCursor
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: "Previous service",
            nextSlideMessage: "Next service",
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
            sync(s);
          }}
          onSlideChange={sync}
          onResize={sync}
          onBreakpoint={sync}
          onUpdate={sync}
          className="!w-full !overflow-visible py-2 lg:[clip-path:inset(-2rem_-100vw_-2rem_0)]"
          style={{ minWidth: 0 }}
        >
          {services.map((service) => (
            <SwiperSlide
              key={service.title}
              className="!h-auto !w-[17.5rem] sm:!w-[20rem] xl:!w-[22rem]"
            >
              <ServiceCard service={service} linkLabel={c.linkLabel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full flex justify-center mt-8">
        <Link href={"/services"} className="btn btn-primary">
          View All Serives{" "}
          <span className="btn-icon">
            <ArrowUpRight />
          </span>
        </Link>
      </div>
    </PageWrapper>
  );
}
