'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open('/files/Camden Keller - Resume.pdf', '_blank')
      }
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;
