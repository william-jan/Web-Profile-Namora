"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function getOriginalCertificateUrl(frameUrl) {
  return frameUrl.replace("/iframe/", "/");
}

function CertificateModal({ certificate, onClose }) {
  const previewSrc = certificate.file ? `${certificate.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH` : null;
  const originalUrl = certificate.originalUrl || certificate.file || null;

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div aria-modal="true" className="certificateModal" role="dialog" onClick={onClose}>
      <div className="certificateModalPanel" onClick={(event) => event.stopPropagation()}>
        <div className="certificateModalHeader">
          <div>
            <p className="eyebrow">Certificate Preview</p>
            <h3>{certificate.title}</h3>
            <span>{certificate.desc}</span>
          </div>
          <button aria-label="Close certificate preview" onClick={onClose} type="button">
            ×
          </button>
        </div>

        {certificate.frames ? (
          <div className="certificateCredentialList">
            {certificate.frames.map((frame) => (
              <article className="certificateCredentialCard" key={frame.label}>
                <div>
                  <small>HackerRank</small>
                  <strong>{frame.label}</strong>
                  <span>Verified credential issued to Fernando Namora.</span>
                </div>
                <a href={getOriginalCertificateUrl(frame.src)} target="_blank" rel="noreferrer">
                  Verify credential
                </a>
              </article>
            ))}
          </div>
        ) : (
          <>
            <div className="certificatePreview">
              {previewSrc ? (
                <iframe src={encodeURI(previewSrc)} title={certificate.title} />
              ) : (
                <p>Certificate preview is unavailable.</p>
              )}
            </div>

            <div className="certificateModalActions">
              {originalUrl ? (
                <a href={encodeURI(originalUrl)} target="_blank" rel="noreferrer">
                  Open original
                </a>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

export default function CertificationShowcase({ items }) {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <>
      <div className="certGrid">
        {items.map((certificate) => (
          <button
            className="certCard"
            key={certificate.title}
            onClick={() => setActiveCertificate(certificate)}
            type="button"
          >
            <small>{certificate.issuer}</small>
            <strong>{certificate.title}</strong>
            <span>{certificate.desc}</span>
          </button>
        ))}
      </div>

      {activeCertificate ? (
        <CertificateModal certificate={activeCertificate} onClose={() => setActiveCertificate(null)} />
      ) : null}
    </>
  );
}
