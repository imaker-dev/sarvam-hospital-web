import { ArrowUpRight, Award, CalendarCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

/* ------------------------------------------------------------------ */
/* Doctor Card                                                        */
/* ------------------------------------------------------------------ */

function DoctorCard({ doctor, linkLabel = "View Profile" }) {
  const {
    slug,
    name,
    specialty,
    qualification,
    experience,
    availability,
    image,
  } = doctor;

  return (
    <article className="group relative flex w-full flex-col rounded-3xl border border-secondary-500/10 bg-white shadow-[0_20px_50px_-35px_rgba(2,53,118,0.3)] hover:shadow-[0_30px_60px_-30px_rgba(2,53,118,0.4)]">
      {/* Media */}
      <div className="relative aspect-[16/10]">
        <div
          aria-hidden
          className="absolute inset-0 rounded-t-[1.4375rem] bg-primary-50 transition-colors duration-300 group-focus-within:bg-secondary-500 group-hover:bg-secondary-500 motion-reduce:transition-none"
        />

        <div className="absolute inset-x-0 bottom-0 flex h-[125%] items-end justify-center">
          {image ? (
            <img
              src={image}
              alt=""
              loading="lazy"
              className="h-full w-auto max-w-full origin-bottom object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
            />
          ) : (
            <Stethoscope
              className="mb-[16%] h-12 w-12 text-primary-500/50"
              aria-hidden
            />
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3.5 p-5">
        <div>
          <h3 className="text-lg font-semibold leading-tight tracking-tight text-secondary-500">
            {name}
          </h3>

          <p
            title={`${specialty} · ${qualification}`}
            className="mt-1 flex items-center gap-2 text-sm"
          >
            <span className="min-w-0 truncate font-medium text-primary-700">
              {specialty}
            </span>

            <span
              aria-hidden
              className="h-1 w-1 shrink-0 rounded-full bg-secondary-500/25"
            />

            <span className="max-w-[45%] shrink-0 truncate text-[13px] text-secondary-900">
              {qualification}
            </span>
          </p>
        </div>

        {/* Meta + link */}
        <div className="flex items-center justify-between gap-3 border-t border-secondary-500/10 pt-3.5">
          <dl className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Experience</dt>
              <Award className="h-4 w-4 text-primary-600" aria-hidden />
              <dd className="text-[13px] font-semibold text-secondary-500">
                {experience}
              </dd>
            </div>

            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Available</dt>
              <CalendarCheck className="h-4 w-4 text-primary-600" aria-hidden />
              <dd className="text-[13px] font-semibold text-secondary-500">
                {availability}
              </dd>
            </div>
          </dl>

          <Link
            href={`/doctors/${slug}`}
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary-500 text-white after:absolute after:inset-0 after:rounded-3xl group-hover:bg-primary-600 ${focusRing}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
            <span className="sr-only">
              {linkLabel} of {name}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DoctorCard;
