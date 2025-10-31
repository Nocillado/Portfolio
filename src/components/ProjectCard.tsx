// lightweight presentational component

type Props = {
  title: string
  description: string
  href?: string
  tags?: string[]
  image?: string
  isClickable?: boolean
}

export default function ProjectCard({ title, description, href, tags = [], image, isClickable = false }: Props) {
  return (
    <article className={`card-min group relative overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_12px_40px_rgba(0,191,166,0.2)] ${isClickable ? 'cursor-pointer' : ''}`}>
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold group-hover:text-[var(--aqua)] transition-colors duration-300">{title}</h3>
      <p className="muted mt-2 text-sm">{description}</p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 border border-border/30 rounded">{t}</span>
          ))}
        </div>
      )}
      {href && (
        <a 
          className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--aqua)] hover:text-[var(--aqua-light)] transition-colors duration-300 group/link" 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Live Demo
        </a>
      )}
    </article>
  )
}
