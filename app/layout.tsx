
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Onest } from "next/font/google";

import "./styles/index.css";
import ClientProviders from "./components/client-provider";
import { seoPages } from "./lib/seo-pages";
import { websiteSchema } from "./lib/seo-schema";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = seoPages.home;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const jsonLd = JSON.stringify(websiteSchema).replace(
    /</g,
    "\\u003c"
  );

  return (
    <html lang="en" className={`${onest.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd,
          }}
        />

        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
