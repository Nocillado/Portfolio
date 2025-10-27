// lightweight presentational component

type Props = {
  title: string
  description: string
  href?: string
  tags?: string[]
}

export default function ProjectCard({ title, description, href, tags = [] }: Props) {
  return (
    <article className="card-min">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="muted mt-2 text-sm">{description}</p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 border border-border/30 rounded">{t}</span>
          ))}
        </div>
      )}
      {href && (
        <a className="mt-4 inline-block text-sm text-primary-foreground underline" href={href} target="_blank">View</a>
      )}
    </article>
  )
}
