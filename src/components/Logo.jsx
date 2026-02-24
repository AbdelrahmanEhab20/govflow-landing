import React from 'react';
import { Building2 } from 'lucide-react';

export function Logo({ size = 'md' }) {
  const isSmall = size === 'sm';

  const containerClasses = isSmall
    ? 'w-8 h-8 rounded-lg'
    : 'w-9 h-9 rounded-xl';

  const iconSize = isSmall ? 18 : 20;

  return (
    <div
      className={`${containerClasses} bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center`}
    >
      <Building2
        size={iconSize}
        className="text-white"
        strokeWidth={2.4}
      />
    </div>
  );
}

