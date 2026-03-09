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

      <section id="work" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading label="Selected Work" heading="AI Products I've Helped Ship" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section id="press" className="py-16 md:py-24">
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
