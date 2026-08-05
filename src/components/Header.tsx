import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
] as const

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-6 pt-6">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0C0C0C]/70 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <a href="#home" className="flex items-baseline gap-1">
          <span className="font-kanit text-xl font-black tracking-tight text-white">
            JS
          </span>
          <span
            className="font-script -ml-1 text-2xl"
            style={{
              background:
                'linear-gradient(90deg, #B600A8 0%, #7621B0 60%, #64CEFB 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            folio
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onMouseEnter={() => setHovered(label)}
              className="font-mono-brand relative rounded-full px-3 py-1.5 text-xs tracking-wider whitespace-nowrap text-white/80 uppercase transition-colors hover:text-white"
            >
              {hovered === label && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{label}</span>
            </a>
          ))}
          <a
            href="#contact"
            onMouseEnter={() => setHovered('Contact')}
            className="font-mono-brand relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs tracking-wider whitespace-nowrap text-white/80 uppercase transition-colors hover:text-white"
          >
            {hovered === 'Contact' && (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">Contact</span>
            <ArrowUpRight className="relative h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/30 hover:text-white lg:hidden"
        >
          {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-2xl border border-white/10 bg-[#0C0C0C]/90 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-mono-brand rounded-xl px-4 py-3 text-sm tracking-wider text-white/80 uppercase transition-colors hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-mono-brand inline-flex items-center gap-1.5 rounded-xl px-4 py-3 text-sm tracking-wider text-white/80 uppercase transition-colors hover:bg-white/10 hover:text-white"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
