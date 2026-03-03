export type Project = {
  id: string;
  title: string;
  slug: string;
  overview: string;
  youtubeId: string;
  githubUrl: string;
  screenshotUrl: string;
  tech: string[];
  featured?: boolean;
  order: number;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Interactive Data Dashboard",
    slug: "interactive-data-dashboard",
    overview:
      "A responsive dashboard for exploring KPIs with real-time charts, filters, and dark mode. Built to feel fast and delightful on both desktop and mobile.",
    youtubeId: "dQw4w9WgXcQ",
    githubUrl: "https://github.com/your-username/interactive-data-dashboard",
    screenshotUrl:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    order: 1,
  },
  {
    id: "2",
    title: "Real‑time Collaboration Board",
    slug: "realtime-collaboration-board",
    overview:
      "A kanban-style collaboration tool with presence indicators, drag-and-drop cards, and optimistic UI updates for a snappy feel.",
    youtubeId: "dQw4w9WgXcQ",
    githubUrl: "https://github.com/your-username/realtime-collaboration-board",
    screenshotUrl:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tech: ["Next.js", "TypeScript", "WebSockets"],
    order: 2,
  },
  {
    id: "3",
    title: "Personal Finance Tracker",
    slug: "personal-finance-tracker",
    overview:
      "A minimalist finance tracker with import/export, visualizations, and budgeting envelopes designed to stay out of your way.",
    youtubeId: "dQw4w9WgXcQ",
    githubUrl: "https://github.com/your-username/personal-finance-tracker",
    screenshotUrl:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tech: ["Next.js", "Prisma", "SQLite"],
    order: 3,
  },
];

export function getProjects() {
  return projects.sort((a, b) => a.order - b.order);
}

export function getFeaturedProject() {
  return getProjects().find((p) => p.featured) ?? getProjects()[0];
}

