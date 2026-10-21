"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { projectsSection } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Financial systems", "Business software", "AI application", "Web application"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsSection.projects
      : projectsSection.projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <div>
          <div className="section-kicker">{projectsSection.kicker}</div>
          <h2 className="section-title">{projectsSection.title}</h2>
        </div>
        <p className="section-subtitle">{projectsSection.subtitle}</p>
      </div>

      {/* <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      <div className="projects-grid">
        {filteredProjects.map((project: Project) => (
          <article key={project.id} className="project-card">
            <div className="project-top">
              <div className="project-symbol" aria-hidden="true">
                {project.symbol}
              </div>
              <span className="project-type">{project.category}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="tag-list">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              className="project-link"
              href={project.linkUrl}
              target={project.isExternal ? "_blank" : undefined}
              rel={project.isExternal ? "noopener noreferrer" : undefined}
            >
              <span>{project.linkText}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
