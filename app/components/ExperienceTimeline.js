"use client";

import { useState } from "react";

export default function ExperienceTimeline({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="timeline" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article className="timelineItem" key={item.title} role="listitem">
            <div className="timelineDot" />
            <button
              aria-expanded={isOpen}
              className="timelineContent"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <div className="timelineHeader">
                <span className="tag">{item.period}</span>
                <span>{item.duration}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="muted">{item.company}</p>
              {isOpen ? (
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              <span className="expandHint">{isOpen ? "Ringkas detail" : "Lihat detail"}</span>
            </button>
          </article>
        );
      })}
    </div>
  );
}
