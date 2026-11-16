export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  lead: string;
  image: string;
  imageAlt: string;
  service: string;
  serviceHref: string;
  /** A known contact-form interest; clicking an article CTA selects it. */
  contactInterest: string;
  takeaways: string[];
  sections: BlogSection[];
};

/**
 * Editorial articles based on ICT Media's published services.
 * This is the single source for cards, filters and article pages.
 */
export const blogArticles: BlogArticle[] = [
  {
    slug: "government-messages-start-with-people",
    category: "Government communication",
    title: "A government message starts with the person reading it",
    excerpt:
      "Before sharing a policy, scheme or public notice, ask what a citizen needs to know, understand and do next.",
    lead:
      "An important announcement is not automatically a useful public message. It becomes useful when the person receiving it can quickly see what it means for them and what to do next.",
    image: "/images/community.jpg",
    imageAlt: "Residents and community members gathered for an outdoor discussion in India",
    service: "Government PR",
    serviceHref: "/government-pr",
    contactInterest: "government-communications",
    takeaways: [
      "Start with a real question the audience needs answered.",
      "Make eligibility, timing and next steps easy to find.",
      "Keep one approved source of facts across every format.",
      "Use questions and feedback to improve the next message.",
    ],
    sections: [
      {
        heading: "Start with the question, not the announcement",
        paragraphs: [
          "Departments often begin with what they have launched, approved or published. A citizen often begins somewhere else: Does this apply to me? Where do I go? What should I bring? When does it take effect?",
          "Those questions are a useful starting point for a public message. They help a team decide what information must be clear before choosing a headline, format or channel.",
        ],
      },
      {
        heading: "Put the practical details where people can find them",
        paragraphs: [
          "State who the information is for, what is changing, when it applies and what action—if any—the person needs to take. Include the appropriate contact or official source for the next step. Keep necessary conditions visible rather than buried in dense copy.",
          "Clear structure helps someone scanning a poster, reading a phone screen or hearing an announcement. It also gives spokespeople and frontline teams a more consistent explanation to work from.",
        ],
      },
      {
        heading: "Make every version say the same thing",
        paragraphs: [
          "A short social post, a press note and a longer web page may look different, but their facts should agree. Agree on the approved details first, then adapt the length and language for each format. Translations and summaries should preserve the meaning, conditions and official next step.",
          "For government communication, accuracy and the appropriate approval process matter just as much as speed. A clear review path makes it easier for everyone to share consistent information.",
        ],
      },
      {
        heading: "Treat feedback as part of communication",
        paragraphs: [
          "Look beyond how many people saw a message. Notice which questions keep coming back, where people seem to get stuck and which details they ask frontline staff to explain again. That feedback can help improve the next notice, briefing or awareness activity.",
          "Communication is not only the message going out. It is also the understanding and response that come back.",
        ],
      },
    ],
  },
  {
    slug: "press-release-and-media-relations",
    category: "Public relations",
    title: "A press release is one moment. Media relations are the conversation.",
    excerpt:
      "A useful media plan brings the release, briefing, follow-up and news tracking together—each with a clear purpose.",
    lead:
      "A press release can provide timely, checked information. It cannot answer every question or replace an ongoing relationship with the media. Strong public relations plans for both the announcement and what follows it.",
    image: "/images/media-coverage.jpg",
    imageAlt: "News camera operators and photographers covering a public event in India",
    service: "Public Relations",
    serviceHref: "/services/public-relations",
    contactInterest: "public-relations",
    takeaways: [
      "Use a release for clear, attributable information.",
      "Briefings give journalists a chance to ask questions.",
      "Prepare consistent facts and an appropriate spokesperson.",
      "Track coverage and recurring questions to inform follow-up.",
    ],
    sections: [
      {
        heading: "Give every format a job",
        paragraphs: [
          "A news release provides the central facts: what happened, why it matters and where to find the official information. A press conference or media forum creates space for questions and a fuller exchange. Media monitoring helps a team understand how a story is being discussed after it appears.",
          "These are related activities, but they are not interchangeable. Choosing a format because it is familiar—rather than because it helps answer the audience’s or journalist’s question—can make a communication plan less useful.",
        ],
      },
      {
        heading: "Prepare before the announcement",
        paragraphs: [
          "Confirm names, dates, figures and the source of every factual statement. Make the purpose of the announcement easy to understand, identify who can speak to it and agree how questions outside the available information will be handled.",
          "If the announcement is being shared through more than one channel, make sure everyone is working from the same approved details. That small step can reduce confusion in a busy news cycle.",
        ],
      },
      {
        heading: "Make the follow-up useful",
        paragraphs: [
          "After a release or briefing, note the questions that were asked and the details people requested. Track relevant coverage and review its themes, accuracy and context. This is more informative than counting mentions alone.",
          "News tracking can help an organization see what has reached the public and where clarification may be useful. It is a source of insight for the next communication—not a promise of coverage or a substitute for public feedback.",
        ],
      },
      {
        heading: "Build a repeatable relationship",
        paragraphs: [
          "Consistent contact, clear attribution and timely responses help make each interaction easier to navigate. A media plan works best when releases, conferences, tours, forums and monitoring support a shared communication objective.",
          "When the next announcement arrives, journalists and stakeholders already know where to look for reliable information and how to raise a question.",
        ],
      },
    ],
  },
  {
    slug: "plan-content-before-translation",
    category: "Content & digital",
    title: "Plan the content before translating the message",
    excerpt:
      "Reach begins with more than changing words. Decide what every audience needs to understand, then adapt the message for each language and channel.",
    lead:
      "A multilingual campaign starts with a clear source message—not a last-minute translation of a crowded poster. Planning first helps the purpose, important details and intended action stay clear in every version.",
    image: "/images/governance-building.jpg",
    imageAlt: "Rashtrapati Bhavan and government buildings on Raisina Hill in New Delhi",
    service: "Creative Services",
    serviceHref: "/services/creative-services",
    contactInterest: "creative-services",
    takeaways: [
      "Agree on the purpose and key facts before writing variations.",
      "Adapt examples and tone with a fluent language reviewer.",
      "Keep names, instructions and contact details consistent.",
      "Check how the finished message reads on its real channel.",
    ],
    sections: [
      {
        heading: "Write the source message for understanding",
        paragraphs: [
          "Before adapting a message for other languages, decide what someone should remember or do after reading it. Separate the essential facts from background detail, and agree on the official wording for names, eligibility, dates and next steps.",
          "A concise source message is easier to review, translate, explain and update. It also gives each version a shared foundation without forcing every channel to use the exact same format.",
        ],
      },
      {
        heading: "Adapt for how people will encounter it",
        paragraphs: [
          "A short radio announcement, a printed notice and a web page have different space and attention limits. A word-for-word translation may not fit or may not sound natural when spoken. Keep the meaning intact while shaping the length, examples and tone for the way the message will be used.",
          "A fluent reviewer can help identify unclear phrases and context that does not carry across as intended. This review is especially useful for instructions and terms that have formal or administrative meanings.",
        ],
      },
      {
        heading: "Keep the details consistent",
        paragraphs: [
          "Check that dates, addresses, names, contact details and actions match in every version. Keep a reference copy of approved facts so content developers, designers and translators are not working from different drafts.",
          "If a policy or instruction changes, that shared source makes it easier to find which materials need updating.",
        ],
      },
      {
        heading: "Review the finished format",
        paragraphs: [
          "Read the final content as the audience will encounter it: aloud for audio, on a small screen for digital, and at its intended reading size for print. Make sure translated text still fits the layout and the most important action remains easy to spot.",
          "Content, design and distribution work together. Planning them as parts of one message makes it easier for people to find, understand and use the information.",
        ],
      },
    ],
  },
  {
    slug: "government-events-start-before-the-stage",
    category: "Government events",
    title: "A government event starts before anyone takes the stage",
    excerpt:
      "The programme is only one part of a public event. Clarity about audience, purpose and next steps makes it easier for people to take part.",
    lead:
      "A special-day programme, Mahotsav, workshop or seminar is also a communication opportunity. Planning starts by deciding who the event is for and what participants should leave knowing, doing or being able to access.",
    image: "/images/workshop-audience.jpg",
    imageAlt: "Participants listening to a presentation at a public workshop",
    service: "Government events",
    serviceHref: "/government-pr#events",
    contactInterest: "government-communications",
    takeaways: [
      "Define the audience and the useful outcome first.",
      "Share practical details before people arrive.",
      "Keep programme messages and materials aligned.",
      "Plan how information and feedback continue after the event.",
    ],
    sections: [
      {
        heading: "Begin with why people are gathering",
        paragraphs: [
          "A large Mahotsav, a special-day observance and a focused seminar all bring people together differently. Start by being precise about the intended participants and the useful outcome of the event. This helps determine what belongs in the programme and what participants need to know beforehand.",
          "An event plan built around a clear purpose is easier to explain, coordinate and review than one that begins with a list of activities alone.",
        ],
      },
      {
        heading: "Make participation straightforward",
        paragraphs: [
          "Give people the practical details early: when and where to arrive, how to take part, what the schedule includes and where to find changes or updates. Use direct language and make the relevant contact or information point easy to locate.",
          "Speakers, organisers and communication materials should work from the same programme details. Consistent information helps participants know what to expect and helps the event team respond to questions clearly.",
        ],
      },
      {
        heading: "Use the programme to carry the message",
        paragraphs: [
          "An opening address, an information desk, a workshop session and a public display each offer a different way to explain an initiative. Choose formats that suit the people attending and the outcome the event is meant to support.",
          "If the event includes instructions or public information, repeat the important details in more than one appropriate format. The point is not to say more; it is to make the intended message easier to follow.",
        ],
      },
      {
        heading: "Leave a clear next step",
        paragraphs: [
          "Before the event ends, make it clear where attendees can find the information afterwards and what action is available next. Share relevant material through appropriate channels and provide a way for participants to ask a question or offer feedback.",
          "A short review afterwards can record which questions came up, where the programme ran smoothly and what should change next time. The event then becomes a learning opportunity as well as a moment on the calendar.",
        ],
      },
    ],
  },
];

/** Categories are derived from article data, so the filter list cannot drift. */
export const blogCategories = ["All articles", ...new Set(blogArticles.map((article) => article.category))];

/** Article reading time is derived from the actual copy. */
export function readingMinutes(article: BlogArticle) {
  const copy = [article.title, article.excerpt, article.lead, ...article.takeaways, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(" ");
  const words = copy.trim().split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 200));
}
