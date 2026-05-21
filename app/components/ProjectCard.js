"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "@/app/data/projects";

function getEmbedTarget(label, href) {
  if (label.toLowerCase().includes("live demo") && href.includes("huggingface.co/spaces/")) {
    const spacePath = href.split("huggingface.co/spaces/")[1]?.split(/[?#]/)[0];
    const [owner, space] = spacePath?.split("/") || [];

    if (owner && space) {
      return {
        label,
        src: `https://${owner}-${space}`.toLowerCase() + ".hf.space",
      };
    }
  }

  if (label.toLowerCase() === "dashboard" && href.includes("public.tableau.com")) {
    try {
      const url = new URL(href);
      const vizPath = url.pathname.split("/viz/")[1];

      if (vizPath) {
        return {
          label,
          src: `https://public.tableau.com/views/${vizPath}?:showVizHome=no&:embed=true`,
        };
      }
    } catch {
      return null;
    }
  }

  return null;
}

function ProjectEmbedOverlay({ embed, onClose }) {
  return (
    <div className="projectEmbedOverlay" onClick={onClose}>
      <div className="projectEmbedPanel" onClick={(event) => event.stopPropagation()}>
        <div className="projectEmbedHeader">
          <strong>{embed.label}</strong>
          <div>
            <a href={embed.src} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <button aria-label="Close embedded demo" onClick={onClose} type="button">
              ×
            </button>
          </div>
        </div>
        <iframe
          allow="accelerometer; camera; clipboard-read; clipboard-write; encrypted-media; fullscreen; microphone"
          className="projectEmbedFrame"
          loading="lazy"
          src={embed.src}
          title={embed.label}
        />
      </div>
    </div>
  );
}

function ProjectModal({ detail, project, onClose }) {
  const [activeEmbed, setActiveEmbed] = useState(null);
  const previewSections = detail.sections.filter(
    (section) => section.paragraphs || section.list || section.images
  );

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        if (activeEmbed) {
          setActiveEmbed(null);
          return;
        }

        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeEmbed, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <>
      <div aria-modal="true" className="projectModal" role="dialog" onClick={onClose}>
        <div className="projectModalPanel" onClick={(event) => event.stopPropagation()}>
          <button aria-label="Close project detail" className="projectModalClose" onClick={onClose} type="button">
            ×
          </button>

          <div className="projectModalHero">
            <p className="eyebrow">Project Detail</p>
            <h3>{detail.title}</h3>
            <p>{detail.subtitle || project.description}</p>
            <div className="projectModalActions">
              {project.links.map(([label, href]) => {
                const embedTarget = getEmbedTarget(label, href);

                if (embedTarget) {
                  return (
                    <button key={href} type="button" onClick={() => setActiveEmbed(embedTarget)}>
                      {label}
                    </button>
                  );
                }

                return (
                  <a href={href} key={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="projectModalBody">
            {previewSections.slice(0, 4).map((section) => (
              <section className="projectModalSection" key={section.heading}>
                <h4>{section.heading}</h4>
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
                {section.images?.slice(0, 2).map(([src, caption]) => (
                  <figure className="projectModalFigure" key={src}>
                    <Image alt={caption || `${detail.title} visual`} src={src} width={900} height={560} />
                    {caption ? <figcaption>{caption}</figcaption> : null}
                  </figure>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
      {activeEmbed ? <ProjectEmbedOverlay embed={activeEmbed} onClose={() => setActiveEmbed(null)} /> : null}
    </>,
    document.body
  );
}

export default function ProjectCard({ project, featured = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const detail = useMemo(() => projects[project.slug], [project.slug]);

  function openModal() {
    if (detail) {
      setIsOpen(true);
    }
  }

  return (
    <>
      <article
        className={featured ? "projectCard featuredProject" : "projectCard"}
        onClick={openModal}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal();
          }
        }}
        role={detail ? "button" : undefined}
        tabIndex={detail ? 0 : undefined}
      >
        {project.image ? (
          <div className="projectImageLink">
            <Image
              alt={`${project.title} preview`}
              className="projectCardImage"
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1120px) 44vw, 360px"
              src={project.image}
            />
          </div>
        ) : null}
        <div>
          {project.badge ? <span className="tag">{project.badge}</span> : null}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="projectMeta">
          <p>Impact: {project.impact}</p>
          <span>{project.stack}</span>
        </div>
        <div className="projectLinks" onClick={(event) => event.stopPropagation()}>
          <button type="button" onClick={openModal}>
            Detail Project
          </button>
        </div>
      </article>

      {isOpen && detail ? (
        <ProjectModal detail={detail} project={project} onClose={() => setIsOpen(false)} />
      ) : null}
    </>
  );
}
