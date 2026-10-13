import PageWrapper from "../../layouts/page-wrapper";
import SectionHeader from "../../layouts/section-header";
import { getDoctors } from "@/app/data/doctors";
import DoctorCard from "../../doctors/components/doctor-card";

/* ------------------------------------------------------------------ */
/* Centralized content. Pass `content` to override any key.            */
/* `image` should be a transparent PNG/WebP (half-body, bottom-        */
/* cropped, roughly 4:5). Without it a placeholder icon is shown.      */
/* Keep cards to the important facts; the rest lives on `href`.        */
/* ------------------------------------------------------------------ */
const DEFAULT_CONTENT = {
  badge: "Our Doctors",
  title: "Meet Your Care Team",
  highlight: "Care Team",
  description:
    "Experienced doctors dedicated to compassionate care for women, children and families.",
  linkLabel: "View Profile",
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function Doctors({ content }) {
  const doctors = getDoctors();
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <PageWrapper as="section">
      <SectionHeader
        badge={c.badge}
        title={c.title}
        highlight={c.highlight}
        description={c.description}
        align="center"
      />

      <ul className="pt-8 flex flex-wrap justify-center gap-x-8 gap-y-20">
        {doctors.map((doctor) => (
          <li
            key={doctor.id}
            className="flex w-full sm:w-[calc(50%-1rem)] lg:w-[420px] xl:w-[460px]"
          >
            <DoctorCard doctor={doctor} linkLabel={c.linkLabel} />
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
