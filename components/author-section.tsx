import { SectionHeading } from './section-heading'

export function AuthorSection() {
  return (
    <section id="author" className="scroll-mt-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:gap-16">
        <SectionHeading eyebrow="04" title="Author" />
        <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-8 sm:flex-row sm:items-center">
          <span
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-semibold text-primary-foreground"
            aria-hidden="true"
          >
            FM
          </span>
          <div>
            <p className="text-xl font-semibold text-foreground">Fatiha Mokrani</p>
            <p className="mt-1 text-muted-foreground">ACC Software Testing student</p>
            <p className="mt-4 text-sm text-muted-foreground">
              This is a student portfolio project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
