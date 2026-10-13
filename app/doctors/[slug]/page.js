
import { notFound } from "next/navigation";
import { getDoctorBySlug } from "@/app/data/doctors";
import DoctorDetailsPage from "@/app/views/doctor-details/doctor-details-page";
import { generateSEO } from "@/app/lib/seo-config";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found | Sarvam Hospitals",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { seo, hero } = doctor;

  return generateSEO({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    path: `/doctors/${doctor.slug}`,
    image: hero.image,
  });
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = getDoctorBySlug(slug);

  if (!data) {
    notFound();
  }

  return <DoctorDetailsPage data={data} />;
};

export default Page;
