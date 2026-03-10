export type Project = {
  id: string;
  title: string;
  slug: string;
  overview: string;
  youtubeId: string;
  githubUrl: string;
  screenshotUrl?: string;
  tech: string[];
  featured?: boolean;
  order: number;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "OCR PDF Ingestion Automation",
    slug: "ocr-pdf-ingestion-automation",
    overview:
      "Automates OCR-based PDF intake and downstream production data workflows, combining document processing, structured extraction, review tooling, and a production-ready Next.js dashboard.",
    youtubeId: "onxq0dvl5k4",
    githubUrl: "https://github.com/ClintBaker/ocr-production-data",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Google AI"],
    featured: true,
    order: 2,
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
    order: 1,
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
    order: 3,
  },
];

export function getProjects() {
  return projects.sort((a, b) => a.order - b.order);
}

export function getFeaturedProject() {
  return getProjects().find((p) => p.featured) ?? getProjects()[0];
}

