import { ArrowUpRight, Stethoscope } from "lucide-react";
import Link from "next/link";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

function ServiceCard({ service, linkLabel = "View all details" }) {
  const { id, slug, title, description, image } = service;

  return (
    <article
      key={id}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-30px_rgba(53,24,63,0.35)] transition-colors duration-300 hover:bg-secondary-500 focus-within:bg-secondary-600 motion-reduce:transition-none"
    >
      <div className="aspect-[3/2] w-full shrink-0 overflow-hidden">
        {image ? (
          <img
            // src={image}
            src={"/Images/Services/service-1.webp"}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-primary-100">
            <Stethoscope
              className="h-14 w-14 text-primary-500/60"
              aria-hidden
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-primary-500 transition-colors duration-300 group-hover:text-white group-focus-within:text-white motion-reduce:transition-none">
          {title}
        </h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate-700 transition-colors duration-300 group-hover:text-white/80 group-focus-within:text-white/80 motion-reduce:transition-none">
          {description}
        </p>

        <Link
          href={`/services/${slug}`}
          className={`mt-auto flex items-center gap-2.5 pt-6 text-[0.9375rem] font-semibold text-primary-500 transition-colors duration-300 after:absolute after:inset-0 group-hover:text-white group-focus-within:text-white motion-reduce:transition-none ${focusRing}`}
        >
          {linkLabel}
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-500/10 transition-colors duration-300 group-hover:bg-white/15 group-focus-within:bg-white/15 motion-reduce:transition-none">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
