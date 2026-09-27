export function Hero() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
          Student Portfolio Project
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Software Testing Workload Planner
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          An interactive project that models software testing workload and shows how changing key
          variables can affect estimated testing hours and testing days.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#model"
            className="inline-flex h-11 items-center rounded-md bg-primary-foreground px-5 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            See how it works
          </a>
          <p className="text-sm text-primary-foreground/70">
            By Fatiha Mokrani &middot; ACC Software Testing student
          </p>
        </div>
      </div>
    </section>
  )
}
