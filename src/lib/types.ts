import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo?: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  secondaryLogo?: string | StaticImageData;
  secondaryDarkModeLogo?: string | StaticImageData;
  secondaryLogoAlt?: string;
  logoAlt?: string;
  position: string;
  company?: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
  url?: string;
  logoUrl?: string;
  secondaryLogoUrl?: string;
};

export type ProjectDetails = {
  name: string;
  description: string | string[];
  dates?: string;
  url?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  previewImage: string | StaticImageData;
  darkModePreviewImage?: string | StaticImageData;
  additionalImages?: (string | StaticImageData)[];
  technologies: string[];
};