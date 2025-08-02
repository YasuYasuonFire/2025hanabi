'use client';

export function Contact() {
  const contacts = [
    {
      organization: '江戸川区花火大会実行委員会',
      phone: '03-5662-0523',
      website: 'https://www.city.edogawa.tokyo.jp/hanabi/',
      description: '江戸川区側会場に関するお問い合わせ',
      address: '東京都江戸川区',
      hours: '平日 9:00〜17:00',
      emergencyNote: '開催当日は特別体制で対応',
    },
    {
      organization: '市川市民納涼花火大会実行委員会',
      phone: '047-711-1142',
      website: 'https://www.ichikawa-hanabi.net/',
      description: '市川市側会場に関するお問い合わせ',
      address: '千葉県市川市',
      hours: '平日 9:00〜17:00',
      emergencyNote: '開催当日は特別体制で対応',
    },
  ];

  const emergencyContacts = [
    {
      service: '緊急通報（救急・消防）',
      number: '119',
      description: '生命に関わる緊急時',
      icon: '🚨',
    },
    {
      service: '警察（事件・事故）',
      number: '110',
      description: '事件・事故・トラブル',
      icon: '👮',
    },
  ];

  const quickLinks = [
    {
      title: '開催可否確認',
      description: '当日11:00に最新情報を発表',
      icon: '📊',
      links: [
        { name: '江戸川区公式サイト', url: 'https://www.city.edogawa.tokyo.jp/hanabi/' },
        { name: '市川市公式サイト', url: 'https://www.ichikawa-hanabi.net/' },
      ],
    },
    {
      title: 'SNS最新情報',
      description: 'リアルタイム情報をお届け',
      icon: '📱',
      links: [
        { name: '江戸川区公式Twitter', url: '#' },
        { name: '市川市公式Twitter', url: '#' },
      ],
    },
    {
      title: '交通情報',
      description: '運行状況・遅延情報',
      icon: '🚇',
      links: [
        { name: '都営新宿線運行情報', url: '#' },
        { name: 'JR総武線運行情報', url: '#' },
      ],
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📞 お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            花火大会に関するご質問やお問い合わせは、各実行委員会までお気軽にご連絡ください
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 実行委員会連絡先 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">🏢</span>
                  {contact.organization}
                </h3>
                
                <div className="space-y-3 mb-6">
                  
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">🌐</span>
                    <div>
                      <div className="font-medium text-gray-900">公式サイト</div>
                      <a 
                        href={contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        {contact.website}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">⏰</span>
                    <div>
                      <div className="font-medium text-gray-900">受付時間</div>
                      <div className="text-gray-600 text-sm">{contact.hours}</div>
                      <div className="text-red-600 text-xs mt-1">{contact.emergencyNote}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">対応範囲：</span>
                    {contact.description}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {contact.address}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 緊急連絡先 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-red-700">
              🚨 緊急連絡先
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {emergencyContacts.map((emergency, index) => (
                <div key={index} className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{emergency.icon}</span>
                    <h4 className="font-bold text-red-800">{emergency.service}</h4>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{emergency.number}</div>
                  <div className="text-red-700 text-sm">{emergency.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* クイックリンク */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">🔗 便利なリンク</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickLinks.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{section.icon}</div>
                    <h4 className="font-bold text-gray-900">{section.title}</h4>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-blue-50 text-blue-700 py-2 rounded hover:bg-blue-100 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 注意事項 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center">
              ⚠️ お問い合わせ時の注意事項
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-yellow-700 mb-2">ウェブサイトでの情報確認</h4>
                <ul className="space-y-1 text-yellow-700">
                  <li>• 最新情報は公式サイトをご確認ください</li>
                  <li>• 開催直前は情報更新が頻繁になります</li>
                  <li>• SNSでもリアルタイム情報を配信</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-700 mb-2">開催当日</h4>
                <ul className="space-y-1 text-yellow-700">
                  <li>• 開催可否は11:00までに発表</li>
                  <li>• 緊急時は迷わず119番・110番へ</li>
                  <li>• SNSでリアルタイム情報を配信</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ソーシャルシェア */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3">📢 情報をシェア</h3>
              <p className="text-pink-100 mb-4 text-sm">
                家族や友人と花火大会の情報をシェアして、みんなで楽しい夏の思い出を作りましょう
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                  Twitter でシェア
                </button>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                  LINE でシェア
                </button>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm">
                  リンクをコピー
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}