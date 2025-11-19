import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800 border border-transparent shadow-red-200 dark:shadow-red-900/20",
    secondary: "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700",
    outline: "bg-transparent text-red-600 dark:text-red-400 border-2 border-red-600 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};