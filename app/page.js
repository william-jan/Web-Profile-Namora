import Image from "next/image";
import CertificationShowcase from "./components/CertificationShowcase";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProfilePhotoModal from "./components/ProfilePhotoModal";
import ProjectCard from "./components/ProjectCard";
import ProjectCarousel from "./components/ProjectCarousel";
import ScrollProgress from "./components/ScrollProgress";
import SkillShowcase from "./components/SkillShowcase";
import { additionalProjects, featuredProjects } from "./data/home";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Certifications", "#certifications"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const experiences = [
  {
    title: "Data Operations & Sales Analytics Support",
    company: "ECU Worldwide",
    period: "Recent role",
    duration: "Analytics & operations",
    points: [
      "Analyzed booking volume and customer demand across trade lanes to support sales planning and performance optimization",
      "Built Excel dashboards for customer segmentation and route performance analysis",
      "Identified high-value shipping lanes to improve conversion and revenue opportunities",
      "Collaborated cross-functionally to ensure data accuracy and improve operational efficiency",
    ],
  },
  {
    title: "Actuarial Data & Pricing Analyst",
    company: "PT Asuransi Simas Jiwa",
    period: "Previous role",
    duration: "Pricing & reporting",
    points: [
      "Developed pricing models using risk-based actuarial methods and historical data",
      "Built automated Excel tools (VBA) for premium simulation and internal reporting",
      "Improved reporting efficiency and reduced manual processing time",
      "Collaborated with IT during UAT to validate data flows and system enhancements",
    ],
  },
];

const education = [
  {
    title: "Universitas Indonesia",
    subtitle: "Bachelor of Mathematics • GPA: 3.77 / 4.00",
    image: "/assets/fmipa-ui.jpg",
    points: [
      "Specialized in Statistics, Regression Analysis, and Actuarial Mathematics",
      "Teaching Assistant for Statistics, Financial Mathematics, and Calculus",
      "2nd Place - Statistics Team Competition (LOGIKA UI)",
    ],
  },
  {
    title: "Hacktiv8 Full-Time Data Science Bootcamp",
    subtitle: "Final Score: 97.34%",
    image: "/assets/hacktiv8-logo.png",
    imageFit: "contain",
    points: [
      "Hands-on projects in analytics, machine learning, and data engineering",
      "ETL pipelines using Airflow and data validation with Great Expectations",
      "Tools: Python, SQL, Tableau, Power BI, Scikit-learn",
    ],
  },
];

const certifications = [
  {
    title: "BNSP Certified Data Analyst",
    issuer: "BNSP",
    desc: "National professional certification in data analysis",
    file: "/assets/certificates/Sertifikat Kompetensi BNSP - Data Analyst - Fernando Namora.pdf",
  },
  {
    title: "Hacktiv8 Data Science Bootcamp",
    issuer: "Hacktiv8",
    desc: "Final Score: 97.34%",
    file: "/assets/certificates/Certificate and Transcript Hacktiv8 - Fernando Namora.pdf",
  },
  {
    title: "HackerRank Credentials",
    issuer: "HackerRank",
    desc: "SQL, Python, and problem solving certificates",
    frames: [
      ["SQL (Advanced)", "https://www.hackerrank.com/certificates/iframe/c2a5965c3aa8"],
      ["SQL (Intermediate)", "https://www.hackerrank.com/certificates/iframe/d65596e64308"],
      ["SQL (Basic)", "https://www.hackerrank.com/certificates/iframe/e92f9786f288"],
      ["Python (Basic)", "https://www.hackerrank.com/certificates/iframe/f507d2ec6895"],
      ["Problem Solving (Basic)", "https://www.hackerrank.com/certificates/iframe/7f9a1eea92ca"],
    ].map(([label, src]) => ({ label, src })),
  },
];

function InfoCard({ item }) {
  return (
    <article className="infoCard">
      <h3>{item.title}</h3>
      {item.image ? (
        <div className={item.imageFit === "contain" ? "educationImageFrame contain" : "educationImageFrame"}>
          <Image alt={`${item.title} visual`} src={item.image} width={760} height={430} />
        </div>
      ) : null}
      <p>{item.subtitle}</p>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Home() {
  const allProjects = [...featuredProjects, ...additionalProjects];

  return (
    <main>
      <ScrollProgress />

      <header className="siteHeader">
        <a className="brand" href="#home">
          <span>FN</span>
          <small>Portfolio</small>
        </a>
        <nav aria-label="Navigasi utama">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="heroIdentity">
          <h1 className="heroTitle">Fernando Namora</h1>
          <ProfilePhotoModal />
          <p className="heroRole">Data Analyst focused on Machine Learning & Data Pipelines</p>
          <a className="button primary" href="/assets/Fernando_Namora_CV.pdf" download>
            Download CV
          </a>
          <p className="heroIntro">
            I build end-to-end data solutions, from pipelines to predictive models that drive real business decisions.
          </p>
        </div>
      </section>

      <section className="section introBand" id="about">
        <div className="aboutHero">
          <div className="aboutCopy">
            <span className="aboutBadge">Mathematics Graduate</span>
            <p className="eyebrow">About Me</p>
            <h2>Building practical data systems from analysis to deployment.</h2>
            <p>
              Mathematics graduate with experience in building data-driven solutions across analytics, machine learning, and data pipelines.
            </p>
            <p>
              Focused on transforming raw data into actionable insights, from exploratory analysis and modeling to deploying end-to-end systems for real business use.
            </p>
            <div className="aboutSkillChips" aria-label="Core skills">
              <span><i>01</i> Analytics</span>
              <span><i>02</i> Machine Learning</span>
              <span><i>03</i> Data Pipelines</span>
              <span><i>04</i> Insights</span>
            </div>
          </div>

          <div className="aboutVisual" aria-label="Data system overview">
            <div className="aboutVisualPlate" />
            <div className="dataSystemPanel">
              <div className="dataSystemHeader">
                <span>DATA SYSTEM</span>
                <strong>End-to-end workflow</strong>
              </div>
              <div className="pipelineFlow" aria-label="Data workflow">
                <div>
                  <span>01</span>
                  <strong>Raw Data</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>Pipeline</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>Model</strong>
                </div>
                <div>
                  <span>04</span>
                  <strong>Dashboard</strong>
                </div>
              </div>
              <div className="systemMetrics">
                <div>
                  <span>Data Quality</span>
                  <strong>98%</strong>
                </div>
                <div>
                  <span>Model Precision</span>
                  <strong>70%+</strong>
                </div>
                <div>
                  <span>Business Output</span>
                  <strong>Live</strong>
                </div>
              </div>
              <div className="miniChart" aria-hidden="true">
                <span style={{ "--bar": "42%" }} />
                <span style={{ "--bar": "58%" }} />
                <span style={{ "--bar": "74%" }} />
                <span style={{ "--bar": "66%" }} />
                <span style={{ "--bar": "86%" }} />
                <span style={{ "--bar": "72%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="aboutFacts" aria-label="Profile highlights">
          <article>
            <span>Experience</span>
            <strong>2 analytics roles</strong>
            <em>Operations support and actuarial pricing context</em>
          </article>
          <article>
            <span>Projects</span>
            <strong>8 portfolio projects</strong>
            <em>Machine learning, BI dashboards, and pipelines</em>
          </article>
          <article>
            <span>Achievements</span>
            <strong>97.34% final score</strong>
            <em>Hacktiv8 Data Science Bootcamp and BNSP certified</em>
          </article>
        </div>
      </section>

      <section className="section projectSection" id="projects">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Showcase</p>
            <h2>Featured Projects</h2>
          </div>
          <span>{allProjects.length} projects</span>
        </div>
        <ProjectCarousel label="Portfolio project carousel">
          {allProjects.map((project) => (
            <ProjectCard project={project} featured key={project.slug} />
          ))}
        </ProjectCarousel>
      </section>

      <section className="section experienceSection" id="experience">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Business context behind the analytical work.</h2>
          </div>
        </div>
        <ExperienceTimeline items={experiences} />
      </section>

      <section className="section educationSection" id="education">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Mathematics background with applied data training.</h2>
          </div>
        </div>
        <div className="educationGrid">
          {education.map((item) => (
            <InfoCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section certificationsSection" id="certifications">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Certifications</p>
            <h2>Verified data and SQL credentials.</h2>
          </div>
        </div>
        <CertificationShowcase items={certifications} />
      </section>

      <section className="section skillSection" id="skills">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Capability Map</p>
            <h2>Structured across analysis, modeling, and pipelines.</h2>
          </div>
        </div>
        <SkillShowcase />
      </section>

      <section className="section contactSection" id="contact">
        <div className="locationCopy">
          <p className="eyebrow">Contact</p>
          <h2>Open to analytical and data product work.</h2>
          <small>Available for analytics, machine learning, dashboarding, and data pipeline opportunities.</small>
        </div>
        <div className="contactPanel">
          <a href="mailto:namorafn7@gmail.com">Email</a>
          <a href="https://linkedin.com/in/fernando-namora" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/namora-fernando" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://wa.me/6285781172005" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
