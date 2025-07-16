'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';

type ImageWrapperProps = {
  src: string | StaticImageData;
  srcForDarkMode?: string | StaticImageData;
  alt: string;
  className?: string;
  width: number;
  height: number;
  sizes?: string;
};

const ImageWrapper = ({
  srcForDarkMode,
  src,
  alt,
  className,
  width,
  height,
  sizes = '100vw',
}: ImageWrapperProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  return (
    <Image
      src={finalSrc!}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      style={{ height: 'auto' }}
    />
  );
};

export default ImageWrapper;