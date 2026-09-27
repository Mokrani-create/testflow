import { BarChart3, Database, FlaskConical } from 'lucide-react'
import { SectionHeading } from './section-heading'

const pillars = [
  { icon: Database, title: 'Data', text: 'Workload is represented through measurable variables.' },
  {
    icon: FlaskConical,
    title: 'Software testing concepts',
    text: 'Test cases, testers, and automation form the basis of the model.',
  },
  {
    icon: BarChart3,
    title: 'Interactive visualization',
    text: 'Changes to the variables are reflected in the estimated hours and days.',
  },
]

export function WhySection() {
  return (
    <section id="why" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <SectionHeading eyebrow="03" title="Why it matters" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            The project demonstrates how data, software testing concepts, and interactive
            visualization can be used to understand testing workload and planning.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <li key={title} className="bg-card p-6">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
