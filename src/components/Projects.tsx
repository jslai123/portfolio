import { useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import GhostButton from './GhostButton'
import { PROJECTS } from '../data/projects'

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'] as const

function ProjectImage({
  basePath,
  alt,
  className = '',
}: {
  basePath: string
  alt: string
  className?: string
}) {
  const [extIndex, setExtIndex] = useState(0)
  const ext = IMAGE_EXTENSIONS[extIndex]
  const src = ext ? `${basePath}.${ext}` : null

  return (
    <div
      className={`relative z-0 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 transition-[transform,box-shadow] duration-500 ease-out hover:z-30 hover:scale-[1.18] hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:rounded-[50px] md:rounded-[60px] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center text-xs text-white/25 sm:text-sm">
        Screenshot coming soon
      </div>
      {src && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          onError={() => setExtIndex((current) => current + 1)}
        />
      )}
    </div>
  )
}

function StackCard({
  index,
  total,
  elevated,
  children,
}: {
  index: number
  total: number
  elevated: boolean
  children: ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isLast = index === total - 1
  const targetScale = 1 - (total - 1 - index) * 0.03
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={containerRef}
      className={`relative ${isLast ? 'h-fit' : 'h-[85vh]'} ${elevated ? 'z-50' : 'z-0'}`}
    >
      <div className="sticky" style={{ top: `${96 + index * 28}px` }}>
        <motion.div style={{ scale }} className="origin-top">
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="font-kanit relative z-20 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-16 pb-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="gradient-heading mb-16 text-center leading-none font-black tracking-tight uppercase sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <StackCard
            key={project.slug}
            index={i}
            total={PROJECTS.length}
            elevated={hoveredIndex === i}
          >
            <div className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
              {/* Top row */}
              <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-center sm:justify-between sm:pb-8">
                <div className="flex items-center gap-4 sm:gap-6">
                  <span
                    className="font-black text-[#D7E2EA]"
                    style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-xs tracking-widest text-[#D7E2EA]/50 uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-medium text-white sm:text-2xl md:text-3xl">
                      {project.name}
                    </h3>
                  </div>
                </div>
                {project.link && (
                  <GhostButton href={project.link} label={project.linkLabel ?? 'View Live'} />
                )}
              </div>

              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[#D7E2EA]/70 sm:text-base">
                {project.description}
              </p>

              <ul className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Image grid: 2 stacked on the left, 1 tall on the right. Hover any image to zoom in on it. */}
              <div
                className="flex gap-4"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex((current) => (current === i ? null : current))}
              >
                <div className="flex w-2/5 flex-col gap-4">
                  <ProjectImage
                    basePath={`/projects/${project.slug}-1`}
                    alt={project.name}
                    className="h-[clamp(180px,24vw,320px)]"
                  />
                  <ProjectImage
                    basePath={`/projects/${project.slug}-2`}
                    alt={project.name}
                    className="h-[clamp(220px,30vw,460px)]"
                  />
                </div>
                <div className="w-3/5">
                  <ProjectImage
                    basePath={`/projects/${project.slug}-3`}
                    alt={project.name}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </StackCard>
        ))}
      </div>
    </section>
  )
}
