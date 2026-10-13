import { Users } from "lucide-react";
import PageWrapper from "../../layouts/page-wrapper";
import SectionHeader from "../../layouts/section-header";

const DEFAULT_CONTENT = {
  badge: "Our Team",
  title: "Meet the People Behind Your Care",
  highlight: "Your Care",
  description: "Caring people dedicated to your well-being.",
  photos: [
    {
      src: "/Images/Staff/staff-with-doctors.webp",
      alt: "Our doctors and hospital staff standing together at the clinic",
      label: "Our Medical Team",
    },
    {
      src: "/Images/Staff/staff-team.webp",
      alt: "Dedicated hospital staff working together to support patient care",
      label: "Our Staff",
    },
    {
      src: "/Images/Staff/reception.webp",
      alt: "Welcoming reception area of our hospital",
      label: "Reception",
    },
    {
      src: "/Images/Staff/clinic.webp",
      alt: "Clean and comfortable hospital clinic environment",
      label: "Our Clinic",
    },
    {
      src: "/Images/Staff/lab.webp",
      alt: "Hospital laboratory equipped for diagnostic testing",
      label: "Lab & Diagnostics",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* One photo tile. The image is absolutely positioned, so the tile's   */
/* size always comes from the grid (or from `className` aspect).       */
/* ------------------------------------------------------------------ */
function PhotoTile({ photo, index, className = "", big = false }) {
  return (
    <figure
      className={`group relative w-full overflow-hidden bg-gradient-to-br shadow-[0_24px_50px_-32px_rgba(53,24,63,0.45)] ${
        big
          ? "rounded-2xl rounded-br-[2.5rem] rounded-tl-[2.5rem] sm:rounded-br-[3.5rem] sm:rounded-tl-[3.5rem]"
          : "rounded-3xl"
      } ${className}`}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 grid place-items-center text-[#CC6B70]/35"
        >
          <Users className={big ? "h-16 w-16" : "h-10 w-10"} />
        </span>
      )}

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary-500/40 to-transparent"
      />

      {photo.label && (
        <figcaption
          className={`absolute rounded-full bg-white/90 font-semibold text-secondary-500 backdrop-blur-md transition-colors duration-300 group-hover:bg-secondary-500 group-hover:text-white motion-reduce:transition-none ${
            big
              ? "bottom-3 left-3 px-3.5 py-2 text-sm sm:bottom-5 sm:left-5"
              : "bottom-2 left-2 px-2.5 py-1.5 text-xs sm:bottom-3 sm:left-3 sm:px-3 sm:text-sm"
          }`}
        >
          {photo.label}
        </figcaption>
      )}
    </figure>
  );
}

export default function StaffSection({ content }) {
  const c = { ...DEFAULT_CONTENT, ...content };
  const photos = c.photos.slice(0, 5);
  const bento = photos.length >= 4;

  return (
    <PageWrapper
      as="section"
      className="bg-white"
      paddingY="py-16 sm:py-20 lg:py-24"
      containerClassName="mx-auto"
    >
      {/* ---------- Header ---------- */}
      <SectionHeader
        badge={c.badge}
        title={c.title}
        highlight={c.highlight}
        description={c.description}
      />

      {/* ---------- Gallery ---------- */}
      {bento ? (
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {/* Big tile: full width on mobile, 2x2 on desktop */}
          <li className="col-span-2 flex lg:row-span-2">
            <PhotoTile
              photo={photos[0]}
              index={0}
              big
              className="aspect-[4/3] lg:aspect-auto"
            />
          </li>

          {photos.slice(1).map((photo, i) => (
            <li key={photo.label ?? i + 1}>
              <PhotoTile photo={photo} index={i + 1} className="aspect-[4/3]" />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {photos.map((photo, i) => (
            <li key={photo.label ?? i}>
              <PhotoTile photo={photo} index={i} className="aspect-[4/3]" />
            </li>
          ))}
        </ul>
      )}
    </PageWrapper>
  );
}
