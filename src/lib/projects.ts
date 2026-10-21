export type Project = {
  id: string;
  title: string;
  slug: string;
  overview: string;
  youtubeId?: string;
  githubUrl: string;
  liveUrl?: string;
  screenshotUrl?: string;
  tech: string[];
  featured?: boolean;
  order: number;
};

export const projects: Project[] = [
  {
    id: "4",
    title: "YG Stathead — Strokes Gained Explorer",
    slug: "yg-stathead-strokes-gained-explorer",
    overview:
      "A live data product scraped from Your Golf Tour player profiles that explores strokes-gained performance for 24 players across 2 Season 01 stops. It includes a leaderboard, a sortable category matrix, team rankings, player detail profiles, and comparisons of up to 3 players, with filters, CSV export, and shareable links.",
    githubUrl: "https://github.com/ClintBaker/yg_stathead_ygt",
    liveUrl: "https://www.ygstathead.com/",
    tech: ["Next.js", "Web Scraping", "Data Visualization"],
    featured: true,
    order: 1,
  },
  {
    id: "2",
    title: "PGA Tour Tournament Performance Analysis",
    slug: "pga-tour-tournament-performance-analysis",
    overview:
      "A Python-based analysis of PGA Tour tournament data exploring which strokes gained metrics most strongly correlate with stronger finishes, with notebook-driven exploration, statistical comparisons, and regression-based modeling.",
    youtubeId: "UdU8GI5tV3o",
    githubUrl: "https://github.com/ClintBaker/pga-tour-analysis",
    tech: ["Python", "pandas", "NumPy", "matplotlib", "SciPy", "Jupyter"],
    order: 2,
  },
  {
    id: "1",
    title: "OCR PDF Ingestion Automation",
    slug: "ocr-pdf-ingestion-automation",
    overview:
      "Automates OCR-based PDF intake and downstream production data workflows, combining document processing, structured extraction, review tooling, and a production-ready Next.js dashboard.",
    youtubeId: "onxq0dvl5k4",
    githubUrl: "https://github.com/ClintBaker/ocr-production-data",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Google AI"],
    order: 3,
  },
  {
    id: "3",
    title: "Student Academic Performance Analysis",
    slug: "student-academic-performance-analysis",
    overview:
      "An R-based portfolio analysis examining how study habits, sleep, test preparation, and internet access relate to student outcomes through exploratory analysis, feature engineering, and linear regression.",
    youtubeId: "LFD-l6VyNJw",
    githubUrl: "https://github.com/ClintBaker/student-academic-performance-analysis",
    tech: ["R", "tidyverse", "rmarkdown", "knitr", "Linear Regression"],
    order: 4,
  },
];

export function getProjects() {
  return projects.sort((a, b) => a.order - b.order);
}

export function getFeaturedProject() {
  return getProjects().find((p) => p.featured) ?? getProjects()[0];
}
