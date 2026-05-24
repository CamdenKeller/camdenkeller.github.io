'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button asChild>
      <a href="/files/Camden_Keller_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
        Download Resume
      </a>
    </Button>
  );
};

export default DownloadCV;
