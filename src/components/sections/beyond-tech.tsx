'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import BviGreenhouse from '/public/images/beyond_tech/bvi_greenhouse.jpeg';
import MachuPicchu from '/public/images/beyond_tech/machu_picchu.png';
import Lifeguarding from '/public/images/beyond_tech/lifeguarding.jpg';
import Guitar from '/public/images/beyond_tech/guitar.jpg';

import SectionHeader from '@/components/data-display/section-header';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import { MdShuffle } from 'react-icons/md';

const images = [
  { src: Guitar, alt: 'Guitar' },
  { src: BviGreenhouse, alt: 'BVI Greenhouse Project' },
  { src: Lifeguarding, alt: 'Lifeguarding' },
  { src: MachuPicchu, alt: 'Machu Picchu' },
];

const timelineData = [
  {
    year: '2024',
    title: 'Author',
    description: 'Published “Surf&apos;s Down”, an op-ed on stormwater pollution, read by 51,000 weekly readers',
  },
  {
    year: '2023',
    title: 'Band Leader',
    description: 'Wrote, produced, and marketed "Statements of Intent", a full-length music album with 1,000+ streams',
  },
  {
    year: '2022',
    title: 'Study Abroad',
    description: 'Collaborated on sustainability initiatives while immersed in Costa Rican culture and Spanish language',
  },
  {
    year: '2021',
    title: 'BVI Volunteer',
    description: 'Supported marine restoration, field research, and hurricane relief efforts in the British Virgin Islands',
  }
];

const whatShapesMe = [
  {
    tag: { label: 'Caregiver', className: 'bg-blue-100 text-blue-800' },
    text: 
      "supporting my neurodivergent brother's growth",
  },
  {
    tag: { label: 'World Traveler', className: 'bg-green-100 text-green-800' },
    text: 'visited 65 countries across all seven continents',
  },
  {
    tag: { label: 'Wave Chaser', className: 'bg-cyan-100 text-cyan-800' },
    text: 'swimmer, surfer, lifeguard, and water polo player',
  },
];

const AboutMeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  const renderText = (text: string) => {
    if (text.includes('Surf&apos;s Down')) {
      const parts = text.split('Surf&apos;s Down');
      return (
        <>
          {parts[0]}<Link
            noCustomization
            externalLink
            withUnderline
            href="https://www.sunnews.org/surfs-down/"
          >
            Surf&apos;s Down
          </Link>{parts[1]}
        </>
      );
    }
    if (text.includes('Statements of Intent')) {
      const parts = text.split('Statements of Intent');
      return (
        <>
          {parts[0]}<Link
            noCustomization
            externalLink
            withUnderline
            href="https://open.spotify.com/album/6MFnjGqnRXGBAgvNnrrv6r"
          >
            Statements of Intent
          </Link>{parts[1]}
        </>
      );
    }
    return text;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <Container id="beyond">
      <SectionHeader label="Beyond Tech" />
      <div className="flex w-full flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* Left: Carousel only */}
        <div className="flex flex-col items-center md:w-1/2 md:items-end md:pr-8 gap-8">
          {/* Image Carousel */}
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] transition-opacity duration-[2000ms] ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: 'cover' }}
              />
            ))}
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute h-[360px] w-[320px] border-8 border-transparent max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] transition-opacity duration-[2000ms] ease-in-out ${
                  index === nextImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>

        {/* Right: What Shapes Me (single card) + Timeline */}
        <div className="flex max-w-xl flex-col gap-4 md:w-1/2">
          {/* What Shapes Me (Stacked Cards Carousel) */}
          <div className="w-full flex flex-col gap-4">
            <Typography variant="h3" className="mb-1">What Shapes Me</Typography>
            
            {/* Stacked Cards Container */}
            <div className="relative h-32 flex items-center justify-center perspective-1000">
              {whatShapesMe.map((item, index) => {
                const isActive = index === currentShapeIndex;
                const isNext = index === (currentShapeIndex + 1) % whatShapesMe.length;
                const isPrev = index === (currentShapeIndex - 1 + whatShapesMe.length) % whatShapesMe.length;
                
                let transform = '';
                let opacity = 0;
                let zIndex = 0;
                
                if (isActive) {
                  transform = 'translateY(0) scale(1) rotateY(0deg)';
                  opacity = 1;
                  zIndex = 30;
                } else if (isNext) {
                  transform = 'translateY(20px) scale(0.9) rotateY(15deg)';
                  opacity = 0.7;
                  zIndex = 20;
                } else if (isPrev) {
                  transform = 'translateY(-20px) scale(0.9) rotateY(-15deg)';
                  opacity = 0.7;
                  zIndex = 20;
                } else {
                  transform = 'translateY(40px) scale(0.8) rotateY(30deg)';
                  opacity = 0.3;
                  zIndex = 10;
                }
                
                return (
                  <div
                    key={index}
                    className="absolute w-full max-w-lg cursor-pointer"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => setCurrentShapeIndex(index)}
                  >
                    <div className="bg-gray-50 dark:bg-gray-100 rounded-xl shadow-md dark:shadow-2xl p-4 transform-gpu hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <Tag label={item.tag.label} className={item.tag.className} />
                        <Typography className="text-sm text-gray-700 dark:text-gray-300">
                          {item.text}
                        </Typography>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Shuffle Button */}
              <button
                onClick={() => {
                  let newIndex;
                  do {
                    newIndex = Math.floor(Math.random() * whatShapesMe.length);
                  } while (newIndex === currentShapeIndex && whatShapesMe.length > 1);
                  setCurrentShapeIndex(newIndex);
                }}
                className="absolute right-[-10px] top-1/2 -translate-y-1/2 group w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 z-40"
              >
                <MdShuffle size={18} className="text-gray-800" />
              </button>
            </div>

            {/* Indicator Dots */}
            {/* Removed indicator dots as requested */}
          </div>
          {/* Timeline */}
          <Typography variant="h3" className="mt-4 mb-1">Recent Experiences</Typography>
          <div className="relative">
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => {
                if (index >= 2 && !showAll) return null;
                const timelineBubble = (
                  <div 
                    key={index} 
                    className={`group relative ${
                      index < 2 
                        ? 'opacity-100' 
                        : showAll 
                          ? 'pop-in' 
                          : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      animationDelay: showAll && index >= 2 ? `${(timelineData.length - 1 - index) * 150}ms` : '0ms'
                    }}
                  >
                    {/* Timeline connector */}
                    {index < timelineData.length - 1 && (
                      <div className={`absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600 ${
                        index < 1 || (showAll && index < timelineData.length - 1) ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    )}
                    {/* Timeline card */}
                    <div className="relative flex items-start gap-6">
                      {/* Year badge */}
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-300 text-gray-800 dark:text-gray-800 shadow-lg ring-4 ring-gray-50 dark:ring-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                        <span className="text-sm font-bold">{item.year}</span>
                      </div>
                      {/* Content card */}
                      <div className="flex-1 rounded-xl bg-gray-50 dark:bg-gray-100 p-6 shadow-md dark:shadow-2xl transition-all duration-300 hover:shadow-lg">
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <Typography variant="subtitle" className="font-bold text-gray-900 dark:text-white">
                              {item.title}
                            </Typography>
                            {Array.isArray(item.description) ? (
                              <ul className="flex list-disc flex-col gap-1 md:gap-1">
                                {item.description.map((bullet, bulletIndex) => (
                                  <Typography component="li" key={bulletIndex} className="text-gray-600 dark:text-white leading-relaxed">
                                    {renderText(bullet)}
                                  </Typography>
                                ))}
                              </ul>
                            ) : (
                              <Typography className="text-gray-600 dark:text-white leading-relaxed">
                                {renderText(item.description)}
                              </Typography>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                // Insert Show More button after the second bubble
                if (timelineData.length > 2 && index === 1 && !showAll) {
                  return [
                    timelineBubble,
                    <div key="show-more-btn" className="flex justify-center mt-4">
                      <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="rounded-full bg-gray-300 hover:bg-gray-400 px-6 py-2 text-gray-800 font-medium shadow transition-colors duration-200"
                      >
                        Show More
                      </button>
                    </div>
                  ];
                }
                return timelineBubble;
              })}
              {/* Show Less button at the end if expanded */}
              {timelineData.length > 2 && showAll && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="rounded-full bg-gray-300 hover:bg-gray-400 px-6 py-2 text-gray-800 font-medium shadow transition-colors duration-200"
                  >
                    Show Less
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
