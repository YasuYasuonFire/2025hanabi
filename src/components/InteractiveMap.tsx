'use client';

import { useState } from 'react';

export function InteractiveMap() {
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [mapMode, setMapMode] = useState<'venues' | 'transport' | 'facilities'>('venues');

  // 地図の代替表示（Google Maps API統合前の仮実装）
  const venues = [
    {
      id: 'edogawa-main',
      name: '江戸川区側メイン会場',
      type: 'main',
      coordinates: '東京都江戸川区篠崎公園先',
      description: '都営新宿線篠崎駅から徒歩15分',
    },
    {
      id: 'ichikawa-main',
      name: '市川市側メイン会場',
      type: 'main',
      coordinates: '千葉県市川市大洲三丁目地先',
      description: 'JR総武線市川駅から徒歩15分',
    },
    {
      id: 'ohsu-park',
      name: '大洲防災公園',
      type: 'free',
      coordinates: '千葉県市川市大洲',
      description: '無料観覧エリア・家族連れに人気',
    },
    {
      id: 'aeon-myoden',
      name: 'イオン市川妙典',
      type: 'special',
      coordinates: '千葉県市川市妙典',
      description: '穴場スポット・屋上駐車場',
    },
    {
      id: 'i-link-town',
      name: 'アイ・リンクタウン',
      type: 'special',
      coordinates: '千葉県市川市市川南',
      description: '地上150m展望施設',
    },
  ];

  const transportInfo = [
    {
      station: '篠崎駅',
      line: '都営新宿線',
      walkTime: '15分',
      crowdLevel: 'high',
      destination: '江戸川区側会場',
    },
    {
      station: '市川駅',
      line: 'JR総武線',
      walkTime: '15分',
      crowdLevel: 'high',
      destination: '市川市側会場',
    },
    {
      station: '小岩駅',
      line: 'JR総武線',
      walkTime: '25分',
      crowdLevel: 'medium',
      destination: '江戸川区側会場',
    },
    {
      station: '本八幡駅',
      line: 'JR総武線',
      walkTime: '30分',
      crowdLevel: 'medium',
      destination: '市川市側会場',
    },
  ];

  const facilities = [
    { name: 'トイレ', icon: '🚻', locations: ['各会場', '駅周辺', '公園内'] },
    { name: '屋台', icon: '🍕', locations: ['大洲防災公園', '江戸川河川敷'] },
    { name: 'コンビニ', icon: '🏪', locations: ['駅周辺', '住宅街'] },
    { name: '救護所', icon: '🏥', locations: ['各メイン会場'] },
  ];

  const getVenueTypeColor = (type: string) => {
    switch (type) {
      case 'main': return 'bg-red-500';
      case 'free': return 'bg-green-500';
      case 'special': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getCrowdLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="interactive-map" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🗺️ インタラクティブマップ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            会場、アクセス、設備情報を地図上で確認できます
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* マップモード切り替え */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setMapMode('venues')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  mapMode === 'venues'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                📍 観覧会場
              </button>
              <button
                onClick={() => setMapMode('transport')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  mapMode === 'transport'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🚇 交通アクセス
              </button>
              <button
                onClick={() => setMapMode('facilities')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  mapMode === 'facilities'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🏪 周辺施設
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 地図エリア（Google Maps API統合予定地） */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg h-96 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    インタラクティブマップ
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Google Maps API統合により<br />
                    詳細な地図を表示予定
                  </p>
                </div>
                
                {/* 仮の地図マーカー */}
                <div className="absolute top-4 left-4">
                  <div className="bg-red-500 w-4 h-4 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-600 ml-1">江戸川区側</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-blue-500 w-4 h-4 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-600 mr-1">市川市側</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  🧭 ルート案内を開始
                </button>
              </div>
            </div>

            {/* 情報パネル */}
            <div className="space-y-4">
              {mapMode === 'venues' && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📍 観覧会場一覧</h3>
                  {venues.map((venue) => (
                    <div
                      key={venue.id}
                      className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-colors ${
                        selectedVenue === venue.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedVenue(selectedVenue === venue.id ? null : venue.id)}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`w-3 h-3 rounded-full mr-3 ${getVenueTypeColor(venue.type)}`}></div>
                        <h4 className="font-bold text-gray-900">{venue.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{venue.coordinates}</p>
                      <p className="text-gray-500 text-xs">{venue.description}</p>
                    </div>
                  ))}
                </>
              )}

              {mapMode === 'transport' && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🚇 交通アクセス</h3>
                  {transportInfo.map((transport, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{transport.station}</h4>
                        <span className={`text-sm font-medium ${getCrowdLevelColor(transport.crowdLevel)}`}>
                          混雑度: {transport.crowdLevel === 'high' ? '高' : transport.crowdLevel === 'medium' ? '中' : '低'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{transport.line}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>徒歩{transport.walkTime}</span>
                        <span>→ {transport.destination}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {mapMode === 'facilities' && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🏪 周辺施設</h3>
                  {facilities.map((facility, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{facility.icon}</span>
                        <h4 className="font-bold text-gray-900">{facility.name}</h4>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">設置場所: </span>
                        {facility.locations.join('、')}
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* 選択された会場の詳細情報 */}
              {selectedVenue && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <h4 className="font-bold text-blue-800 mb-2">選択中の会場</h4>
                  <p className="text-blue-700 text-sm">
                    {venues.find(v => v.id === selectedVenue)?.name}の詳細情報がここに表示されます
                  </p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    ルート検索
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* マップ統合予告 */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3">🚀 近日公開予定</h3>
              <p className="text-green-100 text-sm mb-4">
                Google Maps APIと連携したインタラクティブマップで、リアルタイムのルート案内、
                混雑状況、周辺施設情報をご提供します。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="bg-white/20 rounded p-2">📍 GPS対応</div>
                <div className="bg-white/20 rounded p-2">🚇 乗換案内</div>
                <div className="bg-white/20 rounded p-2">⏱️ リアルタイム</div>
                <div className="bg-white/20 rounded p-2">📱 モバイル最適化</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}