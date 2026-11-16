import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import BlogExplorer from "@/components/BlogExplorer";
import NextStep from "@/components/NextStep";
import PageHero from "@/components/PageHero";
import { blogArticles, blogCategories, readingMinutes } from "@/lib/blog";

export const metadata: Metadata = { title: "Journal", description: "Practical ideas from ICT Media on government communication, public relations, content and events." };

export default function BlogsPage() {
  const articles=blogArticles.map(a=>({...a,readingTime:readingMinutes(a)}));
  return <>
    <PageHero crumbs={[{label:"Blogs"}]} eyebrow="The journal" title="Good ideas make better connections." description="Notes on public communication, people, media and the work that connects them." icon={BookOpenText} index="04 / JOURNAL" />
    <BlogExplorer articles={articles} categories={blogCategories}/>
    <NextStep eyebrow="The conversation continues" title="Let's talk about your challenge." description="Tell us who you're trying to reach. We'll help find the right next step." href="/contact" cta="Start a conversation"/>
  </>;
}
