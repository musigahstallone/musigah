"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { contactSection, profile } = portfolioData;
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profile.websiteUrl);
      showToast("Company website link copied to clipboard!");
    } catch {
      showToast("https://qmusglobal.com");
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <section className="section" id="contact">
      <div className="contact-panel">
        <div className="contact-info">
          <div className="section-kicker">{contactSection.kicker}</div>
          <h2 className="contact-title">{contactSection.title}</h2>
          <p className="contact-desc">{contactSection.description}</p>
        </div>

        <div className="contact-actions">
          {/* <a
            className="button button-website-contact"
            href={profile.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Company website at https://qmusglobal.com"
          >
            <span>Company website ↗</span>
          </a> */}

          <a
            className="button button-github-contact"
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Connect on GitHub ↗</span>
          </a>

          {/* <button
            type="button"
            className="button button-copy"
            onClick={handleCopyLink}
          >
            <span>Share Website Link</span>
          </button> */}
        </div>
      </div>

      {toastMessage && (
        <div className="toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
    </section>
  );
}
