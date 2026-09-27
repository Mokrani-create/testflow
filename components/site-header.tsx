const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#model', label: 'How it works' },
  { href: '#why', label: 'Why it matters' },
  { href: '#author', label: 'Author' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-primary">
          Testing Workload Planner
        </a>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
