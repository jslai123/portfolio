import { motion } from 'framer-motion'

export interface ShinyTextProps {
  /** The text to render with the sweeping shine effect. */
  text: string
  /** Seconds for one full left-to-right sweep. */
  speed?: number
  /** Colour of the text at rest. */
  baseColor?: string
  /** Colour of the moving highlight. */
  shineColor?: string
  /** Angle of the gradient, in degrees. */
  spread?: number
  className?: string
}

/**
 * Renders text filled with a gradient that sweeps continuously from left to
 * right. The gradient is clipped to the glyphs, so the shine appears to travel
 * through the letters themselves rather than behind them.
 */
export default function ShinyText({
  text,
  speed = 3,
  baseColor = '#64CEFB',
  shineColor = '#ffffff',
  spread = 100,
  className = '',
}: ShinyTextProps) {
  return (
    <motion.span
      className={className}
      style={{
        display: 'inline-block',
        backgroundImage: `linear-gradient(${spread}deg, ${baseColor} 42%, ${shineColor} 50%, ${baseColor} 58%)`,
        backgroundSize: '200% 100%',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{ backgroundPosition: ['-100% 0%', '100% 0%'] }}
      transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
    >
      {text}
    </motion.span>
  )
}
