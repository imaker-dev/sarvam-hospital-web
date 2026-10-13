
import { BASE_URL } from "../const";

const SITE_NAME = "Sarvam Hospital";
const ORGANIZATION_NAME = "Sarvam Hospital";

const DEFAULT_DESCRIPTION =
  "Sarvam Hospital in Bharuch provides specialised healthcare for women, newborns and children, including pregnancy, maternity, gynaecology, fertility, paediatrics and newborn care.";

const DEFAULT_OG_IMAGE = "/Images/og-image.png";

const DEFAULT_OG_IMAGE_ALT =
  "Sarvam Hospital – Woman & Child Speciality in Bharuch";

const SITE_LOCALE = "en_IN";

/**
 * Normalize a path for canonical URL generation.
 * Examples:
 * "/"             -> "/"
 * "/about/"       -> "/about"
 * "services"      -> "/services"
 */
function normalizePath(path = "/") {
  const value = String(path).trim();

  if (!value || value === "/") {
    return "/";
  }

  const pathname = `/${value.replace(/^\/+|\/+$/g, "")}`;

  return pathname || "/";
}

/**
 * Resolve an absolute URL from a path or absolute URL.
 */
function getAbsoluteUrl(value) {
  try {
    return new URL(value, BASE_URL).toString();
  } catch {
    throw new Error(`Invalid SEO URL: ${value}`);
  }
}

/**
 * Generate Next.js App Router metadata.
 */
export function generateSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = [],
  path = "/",
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  noIndex = false,
  noFollow = false,
  type = "website",
} = {}) {
  if (!title || typeof title !== "string" || !title.trim()) {
    throw new Error("generateSEO requires a valid page title.");
  }

  if (!BASE_URL) {
    throw new Error("BASE_URL must be configured.");
  }

  const pageTitle = title.trim();
  const pageDescription =
    typeof description === "string" && description.trim()
      ? description.trim()
      : DEFAULT_DESCRIPTION;

  const normalizedPath = normalizePath(path);
  const canonicalUrl = getAbsoluteUrl(normalizedPath);
  const imageUrl = getAbsoluteUrl(image || DEFAULT_OG_IMAGE);

  const uniqueKeywords = [
    ...new Set(
      (Array.isArray(keywords) ? keywords : [])
        .filter((keyword) => typeof keyword === "string")
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    ),
  ];

  const shouldIndex = !noIndex;
  const shouldFollow = !noFollow;

  return {
    title: pageTitle,
    description: pageDescription,

    ...(uniqueKeywords.length > 0
      ? { keywords: uniqueKeywords }
      : {}),

    metadataBase: new URL(BASE_URL),

    applicationName: SITE_NAME,

    authors: [
      {
        name: ORGANIZATION_NAME,
      },
    ],

    creator: ORGANIZATION_NAME,
    publisher: ORGANIZATION_NAME,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: shouldIndex,
      follow: shouldFollow,

      googleBot: {
        index: shouldIndex,
        follow: shouldFollow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type,

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt || pageTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,

      images: [
        {
          url: imageUrl,
          alt: imageAlt || pageTitle,
        },
      ],
    },
  };
}
