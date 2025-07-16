'use client';

import type { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Image from 'next/image';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  const isSvg = typeof logo === 'string' && logo.endsWith('.svg');

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <Link noCustomization href={url} externalLink>
        <div className="w-[72px]">
          {isSvg ? (
            <Image
              src={logo as string}
              alt={label}
              width={72}
              height={72}
              className="w-full h-auto object-contain transition-transform duration-300 md:hover:scale-110"
            />
          ) : (
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={label}
              width={72}
              height={72}
              sizes="72px"
              className="transition-transform duration-300 md:hover:scale-110 object-contain"
            />
          )}
        </div>
      </Link>
      <Typography variant="body1" className="text-center">
        {label}
      </Typography>
    </div>
  );
};

export default TechDetails;