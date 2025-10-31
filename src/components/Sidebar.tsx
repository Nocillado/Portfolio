import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button - Synced with Header */}
      <div className="fixed top-0 left-0 w-full border-b border-border/40 py-4 backdrop-blur-sm bg-[var(--charcoal)]/40 z-[60] pointer-events-none">
        <div className="w-[80%] mx-auto flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-transparent hover:bg-[var(--charcoal-light)]/50 transition-colors pointer-events-auto"
            aria-label="Toggle menu"
          >
            <Menu size={24} className="text-[var(--off-white)]" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[var(--charcoal)] border-r border-[var(--off-white-dark)]/20 shadow-2xl z-[95] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[var(--off-white-dark)]/20">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Navigation
          </h2>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-lg hover:bg-[var(--charcoal-light)] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-[var(--off-white)]" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 gap-2">
          <a
            href="#hero"
            onClick={closeSidebar}
            className="text-lg text-[var(--off-white)] hover:text-[var(--aqua)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--charcoal-light)]"
          >
            Home
          </a>
          <a
            href="#experience"
            onClick={closeSidebar}
            className="text-lg text-[var(--off-white)] hover:text-[var(--aqua)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--charcoal-light)]"
          >
            Experience
          </a>
          <a
            href="#tech-stack"
            onClick={closeSidebar}
            className="text-lg text-[var(--off-white)] hover:text-[var(--aqua)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--charcoal-light)]"
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            onClick={closeSidebar}
            className="text-lg text-[var(--off-white)] hover:text-[var(--aqua)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--charcoal-light)]"
          >
            Projects
          </a>
          <a
            href="#certifications"
            onClick={closeSidebar}
            className="text-lg text-[var(--off-white)] hover:text-[var(--aqua)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--charcoal-light)]"
          >
            Certifications
          </a>
          <a
            href="#contact"
            onClick={closeSidebar}
            className="text-lg text-[var(--off-white)] hover:text-[var(--aqua)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--charcoal-light)]"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
