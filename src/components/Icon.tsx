const icons = {
  arrowRight: { path: "M3 8h10m0 0l-4-4m4 4l-4 4", viewBox: "0 0 16 16" },
  chevronRight: { path: "M6 3l5 5-5 5", viewBox: "0 0 16 16" },
  chevronLeft: { path: "M10 3l-5 5 5 5", viewBox: "0 0 16 16" },
  arrowDown: { path: "M8 3v10m0 0l-4-4m4 4l4-4", viewBox: "0 0 16 16" },
  external: { path: "M7 3H3v10h10V9M9 3h4v4M13 3l-6 6", viewBox: "0 0 16 16" },
  download: { path: "M8 3v8m0 0l-3-3m3 3l3-3M3 13h10", viewBox: "0 0 16 16" },
  close: { path: "M14 4L4 14M4 4l10 10", viewBox: "0 0 18 18" },
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
  const { path, viewBox } = icons[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
