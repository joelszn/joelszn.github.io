export interface PressItem {
  publication: string;
  title: string;
  url: string;
  type: "article" | "podcast" | "book" | "mention";
  description?: string;
  // Spotify embed URL for podcasts — use https://open.spotify.com/embed/episode/ID
  // or https://open.spotify.com/embed/show/ID as fallback
  embedUrl?: string;
}

export const pressItems: PressItem[] = [
  {
    publication: "Politico",
    title: "Interview Feature",
    url: "#",
    type: "article",
    description: "Featured in Politico discussing technology, education, and career development.",
  },
  {
    publication: "Hella Latin@",
    title: "From Section 8 to Big Tech",
    url: "https://open.spotify.com/show/5Prhl8PA5YstyjMk66KmKM",
    type: "podcast",
    description: "Dominican born and Brooklyn raised — Joel shares his journey from selling hats on the street to becoming a Product Manager at Microsoft, on creating generational wealth and showing up as yourself in corporate America.",
    // Show embed — update to specific episode ID when available
    embedUrl: "https://open.spotify.com/embed/show/5Prhl8PA5YstyjMk66KmKM?utm_source=generator&theme=0",
  },
  {
    publication: "Quién Tú Eres",
    title: "Jesus Piece with Joel Duran",
    url: "https://open.spotify.com/show/7pd710FIKFb89FtIuurdyI",
    type: "podcast",
    description: "A candid conversation about identity, navigating professionalism as a first-gen Latino, growing up in section 8 East New York, and building a career in tech — all while staying true to who you are.",
    embedUrl: "https://open.spotify.com/embed/show/7pd710FIKFb89FtIuurdyI?utm_source=generator&theme=0",
  },
  {
    publication: "Dominicans En Tech",
    title: "Episodio 09: Joel Duran — Product Manager en Microsoft",
    url: "https://open.spotify.com/episode/2CHRDSxToiPASdHfLAZ0yj",
    type: "podcast",
    description: "Sharing the journey from Brooklyn to Microsoft — building AI products on Windows, giving back to the Dominican and Latino community, and what it means to be a PM at one of the world's largest tech companies.",
    embedUrl: "https://open.spotify.com/embed/episode/2CHRDSxToiPASdHfLAZ0yj?utm_source=generator&theme=0",
  },
  {
    publication: "Afrotech",
    title: "My First Experience at Afrotech",
    url: "https://afrotech.com/my-first-experience-at-afrotech-went-a-little-like-this",
    type: "article",
    description: "A personal essay about attending Afrotech 2019 — the energy, the people, and what it means to see yourself represented in tech.",
  },
  {
    publication: "CodeAcademy",
    title: "Featured by CEO Zach Sims",
    url: "http://news.codecademy.com/exciting-news-to-share/",
    type: "mention",
    description: "Mentioned by CodeAcademy's CEO on a panel about the Future of Education after discussing the platform's impact on self-taught developers.",
  },
  {
    publication: "EdSurge",
    title: "Technology and the Opportunity Gap",
    url: "https://www.edsurge.com/news/2016-02-10-technology-and-its-implementation-in-schools-is-widening-the-opportunity-gap",
    type: "article",
    description: "Mentioned by Google PM Mary Jo Madda in a piece about how technology implementation in schools risks widening — rather than closing — the opportunity gap.",
  },
  {
    publication: "IBM Jobs Blog",
    title: "P-TECH: Redefining Possibilities",
    url: "https://blog.ibm.jobs/2016/07/20/ibm-p-tech-redefining-possibilities-for-a-new-generation/",
    type: "mention",
    description: "Highlighted as a P-TECH graduate and IBM intern, representing a new generation of talent from underrepresented communities in tech.",
  },
  {
    publication: "Book Mention",
    title: "The Challenge for Business and Society",
    url: "https://books.google.com/books?id=XGpaDwAAQBAJ&pg=PT88",
    type: "book",
    description: "Named by IBM Executive Stan Litow in his book \"The Challenge for Business and Society: From Risk to Reward\" as an example of P-TECH's impact on a generation of young technologists.",
  },
];
