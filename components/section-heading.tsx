export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-sm text-primary/60">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary">{title}</h2>
    </div>
  )
}
