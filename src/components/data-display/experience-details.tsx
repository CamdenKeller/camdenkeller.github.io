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
}: ExperienceDetailsProps) => {
  const renderText = (text: string) => {
    return text;
  };

  const imageElement = (
    <div className="flex flex-col items-center gap-4">
      {logo ? (
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt || company || 'Company logo'}
          className="max-w-[120px] transition-transform duration-300 hover:scale-110"
          width={120}
          height={120}
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 transition-transform duration-300 hover:scale-110">
          <Briefcase className="h-8 w-8 stroke-gray-600 dark:stroke-gray-400" />
        </div>
      )}
      {secondaryLogo && (
        <ImageWrapper
          src={secondaryLogo}
          srcForDarkMode={secondaryDarkModeLogo}
          alt={secondaryLogoAlt || 'Secondary company logo'}
          className="max-w-[120px] transition-transform duration-300 hover:scale-110"
          width={120}
          height={120}
        />
      )}
    </div>
  );

  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <div className="flex flex-col items-center justify-center gap-4 max-md:order-1 md:w-1/4">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {imageElement}
          </a>
        ) : (
          imageElement
        )}
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
                {company}
              </Typography>
              <Typography className="text-gray-700 italic">
                {position}
              </Typography>
            </>
          ) : (
            <Typography variant="subtitle" className="font-semibold text-gray-900">
              {position}
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
