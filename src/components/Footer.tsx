export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-6 mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center muted text-sm">
        <div>© {new Date().getFullYear()} Christian Mark Nocillado — Web developer</div>
        <div className="mt-2">Built with React, Vite, and Tailwind.</div>
      </div>
    </footer>
  )
}
