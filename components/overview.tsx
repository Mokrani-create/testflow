import { SectionHeading } from './section-heading'

export function Overview() {
  return (
    <section id="overview" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:gap-16">
        <SectionHeading eyebrow="01" title="What it is" />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            The <span className="font-medium text-foreground">Software Testing Workload Planner</span>{' '}
            is an interactive project that models software testing workload using variables such as
            the number of test cases, the number of testers, and the automation level.
          </p>
          <p>
            It shows how changing these variables can affect the estimated testing hours and testing
            days needed for a project.
          </p>
        </div>
      </div>
    </section>
  )
}
