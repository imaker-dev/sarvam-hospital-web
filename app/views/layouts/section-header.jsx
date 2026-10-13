import React from "react";
import clsx from "clsx";

export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-[12px] md:text-[14px] text-primary-500",
        className,
      )}
    >
      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
        <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary-500" />
      </span>

      <span>{children}</span>
    </p>
  );
}

export function HighlightText({ children, className = "" }) {
  return (
    <span className={clsx("text-primary-500", className)}>{children}</span>
  );
}

function renderTitle(title, highlight) {
  if (typeof title !== "string" || !highlight) return title;

  const idx = title.indexOf(highlight);
  if (idx === -1) return title;

  const before = title.slice(0, idx);
  const after = title.slice(idx + highlight.length);

  return (
    <>
      {before}
      <HighlightText>{highlight}</HighlightText>
      {after}
    </>
  );
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align,
  light = false,
  actions,
  className = "",
}) {
  const resolvedAlign = align || (actions ? "responsive" : "center");

  const textBlockClasses =
    resolvedAlign === "center"
      ? "mx-auto items-center text-center"
      : resolvedAlign === "left"
        ? "items-start text-left"
        : "items-center text-center lg:items-start lg:text-left";

  const eyebrowAlignClasses =
    resolvedAlign === "center"
      ? "justify-center"
      : resolvedAlign === "left"
        ? ""
        : "justify-center lg:justify-start";

  const descriptionAlignClasses =
    resolvedAlign === "center"
      ? "mx-auto"
      : resolvedAlign === "left"
        ? ""
        : "mx-auto lg:mx-0";

  return (
    <div
      className={clsx(
        "relative mb-10 overflow-visible lg:mb-14",
        actions &&
          "flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div
        className={clsx("relative flex max-w-2xl flex-col", textBlockClasses)}
      >
        {badge && (
          <Eyebrow light={light} className={clsx("mb-4", eyebrowAlignClasses)}>
            {badge}
          </Eyebrow>
        )}

        <h2
          className={clsx(
            "text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[40px] sm:leading-[1.1] lg:text-[48px] lg:leading-[1.08] lg:tracking-[-0.025em]",
            light ? "text-white" : "text-ink",
          )}
        >
          {renderTitle(title, highlight)}
        </h2>

        {description && (
          <p
            className={clsx(
              "mt-5 max-w-xl text-[15px] font-normal leading-[1.6] sm:text-[16px] lg:text-[17px]",
              light ? "text-white/70" : "text-gray-500",
              descriptionAlignClasses,
            )}
          >
            {description}
          </p>
        )}
      </div>

      {actions && (
        <div
          className={clsx(
            "relative flex shrink-0 flex-wrap items-center gap-3",
            resolvedAlign === "center" && "justify-center",
          )}
        >
          {actions}
        </div>
      )}
    </div>
  );
}
