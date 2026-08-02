import { ArrowRight } from 'lucide-react'
import ShinyText from './components/ShinyText'
import Header from './components/Header'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

// Free to use under the Pexels License: https://www.pexels.com/video/abstract-blue-particles-on-dark-background-29919008/
const VIDEO_SRC =
  'https://videos.pexels.com/video-files/29919008/12841733_1920_1080_30fps.mp4'

export default function App() {
  return (
    <>
    <Header />
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Scrim keeps white type readable over bright frames, heaviest at the bottom-left where the hero copy sits. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-6">
        {/* Hero content, anchored to the bottom-left */}
        <div className="flex flex-1 flex-col items-start justify-end gap-5 pb-16 text-left">
          <p className="text-xs tracking-tight text-white/80 uppercase md:text-sm">
            Software Engineering Student · Penang, Malaysia
          </p>

          <h1 className="text-4xl leading-[0.95] font-medium tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">I build</span>
            <ShinyText
              text="full-stack web apps."
              speed={3}
              baseColor="#64CEFB"
              shineColor="#ffffff"
              spread={100}
              className="block"
            />
          </h1>

          <p className="max-w-[42ch] text-sm leading-relaxed text-white/80 md:text-base">
            Software engineering student in Penang, Malaysia. I design,
            build, and deploy full-stack applications end to end, from
            database schema to production deployment.
          </p>

          <a
            href="#projects"
            className="group mt-2 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition-colors hover:bg-white/90 md:px-8 md:py-4 md:text-base"
          >
            View My Projects
            <ArrowRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
    <TechMarquee />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}
