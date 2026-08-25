import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import PageHero from "../../components/PageHero";
import GalleryLightbox from "../../components/GalleryLightbox";

export const metadata: Metadata = { title: "Gallery" };

const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|gif|avif)$/i;

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

    // 2015, 2016 ... 같은 연도 폴더만 인식
    .filter(
      (entry) =>
        entry.isDirectory() &&
        /^\d{4}$/.test(entry.name)
    )

    // 최신 연도부터 표시
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

        // 이미지 파일만 인식
        .filter(
          (file) =>
            file.isFile() &&
            IMAGE_EXTENSIONS.test(file.name)
        )

        // 파일명 기준 정렬
        .sort((a, b) =>
          a.name.localeCompare(
            b.name,
            "ko-KR",
            {
              numeric: true,
              sensitivity: "base",
            }
          )
        )

        .map((file) => ({
          filename: file.name,

          // 한글, 공백, 괄호가 있어도 정상 작동
          src: `/images/gallery/${year}/${encodeURIComponent(
            file.name
          )}`,
        }));

      return {
        year,
        images,
      };
    })

    // 사진이 없는 연도는 표시하지 않음
    .filter(
      (section) =>
        section.images.length > 0
    );
}

export default function GalleryPage() {
  const archive = getGalleryArchive();

  return (
    <>
      <PageHero
        kicker="LIFE AT PEC"
        title="Gallery"
        description="Conferences, celebrations, lab life, and moments from PEC Lab."
      />

      <section className="section shell">
  {archive.length === 0 ? (
    <div className="data-note">
      Gallery images will appear here when photos are added under
      public/images/gallery/[year].
    </div>
  ) : (
    archive.map(({ year, images }) => (
      <div className="gallery-year-section" key={year}>
        <div className="gallery-year-heading">
          <p className="eyebrow">{year}</p>
        </div>

        <GalleryLightbox images={images} year={year} />
      </div>
    ))
  )}
</section>
    </>
  );
}
