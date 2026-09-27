import { AuthorSection } from '@/components/author-section'
import { Hero } from '@/components/hero'
import { ModelSection } from '@/components/model-section'
import { Overview } from '@/components/overview'
import { SiteHeader } from '@/components/site-header'
import { WhySection } from '@/components/why-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <ModelSection />
        <WhySection />
        <AuthorSection />
      </main>
      <footer className="bg-primary text-primary-foreground/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:justify-between">
          <p>Software Testing Workload Planner</p>
          <p>Fatiha Mokrani &middot; Student portfolio project</p>
        </div>
      </footer>
    </>
  )
}
