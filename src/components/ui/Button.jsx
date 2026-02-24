import React from 'react';

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const variantClasses = {
  default: 'bg-blue-600 hover:bg-blue-700 text-white',
  outline: 'border border-current bg-transparent hover:bg-white/10',
};

export function Button({ children, size = 'md', variant = 'default', className = '', ...props }) {
  const sizeClass = sizeClasses[size] ?? sizeClasses.md;
  const variantClass = variantClasses[variant] ?? variantClasses.default;

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

