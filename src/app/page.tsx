import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import PressSection from "@/components/PressSection";
import ConsultingCTA from "@/components/ConsultingCTA";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      <section id="work" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading label="Selected Work" heading="Case Studies" />
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
            label="In the Press"
            heading="Features & Mentions"
          />
          <PressSection />
        </div>
      </section>

      <ConsultingCTA />
    </main>
  );
}
