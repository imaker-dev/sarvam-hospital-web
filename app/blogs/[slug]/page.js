import { getBlogDetails } from "@/app/data/blogs";
import BlogDetailsPage from "@/app/views/blog-details/blog-details-page";
import React from "react";

const blog = {
  id: "pregnancy-care-guide",
  slug: "complete-pregnancy-care-guide",

  card: {
    title: "A Complete Guide to Pregnancy Care",
    excerpt:
      "Learn about essential antenatal checkups, healthy pregnancy habits, and the care needed throughout pregnancy.",
    image: "/Images/Blogs/pregnancy-care-guide.jpg",
    category: "Pregnancy Care",
    author: "Dr. Priya Sharma",
    publishedAt: "2026-09-15",
    readTime: "6 min read",
  },

  details: {
    seo: {
      title: "Complete Pregnancy Care Guide | Sarvam Hospital",
      description:
        "Explore pregnancy care essentials, antenatal checkups, nutrition, and medical guidance for every stage of pregnancy.",
      keywords: [
        "pregnancy care",
        "antenatal care",
        "pregnancy guide",
        "maternity care",
      ],
    },

    hero: {
      title: "A Complete Guide to Pregnancy Care",
      subtitle:
        "Essential guidance for a healthy and well-supported pregnancy journey.",
      image: "/Images/Blogs/pregnancy-care-guide.jpg",
      category: "Pregnancy Care",
      author: "Dr. Priya Sharma",
      publishedAt: "2026-09-15",
      readTime: "6 min read",
    },

    // HTML content created using Quill or another rich-text editor.
    content: `
        <h2>Introduction</h2>
        <p>
          Pregnancy is an important stage of life that requires regular
          medical supervision, healthy habits, and appropriate guidance.
          Understanding pregnancy care can help expectant mothers make
          informed decisions throughout their journey.
        </p>

        <h2>Start Prenatal Care Early</h2>
        <p>
          Early antenatal consultations help assess maternal health,
          monitor pregnancy progress, and identify factors that may
          require additional monitoring.
        </p>

        <h2>Focus on Nutrition and Healthy Habits</h2>
        <p>
          A balanced diet, appropriate physical activity, adequate rest,
          and hydration can support general wellbeing during pregnancy.
          Discuss supplements and lifestyle changes with your healthcare
          provider.
        </p>

        <h2>Attend Regular Pregnancy Checkups</h2>
        <p>
          Routine checkups allow your doctor to monitor your health
          and your baby's growth. The recommended schedule may vary
          depending on your stage of pregnancy and individual needs.
        </p>

        <ul>
          <li>Monitor blood pressure and maternal health.</li>
          <li>Complete recommended blood and urine tests.</li>
          <li>Track fetal growth and development.</li>
          <li>Discuss symptoms and concerns with your doctor.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Every pregnancy is different. Regular consultations and
          personalized medical guidance can help you navigate pregnancy
          with greater confidence.
        </p>
      `,

    cta: {
      title: "Need Expert Pregnancy Care?",
      description:
        "Our team is here to support you throughout your pregnancy journey with personalized maternity care.",
      buttonText: "Book an Appointment",
      href: "/contact",
    },

    faqs: [
      {
        question: "When should pregnancy care begin?",
        answer:
          "Pregnancy care should begin as early as possible after pregnancy is confirmed. Your doctor can advise you on the appropriate schedule for consultations and tests.",
      },
      {
        question: "How often should I attend pregnancy checkups?",
        answer:
          "The frequency depends on your stage of pregnancy and individual health needs. Your obstetrician will recommend a suitable schedule.",
      },
    ],

    tags: ["Pregnancy", "Antenatal Care", "Women's Health"],

    relatedServices: [
      {
        id: "obstetrics",
        slug: "obstetrics",
        title: "Obstetrics",
      },
    ],

    relatedBlogs: [
      {
        id: "high-risk-pregnancy",
        slug: "understanding-high-risk-pregnancy",
        title: "Understanding High-Risk Pregnancy",
        image: "/Images/Blogs/high-risk-pregnancy.jpg",
      },
    ],
  },
};

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = getBlogDetails(slug);

  return <BlogDetailsPage blog={data} />;
};

export default Page;
