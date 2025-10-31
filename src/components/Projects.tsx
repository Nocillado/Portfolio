import { useState } from "react";
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

const SAMPLE = [
  {
    title: "Kings Hideout",
    description: "An e-commerce platform bringing people together through quality home products that combine style, comfort, and functionality.",
    href: "https://kingshideout.com/",
    tags: ["Liquid", "CSS", "JavaScript", "HTML"],
    image: "/Images/Kingshideout.png",
    images: [
      "/Images/Kingshideout.png",
      "/Images/Keep.png",
      "/Images/Our.png",
      "/Images/shuffle.png"
    ],
    fullDescription: "Kings Hideout is a comprehensive e-commerce platform designed to bring people together through quality home products. The platform combines style, comfort, and functionality to create a seamless shopping experience. Built with Shopify's Liquid template language, the site features custom CSS animations, JavaScript interactivity, and a responsive design that works flawlessly across all devices. The project showcases modern e-commerce best practices including optimized product pages, intuitive navigation, and secure checkout processes."
  },
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
  const [selectedProject, setSelectedProject] = useState<typeof SAMPLE[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof SAMPLE[0], index: number) => {
    // Only make the first project clickable
    if (index === 0) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="mt-10 scroll-animate projects-section">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Selected projects</h2>
          <a className="muted text-sm" href="#">View all</a>
        </div>

        <div className="projects-grid mt-4">
          {SAMPLE.map((p, index) => (
            <div
              key={p.title}
              className="animate-slide-up opacity-0"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
              onClick={() => handleProjectClick(p, index)}
            >
              <ProjectCard 
                title={p.title} 
                description={p.description} 
                href={p.href} 
                tags={p.tags} 
                image={p.image}
                isClickable={index === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          project={selectedProject}
        />
      )}
    </>
  )
}
