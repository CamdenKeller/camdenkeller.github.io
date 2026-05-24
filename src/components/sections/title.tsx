'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

import Headshot1 from "/public/images/headshots/headshot1.jpg";
import Headshot2 from "/public/images/headshots/headshot2.jpg";
import Headshot3 from "/public/images/headshots/headshot3.jpg";
import Headshot4 from "/public/images/headshots/headshot4.png";
import Wave from "/public/images/wave.png";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const images = [
  { src: Headshot1, alt: "Headshot of Cam 1" },
  { src: Headshot2, alt: "Headshot of Cam 2" },
  { src: Headshot3, alt: "Headshot of Cam 3" },
  { src: Headshot4, alt: "Headshot of Cam 4" },
];

const TitleSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Container id="home">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] shadow-md dark:shadow-2xl transition-opacity duration-[2000ms] ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            ))}
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute h-[280px] w-[240px] border-8 border-transparent max-md:top-5 max-md:left-10 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px] transition-opacity duration-[2000ms] ease-in-out cursor-pointer ${
                  index === nextImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ objectFit: "cover" }}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 bg-clip-text text-transparent animate-pulse-wave">
                Hi! I&apos;m Cam
              </span>{" "}
              <span className="inline-block animate-[slide-in-from-right_2.5s_ease-out_forwards] align-middle">
                <Image src={Wave} alt="Wave" width={48} height={48} className="inline-block align-middle animate-waving-hand" priority />
              </span>
            </Typography>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-800 to-blue-300 rounded-full"></div>
            <Typography>
              Incoming Junior at Cornell University double-majoring in Computer Science and Cognitive Science. I&apos;m passionate about applying technology to address environmental and social challenges.
              Please take a look around to explore my projects, skills, and experiences.
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="stroke-gray-600 w-5 h-5" />
                <Typography className="text-gray-700">Seal Beach, CA</Typography>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="stroke-gray-600 w-5 h-5" />
                <Typography className="text-gray-700">Ithaca, NY</Typography>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>
                Open to new projects and opportunities!
              </Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default TitleSection;
