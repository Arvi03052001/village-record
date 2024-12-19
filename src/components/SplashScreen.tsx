import React, { useEffect } from 'react';
import { Milk } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 animate-ping bg-white/20 rounded-full" />
        <div className="absolute inset-0 animate-pulse bg-white/30 rounded-full" />
        <div className="relative transform hover:scale-110 transition-transform duration-300">
          <Milk className="w-32 h-32 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </div>
      </div>
      <h1 className="mt-8 text-5xl font-bold text-white tracking-wider animate-fade-in-up">
        Milk Record
      </h1>
      <div className="mt-12 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-0"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};