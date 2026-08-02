import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCharProps {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

function AnimatedChar({ char, progress, range }: AnimatedCharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute top-0 left-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const totalChars = text.length
  const words = text.split(' ')
  let globalIndex = 0

  return (
    <p ref={ref} className={className}>
      {words.map((word, wordIndex) => {
        const startIndex = globalIndex
        globalIndex += word.length + 1

        return (
          <span key={wordIndex}>
            <span className="inline-block">
              {word.split('').map((char, charIndex) => {
                const idx = startIndex + charIndex
                const start = idx / totalChars
                const end = start + 1 / totalChars
                return (
                  <AnimatedChar
                    key={charIndex}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                )
              })}
            </span>
            {wordIndex < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </p>
  )
}
