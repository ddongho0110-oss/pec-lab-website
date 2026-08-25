"use client";

import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  filename: string;
};

export default function GalleryLightbox({
  images,
  year,
}: {
  images: GalleryImage[];
  year: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const previous = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) % images.length
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="gallery-grid gallery-photo-grid">
        {images.map((image, index) => (
          <button
            className="gallery-photo-button"
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open PEC Lab ${year} photo ${index + 1}`}
          >
            <img
              src={image.src}
              alt={`PEC Lab ${year} activity ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" onClick={close}>
          <button
            className="lightbox-close"
            onClick={close}
            aria-label="Close image"
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              className="lightbox-arrow lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                previous();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <img
            className="lightbox-image"
            src={images[activeIndex].src}
            alt={`PEC Lab ${year} activity ${activeIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          <div className="lightbox-count">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
