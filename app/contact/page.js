"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("moiiizyyy@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.headerSection}>
        <span className="comicBadge comicBadgePink">
          📬 Direct Line to Moiz
        </span>
        <h1 className={styles.title}>
          Let's Build Something <span className="gradientText">Legendary!</span>
        </h1>
        <p className={styles.subtitle}>
          Have an exciting project, freelance opportunity, or just want to discuss tech and snooker? Reach out directly via WhatsApp, Email, Fiverr, or GitHub.
        </p>
      </header>

      <div className={styles.contactGrid}>
        {/* Left Column: Direct Channels */}
        <div className={styles.channelsCol}>
          {/* WhatsApp Card */}
          <div className={styles.channelCard}>
            <div className={styles.cardStickerTop}>
              <span className="comicBadge comicBadgeYellow">
                ⚡ Fastest Response
              </span>
              <span style={{ fontSize: "0.85rem", color: "#22c55e", fontWeight: 800 }}>
                ● Active Now
              </span>
            </div>

            <div className={styles.channelMainRow}>
              <div className={styles.channelIcon} style={{ background: "linear-gradient(145deg, #2ae070, #15803d)", color: "#03240e" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.676-2.084-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.589-.493-.509-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.508c0 1.48 1.079 2.909 1.23 3.109.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.637.723.23 1.381.197 1.902.12.58-.087 1.78-.727 2.031-1.43.251-.702.251-1.303.176-1.43-.075-.126-.276-.201-.577-.351z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.486 2 2 6.486 2 12c0 1.977.575 3.824 1.572 5.385L2.096 22l4.764-1.438A9.957 9.957 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2a8.16 8.16 0 01-4.223-1.168l-.303-.18-2.825.853.864-2.735-.198-.314A8.156 8.156 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2s8.2 3.678 8.2 8.2-3.678 8.2-8.2 8.2z"/>
                </svg>
              </div>

              <div className={styles.channelInfo}>
                <h3 className={styles.channelTitle}>WhatsApp Direct</h3>
                <p className={styles.channelValue}>+92 319 6105319</p>
              </div>
            </div>

            <a
              href="https://wa.me/923196105319?text=Hi%20Moiz,%20I%20am%20interested%20in%20working%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.channelBtn} ${styles.whatsappBtnStyle}`}
            >
              <span>Chat on WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Email Card */}
          <div className={styles.channelCard}>
            <div className={styles.cardStickerTop}>
              <span className="comicBadge comicBadgeCyan">
                ✉️ This is my official email
              </span>
            </div>

            <div className={styles.channelMainRow}>
              <div className={styles.channelIcon} style={{ background: "linear-gradient(145deg, #1fe3ff, #0284c7)", color: "#032030" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>

              <div className={styles.channelInfo}>
                <h3 className={styles.channelTitle}>Direct Email</h3>
                <p className={styles.channelValue}>moiiizyyy@gmail.com</p>
              </div>
            </div>

            <div className={styles.emailActionsRow}>
              <a
                href="mailto:moiiizyyy@gmail.com"
                className={`${styles.channelBtn} ${styles.emailBtnStyle} ${styles.emailBtn}`}
              >
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`${styles.channelBtn} ${styles.copyBtnStyle} ${styles.copyBtn}`}
              >
                <span>{copied ? "Copied! ✓" : "Copy Address"}</span>
              </button>
            </div>
          </div>

          {/* Fiverr & GitHub Grid */}
          <div className={styles.miniCardsGrid}>
            {/* Fiverr */}
            <div className={styles.channelCard}>
              <div className={styles.miniCardTop}>
                <div className={styles.fiverrPill}>Fiverr Pro</div>
              </div>
              <h3 className={styles.channelTitle}>Fiverr Seller</h3>
              <p className={styles.channelSubtext}>
                Order verified client gigs & custom milestone projects
              </p>
              <a
                href="https://www.fiverr.com/sellers/muhammad_moiz_9"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.channelBtn} ${styles.fiverrBtnStyle}`}
              >
                <span>Fiverr Profile</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* GitHub */}
            <div className={styles.channelCard}>
              <div className={styles.miniCardTop}>
                <div className={styles.githubPill}>Code Repo</div>
              </div>
              <h3 className={styles.channelTitle}>GitHub Profile</h3>
              <p className={styles.channelSubtext}>
                Explore open-source repositories & project code
              </p>
              <a
                href="https://github.com/moiiizyyy-alt"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.channelBtn} ${styles.githubBtnStyle}`}
              >
                <span>GitHub Profile</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className={styles.formCol}>
          <span className="comicBadge comicBadgeYellow" style={{ marginBottom: "16px" }}>
            🚀 Drop Me a Message
          </span>
          <h2 className={styles.formTitle}>Have a Project in Mind?</h2>
          <p className={styles.formSubtitle}>
            Fill out the details below and I'll get back to you within a few hours.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g. Alex Johnson"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Your Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="e.g. alex@example.com"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Project Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="e.g. Full-Stack Web App / Next.js Landing Page"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Project Details / Message *
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your requirements, timeline, and vision..."
                className={styles.formTextarea}
              />
            </div>

            <button type="submit" className={styles.formSubmitBtn}>
              <span>Send Message to Moiz</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>

            {submitted && (
              <div className={styles.successToast}>
                <span>✓</span>
                <span>Thank you! Your message has been prepared. You can also message Moiz directly on WhatsApp (+92 319 6105319) for immediate response!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
