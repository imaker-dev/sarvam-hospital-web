import { ChevronDown } from "lucide-react";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

function FaqItem({ item, open, onToggle, buttonId, panelId }) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 motion-reduce:transition-none ${
        open
          ? "border-secondary-500 bg-secondary-500 shadow-[0_24px_50px_-28px_rgba(2,53,118,0.45)]"
          : "border-secondary-500/10 bg-white hover:border-primary-500/35"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-center gap-4 rounded-2xl px-5 py-5 text-left sm:gap-5 sm:px-6 ${focusRing}`}
        >
          <span
            aria-hidden
            className={`w-6 shrink-0 text-sm font-semibold tabular-nums ${
              open ? "text-primary-200" : "text-primary-600"
            }`}
          >
            {String(item.n).padStart(2, "0")}
          </span>

          <span
            className={`flex-1 text-[1rem] font-semibold leading-snug sm:text-[1.0625rem] ${
              open ? "text-white" : "text-secondary-500"
            }`}
          >
            {item.question}
          </span>

          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${
              open
                ? "bg-primary-500 text-white"
                : "bg-primary-50 text-secondary-500"
            }`}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden ${
            open ? "visible" : "invisible"
          } transition-[visibility] duration-300`}
        >
          <div className="space-y-3 pb-6 pl-[3.75rem] pr-5 text-[0.9375rem] leading-[1.75] text-white/80 sm:pl-[4.25rem] sm:pr-8">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;