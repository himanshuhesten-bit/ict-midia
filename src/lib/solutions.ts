import { CalendarDays, Radio, ScrollText, ShieldCheck, Sprout, Target, type LucideIcon } from "lucide-react";

export type Solution = { slug: string; title: string; points: string[]; icon: LucideIcon };

/** The six communication solutions shown on the home page. */
export const solutions: Solution[] = [
  {
    slug: "reputation-management",
    title: "Reputation Management",
    points: [
      "Building a positive brand image",
      "Maintaining credibility",
      "Managing public perception",
      "Trust development",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "government-communications",
    title: "Government Communications",
    points: [
      "Policy communication",
      "Regulatory compliance",
      "Government liaison",
      "Advocacy",
      "Public policy engagement",
    ],
    icon: ScrollText,
  },
  {
    slug: "brand-positioning",
    title: "Brand Positioning",
    points: [
      "Defining brand identity",
      "Brand storytelling",
      "Brand consistency",
      "Value proposition communication",
    ],
    icon: Target,
  },
  {
    slug: "event-management",
    title: "Event Management",
    points: ["Product launches", "Conferences", "Workshops", "Trainings", "Seminars & awards"],
    icon: CalendarDays,
  },
  {
    slug: "public-affairs",
    title: "Public Affairs",
    points: [
      "Public awareness campaigns",
      "Social issue advocacy",
      "Government partnerships",
      "Citizen engagement",
    ],
    icon: Radio,
  },
  {
    slug: "csr-relations",
    title: "CSR Relations",
    points: [
      "Sustainability initiatives",
      "Environmental programs",
      "Education support",
      "Social impact communications",
    ],
    icon: Sprout,
  },
];
