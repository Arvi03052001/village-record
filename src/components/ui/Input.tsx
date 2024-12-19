import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: LucideIcon;
  maxLength?: number;
  required?: boolean;
  label: string;
  theme?: 'light' | 'dark';
}

export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  icon: Icon,
  maxLength,
  required = true,
  label,
  theme = 'light'
}: InputProps) => {
  const isDark = theme === 'dark';

  return (
    <div className="space-y-2">
      <label className={`text-sm font-medium block ${isDark ? 'text-purple-200' : 'text-gray-700'}`}>
        {label}
      </label>
      <div className="relative">
        <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-purple-300' : 'text-gray-400'} h-5 w-5`} />
        <input
          type={type}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className={`w-full pl-12 pr-4 py-3 rounded-lg transition duration-200
            ${isDark 
              ? 'bg-white/10 border-white/20 text-white placeholder-purple-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50' 
              : 'bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            } border focus:outline-none`}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};