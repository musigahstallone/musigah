import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="section-heading">
        <div>
          <div className="section-kicker">{about.kicker}</div>
          <h2 className="section-title">{about.title}</h2>
        </div>
        <p className="section-subtitle">{about.subtitle}</p>
      </div>

      <div className="about-grid">
        <article className="panel">
          <h3 className="panel-title">{about.mainPanel.headline}</h3>
          {about.mainPanel.paragraphs.map((p, index) => (
            <p key={index} style={{ marginTop: index > 0 ? "14px" : "0" }}>
              {p}
            </p>
          ))}
        </article>

        <article className="panel">
          <h3 className="panel-title">{about.principlesTitle}</h3>
          <div className="principles">
            {about.principles.map((principle, index) => (
              <div key={index} className="principle">
                <div className="principle-icon" aria-hidden="true">
                  {principle.symbol}
                </div>
                <div>
                  <strong className="principle-title">{principle.title}</strong>
                  <span className="principle-desc">{principle.description}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
