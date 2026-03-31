import React from 'react';
import logoImage from '../assets/govflow-logo.png';

export function Logo({ size = 'md' }) {
  const isSmall = size === 'sm';

  const containerClasses = isSmall
    ? 'w-8 h-8 rounded-lg'
    : 'w-9 h-9 rounded-xl';

  return (
    <div className={`${containerClasses} overflow-hidden`}>
      <img src={logoImage} alt="GovFlow" className={`${containerClasses} object-cover`} />
    </div>
  );
}

