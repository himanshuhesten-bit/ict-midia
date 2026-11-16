import { services } from "./services";
import { solutions } from "./solutions";

type Interest = { slug: string; title: string };

const pick = ({ slug, title }: Interest): Interest => ({ slug, title });

/** Everything a visitor can ask about in the contact form, built from the two lists above. */
export const interestGroups: { label: string; options: Interest[] }[] = [
  { label: "Services", options: services.map(pick) },
  { label: "Communication solutions", options: solutions.map(pick) },
];

/** Turns a `?interest=` slug from a link into the matching form option, or "" if unknown. */
export function interestTitle(slug: string | undefined) {
  return interestGroups.flatMap((group) => group.options).find((option) => option.slug === slug)?.title ?? "";
}
