import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>Conekt</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and deployed a real-time DOOH advertising platform in React, Node.js and MongoDB with 4 production modules, secure payments and role-based APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>Microcks CLI (CNCF)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Shipped 14 merged PRs to CNCF Microcks CLI (1,000+ stars) in Go and Cobra, and cut CI runtime by 35% with cached, parallel cross-platform GitHub Actions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>WiredLeap</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Delivered 20+ production CMS/CRM features in Next.js and React on Go REST APIs with JWT auth, and cut p95 query latency by 42% via PostgreSQL indexing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Taqtona AI · 28 Oct 2026 – Present</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built editor tools (block drawing, bulk delete), improved title-block and revision-table detection, and enhanced PDF/Excel export for AutoBalloon. Worked on its multi-tenant setup and AWS deployment (EC2, Docker, deploy on every push to main).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
