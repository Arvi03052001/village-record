import React from 'react';

interface CardProps {
  children: React.ReactNode;
  error?: string;
}

export const Card: React.FC<CardProps> = ({ children, error }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 space-y-6">
      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 text-red-100 rounded-lg">
          {error}
        </div>
      )}
      {children}
    </div>
  );
};