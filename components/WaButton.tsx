import WhatsAppIcon from "./WhatsAppIcon";

export default function WaButton({
  href,
  children,
  size = "md",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}) {
  const sizeClasses =
    size === "sm"
      ? "px-5 py-2.5 text-[13px] gap-2"
      : "px-6 py-3 text-[14.5px] gap-2.5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center rounded-full bg-wa font-bold text-white overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-deep shadow-[0_8px_24px_-6px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_30px_-6px_rgba(37,211,102,0.7)] ${sizeClasses} ${className}`}
    >
      {/* Shimmer overlay */}
      <span className="pointer-events-none absolute inset-0 animate-shimmer rounded-full opacity-60" />
      <WhatsAppIcon
        className={size === "sm" ? "relative w-4 h-4 shrink-0" : "relative w-[18px] h-[18px] shrink-0"}
      />
      <span className="relative">{children}</span>
    </a>
  );
}
