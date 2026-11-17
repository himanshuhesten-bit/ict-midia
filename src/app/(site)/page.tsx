import type { Metadata } from "next";
import DblClientele from "@/components/dbl/DblClientele";
import DblCoreSectors from "@/components/dbl/DblCoreSectors";
import DblExecutionStrengths from "@/components/dbl/DblExecutionStrengths";
import DblFeaturedProjects from "@/components/dbl/DblFeaturedProjects";
import DblLeadershipVision from "@/components/dbl/DblLeadershipVision";
import DblMetricsStrip from "@/components/dbl/DblMetricsStrip";
import DblNewsroom from "@/components/dbl/DblNewsroom";
import DblTenderLiaison from "@/components/dbl/DblTenderLiaison";
import DblWhoWeAre from "@/components/dbl/DblWhoWeAre";
import ModernHero from "@/components/ModernHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "ICT Media — Strategic Communications & PR for Government & Public Sector",
  description:
    "Empanelled PR & Strategic Communication Partner to Maharashtra Government Departments, Municipal Corporations, and Public Institutions since 2013.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. ENTERPRISE NATION-BUILDING HERO SECTION (DBL Corporate Style) */}
      <section className="bg-paper pt-6 pb-2 sm:pt-8 sm:pb-3 lg:pt-10 lg:pb-4">
        <Container>
          <ModernHero />

          {/* 2. OPERATIONAL SCALE & PERFORMANCE METRICS TICKER */}
          <div className="mt-6 sm:mt-8">
            <DblMetricsStrip />
          </div>
        </Container>
      </section>

      {/* 3. WHO WE ARE: INSTITUTIONAL PROFILE & EXECUTION PILLARS */}
      <Container>
        <DblWhoWeAre />
      </Container>

      {/* 4. OUR CORE SECTORS: 6-GRID SPECIALIZED PRACTICE DIVISIONS */}
      <Container>
        <DblCoreSectors />
      </Container>

      {/* 5. EXECUTION STRENGTHS: WHY GOVERNMENT DEPARTMENTS TRUST ICT MEDIA */}
      <Container>
        <DblExecutionStrengths />
      </Container>

      {/* 6. FLAGSHIP ASSIGNMENTS & DEMONSTRATED PUBLIC OUTCOMES */}
      <Container>
        <DblFeaturedProjects />
      </Container>

      {/* 7. OUR CLIENTELE: 23 EMPANELLED GOVERNMENT BODIES MARQUEE */}
      <DblClientele />

      {/* 8. LEADERSHIP VISION & INSTITUTIONAL ETHOS */}
      <Container>
        <DblLeadershipVision />
      </Container>

      {/* 9. NEWS & GAZETTE DESK: STRATEGIC PR JOURNAL */}
      <Container>
        <DblNewsroom />
      </Container>

      {/* 10. TENDER & EMPANELMENT LIAISON DESK (ACTIONABLE CTA) */}
      <Container>
        <DblTenderLiaison />
      </Container>
    </>
  );
}
