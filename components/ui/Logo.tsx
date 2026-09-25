// "PR" wordmark with a round accent dot.
//
// The dot is drawn as a circle (not a "." glyph) so it keeps the
// same size, spacing and baseline at every font size. Size the
// logo with a font-size class on `className`.

type LogoProps = {
  className?: string;
  dotClassName?: string;
};

export default function Logo({
  className = "",
  dotClassName = "bg-[#ff4d2e]",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold leading-none tracking-[-0.06em] ${className}`}
    >
      PR
      <span
        aria-hidden="true"
        className={`ml-[0.08em] inline-block size-[0.2em] rounded-full ${dotClassName}`}
      />
    </span>
  );
}
