import { portfolioData, SkillCategory } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skillsSection } = portfolioData;

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <div>
          <div className="section-kicker">{skillsSection.kicker}</div>
          <h2 className="section-title">{skillsSection.title}</h2>
        </div>
        <p className="section-subtitle">{skillsSection.subtitle}</p>
      </div>

      <div className="skills-grid">
        {skillsSection.categories.map((category: SkillCategory, index: number) => (
          <article key={index} className="skill-group">
            <h3 className="skill-group-title">{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill: string, sIndex: number) => (
                <span key={sIndex} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
