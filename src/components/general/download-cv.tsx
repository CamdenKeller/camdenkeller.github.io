'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open('/files/Camden_Keller_Resume.pdf', '_blank')
      }
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;
