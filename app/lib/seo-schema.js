
import { BASE_URL } from "../const";

const hospitalSchema = {
  "@type": "Hospital",
  "@id": `${BASE_URL}/#hospital`,
  name: "Sarvam Hospital",
  description:
    "Woman and child speciality hospital providing pregnancy, maternity, gynaecology, fertility, paediatric and newborn care.",
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2nd Floor, Shreedhar Complex, Zadeshwar Road, Near Zadeshwar Chokdi, Opposite Madhuram Party Plot",
    addressLocality: "Bharuch",
    addressRegion: "Gujarat",
    postalCode: "392011",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Sarvam Hospital",
      url: BASE_URL,
      inLanguage: "en-IN",
      publisher: {
        "@id": `${BASE_URL}/#hospital`,
      },
    },
    hospitalSchema,
  ],
};
