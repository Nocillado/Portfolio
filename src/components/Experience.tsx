interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Globe International Distributor Center Inc.",
    location: "Quezon City",
    period: "September 2024 – January 2025",
    responsibilities: [
      "Developed reusable PHP components for an internal dashboard",
      "Wrote SQL queries and assisted in backend data handling",
      "Handled software and hardware installations"
    ]
  },
  {
    company: "Hytec Power Inc.",
    location: "Quezon City",
    period: "January 2025 – April 2025",
    responsibilities: [
      "Maintained and updated a Angular-based content management system",
      "Designed mobile screens using React Native and implemented navigation",
      "Styled components using CSS following responsive design principles"
    ]
  },
  {
    company: "Printing Press",
    location: "Invoice Management / Print and Scan",
    period: "January 2023 - December 2023",
    responsibilities: [
      "Managed document workflows through efficient use of print and scan tools",
      "Ensured accuracy and timely delivery of invoices",
      "Maintained organized digital and physical archives for billing and client records"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="mt-16 scroll-animate">
      <h2 className="text-2xl font-semibold mb-8">Experience</h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="group bg-[var(--charcoal-light)] p-6 rounded-lg border border-[var(--off-white-dark)] border-opacity-10 
              hover:border-[var(--aqua)] transition-all duration-300
              hover:shadow-[0_0_20px_rgba(0,191,166,0.1)] hover:translate-y-[-2px]"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-colors">
                  {exp.company}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-[var(--off-white-dark)]">
                  <span>{exp.location}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 text-[var(--off-white-dark)]">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 size-1 rounded-full bg-[var(--aqua)] shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}