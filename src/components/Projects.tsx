import ProjectCard from "./ProjectCard"

const SAMPLE = [
  {
    title: "Minimal Blog",
    description: "A fast, markdown-driven blog with static generation and clean UI.",
    href: "https://example.com",
    tags: ["React", "Vite", "MDX"],
  },
  {
    title: "Design System",
    description: "Component library and tokens used across multiple apps.",
    href: "https://example.com",
    tags: ["TypeScript", "Tailwind", "Accessibility"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mt-10 scroll-animate projects-section">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Selected projects</h2>
        <a className="muted text-sm" href="#">View all</a>
      </div>

      <div className="projects-grid mt-4">
        {SAMPLE.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} href={p.href} tags={p.tags} />
        ))}
      </div>
    </section>
  )
}
