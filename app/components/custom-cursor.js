"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label[for]";

const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Skip entirely on touch devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let started = false;
    let frame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // First move: jump to the pointer and reveal the dot
      if (!started) {
        started = true;
        currentX = mouseX;
        currentY = mouseY;
        dot.classList.add("is-visible");
      }

      const isInteractive = !!e.target.closest?.(INTERACTIVE);
      dot.classList.toggle("is-interactive", isInteractive);
    };

    const handleLeave = () => dot.classList.remove("is-visible");
    const handleEnter = () => started && dot.classList.add("is-visible");

    const animate = () => {
      // 0.15 = more lag/chase, 0.3 = tighter follow
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={dotRef} className="cursor-dot">
      <span className="cursor-dot-inner" />
    </div>
  );
};

export default CustomCursor;
