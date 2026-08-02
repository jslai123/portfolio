import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { TECH_STACK, type TechItem } from '../data/techStack'

const GAP = 48
const REPEATS = 3
const DURATION = 42

function TileContent({ item }: { item: TechItem }) {
  const Icon = item.icon
  return (
    <span className="flex items-center gap-3">
      <Icon className="h-6 w-6 shrink-0 text-[#BBCCD7]/60 sm:h-7 sm:w-7" />
      <span
        className="gradient-heading font-black tracking-tight uppercase"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
      >
        {item.name}
      </span>
      <span className="text-2xl text-white/15">/</span>
    </span>
  )
}

export default function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [ready, setReady] = useState(false)
  const [containerWidth, setContainerWidth] = useState(1200)
  const [rowGap, setRowGap] = useState(96)
  const [itemWidths, setItemWidths] = useState<number[]>(
    TECH_STACK.map(() => 300),
  )

  useLayoutEffect(() => {
    function measure() {
      if (!containerRef.current) return
      setContainerWidth(containerRef.current.offsetWidth)
      setRowGap(window.innerWidth < 640 ? 76 : window.innerWidth < 1024 ? 88 : 104)
      const widths = measureRefs.current.map((el) => (el ? el.offsetWidth + GAP : 300))
      setItemWidths(widths)
      setReady(true)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const totalWidth = itemWidths.reduce((sum, w) => sum + w, 0)
  const belt = Array.from({ length: TECH_STACK.length * REPEATS }, (_, i) => i)

  let cumulative = 0
  const offsets = belt.map((i) => {
    const w = itemWidths[i % TECH_STACK.length]
    const offset = cumulative
    cumulative += w
    return offset
  })

  return (
    <section className="font-kanit overflow-hidden bg-[#0C0C0C] py-16 sm:py-20 md:py-24">
      <FadeIn delay={0} y={20}>
        <p className="mb-10 text-center text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase sm:mb-12 sm:text-sm">
          Tools &amp; tech I reach for
        </p>
      </FadeIn>

      {/* Hidden measuring pass: renders each unique tile once to get its real width */}
      <div className="pointer-events-none absolute -z-10 opacity-0" aria-hidden="true">
        {TECH_STACK.map((item, i) => (
          <span key={item.name} ref={(el) => { measureRefs.current[i] = el }} className="inline-flex whitespace-nowrap">
            <TileContent item={item} />
          </span>
        ))}
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{ height: rowGap + 64, visibility: ready ? 'visible' : 'hidden' }}
      >
        {belt.map((i) => {
          const item = TECH_STACK[i % TECH_STACK.length]
          const itemWidth = itemWidths[i % TECH_STACK.length]
          const delay = -((offsets[i] / totalWidth) * DURATION)

          return (
            <motion.span
              key={i}
              className="absolute top-0 left-0 flex items-center whitespace-nowrap"
              style={{ willChange: 'transform' }}
              animate={{
                x: [-itemWidth, containerWidth, containerWidth, -itemWidth, -itemWidth],
                y: [0, 0, rowGap, rowGap, 0],
              }}
              transition={{
                duration: DURATION,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.47, 0.5, 0.97, 1],
                delay,
              }}
            >
              <TileContent item={item} />
            </motion.span>
          )
        })}
      </div>
    </section>
  )
}
