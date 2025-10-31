interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

const certifications: CertificationProps[] = [
  {
    title: "Synergy 2025 Best Capstone and Research Award",
    issuer: "Quezon City University",
    date: "2025",
    description: "Awarded for outstanding achievement in capstone research project development and implementation."
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="mt-16 scroll-animate certifications-section">
      <h2 className="text-2xl font-semibold mb-8">Certifications & Awards</h2>
      <div className="space-y-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group bg-[var(--charcoal-light)] p-6 rounded-lg border border-[var(--off-white-dark)] border-opacity-10 
                     hover:border-[var(--aqua)] transition-all duration-300
                     hover:shadow-[0_0_20px_rgba(0,191,166,0.1)] hover:translate-y-[-2px] 
                     animate-slide-up opacity-0"
            style={{ 
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'forwards'
            }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-colors">
                  {cert.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-[var(--off-white-dark)]">
                  <span>{cert.issuer}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{cert.date}</span>
                </div>
              </div>
              {cert.description && (
                <p className="text-[var(--off-white-dark)] leading-relaxed">
                  {cert.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}