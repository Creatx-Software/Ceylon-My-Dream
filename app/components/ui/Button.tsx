import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-3 text-lg'
  };
  
  const variantClasses = {
    primary: 'bg-white text-[#FBB03B] focus:ring-[#FBB03B] shadow-lg hover:scale-105',
    secondary: 'bg-transparent text-[#FBB03B] border-2 border-[#FBB03B] hover:text-white focus:ring-[#FBB03B]'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};