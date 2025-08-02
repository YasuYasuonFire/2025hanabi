'use client';

import { useState } from 'react';

export function FAQ() {
  const [openCategories, setOpenCategories] = useState<string[]>(['general']);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: 'general',
      title: '一般的な質問',
      icon: '❓',
      questions: [
        {
          id: 'general-1',
          question: '花火大会はいつ開催されますか？',
          answer: '2025年8月2日（土）19:15〜20:20に開催予定です。荒天時は中止となり、順延はありません。',
          tags: ['日時', '開催日'],
        },
        {
          id: 'general-2',
          question: '開催可否はいつ決定されますか？',
          answer: '開催当日の11:00までに決定され、公式サイトやSNSで発表されます。台風などの場合は前倒しで中止判断することもあります。',
          tags: ['開催判断', '中止'],
        },
        {
          id: 'general-3',
          question: '江戸川区側と市川市側の違いは？',
          answer: '両側で同じ花火を観覧できますが、有料席の種類や料金、アクセス方法が異なります。江戸川区側は都営新宿線、市川市側はJR総武線が便利です。',
          tags: ['観覧場所', '違い'],
        },
        {
          id: 'general-4',
          question: '第50回記念の特別企画はありますか？',
          answer: 'はい。公募で選ばれたオリジナル花火の打ち上げや、ギネス世界記録挑戦の「富士の大仕掛け」花火など、記念企画が多数あります。',
          tags: ['50周年', '記念企画'],
        },
      ],
    },
    {
      category: 'access',
      title: 'アクセス・交通',
      icon: '🚇',
      questions: [
        {
          id: 'access-1',
          question: '車で行くことはできますか？',
          answer: '申し訳ありませんが、会場周辺は17:00〜22:00まで交通規制があり、駐車場もないため車での来場はできません。必ず公共交通機関をご利用ください。',
          tags: ['車', '駐車場', '交通規制'],
        },
        {
          id: 'access-2',
          question: '最寄り駅はどこですか？',
          answer: '江戸川区側は都営新宿線篠崎駅（徒歩15分）、市川市側はJR総武線市川駅（徒歩15分）が最も便利です。混雑を避けたい場合は小岩駅や本八幡駅も利用できます。',
          tags: ['最寄り駅', 'アクセス'],
        },
        {
          id: 'access-3',
          question: '帰りの電車の混雑はどうですか？',
          answer: '花火終了後は非常に混雑します。特に最寄り駅は入場制限がかかることもあります。時間に余裕を持って移動し、可能であれば少し歩いて他の駅を利用することをお勧めします。',
          tags: ['帰り', '混雑', '電車'],
        },
      ],
    },
    {
      category: 'viewing',
      title: '観覧・席',
      icon: '💺',
      questions: [
        {
          id: 'viewing-1',
          question: '有料席はまだ購入できますか？',
          answer: '申し訳ありませんが、2025年の有料席は全て販売終了しています。無料観覧エリアをご利用ください。',
          tags: ['有料席', '販売状況'],
        },
        {
          id: 'viewing-2',
          question: '無料で観覧できる場所はありますか？',
          answer: 'はい。江戸川河川敷や大洲防災公園などで無料観覧できます。ただし場所取りは前日17:00から可能で、早めの到着が必要です。',
          tags: ['無料観覧', '場所取り'],
        },
        {
          id: 'viewing-3',
          question: '場所取りのルールはありますか？',
          answer: '1人あたり1平方メートル程度、サイクリングロードでの場所取り禁止、ガードフェンス内立入禁止などのルールがあります。マナーを守って楽しく観覧しましょう。',
          tags: ['場所取り', 'ルール'],
        },
        {
          id: 'viewing-4',
          question: 'おすすめの穴場スポットはありますか？',
          answer: 'イオン市川妙典の屋上駐車場やアイ・リンクタウン展望施設などが穴場として知られています。混雑を避けたい方におすすめです。',
          tags: ['穴場', 'おすすめ'],
        },
      ],
    },
    {
      category: 'facilities',
      title: '設備・施設',
      icon: '🏪',
      questions: [
        {
          id: 'facilities-1',
          question: 'トイレはありますか？',
          answer: '各会場に仮設トイレが設置されます。また、最寄り駅や周辺の公共施設のトイレも利用できますが、混雑が予想されるため早めの利用をお勧めします。',
          tags: ['トイレ', '設備'],
        },
        {
          id: 'facilities-2',
          question: '食べ物や飲み物は現地で買えますか？',
          answer: '大洲防災公園周辺や江戸川河川敷に屋台・キッチンカーが出店予定です（15:00〜21:00）。ただし混雑するため、事前に準備されることをお勧めします。',
          tags: ['屋台', '食事', '飲み物'],
        },
        {
          id: 'facilities-3',
          question: 'バリアフリー対応はありますか？',
          answer: '一部の有料席エリアやアイ・リンクタウン展望施設などでバリアフリー対応があります。詳細は事前に実行委員会にお問い合わせください。',
          tags: ['バリアフリー', '車椅子'],
        },
      ],
    },
    {
      category: 'safety',
      title: '安全・注意事項',
      icon: '⚠️',
      questions: [
        {
          id: 'safety-1',
          question: '熱中症対策はどうすればよいですか？',
          answer: '8月の開催で気温が高くなります。帽子、日傘、飲み物、塩分補給品を必ず持参し、こまめな水分補給を心がけてください。体調不良を感じたらすぐに涼しい場所で休憩を。',
          tags: ['熱中症', '対策', '健康'],
        },
        {
          id: 'safety-2',
          question: '子ども連れで参加する際の注意点は？',
          answer: '迷子対策として連絡先を書いたものを子どもに持たせ、集合場所を決めておきましょう。また、混雑時は手をつないで離ればなれにならないよう注意してください。',
          tags: ['子ども', 'ファミリー', '迷子'],
        },
        {
          id: 'safety-3',
          question: '持ち込み禁止のものはありますか？',
          answer: '危険物、アルコール（一部エリア）、大きな荷物などの持ち込みが制限される場合があります。詳細は公式サイトで最新情報をご確認ください。',
          tags: ['持ち込み', '禁止物'],
        },
        {
          id: 'safety-4',
          question: '緊急時はどこに連絡すればよいですか？',
          answer: '江戸川区側：03-5662-0523、市川市側：047-711-1142にご連絡ください。救急時は迷わず119番通報してください。',
          tags: ['緊急時', '連絡先'],
        },
      ],
    },
  ];

  const toggleCategory = (category: string) => {
    setOpenCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ❓ よくある質問
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            花火大会に関するよくある質問をまとめました。お探しの情報が見つからない場合は、お気軽にお問い合わせください。
          </p>
          
          {/* 検索ボックス */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="質問を検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {searchTerm && (
            <div className="mb-6 text-center">
              <p className="text-gray-600">
                「{searchTerm}」の検索結果：{filteredFAQ.reduce((acc, cat) => acc + cat.questions.length, 0)}件
              </p>
            </div>
          )}

          <div className="space-y-4">
            {filteredFAQ.map((category) => (
              <div key={category.category} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                    <span className="ml-3 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {category.questions.length}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openCategories.includes(category.category) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openCategories.includes(category.category) && (
                  <div className="bg-white">
                    {category.questions.map((faq) => (
                      <div key={faq.id} className="border-t border-gray-100 px-6 py-4">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">Q.</span>
                          {searchTerm && (
                            <span dangerouslySetInnerHTML={{
                              __html: faq.question.replace(
                                new RegExp(`(${searchTerm})`, 'gi'),
                                '<mark class="bg-yellow-200">$1</mark>'
                              )
                            }} />
                          )}
                          {!searchTerm && faq.question}
                        </h4>
                        <div className="text-gray-700 mb-3 ml-6">
                          <span className="text-green-600 mr-2">A.</span>
                          {searchTerm && (
                            <span dangerouslySetInnerHTML={{
                              __html: faq.answer.replace(
                                new RegExp(`(${searchTerm})`, 'gi'),
                                '<mark class="bg-yellow-200">$1</mark>'
                              )
                            }} />
                          )}
                          {!searchTerm && faq.answer}
                        </div>
                        <div className="flex flex-wrap gap-1 ml-6">
                          {faq.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQ.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">検索結果が見つかりませんでした</h3>
              <p className="text-gray-600 mb-4">
                別のキーワードで検索するか、下記にお問い合わせください
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                検索をリセット
              </button>
            </div>
          )}

          {/* お問い合わせ案内 */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">💬 さらにご質問がある場合</h3>
              <p className="text-purple-100 mb-4">
                お探しの情報が見つからない場合は、お気軽に実行委員会までお問い合わせください
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                お問い合わせ先を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}