import { portfolioData, GrowthItem } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experienceSection } = portfolioData;

  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <div>
          <div className="section-kicker">{experienceSection.kicker}</div>
          <h2 className="section-title">{experienceSection.title}</h2>
        </div>
        <p className="section-subtitle">{experienceSection.subtitle}</p>
      </div>

      <div className="timeline">
        {experienceSection.items.map((item: GrowthItem, index: number) => (
          <article key={index} className="timeline-item">
            <div className="label">{item.type}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
