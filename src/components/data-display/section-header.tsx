import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ label, className, ...props }: SectionHeaderProps, ref) => {
    return (
      <div
        className={mergeClasses(
          'flex items-center justify-center mb-4',
          className
        )}
        ref={ref}
        {...props}
      >
        <Typography variant="h2" className="text-3xl font-semibold text-gray-900">
          {label}
        </Typography>
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader; 