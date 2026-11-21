// Small stroke icon set used across the site.
const P = {
  bot: <><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.5h5" /><circle cx="12" cy="3.5" r="1" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" /></>,
  code: <path d="M8 8.5 4.5 12 8 15.5M16 8.5 19.5 12 16 15.5M13.5 5 10.5 19" />,
  server: <><rect x="3.5" y="4" width="17" height="6" rx="1.5" /><rect x="3.5" y="14" width="17" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></>,
  inbox: <><path d="M4 13l2.5-7h11L20 13v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><path d="M4 13h4.5l1 2h5l1-2H20" /></>,
  send: <path d="M20 4 10 14M20 4l-6 16-4-6-6-4z" />,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16M9 14l2 2 4-4" /></>,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  tooth: <path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 5 2 8s1 5.5 2.5 5.5 1.5-4 4.5-4 3 4 4.5 4 2-2.5 2.5-5.5 2-5 2-8C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z" />,
  home: <path d="M3 11 12 4l9 7M5 10v10h5v-6h4v6h5V10" />,
  clock: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5M9 2h6M12 2v3" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" /></>,
  shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  support: <><path d="M3 14v-2a9 9 0 0 1 18 0v2" /><path d="M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z" /><path d="M19 17v1a3 3 0 0 1-3 3h-3" /></>,
  zoom: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5M11 8v6M8 11h6" /></>,
  cap: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v5" /></>,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" /></>,
  tool: <path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 1-2-2zM5 5l4 4" />,
}

export default function Icon({ name, className = '' }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name] ?? P.code}
    </svg>
  )
}
