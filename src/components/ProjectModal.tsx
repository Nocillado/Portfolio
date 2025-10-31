import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    href?: string;
    tags?: string[];
    images?: string[];
    fullDescription?: string;
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images!.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => 
        prev === project.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--charcoal)] rounded-2xl border border-[var(--off-white-dark)] border-opacity-20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--charcoal-light)] hover:bg-[var(--charcoal-dark)] transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} className="text-[var(--off-white)]" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[var(--off-white)] mb-2">{project.title}</h2>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-3 py-1 bg-[var(--aqua)]/20 text-[var(--aqua)] border border-[var(--aqua)]/30 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image Carousel */}
          {project.images && project.images.length > 0 && (
            <div className="mb-6 relative">
              <div className="overflow-hidden rounded-lg border border-[var(--off-white-dark)] border-opacity-10">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Navigation Buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--charcoal)]/80 hover:bg-[var(--charcoal)] border border-[var(--off-white-dark)]/20 transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} className="text-[var(--off-white)]" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--charcoal)]/80 hover:bg-[var(--charcoal)] border border-[var(--off-white-dark)]/20 transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} className="text-[var(--off-white)]" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--charcoal)]/80 border border-[var(--off-white-dark)]/20">
                    <span className="text-sm text-[var(--off-white)]">
                      {currentImageIndex + 1} / {project.images.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[var(--off-white)] mb-3">About the Project</h3>
            <p className="text-[var(--off-white-dark)] leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Live Demo Button */}
          {project.href && (
            <div className="flex justify-end">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--aqua)] text-[var(--charcoal-dark)] font-medium rounded-lg hover:bg-[var(--aqua-light)] transition-colors duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Visit Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
