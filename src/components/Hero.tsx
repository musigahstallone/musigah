import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot"></span>
          <span>{profile.role}</span>
        </div>

        <h1 className="hero-title">
          {profile.headline.lead}
          <br />
          <span className="hero-name">{profile.headline.accent}</span>
        </h1>

        <p className="hero-description">{profile.bio}</p>

        <div className="hero-actions">
          {/* <a
            className="button button-website"
            href={profile.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Company website at https://qmusglobal.com"
          >
            <span>Visit Company website</span>
            <span aria-hidden="true">↗</span>
          </a> */}

          <a
            className="button button-primary"
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a className="button button-secondary" href="#projects">
            <span>Explore projects</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* <div className="quick-tags">
          <span className="quick-tag">
            <span className="quick-tag-dot"></span> Available for projects & roles
          </span>
          <span className="quick-tag">
            <span className="quick-tag-dot"></span> Based in Nairobi, Kenya
          </span>
        </div> */}
      </div>

      <aside className="profile-card" aria-label="Profile summary">
        <div className="avatar" aria-label="Initials SO">
          {profile.initials}.
        </div>
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-role">{profile.role}</p>

        <div className="profile-divider"></div>

        <div className="profile-meta">
          <span>Primary stack</span>
          <span className="profile-meta-val">{profile.primaryStack}</span>
        </div>
        <div className="profile-meta" style={{ marginTop: "10px" }}>
          <span>Organization</span>
          <span className="profile-meta-val">{profile.organization}</span>
        </div>
        <div className="profile-meta" style={{ marginTop: "10px" }}>
          <span>Company Website</span>
          <a
            href={profile.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link-badge"
          >
            qmusglobal.com ↗
          </a>
        </div>
      </aside>
    </section>
  );
}
