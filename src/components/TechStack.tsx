interface TechItem {
  name: string;
  logoPath: string;
}

const devTech: TechItem[] = [
  { 
    name: "React",
    logoPath: "/Icons/React-icon.svg.png"
  },
  { 
    name: "PHP",
    logoPath: "/Icons/PHP-logo.svg.png"
  },
  { 
    name: "Java",
    logoPath: "/Icons/java.png"
  },
  { 
    name: "Tailwind CSS",
    logoPath: "/Icons/Tailwind CSS.png"
  },
  { 
    name: "Vite",
    logoPath: "/Icons/Vite.js.png"
  },
  { 
    name: "CSS",
    logoPath: "/Icons/CSS3.png"
  },
  { 
    name: "HTML",
    logoPath: "/Icons/HTML5.png"
  },
];

const videoTech: TechItem[] = [
  { 
    name: "Premiere Pro",
    logoPath: "/Icons/Adobe Premiere Pro.png"
  },
  { 
    name: "After Effects",
    logoPath: "/Icons/After Effects.png"
  },
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
                className="bg-[var(--charcoal-light)] p-4 rounded-lg border border-[var(--off-white-dark)] border-opacity-10 hover:border-[var(--aqua)] transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src={tech.logoPath} 
                      alt={tech.name} 
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm text-[var(--off-white-dark)] group-hover:text-[var(--aqua)] transition-colors">
                    {tech.name}
                  </span>
                </div>
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
                className="bg-[var(--charcoal-light)] p-4 rounded-lg border border-[var(--off-white-dark)] border-opacity-10 hover:border-[var(--aqua)] transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src={tech.logoPath} 
                      alt={tech.name} 
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm text-[var(--off-white-dark)] group-hover:text-[var(--aqua)] transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}