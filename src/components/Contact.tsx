import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'

const CONTACT_LINKS = [
  {
    label: 'jslai1030@gmail.com',
    href: 'mailto:jslai1030@gmail.com',
    icon: Mail,
  },
  {
    label: '+60 18-941 6988',
    href: 'tel:+60189416988',
    icon: Phone,
  },
  {
    label: 'github.com/jslai123',
    href: 'https://github.com/jslai123',
    icon: ArrowUpRight,
  },
] as const

export default function Contact() {
  return (
    <section id="contact" className="font-kanit relative z-20 bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="gradient-heading leading-none font-black tracking-tight uppercase"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let's talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#D7E2EA]/80 md:text-lg">
            Got a question about one of these projects, or just want to say
            hi? Feel free to reach out any time.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#D7E2EA]/80 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4 text-[#BBCCD7]" />
              {label}
            </a>
          ))}
        </FadeIn>

        <FadeIn delay={0.45} y={20} className="mt-12">
          <ContactButton href="mailto:jslai1030@gmail.com" />
        </FadeIn>
      </div>
    </section>
  )
}
