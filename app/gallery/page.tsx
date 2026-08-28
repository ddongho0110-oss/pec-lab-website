import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import PageHero from "../../components/PageHero";
import GalleryLightbox from "../../components/GalleryLightbox";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Gallery",
};

const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|gif|avif)$/i;

function getPhotoDate(filename: string) {
  // KakaoTalk_20260223_093658571.jpg
  // 20221212 ACEPS...
  const eightDigit = filename.match(/(?:19|20)\d{6}/);

  if (eightDigit) {
    return Number(eightDigit[0]);
  }

  // 220515 스승의날.jpg 같은 형식
  const sixDigit = filename.match(/(?:^|[^\d])(\d{6})(?:[^\d]|$)/);

  if (sixDigit) {
    return Number(`20${sixDigit[1]}`);
  }

  return 0;
}

type GalleryYear = {
  year: string;
  images: {
    src: string;
    filename: string;
  }[];
};

function getGalleryArchive(): GalleryYear[] {
  const galleryRoot = path.join(
    process.cwd(),
    "public",
    "images",
    "gallery"
  );

  if (!fs.existsSync(galleryRoot)) {
    return [];
  }

  return fs
    .readdirSync(galleryRoot, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        /^\d{4}$/.test(entry.name)
    )
    .sort(
      (a, b) =>
        Number(b.name) - Number(a.name)
    )
    .map((entry) => {
      const year = entry.name;
      const yearDirectory = path.join(
        galleryRoot,
        year
      );

      const images = fs
        .readdirSync(yearDirectory, {
          withFileTypes: true,
        })
        .filter(
          (file) =>
            file.isFile() &&
            !file.name.startsWith(".") &&
            (IMAGE_EXTENSIONS.test(file.name) ||
              path.extname(file.name) === "")
        )
        .sort((a, b) => {
          const dateA = getPhotoDate(a.name);
          const dateB = getPhotoDate(b.name);

          if (dateA !== dateB) {
            return dateB - dateA;
          }

          return b.name.localeCompare(
            a.name,
            "ko-KR",
            {
              numeric: true,
              sensitivity: "base",
            }
          );
        })
        .map((file) => ({
          filename: file.name,
          src: `/images/gallery/${year}/${encodeURIComponent(
            file.name
          )}`,
        }));

      return {
        year,
        images,
      };
    })
    .filter(
      (section) =>
        section.images.length > 0
    );
}

export default function GalleryPage() {
  const archive = getGalleryArchive();

  const totalPhotos = archive.reduce(
    (total, section) =>
      total + section.images.length,
    0
  );

  const latestYear =
    archive[0]?.year ?? "—";

  const earliestYear =
    archive[archive.length - 1]?.year ?? "—";

  return (
    <>
      <PageHero
        kicker="LIFE AT PEC"
        title="Gallery"
        description="Conferences, celebrations, lab life, and moments from PEC Lab."
      />

      <section className={`shell ${styles.summary}`}>
        <div className={styles.summaryItem}>
          <span>PHOTOS</span>
          <strong>{totalPhotos}</strong>
          <p>Lab moments</p>
        </div>

        <div className={styles.summaryItem}>
          <span>ARCHIVE</span>
          <strong>
            {earliestYear}–{latestYear}
          </strong>
          <p>Gallery history</p>
        </div>

        <div className={styles.summaryItem}>
          <span>YEARS</span>
          <strong>{archive.length}</strong>
          <p>Photo collections</p>
        </div>
      </section>

      <section className="section shell">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">PEC LAB MOMENTS</p>
            <h2>Beyond the laboratory.</h2>
          </div>

          <p>
            A visual archive of conferences, academic events,
            celebrations, and everyday moments shared by PEC Lab members.
          </p>
        </div>

        {archive.length === 0 ? (
          <div className={styles.empty}>
            Gallery images will appear here when photos are added under
            public/images/gallery/[year].
          </div>
        ) : (
          <div className={styles.archive}>
            {archive.map(({ year, images }) => (
              <section
                className={styles.yearBlock}
                key={year}
              >
                <div className={styles.yearHeading}>
                  <h2>{year}</h2>
                  <span>
                    {images.length}{" "}
                    {images.length === 1
                      ? "photo"
                      : "photos"}
                  </span>
                </div>

                <div className={styles.photos}>
                  <GalleryLightbox
                    images={images}
                    year={year}
                  />
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
