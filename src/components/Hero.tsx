'use client';

import { useState, useEffect } from 'react';

export function Hero() {
  const [timeToEvent, setTimeToEvent] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2025-08-02T19:15:00+09:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = eventDate.getTime() - now.getTime();
      
      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setTimeToEvent({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400">
      <div className="absolute inset-0 fireworks-gradient opacity-80"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4">
            第50回記念大会
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            江戸川区花火大会
            <br />
            <span className="text-yellow-300">×</span>
            <br />
            市川花火大会
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">
            2025年8月2日（土）19:15〜20:20
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">開催まで</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                {timeToEvent.days}
              </div>
              <div className="text-sm opacity-80">日</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                {timeToEvent.hours}
              </div>
              <div className="text-sm opacity-80">時間</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                {timeToEvent.minutes}
              </div>
              <div className="text-sm opacity-80">分</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                {timeToEvent.seconds}
              </div>
              <div className="text-sm opacity-80">秒</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="font-bold text-yellow-300 mb-1">打ち上げ数</div>
            <div className="text-2xl font-bold">約14,000発</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="font-bold text-yellow-300 mb-1">来場者数</div>
            <div className="text-2xl font-bold">約140万人</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="font-bold text-yellow-300 mb-1">特別企画</div>
            <div className="text-xl font-bold">ギネス挑戦</div>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => document.getElementById('location-recommendation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            📍 あなたにおすすめの観覧場所を探す
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}