// Local-first image map.
// Add the named files under public/images and the site will automatically use them.
// Until then, the current Wix-hosted images are used as fallbacks.

export const media = {
  hero: {
    local: "/images/hero/hero-main.png",
    fallback: "https://static.wixstatic.com/media/11062b_715e97bca3d7464389d8c02b4a5a49eaf000.jpg/v1/fill/w_980%2Ch_551%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/11062b_715e97bca3d7464389d8c02b4a5a49eaf000.jpg",
  },
  researchFeature: {
    local: "/images/research/research-feature.jpg",
    fallback: "https://static.wixstatic.com/media/af2495_08ab2a40062a4d859ac7bd7612916161~mv2.jpg/v1/fill/w_588%2Ch_336%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/af2495_08ab2a40062a4d859ac7bd7612916161~mv2.jpg",
  },
  professor: {
    local: "/images/people/ki-min-nam.jpg",
    fallback: "https://static.wixstatic.com/media/af2495_ec71bafae647489f8f4b66aa3bbb0dd6~mv2.jpg/v1/fill/w_297%2Ch_396%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/af2495_ec71bafae647489f8f4b66aa3bbb0dd6~mv2.jpg",
  },
  members: {
    "Gisang Park": "/images/people/gisang-park.jpg",
    "Joon Yong Park": "/images/people/joon-yong-park.jpg",
    "Dongho Seo": "/images/people/dongho-seo.jpg",
    "Bera Amit Kumar": "/images/people/amit-kumar-bera.jpg",
    "Yuna Hwang": "/images/people/yuna-hwang.jpg",
    "Seung Min Ok": "/images/people/seung-min-ok.jpg",
    "Su Young Kim": "/images/people/su-young-kim.jpg",
    "Ho Jeong Kim": "/images/people/ho-jeong-kim.jpg",
    "Yu Rim Song": "/images/people/yu-rim-song.jpg",
  } as Record<string, string>,
  gallery: [
    "/images/gallery/group-2026-01.jpg",
    "/images/gallery/group-2026-02.jpg",
    "/images/gallery/group-2026-03.jpg",
  ],
};
