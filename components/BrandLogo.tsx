type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: "h-[24px] w-[96px]",
  md: "h-[28px] w-[112px]",
};

export function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={`block overflow-hidden ${sizeClasses[size]} ${className}`.trim()}
    >
      <span
        className="block h-[132px] w-[159px] bg-no-repeat"
        style={{
          backgroundImage: "url('/wolf-trades-logo-horizontal-dark.png')",
          backgroundPosition: "-24px -54px",
          backgroundSize: "159px 132px",
        }}
      />
    </span>
  );
}
