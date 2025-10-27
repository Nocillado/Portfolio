interface TechItem {
  name: string;
  icon?: string; // We could add icons later if needed
}

const devTech: TechItem[] = [
  { name: "React" },
  { name: "PHP" },
  { name: "Java" },
  { name: "Tailwind CSS" },
  { name: "Vite" },
  { name: "CSS" },
  { name: "HTML" },
];

const videoTech: TechItem[] = [
  { name: "Premiere Pro" },
  { name: "After Effects" },
];

export default function TechStack() {
  return (
    <section className="mt-16 mb-20 scroll-animate tech-stack-section">
      <div className="space-y-12">
        {/* Development Technologies */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {devTech.map((tech) => (
              <div
                key={tech.name}
                className="bg-[var(--charcoal-light)] p-4 rounded-lg border border-[var(--off-white-dark)] border-opacity-10 hover:border-[var(--aqua)] transition-colors group"
              >
                <span className="text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Editing Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Video Editing</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {videoTech.map((tech) => (
              <div
                key={tech.name}
                className="bg-[var(--charcoal-light)] p-4 rounded-lg border border-[var(--off-white-dark)] border-opacity-10 hover:border-[var(--aqua)] transition-colors group"
              >
                <span className="text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}