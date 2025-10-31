import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-border/40 py-4 backdrop-blur-sm bg-[var(--charcoal)]/40 z-50">
      <div className="w-[80%] mx-auto flex items-center justify-between gap-4">
        <a href="#" className="text-2xl font-semibold tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          CMN
        </a>
        <nav className="hidden md:flex items-center gap-3">
          <a href="#projects" className="muted hover:text-primary-foreground px-2">Projects</a>
          <a href="#contact" className="muted hover:text-primary-foreground px-2">Contact</a>
          <Button asChild className="bg-[var(--aqua)] text-[var(--charcoal-dark)] font-medium hover:bg-[var(--aqua-light)] button" size="sm">
            <a href="#contact" className="button">Hire me</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
