import { Briefcase } from 'lucide-react';
import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import Link from '@/components/navigation/link';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  secondaryLogo,
  secondaryDarkModeLogo,
  secondaryLogoAlt,
  logoAlt,
  position,
  company,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  url,
  logoUrl,
  secondaryLogoUrl,
}: ExperienceDetailsProps) => {
  const renderText = (text: string) => {
    // Matches [label](url)
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {match[1]}
          </a>
        );
      }
      return part;
    });
  };

  const primaryLogoUrl = logoUrl || url;
  const secondLogoUrl = secondaryLogoUrl || url;

  const renderLogo = (
    src: string | any,
    darkModeSrc: string | any | undefined,
    alt: string,
    targetUrl: string | undefined
  ) => {
    const img = (
      <ImageWrapper
        src={src}
        srcForDarkMode={darkModeSrc}
        alt={alt}
        className="max-w-[120px] transition-transform duration-300 hover:scale-110"
        width={120}
        height={120}
      />
    );
    if (targetUrl) {
      return (
        <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          {img}
        </a>
      );
    }
    return img;
  };

  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <div className="flex flex-col items-center justify-center gap-4 max-md:order-1 md:w-1/4">
        <div className="flex flex-col items-center gap-4">
          {logo ? (
            renderLogo(logo, darkModeLogo, logoAlt || company || 'Company logo', primaryLogoUrl)
          ) : (
            url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 transition-transform duration-300 hover:scale-110">
                  <Briefcase className="h-8 w-8 stroke-gray-600 dark:stroke-gray-400" />
                </div>
              </a>
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 transition-transform duration-300 hover:scale-110">
                <Briefcase className="h-8 w-8 stroke-gray-600 dark:stroke-gray-400" />
              </div>
            )
          )}
          {secondaryLogo && (
            renderLogo(secondaryLogo, secondaryDarkModeLogo, secondaryLogoAlt || 'Secondary company logo', secondLogoUrl)
          )}
        </div>
        <Typography className="text-gray-700 transition-all duration-200 hover:text-gray-900 mt-2 text-center">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
      </div>
      <div className="flex flex-col gap-4 max-md:order-2 md:w-3/4">
        <div className="flex flex-col">
          {company ? (
            <>
              <Typography variant="subtitle" className="font-semibold text-gray-900">
                {renderText(company)}
              </Typography>
              <Typography className="text-gray-700 italic">
                {renderText(position)}
              </Typography>
            </>
          ) : (
            <Typography variant="subtitle" className="font-semibold text-gray-900">
              {renderText(position)}
            </Typography>
          )}
        </div>
        {summary && (
          <ul className="flex flex-col gap-2 md:gap-1">
            {summary.map((sentence, index) => (
              <Typography component="li" key={index} className="flex gap-2">
                <span className="shrink-0">-</span>
                <span>{renderText(sentence)}</span>
              </Typography>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};

export default ExperienceDetails;
