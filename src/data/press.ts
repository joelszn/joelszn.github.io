export interface PressItem {
  id: string;
  publication: string;
  title: string;
  url: string;
  type: "article" | "podcast" | "book" | "mention" | "video";
  description?: string;
  // Spotify embed URL for podcasts — use https://open.spotify.com/embed/episode/ID
  // or https://open.spotify.com/embed/show/ID as fallback
  embedUrl?: string;
  // Self-hosted audio path (e.g. /audio/foo.mp3) for non-Spotify podcasts
  audioUrl?: string;
  // Set true for articles that block iframe embedding (e.g. X-Frame-Options)
  embedDisabled?: boolean;
}

export const typeLabels: Record<PressItem["type"], string> = {
  article: "Article",
  podcast: "Podcast",
  book: "Book",
  mention: "Mention",
  video: "Video",
};

export const pressItems: PressItem[] = [
  {
    id: "politico-interview",
    publication: "Politico",
    title: "How P-TECH launched a Brooklyn kid into IBM before graduation",
    url: "https://www.politico.com/news/2021/01/13/us-chamber-fund-training-programs-458412",
    type: "podcast",
    description: "Featured in Politico's Global Translations podcast discussing P-TECH — the IBM-founded public-private partnership that gave Joel a path from Brooklyn to a career in tech. He speaks on mentorship, work placements, and building a mindset of continuous learning.",
    audioUrl: "/audio/politico-global-translations.m4a",
  },
  {
    id: "hella-latina-podcast",
    publication: "Hella Latin@",
    title: "From selling hats in the street to Product Manager at Microsoft",
    url: "https://open.spotify.com/episode/3S2PvjdAMcgzTJQzQb6KzK",
    type: "podcast",
    description: "Dominican born and Brooklyn raised — Joel shares his journey from selling hats on the street to becoming a Product Manager at Microsoft, on creating generational wealth and showing up as yourself in corporate America.",
    embedUrl: "https://open.spotify.com/embed/episode/3S2PvjdAMcgzTJQzQb6KzK?utm_source=generator&theme=0",
  },
  {
    id: "quien-tu-eres-podcast",
    publication: "Quién Tú Eres",
    title: "On code-switching, identity, and showing up as yourself",
    url: "https://open.spotify.com/episode/6fSJkOJSYBsL37mUEjnXqi",
    type: "podcast",
    description: "A candid conversation about identity, navigating professionalism as a first-gen Latino, growing up in section 8 East New York, and building a career in tech — all while staying true to who you are.",
    embedUrl: "https://open.spotify.com/embed/episode/6fSJkOJSYBsL37mUEjnXqi?utm_source=generator&theme=0",
  },
  {
    id: "dominicans-en-tech-podcast",
    publication: "Dominicans En Tech",
    title: "Building AI for Windows — and what it means to rep the culture",
    url: "https://open.spotify.com/episode/2CHRDSxToiPASdHfLAZ0yj",
    type: "podcast",
    description: "Sharing the journey from Brooklyn to Microsoft — building AI products on Windows, giving back to the Dominican and Latino community, and what it means to be a PM at one of the world's largest tech companies.",
    embedUrl: "https://open.spotify.com/embed/episode/2CHRDSxToiPASdHfLAZ0yj?utm_source=generator&theme=0",
  },
  {
    id: "mnn-dominicans-on-the-hill",
    publication: "Dominicans On The Hill",
    title: "Roundtable with Al Horford, Miss Universe & the Dominican President",
    url: "https://youtu.be/mlKJO_XXdC8?t=410",
    type: "video",
    description: "Joined Google and TikTok executives, NBA Star Al Horford, Miss Universe Amelia Vega, and the President of the Dominican Republic in a roundtable hosted by US Congressman Adriano Espaillat — celebrating Dominican excellence in business, sports, culture, and public service.",
    embedUrl: "https://www.youtube.com/embed/mlKJO_XXdC8?start=410",
  },
  {
    id: "afrotech-article",
    publication: "Afrotech",
    title: "What it felt like to finally see yourself in the room",
    url: "https://afrotech.com/my-first-experience-at-afrotech-went-a-little-like-this",
    type: "article",
    description: "A personal essay about attending Afrotech 2019 — the energy, the people, and what it means to see yourself represented in tech.",
  },
  {
    id: "codecademy-mention",
    publication: "CodeAcademy",
    title: "Mentioned by CodeAcademy's CEO at a Future of Education panel",
    url: "https://www.codecademy.com/resources/blog/exciting-news-to-share/",
    type: "article",
    description: "Mentioned by CodeAcademy's CEO on a panel about the Future of Education after discussing the platform's impact on self-taught developers.",
  },
  {
    id: "edsurge-article",
    publication: "EdSurge",
    title: "Cited in a Google PM's piece on tech widening the education gap",
    url: "https://www.edsurge.com/news/2016-02-10-technology-and-its-implementation-in-schools-is-widening-the-opportunity-gap",
    type: "article",
    description: "Mentioned by Google PM Mary Jo Madda in a piece about how technology implementation in schools risks widening — rather than closing — the opportunity gap.",
    embedDisabled: true,
  },
  {
    id: "ibm-book-mention",
    publication: "Book Mention",
    title: "Named in an IBM exec's book on the future of work and education",
    url: "https://books.google.com/books?id=XGpaDwAAQBAJ&pg=PT88",
    type: "book",
    description: "Named by IBM Executive Stan Litow in his book \"The Challenge for Business and Society: From Risk to Reward\" as an example of P-TECH's impact on a generation of young technologists.",
  },
];
