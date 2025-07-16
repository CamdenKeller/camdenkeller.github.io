'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
  introText?: string;
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  additionalImages,
  layoutType = 'default',
  introText,
}: ProjectDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combine main image with additional images
  const allImages = [previewImage, ...(additionalImages || [])];
  const hasMultipleImages = allImages.length > 1;
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          'flex flex-col items-center justify-center border-gray-100 bg-gray-50 p-4 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 md:p-6 relative',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 translate-x-1 -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 rounded-full p-1.5 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-x-1 -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 rounded-full p-1.5 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={mergeClasses(
                    'w-2 h-2 rounded-full transition-all duration-200',
                    index === currentImageIndex
                      ? 'bg-gray-400 scale-110 dark:bg-white/60 dark:scale-110'
                      : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-400 dark:hover:bg-white/80'
                  )}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="rounded-xl overflow-hidden">
          <Image
            src={allImages[currentImageIndex]}
            alt={`${name} preview ${currentImageIndex + 1}`}
            className="h-[300px] w-auto transition-opacity duration-300 rounded-xl"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          'flex flex-col gap-3 p-4 md:w-1/2 md:p-6 ml-[20px] mt-[10px]',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        {url && (
          <Link
            href={url}
            noCustomization
            className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
            externalLink
          >
            <ExternalLink />
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProjectDetails;
