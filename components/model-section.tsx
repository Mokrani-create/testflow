import { ArrowDown, ArrowRight, Bot, CalendarDays, Clock, ListChecks, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'

const inputs = [
  { icon: ListChecks, label: 'Number of test cases' },
  { icon: Users, label: 'Number of testers' },
  { icon: Bot, label: 'Automation level' },
]

const outputs = [
  { icon: Clock, label: 'Estimated testing hours' },
  { icon: CalendarDays, label: 'Estimated testing days' },
]

function Item({ icon: Icon, label }: { icon: typeof Clock; label: string }) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </li>
  )
}

export function ModelSection() {
  return (
    <section id="model" className="scroll-mt-16 border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <SectionHeading eyebrow="02" title="How it works" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            The planner takes a set of input variables and models how they relate to the overall
            testing workload. Adjusting any input shows how the estimated effort changes.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Variables
            </h3>
            <ul className="space-y-3">
              {inputs.map((item) => (
                <Item key={item.label} {...item} />
              ))}
            </ul>
          </div>

          <div className="flex justify-center text-primary md:self-center md:pt-8" aria-hidden="true">
            <ArrowRight className="hidden size-8 md:block" />
            <ArrowDown className="size-8 md:hidden" />
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Estimates
            </h3>
            <ul className="space-y-3">
              {outputs.map((item) => (
                <Item key={item.label} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
