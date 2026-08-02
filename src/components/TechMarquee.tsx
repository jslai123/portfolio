import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { TECH_STACK, type TechItem } from '../data/techStack'

const ROW_1 = TECH_STACK.slice(0, 4)
const ROW_2 = TECH_STACK.slice(4)

function TileContent({ item }: { item: TechItem }) {
  const Icon = item.icon
  return (
    <span className="flex items-center gap-3 pr-10 sm:pr-14">
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

// A standard, seamless infinite marquee: the item list is rendered twice
// back to back, and the whole strip animates from 0 to -50% (its own
// half-width) on a plain linear loop — once it's shifted by exactly one
// copy's width, the second copy sits exactly where the first started, so
// the loop point is invisible. This needs no width measurement or
// per-tile position math, so there's nothing that can drift or race
// against web font loading.
function MarqueeRow({ items, direction, duration }: { items: TechItem[]; direction: 'left' | 'right'; duration: number }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max items-center whitespace-nowrap"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <TileContent key={i} item={item} />
        ))}
      </motion.div>
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section className="font-kanit overflow-hidden bg-[#0C0C0C] py-16 sm:py-20 md:py-24">
      <FadeIn delay={0} y={20}>
        <p className="mb-10 text-center text-xs tracking-[0.3em] text-[#D7E2EA]/40 uppercase sm:mb-12 sm:text-sm">
          Tools &amp; tech I reach for
        </p>
      </FadeIn>

      <div className="flex flex-col gap-6 sm:gap-8">
        <MarqueeRow items={ROW_1} direction="left" duration={26} />
        <MarqueeRow items={ROW_2} direction="right" duration={26} />
      </div>
    </section>
  )
}
