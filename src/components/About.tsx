import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const SKILLS = [
  'WordPress & WooCommerce',
  'PHP',
  'Java & Spring Boot',
  'React',
  'MySQL',
  'Docker',
  'Tailwind CSS',
  'Git',
] as const

export default function About() {
  return (
    <section
      id="about"
      className="font-kanit relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {/* Decorative corner glows */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <div className="pointer-events-none h-[120px] w-[120px] rounded-full bg-[#64CEFB]/20 blur-3xl sm:h-[160px] sm:w-[160px] md:h-[210px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <div className="pointer-events-none h-[100px] w-[100px] rounded-full bg-[#B600A8]/20 blur-3xl sm:h-[140px] sm:w-[140px] md:h-[180px] md:w-[180px]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <div className="pointer-events-none h-[120px] w-[120px] rounded-full bg-[#7621B0]/20 blur-3xl sm:h-[160px] sm:w-[160px] md:h-[210px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute right-[3%] bottom-[8%] sm:right-[6%] md:right-[10%]">
        <div className="pointer-events-none h-[130px] w-[130px] rounded-full bg-[#BE4C00]/20 blur-3xl sm:h-[170px] sm:w-[170px] md:h-[220px] md:w-[220px]" />
      </FadeIn>

      <FadeIn delay={0} y={40}>
        <h2
          className="gradient-heading text-center leading-none font-black tracking-tight uppercase"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
      </FadeIn>

      <div className="relative z-10 mt-10 flex flex-col items-center gap-10 sm:mt-14 sm:gap-14 md:mt-16 md:gap-16">
        <div style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
          <AnimatedText
            text="I'm a software engineering student in Penang, Malaysia, currently studying part-time at Wawasan Open University. I've built full-stack projects end to end, from WordPress storefronts to Spring Boot backends and React frontends."
            className="max-w-[560px] text-center leading-relaxed font-medium text-[#D7E2EA]"
          />
        </div>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <ContactButton />

          <ul className="flex max-w-2xl flex-wrap justify-center gap-2.5">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/80"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
