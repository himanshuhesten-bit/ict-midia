import type { Metadata } from "next";
import MockupBentoGrid from "@/components/mockup/MockupBentoGrid";
import MockupClients from "@/components/mockup/MockupClients";
import MockupGovBanner from "@/components/mockup/MockupGovBanner";
import MockupHero from "@/components/mockup/MockupHero";
import MockupImpactCta from "@/components/mockup/MockupImpactCta";
import MockupMetrics from "@/components/mockup/MockupMetrics";
import MockupProcess from "@/components/mockup/MockupProcess";
import MockupWhoWeAre from "@/components/mockup/MockupWhoWeAre";

export const metadata: Metadata = {
  title: "ICT Media — Building trust. Creating impact.",
  description:
    "Government. Brands. People. Connected through strategic communications. Empanelled partner to Maharashtra Government since 2013.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION: Building trust. Creating impact. */}
      <MockupHero />

      {/* 2. METRICS STRIP: 100+ / 50+ / 13+ / 4+ */}
      <MockupMetrics />

      {/* 3. CLIENT LOGOS STRIP */}
      <MockupClients />

      {/* 4. WHO WE ARE: Your purpose. Our creative force. */}
      <MockupWhoWeAre />

      {/* 5. OUR EXPERTISE: Less noise. More connection. (Bento Grid) */}
      <MockupBentoGrid />

      {/* 6. GOVERNMENT COMMUNICATIONS: Policy. People. Possibility. */}
      <MockupGovBanner />

      {/* 7. OUR PROCESS: Listen → Plan → Create → Connect */}
      <MockupProcess />

      {/* 8. IMPACT CTA: Let’s make an impact. */}
      <MockupImpactCta />
    </>
  );
}
