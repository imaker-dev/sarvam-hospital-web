"use client";

import { Maximize2 } from "lucide-react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

import { gallery } from "@/app/data/gallery";
import PageHeader from "../layouts/page-header";
import PageWrapper from "../layouts/page-wrapper";

const GalleryPage = () => {
  if (!gallery?.length) return null;

  return (
    <>
      <PageHeader title="Gallery" />

      <PageWrapper>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgFullscreen]}
          selector=".gallery-item"
          elementClassNames="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          download={false}
          controls
          counter
          arrows
          loop
          closable
          escKey
          zoom
          scale={1}
          thumbnail
          thumbWidth={100}
          thumbHeight="80px"
          thumbMargin={6}
          swipe
          swipeToClose
          mode="lg-fade"
          hideBarsDelay={3000}
          mobileSettings={{
            controls: true,
            showCloseIcon: true,
            download: false,
          }}
        >
          {gallery.map((image, index) => (
            <a
              key={`${image.src}-${index}`}
              href={image.src}
              className="
                gallery-item group relative block aspect-[4/3] w-full
                overflow-hidden rounded-2xl bg-[#F7F3F4]
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-[#9C3D58]
                sm:rounded-[28px]
              "
              data-sub-html={image.alt ? `<p>${image.alt}</p>` : ""}
            >
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                loading="lazy"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-[#2B1A2E]/45 via-transparent
                  to-transparent opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute bottom-3 right-3
                  grid h-10 w-10 translate-y-2 place-items-center
                  rounded-full bg-white/95 text-[#2B1A2E] opacity-0 shadow-lg
                  transition-all duration-300
                  group-hover:translate-y-0 group-hover:opacity-100
                  sm:bottom-4 sm:right-4
                "
              >
                <Maximize2 className="h-4 w-4" />
              </span>
            </a>
          ))}
        </LightGallery>
      </PageWrapper>
    </>
  );
};

export default GalleryPage;