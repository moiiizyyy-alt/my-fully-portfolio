import styles from "./page.module.css";

const SKILL_CATEGORIES = [
  {
    category: "Languages & Markup",
    badge: "Core Foundations",
    badgeClass: "comicBadgeYellow",
    skills: [
      {
        name: "HTML5",
        icon: "🌐",
        grip: "98% Mastery",
        percentage: 98,
        whatItDoes:
          "The structural backbone of the web. Defines semantic markup, document hierarchy, form controls, audio/video embeds, and accessibility (ARIA) standards.",
        myGrip:
          "I build 100% semantic, clean, and SEO-optimized HTML structures that search engine crawlers and screen readers love.",
      },
      {
        name: "CSS3 & Modern Styling",
        icon: "🎨",
        grip: "95% Mastery",
        percentage: 95,
        whatItDoes:
          "Provides visual aesthetics, layout engines (Flexbox & CSS Grid), keyframe animations, claymorphism, responsive breakpoints, and CSS variables.",
        myGrip:
          "Deep mastery of complex layouts, custom 3D animations, dark mode claymorphism themes, and responsive design systems without layout breaking.",
      },
      {
        name: "JavaScript (ES6+)",
        icon: "⚡",
        grip: "94% Mastery",
        percentage: 94,
        whatItDoes:
          "The interactive programming engine of the browser. Powers asynchronous calls (Promises, Async/Await), DOM manipulation, closures, and modular architecture.",
        myGrip:
          "Fluent in modern JavaScript, object destructuring, array algorithms, event loops, and clean modular logic for complex web apps.",
      },
    ],
  },
  {
    category: "Frontend Development",
    badge: "UI / UX Engineering",
    badgeClass: "comicBadgePink",
    skills: [
      {
        name: "React.js",
        icon: "⚛️",
        grip: "96% Mastery",
        percentage: 96,
        whatItDoes:
          "Component-based UI library. Enables declarative views, virtual DOM diffing, reactive state management (useState, useEffect, custom hooks), and reusable modular components.",
        myGrip:
          "I build fast, reactive single-page applications with clean component trees, custom hooks, and optimized re-renders.",
      },
      {
        name: "Next.js (App Router)",
        icon: "🚀",
        grip: "95% Mastery",
        percentage: 95,
        whatItDoes:
          "Enterprise React framework offering Server-Side Rendering (SSR), Static Site Generation (SSG), file-system routing, image optimization, and Server Actions.",
        myGrip:
          "My go-to production framework. I architect lightning-fast multi-page web applications with top-tier Lighthouse SEO and performance scores.",
      },
      {
        name: "Tailwind CSS",
        icon: "🌊",
        grip: "92% Mastery",
        percentage: 92,
        whatItDoes:
          "Utility-first CSS framework for rapid user interface styling directly inside markup without writing bulky boilerplate stylesheets.",
        myGrip:
          "Expert at assembling bespoke designs, custom Tailwind configs, responsive utility stacks, and polished color palettes.",
      },
      {
        name: "Bootstrap",
        icon: "🅱️",
        grip: "90% Mastery",
        percentage: 90,
        whatItDoes:
          "Battle-tested UI toolkit featuring 12-column grid systems, modal dialogs, carousels, responsive navigation bars, and quick component layouts.",
        myGrip:
          "Quick turnaround on enterprise portals and administrative dashboards with custom-themed Bootstrap components.",
      },
      {
        name: "Three.js",
        icon: "🌌",
        grip: "85% Mastery",
        percentage: 85,
        whatItDoes:
          "WebGL 3D graphics library. Creates interactive 3D objects, particle systems, lighting models, camera movements, and sci-fi canvas effects in browsers.",
        myGrip:
          "Integrated 3D blueprint models and space-themed visualizers into client web pages for high-engagement visual punch.",
      },
      {
        name: "Responsive Web Design",
        icon: "📱",
        grip: "98% Mastery",
        percentage: 98,
        whatItDoes:
          "Techniques ensuring web layouts adapt smoothly across mobile smartphones, tablets, laptops, and ultra-wide 4K monitors.",
        myGrip:
          "Mobile-first mindset. Every website I deliver feels natural, touch-friendly, and perfectly aligned on any screen size.",
      },
    ],
  },
  {
    category: "Backend & Database",
    badge: "Server & API Engine",
    badgeClass: "comicBadgeCyan",
    skills: [
      {
        name: "Node.js",
        icon: "🟢",
        grip: "93% Mastery",
        percentage: 93,
        whatItDoes:
          "V8 JavaScript server runtime for building scalable, event-driven network applications, REST APIs, and background processing workers.",
        myGrip:
          "Architect robust backend server processes, handling asynchronous file streams, authentication, and high-concurrency requests.",
      },
      {
        name: "Express.js",
        icon: "🚂",
        grip: "94% Mastery",
        percentage: 94,
        whatItDoes:
          "Fast, minimalist web server framework for Node.js. Provides robust routing, middleware pipelines, error handling, and API controllers.",
        myGrip:
          "I build structured MVC APIs with custom auth middleware, JWT token verification, route validation, and clean error handling.",
      },
      {
        name: "MongoDB & Mongoose",
        icon: "🍃",
        grip: "92% Mastery",
        percentage: 92,
        whatItDoes:
          "NoSQL document-oriented database. Stores flexible JSON-like documents, dynamic collections, indexing, and aggregation pipelines.",
        myGrip:
          "Skilled in designing schema models with Mongoose, data relations, indexing for query speed, and aggregation analytics.",
      },
      {
        name: "RESTful APIs & Endpoints",
        icon: "🔗",
        grip: "95% Mastery",
        percentage: 95,
        whatItDoes:
          "Standardized communication bridges between frontend clients and server databases using HTTP methods (GET, POST, PUT, DELETE).",
        myGrip:
          "Seamlessly connect UI forms with backend services, third-party APIs (WhatsApp, payment gateways, crypto feeds), and live webhooks.",
      },
    ],
  },
  {
    category: "Tools & Ecosystem",
    badge: "Workflow & Cloud",
    badgeClass: "comicBadgeYellow",
    skills: [
      {
        name: "GitHub & Version Control",
        icon: "🐙",
        grip: "94% Mastery",
        percentage: 94,
        whatItDoes:
          "Distributed version control platform for tracking code history, branch management, collaborative pull requests, and open-source contributions.",
        myGrip:
          "Daily active workflow with Git commits, repository management, clean branching, and collaborative open-source deployments.",
      },
      {
        name: "VS Code & Antigravity AI",
        icon: "💻",
        grip: "96% Mastery",
        percentage: 96,
        whatItDoes:
          "State-of-the-art coding environment supercharged with AI-assisted agentic workflows, extensions, live debugging, and rapid iteration.",
        myGrip:
          "High-speed coding efficiency, automated refactoring, and deep mastery of modern IDE power tools and developer workflows.",
      },
      {
        name: "Figma (UI/UX Design)",
        icon: "📐",
        grip: "90% Mastery",
        percentage: 90,
        whatItDoes:
          "Industry standard collaborative interface design tool for creating wireframes, interactive prototypes, and design systems.",
        myGrip:
          "Can design clean UI prototypes in Figma and translate any Figma mock-up into 100% pixel-perfect production code.",
      },
      {
        name: "Vercel & Netlify Deployment",
        icon: "☁️",
        grip: "95% Mastery",
        percentage: 95,
        whatItDoes:
          "Global cloud platforms for automated continuous deployment (CI/CD), serverless functions, edge routing, and custom domain configuration.",
        myGrip:
          "Shipped multiple live client websites with automated Git pushes, SSL certificates, environment variables, and CDN caching.",
      },
      {
        name: "Artificial Intelligence & Automation",
        icon: "🤖",
        grip: "92% Mastery",
        percentage: 92,
        whatItDoes:
          "Leveraging modern LLMs, prompt engineering, AI API integrations, and agentic workflows to build smarter, faster software.",
        myGrip:
          "Integrating AI-driven features, smart search, automated content workflows, and AI assistants into web platforms.",
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className={styles.skillsContainer}>
      <header className={styles.headerSection}>
        <span className="comicBadge comicBadgeCyan">
          ⚡ Technical Arsenal & Grip
        </span>
        <h1 className={styles.title}>
          My Skills & <span className="gradientText">Proficiency</span>
        </h1>
        <p className={styles.subtitle}>
          Here is the complete breakdown of every tool, language, and technology I command — what each technology does, and how I apply it to deliver gold-standard web software.
        </p>
      </header>

      {SKILL_CATEGORIES.map((cat, idx) => (
        <section key={idx} className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={`comicBadge ${cat.badgeClass}`}>{cat.badge}</span>
            <h2 className={styles.categoryTitle}>{cat.category}</h2>
          </div>

          <div className={styles.skillsGrid}>
            {cat.skills.map((skill, sIdx) => (
              <div key={sIdx} className={styles.skillCard}>
                <div className={styles.skillTop}>
                  <div className={styles.skillNameRow}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                  </div>
                  <span className={styles.gripBadge}>{skill.grip}</span>
                </div>

                <div className={styles.progressContainer}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>

                <p className={styles.whatItDoes}>
                  <strong>What it does:</strong> {skill.whatItDoes}
                </p>

                <div className={styles.myGripBox}>
                  <div className={styles.myGripLabel}>My Practical Grip:</div>
                  <div className={styles.myGripText}>{skill.myGrip}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
