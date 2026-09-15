"use client";

import { useState } from "react";
import styles from "./page.module.css";

const ALL_PROJECTS = [
  {
    id: 1,
    name: "Axiom Industries",
    category: "Client Projects",
    badge: "Client Project",
    badgeType: "client",
    description:
      "5-page tech/AI business website built for a real client using React + Node.js. Featured interactive 3D elements, a custom CAD-style blueprint cursor, sleek grid animations, and high-performance routing.",
    tags: ["React", "Node.js", "3D Elements", "Custom Cursor", "Blueprint UI"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 2,
    name: "Borriendo Fusion Restaurant",
    category: "Hospitality & E-Com",
    badge: "Live Client",
    badgeType: "client",
    description:
      "A Japanese x Korean fusion restaurant website built for a Lahore-based business. Included hero showcase, philosophy/story section, dynamic tabbed menu (Japanese/Korean/Sweet & Sides), food gallery, online reservation form, and footer. Deployed on Netlify.",
    tags: ["Next.js", "React", "Netlify", "Menu Tabs", "Reservation Form"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 3,
    name: "LINKD. Accessories",
    category: "Hospitality & E-Com",
    badge: "E-Commerce",
    badgeType: "design",
    description:
      "Gen-Z accessories e-commerce website (rings, bracelets, chains, chokers). Included Home, Shop, Lookbook, About, and Contact pages with interactive product filters, cart UI, and lookbook galleries. Deployed on Netlify.",
    tags: ["React", "E-Commerce", "Lookbook", "Netlify", "Product Filter"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 4,
    name: "Oma's Pizza",
    category: "Hospitality & E-Com",
    badge: "Local Client",
    badgeType: "client",
    description:
      "Multi-page restaurant website built for a real food business in Ferozewala, Pakistan. Featuring a bold red/black/white theme, interactive pizza builder/menu, location maps, and WhatsApp instant ordering.",
    tags: ["React", "WhatsApp API", "Food UI", "Responsive Design"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 5,
    name: "Vantablock Crypto Platform",
    category: "Full-Stack Apps",
    badge: "Fintech",
    badgeType: "fullstack",
    description:
      "Crypto trading and blockchain website built for a client using React + Node.js. Featured real-time animated SVG charts, live cryptocurrency ticker bar, currency converter, and transaction dashboard.",
    tags: ["React", "Node.js", "SVG Charts", "Crypto Ticker", "REST API"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 6,
    name: "Portfolio Website (moiz.dev)",
    category: "Full-Stack Apps",
    badge: "Featured",
    badgeType: "fullstack",
    description:
      "My own personal developer portfolio built with Next.js App Router. Full-stack, multi-page, polished with smooth micro-animations, comic badge aesthetics, dark mode glassmorphism, and instant WhatsApp/GitHub/Fiverr connectivity.",
    tags: ["Next.js 16", "React 19", "CSS Modules", "Glassmorphism", "SEO"],
    live: "/",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 7,
    name: "Personal Brand Landing Page",
    category: "Landing Pages",
    badge: "Landing Page",
    badgeType: "design",
    description:
      "A high-conversion single-page freelancer/personal-brand landing page tailored for independent creators and consultants seeking clients.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "High Conversion"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 8,
    name: "Artificial Jewelry Website",
    category: "Hospitality & E-Com",
    badge: "5-Page Store",
    badgeType: "design",
    description:
      "A stylish 5-page jewelry website with elegant gold-accented layouts, product category grids, smooth image zoom transitions, and fully responsive mobile optimization.",
    tags: ["React", "CSS Modules", "Product Showcase", "Animations"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 9,
    name: "School Management Website",
    category: "Full-Stack Apps",
    badge: "5-Page Portal",
    badgeType: "fullstack",
    description:
      "A professional 5-page school website featuring academic program listings, student admissions portal, teacher directory, campus facility tours, and dynamic fee calculators.",
    tags: ["Next.js", "Admissions Portal", "Academics", "Faculty Directory"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 10,
    name: "Futuristic Space Website",
    category: "Full-Stack Apps",
    badge: "Sci-Fi Experience",
    badgeType: "design",
    description:
      "A unique futuristic space-themed website with dark modern visuals, immersive galaxy parallax sections, interactive constellation animations, and audio effects.",
    tags: ["Three.js", "CSS Animations", "Dark Theme", "Parallax UI"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 11,
    name: "Coffee Brand Website",
    category: "Hospitality & E-Com",
    badge: "Brand UI",
    badgeType: "design",
    description:
      "A modern coffee brand website featuring artisan bean product/menu sections, attractive brew visualizers, smooth hover aroma effects, and store locator.",
    tags: ["React", "Tailwind CSS", "Menu UI", "Responsive Design"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 12,
    name: "Fast Food Website",
    category: "Hospitality & E-Com",
    badge: "Food Chain",
    badgeType: "design",
    description:
      "A visually engaging fast-food website with fiery burger combos, promotional deal banners, modern animated cart UI, and lightning-fast load times.",
    tags: ["JavaScript", "CSS3", "Deals Banner", "Mobile First"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 13,
    name: "Luxury Real Estate Website",
    category: "Full-Stack Apps",
    badge: "Premium Real Estate",
    badgeType: "fullstack",
    description:
      "A premium real estate portal designed to showcase luxury villas and apartments with virtual tour embeds, interactive floor plans, mortgage estimator, and schedule viewing forms.",
    tags: ["Next.js", "React", "Mortgage Calculator", "Virtual Tour"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 14,
    name: "Next.js Smart Calculator",
    category: "Full-Stack Apps",
    badge: "Web Utility",
    badgeType: "fullstack",
    description:
      "A responsive calculator app built with Next.js and React, featuring complete mathematical calculation logic, dark/light toggle, calculation history log, and keyboard shortcuts.",
    tags: ["Next.js", "React Hooks", "Dark Mode", "State Management"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 15,
    name: "3-Page Business Portal",
    category: "Landing Pages",
    badge: "Corporate",
    badgeType: "design",
    description:
      "A modern responsive business website with clean layouts, interactive services section, client testimonials slider, smooth animations, and contact integration.",
    tags: ["React", "CSS Modules", "Testimonial Slider", "SEO Ready"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 16,
    name: "5-Page Multi-Business Website",
    category: "Full-Stack Apps",
    badge: "Enterprise",
    badgeType: "fullstack",
    description:
      "A complete multi-page website with modern UI, responsive grid systems, dynamic blog pagination, interactive pricing tiers, and smooth page transitions.",
    tags: ["Next.js", "Node.js", "Pricing Calculator", "Full-Stack"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
  {
    id: 17,
    name: "Creative One-Page Website",
    category: "Landing Pages",
    badge: "Single-Page",
    badgeType: "design",
    description:
      "A creative single-page experience combining all essential brand sections — hero, services, portfolio, timeline, and contact — into one smooth, responsive flow.",
    tags: ["HTML5", "CSS3", "Smooth Scroll", "Micro-Interactions"],
    live: "#",
    github: "https://github.com/moiiizyyy-alt",
  },
];

const CATEGORIES = [
  "All",
  "Client Projects",
  "Full-Stack Apps",
  "Hospitality & E-Com",
  "Landing Pages",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.projectsContainer}>
      {/* Header */}
      <header className={styles.headerSection}>
        <span className="comicBadge comicBadgeYellow">
          ✨ Crafted with Passion & Precision
        </span>
        <h1 className={styles.title}>
          Featured <span className="gradientText">Projects & Works</span>
        </h1>
        <p className={styles.subtitle}>
          Explore all 17 full-stack web applications, real-world client platforms, e-commerce stores, and interactive web experiences I have built.
        </p>
      </header>

      {/* Category Filter */}
      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`${styles.filterBtn} ${
              selectedCategory === cat ? styles.activeFilter : ""
            }`}
          >
            {cat} {cat === "All" && `(${ALL_PROJECTS.length})`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <div className={styles.cardTop}>
              <span className={styles.projectNumber}>
                #{project.id.toString().padStart(2, "0")}
              </span>
              <span
                className={`${styles.projectBadge} ${
                  project.badgeType === "client"
                    ? styles.badgeClient
                    : project.badgeType === "fullstack"
                    ? styles.badgeFullStack
                    : styles.badgeDesign
                }`}
              >
                {project.badge}
              </span>
            </div>

            <h2 className={styles.projectName}>{project.name}</h2>
            <p className={styles.projectDesc}>{project.description}</p>

            <div className={styles.tagList}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <a
                href={
                  project.live === "/"
                    ? "/"
                    : `https://wa.me/923196105319?text=Hi%20Moiz,%20I'm%20interested%20in%20discussing%20the%20${encodeURIComponent(
                        project.name
                      )}%20project!`
                }
                className={styles.projectLink}
                target={project.live === "/" ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <span>Discuss Project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubSmallBtn}
                title="View GitHub"
                aria-label="View on GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
