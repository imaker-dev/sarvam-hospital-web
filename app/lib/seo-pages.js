
import { generateSEO } from "./seo-config";

export const seoPages = {
  home: generateSEO({
    title: "Sarvam Hospital | Women & Child Care in Bharuch",
    description:
      "Sarvam Hospital is a woman and child speciality hospital in Bharuch offering pregnancy, maternity, gynaecology, fertility, paediatric, newborn and ultrasound care.",
    keywords: [
      "Sarvam Hospital Bharuch",
      "women and child hospital in Bharuch",
      "maternity hospital in Bharuch",
      "pregnancy care in Bharuch",
      "gynaecologist in Bharuch",
      "paediatrician in Bharuch",
      "newborn care in Bharuch",
      "fertility treatment in Bharuch",
    ],
    path: "/",
  }),

  about: generateSEO({
    title: "About Us | Sarvam Hospital, Bharuch",
    description:
      "Learn about Sarvam Hospital in Bharuch and our approach to personalised healthcare for women, expectant mothers, newborns and children.",
    keywords: [
      "about Sarvam Hospital",
      "Sarvam Hospital Bharuch",
      "women and child healthcare in Bharuch",
      "maternity care in Bharuch",
      "child healthcare in Bharuch",
    ],
    path: "/about",
  }),

  services: generateSEO({
    title: "Medical Services in Bharuch | Sarvam Hospital",
    description:
      "Explore medical services at Sarvam Hospital in Bharuch, including obstetrics, gynaecology, infertility care, IUI and IVF, paediatrics, newborn care, sonography and laparoscopy.",
    keywords: [
      "hospital services in Bharuch",
      "Sarvam Hospital services",
      "obstetrics in Bharuch",
      "gynaecology in Bharuch",
      "infertility treatment in Bharuch",
      "IUI and IVF in Bharuch",
      "paediatrics in Bharuch",
      "newborn and neonatal care in Bharuch",
      "sonography in Bharuch",
      "laparoscopy in Bharuch",
    ],
    path: "/services",
  }),

  doctors: generateSEO({
    title: "Our Doctors in Bharuch | Sarvam Hospital",
    description:
      "Meet the doctors at Sarvam Hospital in Bharuch, providing care in obstetrics, gynaecology, pregnancy, maternity, paediatrics and child healthcare.",
    keywords: [
      "Sarvam Hospital doctors",
      "doctors in Bharuch",
      "Dr. Prashant Sagar",
      "Dr. Ameeta Sagar",
      "gynaecologist in Bharuch",
      "obstetrician in Bharuch",
      "paediatrician in Bharuch",
      "child specialist in Bharuch",
    ],
    path: "/doctors",
  }),

  contact: generateSEO({
    title: "Contact & Appointments | Sarvam Hospital, Bharuch",
    description:
      "Contact Sarvam Hospital in Bharuch for appointments and enquiries about pregnancy, maternity, women's health, fertility, paediatrics and newborn care.",
    keywords: [
      "Sarvam Hospital contact",
      "Sarvam Hospital Bharuch contact",
      "hospital appointment in Bharuch",
      "doctor appointment in Bharuch",
      "gynaecologist appointment in Bharuch",
      "paediatrician appointment in Bharuch",
    ],
    path: "/contact",
  }),

  testimonials: generateSEO({
    title: "Patient Reviews | Sarvam Hospital, Bharuch",
    description:
      "Read patient reviews and experiences of care at Sarvam Hospital in Bharuch, including maternity, women's healthcare, newborn care and paediatric services.",
    keywords: [
      "Sarvam Hospital reviews",
      "Sarvam Hospital testimonials",
      "Sarvam Hospital Bharuch reviews",
      "patient reviews in Bharuch",
      "maternity hospital reviews in Bharuch",
    ],
    path: "/testimonials",
  }),

  faqs: generateSEO({
    title: "Frequently Asked Questions | Sarvam Hospital",
    description:
      "Find answers to common questions about appointments, pregnancy care, delivery, gynaecology, fertility treatment, newborn care and paediatric services at Sarvam Hospital in Bharuch.",
    keywords: [
      "Sarvam Hospital FAQs",
      "Sarvam Hospital frequently asked questions",
      "pregnancy care FAQs",
      "maternity FAQs in Bharuch",
      "gynaecology FAQs",
      "fertility treatment FAQs",
      "newborn care FAQs",
      "paediatric care FAQs",
    ],
    path: "/faqs",
  }),

  blogs: generateSEO({
    title: "Women's & Children's Health Blog | Sarvam Hospital",
    description:
      "Explore informative articles from Sarvam Hospital on pregnancy, women's health, fertility, gynaecology, newborn care and children's health.",
    keywords: [
      "Sarvam Hospital blog",
      "pregnancy health articles",
      "women's health articles",
      "gynaecology articles",
      "fertility health information",
      "newborn care articles",
      "child health articles",
      "maternity health information",
    ],
    path: "/blogs",
  }),
};
