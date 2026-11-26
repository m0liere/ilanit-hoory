// All of the site's content lives in this one file.
// To add an article or tool, copy an existing entry in the right list and edit it.

export type Article = {
  title: string;
  outlet: string;
  date?: string; // "YYYY-MM" or "YYYY"
  summary: string;
  url: string;
  linkLabel?: string; // defaults to "Read at <outlet>"
};

export type Tool = {
  name: string;
  description: string;
  url: string;
};

export type Talk = {
  title: string;
  event: string;
  status: "upcoming" | "presented";
};

export const site = {
  name: "Ilanit C. Hoory, Ed.D.",
  tagline:
    "School leader writing about family-school partnership, systems thinking, and technology that keeps people at the center.",

  greeting: "Hi, I'm Ilanit.",
  role: "Lower School Principal · Westchester, New York",

  // Photos live in /public.
  headshot: "/portrait.jpg" as string | null,

  // DRAFT: waiting for Ilanit's approval.
  about: [
    "I grew up in Haifa and started teaching in Israel, including as a teacher during my army service. Since moving to the United States in 1993, I've taught math, Hebrew, and Judaic Studies, coordinated K–5, and served as Assistant Principal. Today I'm the Lower School Principal at an independent K–12 day school in Westchester, New York.",
    "I hold an Ed.D. in Jewish educational leadership and innovation from the Azrieli Graduate School of Jewish Education and Administration at Yeshiva University, an M.S. in Instructional Technology, and a B.A. in Math and Elementary Education. I've also trained at the Harvard Principals' Center and in a national Prizmah leadership cohort at Georgetown University's McDonough School of Business.",
    "I write and speak about family-school partnership, the trust that grows from real conversation, systems thinking in schools, and AI that supports teachers without replacing human presence. Outside school, I love cooking, traveling with family and friends, and sharing my love of Israel.",
  ],

  articles: [
    {
      title: "Principals, Don't Let AI Undermine Strong Parent Relationships",
      outlet: "Education Week",
      date: "2026-07",
      summary:
        "Why trust between schools and families is built through real conversation, and where AI should and shouldn't fit.",
      url: "https://www.edweek.org/technology/opinion-principals-dont-let-ai-undermine-strong-parent-relationships/2026/07",
    },
    {
      // Add `date: "YYYY"` once the year is confirmed.
      title: "Assessing the Efficacy of Repeated Reading in Hebrew as a Second Language",
      outlet: "Ed.D. dissertation, Yeshiva University",
      summary:
        "Action research in my own school on whether repeated reading helps students build fluency in Hebrew as a second language.",
      url: "https://repository.yu.edu/items/17b4a54e-a257-43df-81e2-0122d049f2e7",
      linkLabel: "Read the dissertation",
    },
  ] satisfies Article[],

  tools: [
    {
      name: "Finding the Thread",
      description:
        "A practice space where teachers rehearse conversations with families: listen to model calls, practice scenarios, and prepare for a real call.",
      url: "https://claude.ai/artifact/WS1hqnMeELN7h6z7VQNMmz",
    },
  ] satisfies Tool[],

  // The Speaking section is hidden while this list is empty.
  talks: [] as Talk[],

  links: {
    linkedin: "https://www.linkedin.com/in/ilanit-hoory-ed-d-9a919744/",
    // Add her address here, for example "mailto:name@example.com". The Email link in the top bar appears once it's set.
    email: null as string | null,
  },
};
