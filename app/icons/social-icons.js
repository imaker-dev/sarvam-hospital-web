const strokeSvg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const FacebookIcon = (props) => (
  <svg {...strokeSvg} {...props}>
    <path d="M15.5 3H13a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7.5a.5.5 0 0 1 .5-.5h2.5z" />
  </svg>
);

export const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg {...strokeSvg} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="0.5" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon = (props) => (
  <svg {...strokeSvg} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const YoutubeIcon = (props) => (
  <svg {...strokeSvg} {...props}>
    <path d="M21.5 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.5 4.8a2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8z" />
    <path d="m10 9 5 3-5 3V9z" />
  </svg>
);
