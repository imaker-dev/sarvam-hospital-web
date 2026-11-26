
"use client";

import { CONTACT_INFO } from "@/app/const";


const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.423-8.421ZM12.05 21.78a9.9 9.9 0 0 1-5.04-1.375l-.36-.214-3.744.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.436-9.885 9.89-9.885a9.82 9.82 0 0 1 6.99 2.897 9.83 9.83 0 0 1 2.89 6.993c-.003 5.45-4.438 9.884-9.881 9.884Zm5.426-7.402c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
  </svg>
);


export default function WhatsAppChat({
  phone = CONTACT_INFO?.whatsapp ?? CONTACT_INFO?.phone ?? "",
  countryCode = "91",
  message = "Hello, I would like to know more about your services.",
  title = "Chat with us",
  subtitle = "on WhatsApp",
  className = "bottom-5 right-5 sm:bottom-6 sm:right-6",
}) {
  const digits = String(phone).replace(/\D/g, "");

  if (!digits) return null;

  const number =
    digits.length === 10 ? `${countryCode}${digits}` : digits;

  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`fixed z-40 print:hidden ${className}`}>
      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: .45; }
          70%, 100% { transform: scale(1.55); opacity: 0; }
        }

        .wa-pulse {
          animation: wa-pulse 2.8s ease-out infinite;
        }

        .wa-btn:hover .wa-pulse,
        .wa-btn:focus-visible .wa-pulse {
          animation: none;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .wa-pulse {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} ${subtitle}`}
        className="wa-btn group relative flex h-14 items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.7)] transition-all duration-300 hover:bg-[#1EBE5A] hover:shadow-[0_18px_40px_-10px_rgba(37,211,102,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35183F]"
      >
        {/* Expandable label */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-left opacity-0 transition-[max-width,opacity,padding] duration-300 ease-out group-hover:max-w-[16rem] group-hover:pl-5 group-hover:opacity-100 group-focus-visible:max-w-[16rem] group-focus-visible:pl-5 group-focus-visible:opacity-100 motion-reduce:transition-none">
          <span className="block text-[0.9375rem] font-semibold leading-tight">
            {title}
          </span>
          <span className="block text-xs leading-tight text-white/85">
            {subtitle}
          </span>
        </span>

        {/* WhatsApp icon */}
        <span className="relative grid h-14 w-14 shrink-0 place-items-center">
          <span
            aria-hidden="true"
            className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]"
          />
          <WhatsAppIcon className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none" />
        </span>
      </a>
    </div>
  );
}
