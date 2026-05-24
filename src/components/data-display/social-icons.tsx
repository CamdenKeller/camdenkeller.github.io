'use client';

import { SOCIAL_LINKS } from '@/lib/data';
import IconButton from '@/components/general/icon-button';
import Link from '@/components/navigation/link';

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          asChild
        >
          <Link href={socialLink.url} externalLink noCustomization>
            <socialLink.icon />
          </Link>
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
