"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import myPic from "../public/my pic.png";
import styles from "./page.module.css";

export default function Home() {
  const [lahoreTime, setLahoreTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      // Pakistan Standard Time is UTC+5
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLahoreTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection} aria-label="Hero Introduction">
        {/* Photo Column */}
        <div className={styles.imageCol}>
          <div className={styles.avatarWrapper}>
            <Image
              src={myPic}
              className={styles.avatarImage}
              alt="Muhammad Moiz — Full-Stack Developer"
              priority
            />
            <div className={styles.thisIsMeBadge}>
              This is me! 🚀
            </div>
          </div>

          <div className={styles.statusPill}>
            <span className={styles.pulseDot}></span>
            <span>Available for New Projects & Freelance</span>
          </div>
        </div>

        {/* Info Column */}
        <div className={styles.infoCol}>
          <div className={styles.heroTagline}>
            <span className={styles.comicStickerBadgeYellow}>
              Full-Stack (MERN) Developer
            </span>
            <span className={styles.comicStickerBadgePink}>
              🥇 Gold Medalist
            </span>
          </div>

          <h1 className={styles.nameTitle}>
            Hi, I'm <span className="gradientText">Moiz</span>
          </h1>
          <p className={styles.subHeading}>
            Building high-impact web apps from Lahore, Pakistan to the world.
          </p>

          <div className={styles.bioLead}>
            <p>
              Hi, I'm Moiz — a full-stack (MERN) developer based in Lahore, Pakistan, building complete web applications from the ground up.
            </p>
            <p>
              I work across the entire stack — <strong>React and Next.js</strong> on the front end, <strong>Node.js and Express.js</strong> on the back end, and <strong>MongoDB</strong> for data — so I handle everything from UI/UX to APIs to deployment, without needing to hand off pieces to someone else. I earned a <strong>Gold Medal</strong> for my mid-course performance in my full-stack development program, and I've shipped real client projects including restaurant websites, a crypto trading platform, and an AI/tech business site — each with working backends, not just static front ends.
            </p>
            <p>
              I care about the details on both sides: smooth, polished interfaces on the front, and clean, reliable logic powering them underneath. Whether it's a pixel-perfect landing page or a full multi-page app with a database and backend, I build it end-to-end.
            </p>
            <p style={{ color: "var(--clay-cyan)", fontWeight: 700 }}>
              Let's build something great together — front to back.
            </p>
          </div>

          {/* Quick CTA Group */}
          <div className={styles.heroCtaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              <span>Explore My 17+ Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <a
              href="https://wa.me/923196105319?text=Hi%20Moiz,%20I%20saw%20your%20portfolio%20and%20want%20to%20collaborate!"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
            >
              <span>Chat on WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.676-2.084-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.589-.493-.509-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.508c0 1.48 1.079 2.909 1.23 3.109.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.637.723.23 1.381.197 1.902.12.58-.087 1.78-.727 2.031-1.43.251-.702.251-1.303.176-1.43-.075-.126-.276-.201-.577-.351z"/>
              </svg>
            </a>

            <a
              href="https://github.com/moiiizyyy-alt"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <span>GitHub Profile</span>
            </a>

            <a
              href="https://www.fiverr.com/sellers/muhammad_moiz_9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fiverrBtn}
            >
              <span>Fiverr Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Counter Grid */}
      <section className={styles.statsGrid} aria-label="Key Highlights">
        <div className={styles.statCard}>
          <div className={`${styles.statValue} gradientText`}>17+</div>
          <div className={styles.statLabel}>Completed Projects</div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statValue} gradientTextWarm`}>MERN</div>
          <div className={styles.statLabel}>Full-Stack Mastery</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue} style={{ color: "var(--clay-yellow)" }}>🥇 Gold</div>
          <div className={styles.statLabel}>Course Performance Medal</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue} style={{ color: "var(--clay-green)" }}>100%</div>
          <div className={styles.statLabel}>Client Dedication</div>
        </div>
      </section>

      {/* Stories / Hustle Section */}
      <section className={styles.storiesSection} aria-label="Hustle and Experience">
        {/* Card 1: What I Did When I Was Free */}
        <div className={styles.storyCard}>
          <div className={styles.comicHeaderWrapper}>
            <span className={styles.comicStickerBadgeYellow}>
              ⚡ That's what I did when I was free!
            </span>
          </div>

          <div className={styles.storyContent}>
            "Freelancing has been a big part of my journey too. I actively work on Fiverr, taking on client projects there, but I don't just wait for work to come to me — I regularly step out into the local community and visit shops in person to find potential clients and build relationships face-to-face. That mix of online freelancing and old-school hustle has taught me as much about running a business as it has about writing code."
          </div>

          <div className={styles.storyTags}>
            <span className={styles.techTag}>💼 Fiverr Pro-active</span>
            <span className={styles.techTag}>🤝 Face-to-Face Hustle</span>
            <span className={styles.techTag}>🏬 Local Shop Solutions</span>
            <span className={styles.techTag}>📈 Real Business Value</span>
          </div>
        </div>

        {/* Card 2: Technical Philosophy & Architecture */}
        <div className={styles.storyCard}>
          <div className={styles.comicHeaderWrapper}>
            <span className={styles.comicStickerBadgePink}>
              🚀 Full-Stack Craftsmanship
            </span>
          </div>

          <div className={styles.storyContent}>
            "From conceptual wireframes in Figma to high-performance database schema design in MongoDB, I bridge the gap between creative visual art and robust computational backends. Every project I deliver is built with scalable clean code, optimized SEO meta structures, responsive cross-device layouts, and fluid micro-interactions."
          </div>

          <div className={styles.storyTags}>
            <span className={styles.techTag}>⚡ Zero Hand-off Friction</span>
            <span className={styles.techTag}>🛡️ Clean REST APIs</span>
            <span className={styles.techTag}>💎 Pixel Perfect UX</span>
            <span className={styles.techTag}>🎯 Complete Ownership</span>
          </div>
        </div>
      </section>

      {/* Identity Grid: Birthday & Location */}
      <section className={styles.identityGrid} aria-label="Personal Background">
        {/* DOB Card */}
        <div className={styles.identityCard}>
          <div className={styles.comicHeaderWrapper}>
            <span className={styles.comicStickerBadgeCyan}>
              🎂 That's when I opened my eyes for the first time
            </span>
          </div>

          <div className={styles.identityMainVal}>
            <span className="gradientText">May 17, 2006</span>
          </div>

          <p className={styles.identitySubText}>
            Young, energetic, and completely immersed in the cutting-edge ecosystem of modern web development and AI-driven tech.
          </p>
        </div>

        {/* Location Card */}
        <div className={styles.identityCard}>
          <div className={styles.comicHeaderWrapper}>
            <span className={styles.comicStickerBadgeYellow}>
              📍 Here I belong to
            </span>
          </div>

          <div className={styles.identityMainVal}>
            <span>Lahore, Pakistan 🇵🇰</span>
          </div>

          <div className={styles.identitySubText}>
            <p>
              Operating from the historic and bustling tech hub of Pakistan. Available for worldwide remote collaboration.
            </p>
            <p style={{ marginTop: "10px", color: "var(--clay-cyan)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
              🕒 Local Time in Lahore: {mounted ? lahoreTime : "Loading..."} (PKT)
            </p>
          </div>
        </div>
      </section>

      {/* Vibes & Hobbies Section */}
      <section className={styles.vibeGrid} aria-label="Personal Interests">
        <div className={styles.vibeCard}>
          <div className={styles.vibeIconBox}>🎧</div>
          <h2 className={styles.vibeTitle}>Heavy Beats on Repeat</h2>
          <p className={styles.vibeDesc}>
            South Asian hip-hop is the fuel behind late-night code sprints. <strong>Karan Aujla</strong> and <strong>Talha Anjum</strong> are always rocking in the background.
          </p>
        </div>

        <div className={styles.vibeCard}>
          <div className={styles.vibeIconBox}>🎱</div>
          <h2 className={styles.vibeTitle}>Snooker Master</h2>
          <p className={styles.vibeDesc}>
            When away from the IDE, you'll find me on the green baize table — calculating angles, positioning cues, and potting balls with surgical precision.
          </p>
        </div>

        <div className={styles.vibeCard}>
          <div className={styles.vibeIconBox}>💡</div>
          <h2 className={styles.vibeTitle}>Always Leveling Up</h2>
          <p className={styles.vibeDesc}>
            Constantly experimenting with Three.js 3D web experiences, Next.js App Router performance, and cutting-edge AI workflows.
          </p>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.bottomBanner}>
        <span className={styles.comicStickerBadgePink} style={{ marginBottom: "18px" }}>
          Ready to make magic? ✨
        </span>
        <h2 className={styles.bottomBannerTitle}>
          Have an idea or a project in mind?
        </h2>
        <p className={styles.bottomBannerSub}>
          Whether you need a high-converting landing page, an e-commerce platform, or a full-scale web app with a database — let's build it together.
        </p>

        <div className={styles.bannerButtons}>
          <a
            href="https://wa.me/923196105319?text=Hello%20Moiz,%20let's%20discuss%20a%20new%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappCta}
          >
            Direct WhatsApp (+92 319 6105319)
          </a>

          <Link href="/projects" className={styles.primaryBtn}>
            View All 17 Projects
          </Link>

          <Link href="/contact" className={styles.secondaryBtn}>
            Send a Direct Message
          </Link>

          <a
            href="https://www.fiverr.com/sellers/muhammad_moiz_9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fiverrBtn}
          >
            Fiverr Profile
          </a>
        </div>
      </section>
    </div>
  );
}
