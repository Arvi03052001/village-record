import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 p-4">
      <div className="max-w-md mx-auto">
        {title && (
          <h1 className="text-3xl font-bold text-white text-center mb-8">{title}</h1>
        )}
        {children}
      </div>
    </div>
  );
};