import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import prImg from "../../../public/images/media-coverage.jpg";
import eventsImg from "../../../public/images/workshop-audience.jpg";
import communityImg from "../../../public/images/community.jpg";
import digitalImg from "../../../public/images/services/digital-pr.jpg";
import creativeImg from "../../../public/images/services/creative-services.jpg";
import publicationsImg from "../../../public/images/services/publications.jpg";

interface SectorItem {
  num: string;
  title: string;
  category: string;
  description: string;
  href: string;
  image: typeof prImg;
}

const sectors: SectorItem[] = [
  {
    num: "01",
    title: "Strategic PR & Media Management",
    category: "Institutional PR Practice",
    description: "Ministerial press conferences, accredited bureau relations, and 36-district coverage.",
    href: "/services/public-relations",
    image: prImg,
  },
  {
    num: "02",
    title: "Turnkey State Conclaves & Protocol",
    category: "State Events & Summits",
    description: "Zero-defect dais protocol, 4K LED staging, and accredited media centers for state summits.",
    href: "/services/government-events",
    image: eventsImg,
  },
  {
    num: "03",
    title: "Multilingual Citizen Outreach",
    category: "Grassroots Engagement",
    description: "Grassroots outreach for welfare schemes in Marathi, Hindi, and English.",
    href: "/government-pr",
    image: communityImg,
  },
  {
    num: "04",
    title: "24/7 Crisis PR & Fact-Checking Desks",
    category: "Perception & Trust Defense",
    description: "24/7 media monitoring and official administrative rebuttals deployed within 60 minutes.",
    href: "/services/public-relations",
    image: digitalImg,
  },
  {
    num: "05",
    title: "Creative Publications & Gazette Design",
    category: "Official Publishing",
    description: "State gazette publications, citizen charters, infographics, and policy whitepapers.",
    href: "/services/publications",
    image: publicationsImg,
  },
  {
    num: "06",
    title: "Government Digital & Social PR",
    category: "Citizen Digital Portals",
    description: "Verified departmental handles, live webcasting, and citizen sentiment analytics.",
    href: "/services/digital-pr",
    image: creativeImg,
  },
];

export default function DblCoreSectors() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-mist border-y border-line" id="sectors">
      <div className="max-w-7xl mx-auto">
        {/* Header Section (DBL Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase text-teal">
              Core Practice Divisions
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy">
              OUR CORE <span className="text-teal">SECTORS</span>
            </h2>
            <p className="mt-2 text-sm text-navy/70 max-w-2xl">
              Specialized public sector communications and PR divisions engineered to serve government departments, statutory boards, and municipal corporations.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal hover:underline self-start md:self-end"
          >
            All 9 Service Specifications
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* The Signature 6-Card DBL Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group relative flex h-[380px] sm:h-[400px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-navy text-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* Background Photography with DBL-Style Dark Gradient Wash */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-40 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111e25] via-[#111e25]/80 to-[#182831]/60" />
              </div>

              {/* Top Bar: Sector Number & Category Badge */}
              <div className="relative z-10 flex items-center justify-between p-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-lime">
                  {s.category}
                </span>
                <span className="font-mono text-2xl font-black text-white/30 group-hover:text-lime transition-colors">
                  {s.num}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 p-6 pt-0">
                <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-lime transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/75 line-clamp-3 leading-relaxed">
                  {s.description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-xs font-bold uppercase tracking-wider text-lime">
                  <span>Explore Division</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
