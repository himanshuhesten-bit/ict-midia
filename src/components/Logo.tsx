export default function Logo({ className = "h-11 w-auto text-navy" }: { className?: string }) {
  return (
    <svg viewBox="0 0 92 64" className={className} aria-hidden="true" focusable="false">
      <path
        d="M10 10 h50 l10 -7 v7 h8 a8 8 0 0 1 8 8 v34 a8 8 0 0 1 -8 8 h-68 a8 8 0 0 1 -8 -8 v-34 a8 8 0 0 1 8 -8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text
        x="44"
        y="46.5"
        textAnchor="middle"
        fontFamily='"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
        fontWeight="700"
        fontSize="27"
        fill="currentColor"
      >
        ICT
      </text>
    </svg>
  );
}
