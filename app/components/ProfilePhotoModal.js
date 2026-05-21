"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const profileImage = "/assets/profile-picture.jpg";

export default function ProfilePhotoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="heroPortraitFrame"
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label="Buka foto profil Fernando Namora"
      >
        <Image
          alt="Foto profil Fernando Namora"
          className="heroPortrait"
          src={profileImage}
          width={260}
          height={260}
          priority
        />
      </button>

      {isOpen ? (
        <div
          aria-modal="true"
          className="photoModal"
          role="dialog"
          onClick={() => setIsOpen(false)}
        >
          <div className="photoModalPanel" onClick={(event) => event.stopPropagation()}>
            <button
              aria-label="Tutup foto profil"
              className="photoModalClose"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              ×
            </button>
            <Image
              alt="Foto profil Fernando Namora ukuran besar"
              className="photoModalImage"
              src={profileImage}
              width={455}
              height={456}
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
