import { portfolioData } from "@/data/portfolioData";

export default function CompanySection() {
  const { ventureSection } = portfolioData;

  return (
    <section className="section" id="venture">
      <div className="section-heading">
        <div>
          <div className="section-kicker">{ventureSection.kicker}</div>
          <h2 className="section-title">{ventureSection.title}</h2>
        </div>
      </div>

      <div className="company-panel">
        <div>
          <div className="section-kicker">Company</div>
          <h3 className="company-name">{ventureSection.company}</h3>
          <p className="company-desc">{ventureSection.description}</p>
        </div>
        <span className="company-badge">{ventureSection.badge}</span>
      </div>
    </section>
  );
}
