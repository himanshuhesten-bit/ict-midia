import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { blogArticles, readingMinutes } from "@/lib/blog";

export default function DblNewsroom() {
  const articles = blogArticles.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-mist border-b border-line" id="newsroom">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase text-teal">
              <BookOpen className="h-3.5 w-3.5" />
              Strategic Public PR Journal
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy">
              NEWS & <span className="text-teal">GAZETTE DESK</span>
            </h2>
            <p className="mt-2 text-sm text-navy/70 max-w-2xl">
              Editorial perspectives on government communication, multilingual nuance, and crisis response frameworks.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal hover:underline self-start md:self-end"
          >
            All Journal Articles
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art) => (
            <Link
              key={art.slug}
              href={`/blogs/${art.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-teal">
                  <span className="font-bold uppercase tracking-wider">{art.category}</span>
                  <span className="flex items-center gap-1 text-navy/50">
                    <Clock className="h-3 w-3" />
                    {readingMinutes(art)}m read
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-navy group-hover:text-teal transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-navy/70 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 border-t border-line/60 pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal group-hover:text-navy transition-colors">
                <span>Read Analysis</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

