'use client';

export function AccessGuide() {
  const edogawaRoutes = [
    {
      station: '都営新宿線篠崎駅',
      walkingTime: 15,
      crowdLevel: 'high' as const,
      description: 'メインアクセス。混雑必至だが最も便利',
      tips: ['早めの移動推奨', '帰りは特に混雑'],
    },
    {
      station: 'JR総武線小岩駅',
      walkingTime: 25,
      crowdLevel: 'medium' as const,
      description: '比較的空いている代替ルート',
      tips: ['南口から徒歩', '穴場ルートとして活用'],
    },
    {
      station: '京成線江戸川駅',
      walkingTime: 25,
      crowdLevel: 'medium' as const,
      description: '京成線利用者におすすめ',
      tips: ['京成線沿線から便利', '帰りの時間に注意'],
    },
    {
      station: '都営新宿線瑞江駅',
      walkingTime: 45,
      crowdLevel: 'low' as const,
      description: '混雑回避したい方向け',
      tips: ['歩く距離は長いが空いている', '体力に自信がある方におすすめ'],
    },
  ];

  const ichikawaRoutes = [
    {
      station: 'JR総武線市川駅',
      walkingTime: 15,
      crowdLevel: 'high' as const,
      description: 'メインアクセス。南口から直進',
      tips: ['南口利用', '最も分かりやすいルート'],
    },
    {
      station: 'JR総武線本八幡駅',
      walkingTime: 30,
      crowdLevel: 'medium' as const,
      description: 'バス利用も可能な代替ルート',
      tips: ['南口から徒歩orバス', 'バス利用で時間短縮可能'],
    },
  ];

  const getCrowdLevelColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
    }
  };

  const getCrowdLevelText = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return '空いている';
      case 'medium': return '普通';
      case 'high': return '混雑';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚇 アクセスガイド
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            各観覧エリアへの最適なアクセスルートと混雑状況をご案内します
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 江戸川区側 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-600 mb-2">
                🏮 江戸川区側アクセス
              </h3>
              <p className="text-gray-600">都立篠崎公園先河川敷</p>
            </div>

            <div className="space-y-4">
              {edogawaRoutes.map((route, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{route.station}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCrowdLevelColor(route.crowdLevel)}`}>
                        {getCrowdLevelText(route.crowdLevel)}
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        徒歩{route.walkingTime}分
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{route.description}</p>
                  <div className="space-y-1">
                    {route.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start text-xs text-gray-500">
                        <span className="text-blue-500 mr-1">💡</span>
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 市川市側 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                🎆 市川市側アクセス
              </h3>
              <p className="text-gray-600">大洲三丁目地先河川敷</p>
            </div>

            <div className="space-y-4">
              {ichikawaRoutes.map((route, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{route.station}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCrowdLevelColor(route.crowdLevel)}`}>
                        {getCrowdLevelText(route.crowdLevel)}
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        徒歩{route.walkingTime}分
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{route.description}</p>
                  <div className="space-y-1">
                    {route.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start text-xs text-gray-500">
                        <span className="text-blue-500 mr-1">💡</span>
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 交通規制・注意事項 */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
              ⚠️ 交通規制・重要事項
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-amber-700 mb-2">交通規制</h4>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>• 規制時間：17:00〜22:00（予定）</li>
                  <li>• 規制エリア：会場周辺全域</li>
                  <li>• マイカーでの来場不可</li>
                  <li>• 駐車場なし</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-700 mb-2">注意事項</h4>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>• 公共交通機関を必ず利用</li>
                  <li>• 帰りは大変混雑します</li>
                  <li>• 時間に余裕を持った移動を</li>
                  <li>• 熱中症対策を忘れずに</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            🗺️ 詳細マップでルートを確認
          </button>
        </div>
      </div>
    </section>
  );
}