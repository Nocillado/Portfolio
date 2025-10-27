import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="mt-20 scroll-animate">
      <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-[var(--off-white-dark)] leading-relaxed">
            I'm currently available for freelance work and exciting opportunities. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--off-white-dark)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a href="mailto:christianmark.nocillado@gmail.com" 
                className="hover:text-[var(--aqua)] transition-colors">
                christianmark.nocillado@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-[var(--off-white-dark)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753c0-.249 1.51-2.772 1.818-4.013z"/>
              </svg>
              <a href="https://twitter.com/nocillado" target="_blank" rel="noopener noreferrer"
                className="hover:text-[var(--aqua)] transition-colors">
                @nocillado
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-[var(--off-white-dark)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              <a href="https://github.com/christianmark" target="_blank" rel="noopener noreferrer"
                className="hover:text-[var(--aqua)] transition-colors">
                github.com/christianmark
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[var(--charcoal-light)] p-6 rounded-lg border border-[var(--off-white-dark)] border-opacity-10">
          <h3 className="text-lg font-semibold mb-4">Ready to work together?</h3>
          <p className="text-[var(--off-white-dark)] mb-6">
            Let's discuss your project and see how I can help bring your ideas to life.
          </p>
          <Button asChild className="bg-[var(--aqua)] text-[var(--charcoal-dark)] font-medium hover:bg-[var(--aqua-light)]">
            <a href="mailto:christianmark.nocillado@gmail.com">Send me a message</a>
          </Button>
        </div>
      </div>
    </section>
  )
}