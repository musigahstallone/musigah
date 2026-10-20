import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;
  const currentYear = 2026;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="copyright">
          © {currentYear} {profile.name}. All rights reserved.
        </span>

        <div className="footer-links">
          <a
            href={profile.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-highlight"
            title="Visit Stallone's Personal Website"
          >
            Personal Website ↗
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href={profile.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost ↗
          </a>
          <Link href="#home" className="footer-back-top">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}