'use client';

export function ViewingGuide() {
  const paidSeats = [
    {
      id: 'edogawa-paid',
      side: '江戸川区側',
      seats: [
        {
          name: 'エリアA〜E指定席',
          price: '2,000円',
          capacity: '1名',
          status: '販売終了',
          features: ['最前部エリア', '迫力満点'],
        },
        {
          name: '2人席',
          price: '未定',
          capacity: '2名',
          status: '販売終了',
          features: ['ペア向け'],
        },
        {
          name: '4人席',
          price: '未定',
          capacity: '4名',
          status: '販売終了',
          features: ['ファミリー向け'],
        },
      ],
    },
    {
      id: 'ichikawa-paid',
      side: '市川市側',
      seats: [
        {
          name: '桟敷席',
          price: '25,000円',
          capacity: '1〜4名',
          status: '販売終了',
          features: ['最前部木製マス席', '最高の眺望'],
        },
        {
          name: 'ペア席',
          price: '13,000円',
          capacity: '1〜2名',
          status: '販売終了',
          features: ['河川敷斜面シート席'],
        },
        {
          name: 'イス席',
          price: '8,000円',
          capacity: '1名',
          status: '販売終了',
          features: ['パイプ椅子設置'],
        },
        {
          name: '自由席',
          price: '5,000円',
          capacity: '1名',
          status: '販売終了',
          features: ['指定エリア内自由観覧'],
        },
      ],
    },
  ];

  const freeAreas = [
    {
      name: '大洲防災公園（市川市側）',
      description: '家族連れに人気の広い公園エリア',
      pros: ['トイレ完備', '屋台あり', '広いスペース'],
      cons: ['混雑必至', '場所取り激戦'],
      tips: ['前日17:00から場所取り可能', '家族連れにおすすめ'],
    },
    {
      name: '江戸川河川敷上流側（江戸川区側）',
      description: '比較的空いている穴場スポット',
      pros: ['混雑が少ない', '場所取りしやすい'],
      cons: ['設備少なめ', '駅から遠い'],
      tips: ['穴場を狙うならココ', '上流からの独特な眺め'],
    },
    {
      name: 'イオン市川妙典屋上駐車場',
      description: '知る人ぞ知る穴場スポット',
      pros: ['空調完備', 'トイレ・売店あり', '混雑回避'],
      cons: ['距離がある', '高さからの眺め'],
      tips: ['穴場中の穴場', '快適に観覧したい方に'],
    },
  ];

  const placeholderRules = [
    {
      title: '場所取りルール',
      rules: [
        '解禁時間：前日17:00から',
        '1人あたり1平方メートル程度',
        'サイクリングロードは場所取り禁止',
        'ガードフェンス内は立入禁止',
      ],
    },
    {
      title: '持ち物・マナー',
      rules: [
        'レジャーシート必須',
        'ゴミは必ず持ち帰り',
        '周囲への配慮を忘れずに',
        '熱中症対策を万全に',
      ],
    },
  ];

  return (
    <section id="viewing-guide" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💺 観覧席ガイド
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            有料席から無料エリアまで、あなたに最適な観覧場所をご案内します
          </p>
        </div>

        {/* 有料席情報 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">🎫 有料席情報</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {paidSeats.map((area) => (
              <div key={area.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-center text-gray-800">
                  {area.side}
                </h4>
                <div className="space-y-4">
                  {area.seats.map((seat, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-gray-900">{seat.name}</h5>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                          {seat.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                          <span className="text-gray-600">料金：</span>
                          <span className="font-medium">{seat.price}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">定員：</span>
                          <span className="font-medium">{seat.capacity}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {seat.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-red-600 font-medium">※ 2025年の有料席は全て販売終了しています</p>
          </div>
        </div>

        {/* 無料観覧エリア */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">🆓 無料観覧エリア</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {freeAreas.map((area, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-green-800 mb-2">{area.name}</h4>
                <p className="text-green-700 text-sm mb-4">{area.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-green-800 mb-1">✅ メリット</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      {area.pros.map((pro, proIndex) => (
                        <li key={proIndex}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-green-800 mb-1">⚠️ 注意点</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      {area.cons.map((con, conIndex) => (
                        <li key={conIndex}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-green-800 mb-1">💡 コツ</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      {area.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 場所取りルール・マナー */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">📋 場所取りルール・マナー</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placeholderRules.map((section, index) => (
              <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-yellow-800 mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="text-yellow-700 flex items-start">
                      <span className="text-yellow-600 mr-2">●</span>
                      <span className="text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 特別観覧 */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">🏢 特別観覧</h3>
            <h4 className="text-xl font-bold mb-2">アイ・リンクタウン展望施設</h4>
            <p className="text-purple-100 mb-4">
              地上150mの室内から花火を観覧できる特別スポット
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-yellow-300 font-bold">✓ 冷房完備</div>
                <div className="text-purple-100">快適な環境</div>
              </div>
              <div>
                <div className="text-yellow-300 font-bold">✓ 雨天OK</div>
                <div className="text-purple-100">天候に左右されない</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}