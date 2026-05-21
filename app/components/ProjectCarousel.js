"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

const DRAG_THRESHOLD = 6;

function getMaxScroll(track) {
  return Math.max(track.scrollWidth - track.clientWidth, 0);
}

export default function ProjectCarousel({ children, label = "Project carousel" }) {
  const trackRef = useRef(null);
  const dragState = useRef({ active: false, dragging: false, startX: 0, scrollLeft: 0 });
  const suppressClick = useRef(false);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const items = Children.toArray(children);

  const syncCarouselState = useCallback(function syncCarouselState() {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = getMaxScroll(track);
    const nextProgress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const nextPageCount = Math.max(1, Math.round(track.scrollWidth / track.clientWidth));

    setScrollProgress(Math.min(Math.max(nextProgress, 0), 1));
    setPageCount(nextPageCount);
    setActivePage(Math.round(nextProgress * (nextPageCount - 1)));
  }, []);

  function scrollByPage(direction) {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: "smooth",
    });
  }

  function scrollToPage(index) {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = getMaxScroll(track);
    const pageRatio = pageCount > 1 ? index / (pageCount - 1) : 0;

    track.scrollTo({
      left: maxScroll * pageRatio,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    syncCarouselState();

    window.addEventListener("resize", syncCarouselState);
    return () => {
      window.removeEventListener("resize", syncCarouselState);
    };
  }, [syncCarouselState]);

  function handlePointerDown(event) {
    if (event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    dragState.current = {
      active: true,
      dragging: false,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
  }

  function handlePointerMove(event) {
    const track = trackRef.current;
    const state = dragState.current;

    if (!track || !state.active) return;

    const deltaX = event.clientX - state.startX;

    if (!state.dragging && Math.abs(deltaX) < DRAG_THRESHOLD) {
      return;
    }

    if (!state.dragging) {
      state.dragging = true;
      setIsDragging(true);
      track.setPointerCapture(event.pointerId);
    }

    event.preventDefault();
    track.scrollLeft = state.scrollLeft - deltaX;
  }

  function finishDrag(event) {
    const track = trackRef.current;
    const wasDragging = dragState.current.dragging;
    dragState.current = { active: false, dragging: false, startX: 0, scrollLeft: 0 };
    setIsDragging(false);

    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    if (wasDragging) {
      suppressClick.current = true;
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
      syncCarouselState();
    }
  }

  function handleClickCapture(event) {
    if (!suppressClick.current) return;

    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className="projectCarousel" aria-label={label}>
      <div className="carouselTopline">
        <div className="carouselProgress" aria-hidden="true">
          <span style={{ width: `${Math.max(8, scrollProgress * 100)}%` }} />
        </div>
        <div className="carouselControls">
          <button type="button" aria-label="Previous projects" onClick={() => scrollByPage(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Next projects" onClick={() => scrollByPage(1)}>
            ›
          </button>
        </div>
      </div>

      <div
        className={isDragging ? "carouselTrack isDragging" : "carouselTrack"}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onScroll={syncCarouselState}
        onClickCapture={handleClickCapture}
      >
        {items.map((child, index) => (
          <div className="carouselSlide" key={index}>
            {child}
          </div>
        ))}
      </div>

      <div className="carouselDots" aria-label="Project slide position">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            type="button"
            aria-label={`Go to carousel page ${index + 1}`}
            aria-current={activePage === index ? "true" : undefined}
            key={index}
            onClick={() => scrollToPage(index)}
          />
        ))}
      </div>
    </div>
  );
}
