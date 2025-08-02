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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden summer-night-gradient">
      <div className="absolute inset-0 fireworks-gradient opacity-60"></div>
      <div className="absolute inset-0 firework-sparkles opacity-40"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-6 border border-white/20">
            ✨ 第50回記念大会
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-wide">
            <span className="bg-gradient-to-r from-blue-300 via-white to-pink-300 bg-clip-text text-transparent">
              江戸川区花火大会
            </span>
            <br />
            <span className="text-yellow-300 font-inter text-3xl md:text-5xl lg:text-6xl">×</span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-white to-blue-300 bg-clip-text text-transparent">
              市川花火大会
            </span>
          </h1>
          <p className="font-inter text-xl md:text-2xl font-light opacity-90 tracking-wide">
            2025年8月2日（土）19:15〜20:20
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-8 border border-blue-400/20 shadow-2xl">
          <h2 className="font-inter text-2xl md:text-3xl font-semibold mb-6 text-blue-200">開催まで</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-transparent font-display">
                {timeToEvent.days}
              </div>
              <div className="text-sm opacity-80 font-inter">日</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-blue-300 to-cyan-400 bg-clip-text text-transparent font-display">
                {timeToEvent.hours}
              </div>
              <div className="text-sm opacity-80 font-inter">時間</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-pink-300 to-rose-400 bg-clip-text text-transparent font-display">
                {timeToEvent.minutes}
              </div>
              <div className="text-sm opacity-80 font-inter">分</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-300 to-violet-400 bg-clip-text text-transparent font-display">
                {timeToEvent.seconds}
              </div>
              <div className="text-sm opacity-80 font-inter">秒</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20">
            <div className="font-inter font-semibold text-blue-300 mb-2">打ち上げ数</div>
            <div className="text-2xl font-bold font-display text-yellow-300">約14,000発</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
            <div className="font-inter font-semibold text-purple-300 mb-2">来場者数</div>
            <div className="text-2xl font-bold font-display text-pink-300">約140万人</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20">
            <div className="font-inter font-semibold text-emerald-300 mb-2">特別企画</div>
            <div className="text-xl font-bold font-display text-emerald-300">ギネス挑戦</div>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => document.getElementById('location-recommendation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-white/20 backdrop-blur-sm"
          >
            🎯 あなたにおすすめの観覧場所を探す
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