'use client';

export function EventHighlights() {
  const highlights = [
    {
      id: 'memorial-50th',
      title: '第50回記念大会',
      description: '江戸川区花火大会50周年を記念した特別企画',
      icon: '🎊',
      details: [
        '公募企画採用のオリジナル花火（84件応募から4件採用）',
        '宗家花火鍵屋15代目当主・天野安喜子氏による選考',
        '記念花火プログラムの特別演出',
      ],
    },
    {
      id: 'guinness-challenge',
      title: 'ギネス世界記録™挑戦',
      description: '高さ55mの「富士の大仕掛け」花火で世界記録に挑戦',
      icon: '🏆',
      details: [
        '高さ55mの巨大花火「富士の大仕掛け」',
        'ギネス世界記録™認定に向けた公式計測',
        '日本の花火技術の粋を集めた壮大な演出',
      ],
    },
    {
      id: 'opening-spectacular',
      title: '5秒間1000発のオープニング',
      description: '圧倒的な迫力のオープニング演出',
      icon: '💥',
      details: [
        '開始5秒間で1000発の花火を連続打ち上げ',
        '両岸同時打ち上げによる圧倒的スケール',
        '観客の心を掴む最高のスタート',
      ],
    },
    {
      id: 'music-synchronization',
      title: '音楽連動演出',
      description: '7つのテーマ別プログラムで音楽と花火の融合',
      icon: '🎵',
      details: [
        '7つの異なるテーマによる構成',
        '音楽と完全同期した花火演出',
        '視覚と聴覚の両方で楽しめる体験',
      ],
    },
    {
      id: 'both-sides-sync',
      title: '両岸シンクロ型花火',
      description: '東京・千葉両側から同じ花火を同時に観覧',
      icon: '🌉',
      details: [
        '江戸川を挟んで両岸から同時打ち上げ',
        '東京側・千葉側どちらからも最高の眺望',
        '総打ち上げ数約14,000発の大規模開催',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎆 2025年の見どころ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            第50回記念大会ならではの特別企画とギネス世界記録挑戦など、今年だけの見どころをご紹介
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>

              <div className="space-y-2">
                {highlight.details.map((detail, index) => (
                  <div key={index} className="flex items-start text-sm">
                    <span className="text-red-500 mr-2 mt-1">●</span>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎇 総打ち上げ数約14,000発の大迫力
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">140万人</div>
                <div className="text-sm opacity-90">予想来場者数</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">75分</div>
                <div className="text-sm opacity-90">開催時間</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">50年</div>
                <div className="text-sm opacity-90">記念年数</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}