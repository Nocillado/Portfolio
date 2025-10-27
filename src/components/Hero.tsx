import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-8 scroll-animate hero-section">
      <div className="max-w-3xl">
        <h1 className="hero-title text-4xl md:text-5xl font-bold">Christian Mark Nocillado</h1>
        
        <div className="mt-8 space-y-6 max-w-3xl">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl text-[var(--aqua)] font-heading">
              Aspiring Front End Web-Developer and Video Editor
            </h2>
            
            <div className="space-y-4 text-[var(--off-white-dark)]">
              <p className="leading-relaxed">
                I'm Christian Mark Nocillado, a passionate Web Developer who enjoys building clean, responsive, and 
                user-friendly websites. I love working with layouts, colors, and interactive designs that create 
                smooth and engaging digital experiences.
              </p>
              
              <p className="leading-relaxed">
                I'm also a dedicated Video Editor with a strong interest in storytelling through visuals. Using 
                Adobe Premiere Pro, I find joy in trimming the perfect scene to syncing transitions with the right beat.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button asChild className="bg-[var(--aqua)] text-[var(--charcoal-dark)] font-medium hover:bg-[var(--aqua-light)]">
              <a href="#projects">See projects</a>
            </Button>
            <Button asChild className="border border-[var(--aqua)] bg-transparent hover:bg-[var(--aqua)] hover:bg-opacity-10 text-[var(--off-white)] hover:text-[var(--aqua-light)] transition-colors">
              <a href="mailto:hello@example.com" className="flex items-center gap-2">
                <span>hello@example.com</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
