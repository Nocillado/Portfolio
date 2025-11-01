export default function Contact() {
  return (
    <section id="contact" className="mt-24 mb-16 pt-24 scroll-animate" data-scroll>
      <h2 className="text-2xl font-semibold mb-8 animate-fade-in">Let's Connect</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-8 animate-slide-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <p className="text-[var(--off-white-dark)] leading-relaxed text-lg">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just want to connect!
          </p>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="contact-item group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-[var(--charcoal-light)] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(0,191,166,0.1)] transform hover:-translate-y-[2px]">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-[var(--aqua)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--aqua)]">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
              </div>
              <a href="mailto:christianmarknocillado03@gmail.com?subject=Let's%20Connect%20-%20Project%20Inquiry" 
                className="text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-all duration-300 relative cursor-pointer
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] 
                after:bg-[var(--aqua)] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform 
                after:duration-300 after:origin-left">
                christianmarknocillado03@gmail.com
              </a>
            </div>
            
            {/* LinkedIn */}
            <div className="contact-item group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-[var(--charcoal-light)] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(152,111,56,0.1)] transform hover:-translate-y-[2px]">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-[var(--aqua)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--aqua)]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
              </div>
              <a href="https://www.linkedin.com/in/nocillado" target="_blank" rel="noopener noreferrer"
                className="text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-all duration-300 relative
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] 
                after:bg-[var(--aqua)] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform 
                after:duration-300 after:origin-left">
                linkedin.com/in/nocillado
              </a>
            </div>
            
            {/* GitHub */}
            <div className="contact-item group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-[var(--charcoal-light)] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(152,111,56,0.1)] transform hover:-translate-y-[2px]">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-[var(--aqua)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--aqua)]">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
              </div>
              <a href="https://github.com/Nocillado" target="_blank" rel="noopener noreferrer"
                className="text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-all duration-300 relative
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] 
                after:bg-[var(--aqua)] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform 
                after:duration-300 after:origin-left">
                github.com/Nocillado
              </a>
            </div>

            {/* Phone */}
            <div className="contact-item group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-[var(--charcoal-light)] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(152,111,56,0.1)] transform hover:-translate-y-[2px]">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-[var(--aqua)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--aqua)]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
              </div>
              <a href="tel:+639953074195"
                className="text-[var(--off-white)] group-hover:text-[var(--aqua)] transition-all duration-300 relative
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] 
                after:bg-[var(--aqua)] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform 
                after:duration-300 after:origin-left">
                09953074195
              </a>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="group animate-slide-up" style={{ '--delay': '0.4s' } as React.CSSProperties}>
          <div className="bg-[var(--charcoal-light)] p-8 rounded-lg border border-[var(--off-white-dark)] border-opacity-10 
            hover:border-[var(--aqua)] hover:border-opacity-20 transition-all duration-300
            hover:shadow-[0_0_30px_rgba(0,191,166,0.1)] hover:translate-y-[-2px]">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[var(--aqua)]">Let's work together</h3>
                <p className="text-[var(--off-white-dark)] mt-3 leading-relaxed">
                  Have a project in mind? I'd love to help bring your ideas to life.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-[var(--off-white-dark)]">Location</div>
                  <div className="text-[var(--off-white)] font-medium">Philippines</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-[var(--off-white-dark)]">Availability</div>
                  <div className="text-[var(--off-white)] font-medium">Open to opportunities</div>
                </div>
              </div>
              
              <a href="mailto:christianmarknocillado03@gmail.com?subject=Let's%20Connect%20-%20Project%20Inquiry" 
                className="inline-flex items-center gap-2 text-[var(--aqua)] hover:text-[var(--aqua-light)] 
                transition-all duration-300 group-hover:gap-3 font-medium">
                Send me a message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}