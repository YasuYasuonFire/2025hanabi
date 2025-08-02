'use client';

import { useState, useEffect } from 'react';
import { useGeolocation } from '@/lib/hooks/useGeolocation';
import { getLocationRecommendation } from '@/lib/location-service';
import type { LocationRecommendation as RecommendationType, ViewingVenue } from '@/types';

export function LocationRecommendation() {
  const { location, error, isLoading, requestLocation } = useGeolocation();
  const [recommendation, setRecommendation] = useState<RecommendationType | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedArea, setSelectedArea] = useState<'edogawa' | 'ichikawa' | null>(null);

  useEffect(() => {
    if (location) {
      setIsCalculating(true);
      getLocationRecommendation(location)
        .then(setRecommendation)
        .finally(() => setIsCalculating(false));
    }
  }, [location]);

  const handleAreaSelect = (area: 'edogawa' | 'ichikawa') => {
    setSelectedArea(area);
    // エリア選択時の処理
  };

  return (
    <section id="location-recommendation" className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📍 あなたにおすすめの観覧場所
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            現在地から最適な観覧場所をご提案します。混雑状況、アクセス、設備を考慮した個人向けレコメンドです。
          </p>
        </div>

        {!location && !error && (
          <div className="max-w-md mx-auto text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-4">位置情報でパーソナライズ</h3>
            <p className="text-gray-600 mb-6">
              あなたの現在地から最適な観覧場所とアクセスルートをご提案します
            </p>
            <button
              onClick={requestLocation}
              disabled={isLoading}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '位置情報を取得中...' : '現在地を取得する'}
            </button>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">手動でエリアを選択することも可能です</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleAreaSelect('edogawa')}
                  className="p-3 border-2 border-red-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors text-sm font-medium"
                >
                  🏮 江戸川区側
                </button>
                <button
                  onClick={() => handleAreaSelect('ichikawa')}
                  className="p-3 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-sm font-medium"
                >
                  🎆 市川市側
                </button>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto text-center bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-bold mb-2">位置情報が取得できませんでした</h3>
            <p className="text-gray-600 text-sm mb-6">{error}</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAreaSelect('edogawa')}
                className="p-3 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
              >
                🏮 江戸川区側
              </button>
              <button
                onClick={() => handleAreaSelect('ichikawa')}
                className="p-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
              >
                🎆 市川市側
              </button>
            </div>
          </div>
        )}

        {isCalculating && (
          <div className="max-w-md mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600">最適な観覧場所を計算中...</p>
          </div>
        )}

        {recommendation && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">🎯 おすすめ観覧場所</h3>
                <p className="opacity-90">あなたの現在地から最適な場所をご提案</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold mb-3">{recommendation.venue.name}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                        <span className="font-medium">距離:</span>
                        <span className="ml-2">{(recommendation.distance / 1000).toFixed(1)}km</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                        <span className="font-medium">最寄り駅:</span>
                        <span className="ml-2">{recommendation.venue.accessInfo.nearestStation}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
                        <span className="font-medium">徒歩:</span>
                        <span className="ml-2">{recommendation.venue.accessInfo.walkingTime}分</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h5 className="font-bold mb-2">おすすめ理由</h5>
                      <ul className="space-y-1">
                        {recommendation.reasons.map((reason, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-bold mb-3">設備・サービス</h5>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className={`p-2 rounded text-sm text-center ${recommendation.venue.facilities.toilets ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                        🚻 トイレ
                      </div>
                      <div className={`p-2 rounded text-sm text-center ${recommendation.venue.facilities.food ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                        🍕 飲食
                      </div>
                      <div className={`p-2 rounded text-sm text-center ${recommendation.venue.facilities.parking ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                        🚗 駐車場
                      </div>
                      <div className={`p-2 rounded text-sm text-center ${recommendation.venue.facilities.accessibility ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                        ♿ バリアフリー
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h5 className="font-bold mb-2">代替案</h5>
                      <div className="space-y-2">
                        {recommendation.alternatives.slice(0, 2).map((venue) => (
                          <div key={venue.id} className="p-3 bg-gray-50 rounded-lg text-sm">
                            <div className="font-medium">{venue.name}</div>
                            <div className="text-gray-600">{venue.accessInfo.nearestStation}から徒歩{venue.accessInfo.walkingTime}分</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t text-center">
                  <button 
                    onClick={() => document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors"
                  >
                    🗺️ 詳細マップで確認する
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedArea && !location && (
          <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">
              {selectedArea === 'edogawa' ? '🏮 江戸川区側' : '🎆 市川市側'}の観覧ガイド
            </h3>
            <p className="text-gray-600 mb-4">
              {selectedArea === 'edogawa' 
                ? '都営新宿線篠崎駅からアクセス良好。都立篠崎公園先の河川敷が主要観覧エリアです。'
                : 'JR総武線市川駅からアクセス良好。大洲防災公園周辺が主要観覧エリアです。'
              }
            </p>
            <div className="text-center">
              <button 
                onClick={() => document.getElementById('viewing-guide')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                観覧ガイドを見る
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}