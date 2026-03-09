const icons = {
  arrowRight: { path: "M3 8h10m0 0l-4-4m4 4l-4 4", viewBox: "0 0 16 16" },
  chevronRight: { path: "M6 3l5 5-5 5", viewBox: "0 0 16 16" },
  chevronLeft: { path: "M10 3l-5 5 5 5", viewBox: "0 0 16 16" },
  arrowDown: { path: "M8 3v10m0 0l-4-4m4 4l4-4", viewBox: "0 0 16 16" },
  external: { path: "M7 3H3v10h10V9M9 3h4v4M13 3l-6 6", viewBox: "0 0 16 16" },
  download: { path: "M8 3v8m0 0l-3-3m3 3l3-3M3 13h10", viewBox: "0 0 16 16" },
  close: { path: "M14 4L4 14M4 4l10 10", viewBox: "0 0 18 18" },
  linkedin: {
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    viewBox: "0 0 24 24",
    filled: true,
  },
  email: {
    path: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z",
    viewBox: "0 0 24 24",
    filled: true,
  },
  github: {
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    viewBox: "0 0 24 24",
    filled: true,
  },
} as const;

export type IconName = keyof typeof icons;

export default function Icon({
  name,
  size = 16,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const { path, viewBox, ...rest } = icons[name];
  const filled = "filled" in rest && rest.filled;
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={filled ? "currentColor" : "none"}
      aria-hidden="true"
      className={className}
    >
      {filled ? (
        <path d={path} />
      ) : (
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
