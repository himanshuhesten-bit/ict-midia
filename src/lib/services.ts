import type { StaticImageData } from "next/image";
import publicRelationsImage from "../../public/images/media-coverage.jpg";
import creativeImage from "../../public/images/services/creative-services.jpg";
import publicationsImage from "../../public/images/services/publications.jpg";
import mediaImage from "../../public/images/services/media-management.jpg";
import digitalImage from "../../public/images/services/digital-pr.jpg";
import itImage from "../../public/images/services/it-solutions.jpg";
import eventsImage from "../../public/images/workshop-audience.jpg";
import productionsImage from "../../public/images/community.jpg";
import heroImage from "../../public/images/editorial-hero.jpg";
import {
  BookOpen,
  CalendarCheck,
  Compass,
  Cpu,
  FileText,
  Megaphone,
  MonitorSmartphone,
  Newspaper,
  Palette,
  PenLine,
  Radio,
  Share2,
  Tv,
  Video,
  type LucideIcon,
} from "lucide-react";

export type StageKey = "strategy" | "content" | "reach" | "technology";

type Stage = { label: string; question: string; icon: LucideIcon };

export const stages: Record<StageKey, Stage> = {
  strategy: {
    label: "Strategy",
    question: "What should we say?",
    icon: Compass,
  },
  content: { label: "Content", question: "How do we say it?", icon: PenLine },
  reach: { label: "Reach", question: "Where will people see it?", icon: Radio },
  technology: { label: "Technology", question: "What runs behind it?", icon: Cpu },
};

/** A message moves through these three stages. Technology supports all of them. */
export const flow: StageKey[] = ["strategy", "content", "reach", "technology"];

type Offering = { title: string; text: string };
type OfferingGroup = { heading?: string; intro?: string; items: Offering[] };

export type Service = {
  slug: string;
  title: string;
  stage: StageKey;
  icon: LucideIcon;
  image: StaticImageData;
  imageAlt: string;
  /** CSS object-position, so every crop keeps its subject in frame. */
  imagePosition: string;
  lead: string;
  num: string;
  deliverables: string[];
  groups: OfferingGroup[];
  alsoCovers: string[];
};

export const services: Service[] = [
  {
    slug: "public-relations",
    title: "Public Relations",
    num: "01",
    stage: "strategy",
    icon: Megaphone,
    image: publicRelationsImage,
    imageAlt: "News camera crews and photographers covering an official government briefing in India",
    imagePosition: "50% 45%",
    lead: "Strategic media relations, high-level press conferences, and narrative architecture built for government authority and public trust.",
    deliverables: [
      "Press Release Formulation & Pan-India Distribution",
      "High-Level Press Conferences & Media Briefings",
      "Media Perception Audits & Sentiment Mapping",
      "Crisis PR Mitigation & Rapid Rebuttal Desks",
      "Executive Profiling & Op-Ed Placements",
      "Spokesperson Media Protocol & Coaching",
    ],
    groups: [
      {
        heading: "Strategic Narrative",
        intro: "Every public statement shapes institutional credibility and citizen trust.",
        items: [
          {
            title: "Perception Architecture",
            text: "Auditing public and media perceptions across print, TV, and digital to align official messages with citizen expectations.",
          },
          {
            title: "High-Level Press Conferences",
            text: "Turnkey planning, venue protocol, press kits, speech briefings, and television camera liaison.",
          },
          {
            title: "Crisis Communications Desk",
            text: "Rapid-response counter-misinformation desk ensuring immediate, factual rebuttals to rumors or distorted news.",
          },
        ],
      },
      {
        heading: "Executive Liaison",
        items: [
          {
            title: "Spokesperson Protocol",
            text: "Coaching administrative heads and department representatives on media protocols and effective public briefing.",
          },
          {
            title: "Editorial Op-Eds",
            text: "Researching and placing evidence-backed thought leadership articles by departmental leadership in leading dailies.",
          },
        ],
      },
    ],
    alsoCovers: ["Crisis management", "Media perception surveys", "Pan-India wire distribution"],
  },
  {
    slug: "media-management",
    title: "Media Management",
    num: "02",
    stage: "reach",
    icon: Newspaper,
    image: mediaImage,
    imageAlt: "Journalists, television crews and print reporters at a press desk",
    imagePosition: "50% 35%",
    lead: "360-degree media liaison across print dailies, regional bureaus, TV networks, and digital portals with pan-Maharashtra reach.",
    deliverables: [
      "Dedicated Regional & National Press Bureau Liaison",
      "Editorial Pitching & Exclusive Interview Coordination",
      "24/7 Multi-Channel Media Monitoring & Daily Clipping Reports",
      "Journalist Familiarization Tours & Field Visits",
      "Real-Time Misinformation Detection & Rapid Correction",
    ],
    groups: [
      {
        items: [
          {
            title: "Press Bureau Liaison",
            text: "Daily coordination with accredited correspondents and bureau chiefs across Vidarbha, Mumbai, and Maharashtra.",
          },
          {
            title: "24/7 Media Tracking",
            text: "Real-time monitoring of print newspapers, TV debates, and online channels with daily categorized executive clipping digests.",
          },
          {
            title: "Media Tours & Field Briefings",
            text: "Organizing on-site visits for senior journalists to inspect flagship government infrastructure and conservation milestones.",
          },
        ],
      },
    ],
    alsoCovers: ["Press tour logistics", "Daily executive news briefs", "Regional media bureau mapping"],
  },
  {
    slug: "creative-services",
    title: "Designing & Printing",
    num: "03",
    stage: "content",
    icon: Palette,
    image: creativeImage,
    imageAlt: "Creative design studio table with official brand guidelines and print layouts",
    imagePosition: "50% 40%",
    lead: "Visual branding, government annual reports, commemorative coffee table books, and high-impact exhibition graphics.",
    deliverables: [
      "Government Annual Reports & Policy Whitepapers",
      "Commemorative Coffee Table Books & Souvenirs",
      "Brochures, Folders & High-End Stationery Collaterals",
      "Large Format Exhibition Panels, Flex & Vinyl Graphics",
      "Multilingual Typography (Marathi, Hindi, English)",
    ],
    groups: [
      {
        heading: "Institutional Publications",
        items: [
          {
            title: "Annual Reports & Whitepapers",
            text: "Full design, layout, data infographics, and precision offset printing for government departments and state PSUs.",
          },
          {
            title: "Commemorative Books",
            text: "Prestigious coffee table books capturing historical milestones, biodiversity reserves, and infrastructure achievements.",
          },
          {
            title: "Multilingual Typesetting",
            text: "Flawless Marathi (Devanagari), Hindi, and English typographic layout adhering to government nomenclature.",
          },
        ],
      },
    ],
    alsoCovers: ["Exhibition pavilion branding", "Infographic design", "Official stationery collaterals"],
  },
  {
    slug: "government-events",
    title: "Government Events",
    num: "04",
    stage: "reach",
    icon: CalendarCheck,
    image: eventsImage,
    imageAlt: "Audience and dignitaries assembled at an official state conclave and ceremony",
    imagePosition: "50% 50%",
    lead: "Turnkey event management for state conclaves, foundation ceremonies, ministerial VIP protocol, and public rallies.",
    deliverables: [
      "Turnkey State Conclave & Seminar Production",
      "Official Project Inaugurations & Foundation Stone Ceremonies",
      "VIP & Ministerial Protocol Execution & Security Liaison",
      "State-of-the-Art AV Production, LED Video Walls & Live Streaming",
      "Delegate Accreditation, Kit Curation & Hospitality Logistics",
    ],
    groups: [
      {
        items: [
          {
            title: "VIP Protocol & Stage Architecture",
            text: "Zero-defect adherence to governmental stage protocol, dais seating, and ceremonial guidelines.",
          },
          {
            title: "Technical Production & Broadcasting",
            text: "Broadcast-grade LED video walls, multi-camera live feeds, sound engineering, and multi-platform live streaming.",
          },
          {
            title: "Delegate & Press Management",
            text: "Accreditation badges, official delegate welcome kits, press enclosures, and media briefing centers.",
          },
        ],
      },
    ],
    alsoCovers: ["National seminars", "Public health conclaves", "Civic sports marathons"],
  },
  {
    slug: "content-development",
    title: "Content Development",
    num: "05",
    stage: "content",
    icon: FileText,
    image: heroImage,
    imageAlt: "Civic communication documents, policy notes and speech manuscripts",
    imagePosition: "50% 50%",
    lead: "Transforming complex administrative regulations and policies into clear, empathetic, and persuasive public communication.",
    deliverables: [
      "Ministerial & Executive Keynote Speeches",
      "Policy Whitepapers & Citizen Charters",
      "Multilingual Press Notes & Official Bulletins",
      "Documentary Scripts, Voiceover Scripts & Audio Jingles",
      "Success Story Case Studies & Field Impact Profiles",
    ],
    groups: [
      {
        items: [
          {
            title: "Speechwriting & Keynotes",
            text: "Evidence-backed, inspiring speeches for ministers and administrative heads connecting policy with citizens.",
          },
          {
            title: "Policy Demystification",
            text: "Translating gazette notifications, subsidy guidelines, and legal frameworks into citizen-friendly summaries.",
          },
          {
            title: "Multilingual Adaptation",
            text: "Retaining cultural nuance, administrative precision, and clarity across Marathi, Hindi, and English.",
          },
        ],
      },
    ],
    alsoCovers: ["Citizen handbook writing", "Jingle scriptwriting", "Beneficiary case studies"],
  },
  {
    slug: "media-productions",
    title: "Media Productions",
    num: "06",
    stage: "content",
    icon: Video,
    image: productionsImage,
    imageAlt: "Camera crew and video production on location for a civic documentary",
    imagePosition: "50% 50%",
    lead: "Cinematic documentaries, corporate films, educational explainers, and 4K aerial drone cinematography for government initiatives.",
    deliverables: [
      "Cinematic Documentaries on State Schemes & Wildlife Reserves",
      "Corporate Films & Institutional Overviews",
      "Short Explainer Video Capsules for Social Platforms",
      "Public Service Announcements (TVCs & Radio Jingles)",
      "Aerial Drone Cinematography & 4K Multi-Camera Production",
    ],
    groups: [
      {
        items: [
          {
            title: "Documentaries & Scheme Films",
            text: "High-production-value films documenting welfare transformations, tiger habitats, and infrastructure milestones.",
          },
          {
            title: "Public Service Ads (TVCs)",
            text: "Broadcast-ready video spots for television, cinema theaters, and digital distribution.",
          },
          {
            title: "Aerial Drone Cinematography",
            text: "Licensed 4K drone cinematography capturing sprawling highways, dams, solar parks, and eco-tourism corridors.",
          },
        ],
      },
    ],
    alsoCovers: ["Motion graphics", "Audio jingles", "Multilingual voiceover dubbing"],
  },
  {
    slug: "publications",
    title: "Publications",
    num: "07",
    stage: "content",
    icon: BookOpen,
    image: publicationsImage,
    imageAlt: "A stack of printed government magazines, research publications and bound annual reports",
    imagePosition: "50% 50%",
    lead: "Official government journals, magazines, policy manuals, and commemorative souvenir publications.",
    deliverables: [
      "Departmental Newsletters & Quarterly Journals",
      "Civic Handbooks & Welfare Scheme Directories",
      "Special Edition Commemorative Souvenirs",
      "Prepress Proofing & Certified Quality Printing",
      "Pan-Maharashtra Distribution Logistics",
    ],
    groups: [
      {
        items: [
          {
            title: "Quarterly Departmental Journals",
            text: "Turnkey editorial compilation, photo editing, design layout, and printing of official internal and external bulletins.",
          },
          {
            title: "Scheme Directories & Manuals",
            text: "Clear, tabbed reference guides for field officers and citizens detailing welfare benefits and application procedures.",
          },
        ],
      },
    ],
    alsoCovers: ["Offset printing", "Embossed binding", "Digital e-books"],
  },
  {
    slug: "digital-pr",
    title: "Social Media & Digital PR",
    num: "08",
    stage: "reach",
    icon: Share2,
    image: digitalImage,
    imageAlt: "Digital strategy team monitoring live engagement feeds and analytics on smartphones and screens",
    imagePosition: "55% 50%",
    lead: "Transforming official social media handles into proactive, transparent, and engaging citizen touchpoints with 24/7 response.",
    deliverables: [
      "Official Handle Management (X/Twitter, Facebook, Instagram, LinkedIn, YouTube)",
      "Daily Creative Content Calendars & Multilingual Infographics",
      "Viral Short-Form Reels & Explainer Video Shorts",
      "Real-Time Live Webcasting of Press Conferences & State Ceremonies",
      "Online Reputation Management (ORM) & Sentiment Analytics",
    ],
    groups: [
      {
        items: [
          {
            title: "Official Handle Management",
            text: "Verified departmental handles maintained with protocol-compliant messaging, consistent aesthetics, and active moderation.",
          },
          {
            title: "Citizen Engagement Campaigns",
            text: "Interactive polls, live Q&A sessions with officials, and awareness carousels that drive genuine public participation.",
          },
          {
            title: "Online Reputation Management",
            text: "Round-the-clock digital monitoring to flag trending civic issues, counter false claims, and safeguard institutional integrity.",
          },
        ],
      },
    ],
    alsoCovers: ["Live streaming", "Digital analytics reporting", "Influencer & community outreach"],
  },
  {
    slug: "it-solutions",
    title: "IT Solutions & Portals",
    num: "09",
    stage: "technology",
    icon: MonitorSmartphone,
    image: itImage,
    imageAlt: "A software engineer working on government web portal wireframes and clean code",
    imagePosition: "50% 55%",
    lead: "WCAG & GIGW compliant government web portals, citizen feedback dashboards, and bespoke digital communication tools.",
    deliverables: [
      "Bespoke Campaign Microsites & Official Web Portals",
      "Citizen Feedback Systems & Online Survey Portals",
      "Event Registration & Digital Badge Ticketing Solutions",
      "Executive Analytics Dashboards & Sentiment Visualizers",
      "WCAG & GIGW Compliant, Secure Web Architecture",
    ],
    groups: [
      {
        items: [
          {
            title: "Government Portals & Microsites",
            text: "Mobile-first, lightning-fast web portals built to strict Indian Government Web Guidelines (GIGW) and accessibility standards.",
          },
          {
            title: "Citizen Feedback Dashboards",
            text: "Intuitive digital forms, survey tools, and grievance logging systems giving administrators real-time insight into public sentiment.",
          },
          {
            title: "Event Registration & Badging",
            text: "Secure digital ticketing, QR-code verification, and automated delegate badge printing for state-level conclaves.",
          },
        ],
      },
    ],
    alsoCovers: ["GIGW compliance", "Cloud server setup", "Executive dashboard analytics"],
  },
];

export const serviceNumber = (index: number) => String(index + 1).padStart(2, "0");

/** Plain data only, safe to hand to client components such as the header. */
export const serviceLinks = services.map(({ slug, title }) => ({ slug, title }));
