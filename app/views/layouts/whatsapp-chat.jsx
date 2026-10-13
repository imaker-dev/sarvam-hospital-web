"use client";

import { useEffect, useState } from "react";
import { CONTACT_INFO } from "@/app/const";

/* ------------------------------------------------------------------ */
/* Floating WhatsApp button.                                           */
/*  - Round green button, bottom-right of the screen.                  */
/*  - Hover (or keyboard focus) expands it into a "Chat with us" pill. */
/*  - Click opens a WhatsApp chat with a pre-filled message.           */
/*  - On first visit it peeks open for a few seconds, then collapses.  */
/*                                                                     */
/* Usage (once, in your root layout):  <WhatsAppChat />                */
/* ------------------------------------------------------------------ */

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppChat({
  phone = CONTACT_INFO?.whatsapp ?? CONTACT_INFO?.phone ?? "",
  countryCode = "91", // added when the number has only 10 digits
  message = "Hello, I would like to know more about your services.",
  title = "Chat with us",
  subtitle = "on WhatsApp",
  peek = true, // briefly show the label on the first visit of a session
  className = "bottom-5 right-5 sm:bottom-6 sm:right-6",
}) {
  const [peeking, setPeeking] = useState(false);

  useEffect(() => {
    if (!peek) return;
    try {
      if (sessionStorage.getItem("wa-peeked")) return;
    } catch {}

    const show = setTimeout(() => setPeeking(true), 2500);
    const hide = setTimeout(() => {
      setPeeking(false);
      try {
        sessionStorage.setItem("wa-peeked", "1");
      } catch {}
    }, 7500);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [peek]);

  const digits = String(phone).replace(/\D/g, "");
  if (!digits) return null;
  const number = digits.length === 10 ? `${countryCode}${digits}` : digits;
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`fixed z-40 print:hidden ${className}`}>
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: .45; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .wa-pulse { animation: wa-pulse 2.8s ease-out infinite; }
        .wa-btn:hover .wa-pulse, .wa-btn:focus-visible .wa-pulse { animation: none; opacity: 0; }
        @media (prefers-reduced-motion: reduce) { .wa-pulse { animation: none; opacity: 0; } }
      `}</style>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} ${subtitle}`}
        className="wa-btn group relative flex h-14 items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.7)] transition-[background-color,box-shadow] duration-300 hover:bg-[#1EBE5A] hover:shadow-[0_18px_40px_-10px_rgba(37,211,102,0.8)] focus-visible:bg-[#1EBE5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35183F]"
      >
        {/* label: expands to the left on hover / focus / first-visit peek */}
        <span
          className={`overflow-hidden whitespace-nowrap text-left transition-[max-width,opacity,padding] duration-300 ease-out motion-reduce:transition-none group-hover:max-w-[16rem] group-hover:pl-6 group-hover:opacity-100 group-focus-visible:max-w-[16rem] group-focus-visible:pl-6 group-focus-visible:opacity-100 ${
            peeking ? "max-w-[16rem] pl-6 opacity-100" : "max-w-0 pl-0 opacity-0"
          }`}
        >
          <span className="block text-[0.9375rem] font-semibold leading-tight">
            {title}
          </span>
          <span className="block text-xs leading-tight text-white/85">
            {subtitle}
          </span>
        </span>

        {/* icon */}
        <span className="relative grid h-14 w-14 shrink-0 place-items-center">
          <span
            aria-hidden
            className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]"
          />
          <WhatsAppIcon className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none" />
        </span>
      </a>
    </div>
  );
}