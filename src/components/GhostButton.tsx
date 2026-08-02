interface GhostButtonProps {
  href: string
  label: string
  className?: string
}

export default function GhostButton({ href, label, className = '' }: GhostButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium tracking-widest text-[#D7E2EA] uppercase transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
    </a>
  )
}
