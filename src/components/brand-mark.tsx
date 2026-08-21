type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="44" height="44" rx="11" fill="#EFF6FF" />
      <path
        fill="currentColor"
        d="M8 35V12h7l9 9 9-9h7v23h-7V23l-9 9-9-9v12H8Z"
      />
      <path
        fill="#2563EB"
        d="M31 10h7v20c0 5.8-4 10-10 10-4.8 0-8.4-2.7-9.8-6.8l5.5-2.3c.7 1.8 2 2.9 3.8 2.9 2.1 0 3.5-1.4 3.5-3.8V10Z"
      />
    </svg>
  );
}
