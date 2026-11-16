import type { StaticImageData } from "next/image";
import publicRelationsImage from "../../public/images/media-coverage.jpg";
import creativeImage from "../../public/images/services/creative-services.jpg";
import publicationsImage from "../../public/images/services/publications.jpg";
import mediaImage from "../../public/images/services/media-management.jpg";
import digitalImage from "../../public/images/services/digital-pr.jpg";
import itImage from "../../public/images/services/it-solutions.jpg";
import {
  BookOpen,
  Compass,
  Cpu,
  Megaphone,
  MonitorSmartphone,
  Newspaper,
  Palette,
  PenLine,
  Radio,
  Share2,
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
export const flow: StageKey[] = ["strategy", "content", "reach"];

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
  groups: OfferingGroup[];
  alsoCovers: string[];
};

// Listed in flow order, so numbering reads 01 to 06 across the services map.
export const services: Service[] = [
  {
    slug: "public-relations",
    title: "Public Relations",
    stage: "strategy",
    icon: Megaphone,
    image: publicRelationsImage,
    imageAlt: "News camera crews and photographers covering a public event in India",
    imagePosition: "50% 45%",
    lead: "The starting point of every assignment: deciding what to say, to whom, and why.",
    groups: [
      {
        items: [
          {
            title: "Press conferences",
            text: "We organise press conferences as interactive forums, with joint participation by our journalists and representatives of organizations.",
          },
          {
            title: "News & press releases",
            text: "News, press and media releases are a PR strategy for piquing interest, handled by our PR professionals and journalists.",
          },
          {
            title: "News tracking",
            text: "Our news tracking team, with a zest for PR and brand formation, ventures into advanced media monitoring and social media solutions.",
          },
        ],
      },
    ],
    alsoCovers: [
      "Strategic communications",
      "Reputation management",
      "Stakeholder communication",
      "Crisis communications",
      "Brand positioning",
    ],
  },
  {
    slug: "creative-services",
    title: "Creative Services",
    stage: "content",
    icon: Palette,
    image: creativeImage,
    imageAlt: "A cameraman adjusting a video camera on a tripod at an event",
    imagePosition: "50% 40%",
    lead: "We turn the message into content people want to read, watch and hear.",
    groups: [
      {
        heading: "Content development",
        items: [
          { title: "Books development", text: "Writing and producing books that reflect your brand’s expertise." },
          {
            title: "Multilingual translations",
            text: "Translating content into multiple languages to reach a global audience.",
          },
          {
            title: "Profiles & articles",
            text: "Crafting detailed profiles and articles that highlight your brand’s strengths and achievements.",
          },
        ],
      },
      {
        heading: "Media productions",
        intro: "We offer production services to create high-quality multimedia content.",
        items: [
          { title: "Documentary making", text: "Producing films and music that resonate with your audience." },
          { title: "Podcasts", text: "Creating engaging podcasts to share your brand’s stories and insights." },
          { title: "Songs & radio jingles", text: "Composing catchy songs and jingles for radio advertising." },
        ],
      },
    ],
    alsoCovers: ["Branding", "Campaigns", "Scripts", "Stories & interviews", "Designing"],
  },
  {
    slug: "publications",
    title: "Publications",
    stage: "content",
    icon: BookOpen,
    image: publicationsImage,
    imageAlt: "A stack of printed magazines with clean white covers",
    imagePosition: "50% 50%",
    lead: "We offer comprehensive design and printing services to enhance your brand’s physical presence.",
    groups: [
      {
        items: [
          { title: "Office stationery", text: "Designing and printing customized stationery for your business." },
          {
            title: "Branding & promo materials",
            text: "Creating promotional materials that effectively represent your brand.",
          },
          {
            title: "Books & brochures",
            text: "Producing high-quality books and brochures that convey your brand’s message.",
          },
        ],
      },
    ],
    alsoCovers: [
      "Coffee table books",
      "Research books",
      "Articles & stories",
      "Annual reports",
      "Newsletters",
      "Policy & promotional brochures",
    ],
  },
  {
    slug: "media-management",
    title: "Media Management",
    stage: "reach",
    icon: Newspaper,
    image: mediaImage,
    imageAlt: "An elderly couple reading Hindi newspapers on a rooftop",
    imagePosition: "50% 35%",
    lead: "We plan, place and manage your presence across press, broadcast and outdoor media.",
    groups: [
      {
        heading: "Media planning",
        items: [
          {
            title: "Media strategy & planning",
            text: "Developing media strategies to maximize your brand’s exposure.",
          },
          {
            title: "Media buying & release",
            text: "Purchasing and scheduling media spots to ensure optimal placement.",
          },
          {
            title: "Media tours & forums",
            text: "Organizing media tours and forums to enhance your brand’s visibility.",
          },
        ],
      },
      {
        heading: "Advertisements",
        items: [
          { title: "Print media", text: "Designing and placing ads in newspapers and magazines." },
          {
            title: "Outdoor media",
            text: "Developing outdoor advertising campaigns, including billboards and transit ads.",
          },
          { title: "Electronic media", text: "Creating ads for television and radio." },
        ],
      },
    ],
    alsoCovers: ["Media relations", "Media monitoring", "Media tracking & analysis reports"],
  },
  {
    slug: "digital-pr",
    title: "Digital PR",
    stage: "reach",
    icon: Share2,
    image: digitalImage,
    imageAlt: "Hands holding a smartphone and scrolling a social media feed",
    imagePosition: "55% 50%",
    lead: "Our social media management services help you create a strong online presence and engage effectively with your audience.",
    groups: [
      {
        items: [
          {
            title: "Search engine optimization",
            text: "Improving your website’s visibility on search engines to attract more organic traffic.",
          },
          {
            title: "Social media marketing",
            text: "Developing and executing social media strategies to increase brand engagement.",
          },
          {
            title: "Digital advertising",
            text: "Creating and managing online ad campaigns to reach your target audience.",
          },
          {
            title: "Influencer marketing",
            text: "Collaborating with influencers to promote your brand and products to their followers.",
          },
        ],
      },
    ],
    alsoCovers: [
      "Social media positioning",
      "Online reputation management",
      "Social media engagement",
      "Digital news coverage",
      "SEO-driven PR",
    ],
  },
  {
    slug: "it-solutions",
    title: "IT Solutions",
    stage: "technology",
    icon: MonitorSmartphone,
    image: itImage,
    imageAlt: "A laptop screen showing lines of software code",
    imagePosition: "50% 55%",
    lead: "We build the websites, software and apps your communication runs on.",
    groups: [
      {
        items: [
          {
            title: "Website development",
            text: "Creating and maintaining websites and portals to meet your technological needs.",
          },
          {
            title: "Software development",
            text: "Designing custom software solutions tailored to your business requirements.",
          },
          {
            title: "Android app development",
            text: "Developing mobile and web applications to enhance your digital presence.",
          },
        ],
      },
    ],
    alsoCovers: ["Digital solutions", "Dashboard systems", "Innovative products"],
  },
];

export const serviceNumber = (index: number) => String(index + 1).padStart(2, "0");

/** Plain data only, safe to hand to client components such as the header. */
export const serviceLinks = services.map(({ slug, title }) => ({ slug, title }));
