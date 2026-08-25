"use client";

import { useEffect, useState, type ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  primarySrc: string;
  fallbackSrc?: string;
};

export default function FallbackImage({ primarySrc, fallbackSrc, onError, ...props }: Props) {
  const [src, setSrc] = useState(primarySrc);

  useEffect(() => setSrc(primarySrc), [primarySrc]);

  return (
    <img
      {...props}
      src={src}
      onError={(event) => {
        onError?.(event);
        if (fallbackSrc && src !== fallbackSrc) setSrc(fallbackSrc);
      }}
    />
  );
}
