import { useState } from 'react'
import { cn } from '@/lib/utils'
import FadeIn from './FadeIn'

const SKILLS = [
  {
    number: '01',
    name: 'WordPress & CMS',
    description:
      'Building and customizing WordPress sites with WooCommerce, from theme setup to security hardening and performance tuning.',
  },
  {
    number: '02',
    name: 'Backend Development',
    description:
      'Designing REST APIs and server-side logic with Java, Spring Boot, and Spring Security, backed by a properly normalized MySQL schema.',
  },
  {
    number: '03',
    name: 'Frontend Development',
    description:
      'Building responsive interfaces with React, TypeScript, and Tailwind CSS that stay fast and easy to maintain.',
  },
  {
    number: '04',
    name: 'Database Design',
    description:
      'Modeling relational schemas in MySQL that hold up under real data, with the right constraints and indexes from the start.',
  },
  {
    number: '05',
    name: 'Deployment & DevOps',
    description:
      'Packaging apps with Docker and shipping them to real hosts like Railway and Cloudflare Pages, not just running them locally.',
  },
] as const

function SkillCard({
  skill,
  index,
  hovered,
  setHovered,
}: {
  skill: (typeof SKILLS)[number]
  index: number
  hovered: number | null
  setHovered: (index: number | null) => void
}) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'flex flex-col gap-4 rounded-2xl border border-black/10 bg-white/40 p-7 shadow-[0_8px_32px_rgba(12,12,12,0.06)] backdrop-blur-xl transition-all duration-300 ease-out sm:p-8',
        hovered === index && 'scale-[1.02] border-black/20 bg-white/70 shadow-[0_16px_48px_rgba(12,12,12,0.12)]',
        hovered !== null && hovered !== index && 'scale-[0.98] opacity-60 blur-[1px]',
      )}
    >
      <span
        className="font-black text-[#0C0C0C]"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
      >
        {skill.number}
      </span>
      <h3
        className="font-medium tracking-tight text-[#0C0C0C] uppercase"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
      >
        {skill.name}
      </h3>
      <p
        className="leading-relaxed font-light text-[#0C0C0C]/60"
        style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}
      >
        {skill.description}
      </p>
    </div>
  )
}

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="font-kanit relative z-10 rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center leading-none font-black tracking-tight text-[#0C0C0C] uppercase sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <SkillCard
              skill={skill}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
