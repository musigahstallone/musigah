"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = portfolioData;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.shortName}</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navLinks"
          aria-label="Toggle navigation"
        >
          <span>Menu</span>
          <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`} id="navLinks" aria-label="Main navigation">
          <Link href="#about" onClick={closeMenu}>
            About
          </Link>
          <Link href="#projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="#skills" onClick={closeMenu}>
            Skills
          </Link>
          <Link href="#experience" onClick={closeMenu}>
            Development
          </Link>
          <Link href="#venture" onClick={closeMenu}>
            Venture
          </Link>
          <a
            href={profile.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-website-btn"
            title="Visit Stallone's Live Personal Website"
          >
            <span>Personal Website</span>
            <span className="external-arrow">↗</span>
          </a>
          <Link href="#contact" className="nav-contact" onClick={closeMenu}>
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
