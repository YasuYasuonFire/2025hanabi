'use client';

import { useState, useEffect } from 'react';

export function EventStatus() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isEventDay, setIsEventDay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // イベント当日の判定（2025年8月2日）
      const eventDate = new Date('2025-08-02');
      const isToday = now.toDateString() === eventDate.toDateString();
      setIsEventDay(isToday);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 模擬的な開催状況（実際のAPIからの取得を想定）
  const eventStatusInfo = {
    isConfirmed: true,
    lastUpdated: '2025-08-02 09:00',
    weatherCondition: {
      condition: '晴れ',
      probability: 10,
      windSpeed: 3,
      temperature: 32,
    },
    crowdStatus: {
      current: 'light' as const,
      predicted: 'very_heavy' as const,
    },
    transportStatus: {
      delays: false,
      specialSchedule: true,
      restrictions: ['会場周辺車両通行止め（17:00-22:00）'],
    },
    announcements: [
      {
        title: '開催決定のお知らせ',
        content: '本日19:15より予定通り開催いたします。熱中症対策を十分にしてお越しください。',
        priority: 'high' as const,
        timestamp: '2025-08-02 11:00',
      },
      {
        title: '混雑予想について',
        content: '17:00頃から会場周辺の混雑が予想されます。時間に余裕を持ってお越しください。',
        priority: 'medium' as const,
        timestamp: '2025-08-02 10:30',
      },
    ],
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 border-red-500 text-red-800';
      case 'high': return 'bg-orange-100 border-orange-500 text-orange-800';
      case 'medium': return 'bg-blue-100 border-blue-500 text-blue-800';
      case 'low': return 'bg-gray-100 border-gray-500 text-gray-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const getCrowdStatusText = (status: string) => {
    switch (status) {
      case 'light': return '空いています';
      case 'moderate': return '普通';
      case 'heavy': return '混雑';
      case 'very_heavy': return '大変混雑';
      default: return '不明';
    }
  };

  const getCrowdStatusColor = (status: string) => {
    switch (status) {
      case 'light': return 'text-green-600';
      case 'moderate': return 'text-yellow-600';
      case 'heavy': return 'text-orange-600';
      case 'very_heavy': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📊 開催状況・最新情報
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            リアルタイムの開催状況、天候、交通情報をお届けします
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* 開催状況 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-green-500 mr-2">🎆</span>
                開催状況
              </h3>
              <span className="text-sm text-gray-500">
                最終更新: {eventStatusInfo.lastUpdated}
              </span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-2xl font-bold text-green-600">
                  {eventStatusInfo.isConfirmed ? '開催決定' : '検討中'}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600">
              2025年8月2日（土）19:15〜20:20 予定通り開催いたします
            </p>
          </div>

          {/* 天候情報 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-blue-500 mr-2">🌤️</span>
              天候情報
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {eventStatusInfo.weatherCondition.condition}
                </div>
                <div className="text-sm text-gray-600">天候</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {eventStatusInfo.weatherCondition.probability}%
                </div>
                <div className="text-sm text-gray-600">降水確率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {eventStatusInfo.weatherCondition.windSpeed}m/s
                </div>
                <div className="text-sm text-gray-600">風速</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {eventStatusInfo.weatherCondition.temperature}°C
                </div>
                <div className="text-sm text-gray-600">気温</div>
              </div>
            </div>
          </div>

          {/* 混雑状況 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-orange-500 mr-2">👥</span>
              混雑状況
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">現在の混雑状況</h4>
                <div className={`text-xl font-bold ${getCrowdStatusColor(eventStatusInfo.crowdStatus.current)}`}>
                  {getCrowdStatusText(eventStatusInfo.crowdStatus.current)}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">開催時刻の予想</h4>
                <div className={`text-xl font-bold ${getCrowdStatusColor(eventStatusInfo.crowdStatus.predicted)}`}>
                  {getCrowdStatusText(eventStatusInfo.crowdStatus.predicted)}
                </div>
              </div>
            </div>
          </div>

          {/* 交通情報 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-purple-500 mr-2">🚆</span>
              交通情報
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">
                  {eventStatusInfo.transportStatus.delays ? '一部路線で遅延発生中' : '主要路線正常運行中'}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">ℹ️</span>
                <span className="text-gray-700">
                  {eventStatusInfo.transportStatus.specialSchedule ? '花火大会特別ダイヤ運行中' : '通常ダイヤ'}
                </span>
              </div>
              {eventStatusInfo.transportStatus.restrictions.map((restriction, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span className="text-gray-700">{restriction}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 重要なお知らせ */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="text-red-500 mr-2">📢</span>
              重要なお知らせ
            </h3>
            
            {eventStatusInfo.announcements.map((announcement, index) => (
              <div
                key={index}
                className={`border-l-4 rounded-lg p-4 ${getPriorityColor(announcement.priority)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">{announcement.title}</h4>
                  <span className="text-xs opacity-75">{announcement.timestamp}</span>
                </div>
                <p className="text-sm">{announcement.content}</p>
              </div>
            ))}
          </div>

          {/* 緊急連絡先 */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <span className="text-red-600 mr-2">🚨</span>
              緊急時の連絡先
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-red-700 mb-2">江戸川区花火大会実行委員会</h4>
                <p className="text-red-600">📞 03-5662-0523</p>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-2">市川市民納涼花火大会実行委員会</h4>
                <p className="text-red-600">📞 047-711-1142</p>
              </div>
            </div>
          </div>
        </div>

        {isEventDay && (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">🎊 本日開催！</h3>
              <p className="text-pink-100">
                皆様のお越しをお待ちしております。安全に気をつけてお楽しみください。
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}