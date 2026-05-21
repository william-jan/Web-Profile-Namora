import Image from "next/image";
import { notFound } from "next/navigation";
import ThemeToggle from "@/app/components/ThemeToggle";
import { projects } from "@/app/data/projects";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = projects[params.slug];

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Fernando Namora`,
    description: project.subtitle,
  };
}

function ProjectImage({ src, caption }) {
  return (
    <>
      <Image
        src={src}
        alt={caption || "Project visual"}
        width={1200}
        height={760}
        className="project-image"
      />
      {caption ? <p className="image-caption">{caption}</p> : null}
    </>
  );
}

export default function ProjectPage({ params }) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="project-hero">
        <ThemeToggle />
        <div className="text">
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
          {project.logo ? (
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={180}
              height={180}
              className="project-logo"
            />
          ) : null}
          <div className="buttons">
            {project.links.map(([label, href]) => (
              <a href={href} key={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="project-content">
        {project.sections.map((section) => (
          <div className="project-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.iframe ? (
              <>
                <div className="tableau-container">
                  <iframe src={section.iframe} title={section.heading} />
                </div>
                {section.caption ? <p className="image-caption">{section.caption}</p> : null}
              </>
            ) : null}
            {section.images?.map(([src, caption]) => (
              <ProjectImage src={src} caption={caption} key={src} />
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
