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

const TechCard = ({ tech }: { tech: TechItem }) => (
  <div className="flex items-center justify-center min-w-[150px] flex-shrink-0">
    <img
      className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
      src={tech.logoPath}
      alt={`${tech.name} Logo`}
      height="48"
      width="auto"
    />
  </div>
);

export default function TechStack() {
  const duplicatedTech = [...devTech, ...devTech, ...devTech];

  return (
    <section className="mt-16 mb-20 scroll-animate tech-stack-section">
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>
        <div className="relative overflow-hidden w-full">
          {/* Left blur edge */}
          <div className="absolute left-0 top-0 bottom-0 w-32 backdrop-blur-md bg-gradient-to-r from-[var(--charcoal-dark)] via-[var(--charcoal-dark)]/50 to-transparent z-10 pointer-events-none" />
          
          {/* Right blur edge */}
          <div className="absolute right-0 top-0 bottom-0 w-32 backdrop-blur-md bg-gradient-to-l from-[var(--charcoal-dark)] via-[var(--charcoal-dark)]/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-8 animate-scroll-left hover:pause-animation">
            {duplicatedTech.map((tech, index) => (
              <TechCard key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}