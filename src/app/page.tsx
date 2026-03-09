import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import PressSection from "@/components/PressSection";
import ConsultingCTA from "@/components/ConsultingCTA";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ServicesSection />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm uppercase tracking-widest text-muted">
            Currently Focused On
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            I&apos;m currently working on agentic AI, AI search, and trustworthy
            product experiences in healthcare. My recent work is grounded in the
            same themes that shaped my Microsoft experience: usability,
            adoption, and scale.
          </p>
        </div>
      </section>

      <section id="work" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading label="Selected Work" heading="AI Products I've Helped Ship" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section id="press" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            label="Press"
            heading="Interviews, Features & Mentions"
          />
          <PressSection />
        </div>
      </section>

      <ConsultingCTA />
    </main>
  );
}
