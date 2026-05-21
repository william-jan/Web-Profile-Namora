"use client";

import { useState } from "react";

const skillGroups = [
  {
    title: "Machine Learning",
    label: "Modeling",
    copy: "Building supervised models, evaluation workflows, feature engineering, and deployment-ready prediction apps.",
    steps: ["EDA", "Features", "Model", "Deploy"],
    chips: ["Scikit-learn", "TensorFlow", "NLP"],
  },
  {
    title: "Data Pipelines",
    label: "Workflow",
    copy: "Designing repeatable ETL flows with orchestration, validation, and monitoring for business-ready datasets.",
    steps: ["Ingest", "Validate", "Transform", "Monitor"],
    chips: ["Airflow", "Docker", "Great Expectations"],
  },
  {
    title: "BI & Analytics",
    label: "Insights",
    copy: "Turning raw data into statistical insights, dashboards, and practical recommendations for decision makers.",
    steps: ["Clean", "Analyze", "Visualize", "Explain"],
    chips: ["Tableau", "Power BI", "Pandas"],
  },
  {
    title: "Data Engineering",
    label: "Systems",
    copy: "Connecting data sources, SQL logic, quality checks, and deployment tools into end-to-end analytical systems.",
    steps: ["SQL", "Storage", "Checks", "Serve"],
    chips: ["PostgreSQL", "Elasticsearch", "Streamlit"],
  },
];

const marqueeSkills = [
  "Python",
  "SQL",
  "Pandas",
  "Scikit-learn",
  "Airflow",
  "Docker",
  "Great Expectations",
  "Tableau",
  "Power BI",
  "Kibana",
];

export default function SkillShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSkill = skillGroups[activeIndex];

  return (
    <div className="skillExperience">
      <div className="skillTabs" aria-label="Skill categories">
        {skillGroups.map((skill, index) => (
          <button
            aria-pressed={activeIndex === index}
            key={skill.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{skill.title}</span>
            <small>{skill.label}</small>
          </button>
        ))}
      </div>

      <article className="skillFeature">
        <span className="featureNumber">{String(activeIndex + 1).padStart(2, "0")}</span>
        <div className="skillFeatureCopy">
          <div className="featureIntro">
            <span>{activeSkill.label}</span>
            <h3>{activeSkill.title}</h3>
            <p>{activeSkill.copy}</p>
          </div>
          <div className="workflowSteps" aria-label={`${activeSkill.title} workflow`}>
            {activeSkill.steps.map((step, index) => (
              <div className="workflowStep" key={step} style={{ "--step-index": index }}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <div className="featureChips">
            {activeSkill.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
      </article>

      <div className="skillMarquee" aria-label="Complete skill list">
        <div className="marqueeTrack">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
        <div className="marqueeTrack reverse">
          {[...marqueeSkills].reverse().concat([...marqueeSkills].reverse()).map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
