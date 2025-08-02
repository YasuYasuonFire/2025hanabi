import { Hero } from "@/components/Hero";
import { LocationRecommendation } from "@/components/LocationRecommendation";
import { EventHighlights } from "@/components/EventHighlights";
import { AccessGuide } from "@/components/AccessGuide";
import { ViewingGuide } from "@/components/ViewingGuide";
import { EventStatus } from "@/components/EventStatus";
import { InteractiveMap } from "@/components/InteractiveMap";
import { FAQ } from "@/components/FAQ";

function Disclaimer() {
  return (
    <section className="py-8 bg-red-50 border-t-4 border-red-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl">⚠️</span>
            <h2 className="text-xl font-bold text-red-800 mt-2">重要なお知らせ</h2>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-red-200">
            <div className="space-y-4 text-sm text-gray-700">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h3 className="font-bold text-yellow-800 mb-2">📝 このサイトについて</h3>
                <p className="text-yellow-700">
                  このサイトは<strong>ファンサイト</strong>です。江戸川区花火大会・市川花火大会の公式サイトではありません。
                  公式情報は各実行委員会の公式サイトをご確認ください。
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-bold text-blue-800 mb-2">📍 情報の正確性について</h3>
                <p className="text-blue-700">
                  掲載されている情報の正確性については責任を負いかねます。
                  開催日時、会場、交通情報等は必ず公式サイトでご確認ください。
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <h3 className="font-bold text-green-800 mb-2">🔗 公式サイト</h3>
                <div className="text-green-700 space-y-1">
                  <div>• 江戸川区花火大会: <a href="https://www.city.edogawa.tokyo.jp/hanabi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">公式サイト</a></div>
                  <div>• 市川市民納涼花火大会: <a href="https://www.ichikawa-hanabi.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">公式サイト</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Disclaimer />
      <LocationRecommendation />
      <EventHighlights />
      <AccessGuide />
      <ViewingGuide />
      <EventStatus />
      <InteractiveMap />
      <FAQ />
    </main>
  );
}