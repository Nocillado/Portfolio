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
    <section id="experience" className="mt-16 pt-24 scroll-animate">
      <h2 className="text-2xl font-semibold mb-8">Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="group relative bg-gradient-to-br from-[var(--charcoal-light)] to-[var(--charcoal)] 
              p-8 rounded-2xl border border-[var(--off-white-dark)] border-opacity-10 
              hover:border-[var(--aqua)] hover:border-opacity-50
              transition-all duration-500 ease-out
              hover:shadow-[0_8px_40px_rgba(0,191,166,0.2)]
              hover:translate-y-[-6px]
              before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-[var(--aqua)] before:to-transparent 
              before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-5"
          >
            <div className="relative z-10 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[var(--off-white)] group-hover:text-[var(--aqua)] 
                  transition-colors duration-300 tracking-tight">
                  {exp.company}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm">
                  <span className="font-semibold text-[var(--off-white-dark)] group-hover:text-[var(--off-white)] transition-colors">
                    {exp.location}
                  </span>
                  <span className="hidden sm:block text-[var(--aqua)] opacity-60 text-xs">●</span>
                  <span className="text-[var(--off-white-dark)] opacity-75 group-hover:opacity-100 transition-opacity">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-[var(--aqua)] via-[var(--aqua)] to-transparent opacity-20 
                group-hover:opacity-40 transition-opacity duration-500" />
              
              <ul className="space-y-4 text-[var(--off-white-dark)]">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--aqua)] shrink-0 
                      group-hover:w-2 group-hover:h-2 group-hover:shadow-[0_0_8px_rgba(0,191,166,0.6)]
                      transition-all duration-300" />
                    <span className="leading-relaxed text-sm group-hover:text-[var(--off-white)] transition-colors">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}