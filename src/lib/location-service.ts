import type { UserLocation, LocationRecommendation, ViewingVenue } from '@/types';
import { viewingVenues } from '@/data/venues';

const TOKYO_STATION = { lat: 35.6812, lng: 139.7671 };
const EDOGAWA_CENTER = { lat: 35.6968, lng: 139.8683 };
const ICHIKAWA_CENTER = { lat: 35.7227, lng: 139.9308 };

function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lng2 - lng1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function calculateRecommendationScore(
  venue: ViewingVenue,
  userLocation: UserLocation
): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  let score = 0;

  // 距離スコア (近いほど高得点)
  const distance = calculateDistance(
    userLocation.latitude,
    userLocation.longitude,
    venue.coordinates.lat,
    venue.coordinates.lng
  );

  if (distance < 5000) {
    score += 30;
    reasons.push('現在地から5km以内でアクセス良好');
  } else if (distance < 10000) {
    score += 20;
    reasons.push('現在地から10km以内で比較的近い');
  } else if (distance < 20000) {
    score += 10;
    reasons.push('首都圏内からアクセス可能');
  }

  // 混雑度スコア (混雑が少ないほど高得点)
  switch (venue.accessInfo.crowdLevel) {
    case 'low':
      score += 25;
      reasons.push('混雑が少なく快適に観覧可能');
      break;
    case 'medium':
      score += 15;
      reasons.push('適度な混雑で雰囲気良好');
      break;
    case 'high':
      score += 5;
      reasons.push('人気スポットで迫力ある観覧');
      break;
  }

  // 設備スコア
  let facilityScore = 0;
  if (venue.facilities.toilets) {
    facilityScore += 5;
    reasons.push('トイレ完備で安心');
  }
  if (venue.facilities.food) {
    facilityScore += 5;
    reasons.push('飲食施設あり');
  }
  if (venue.facilities.accessibility) {
    facilityScore += 5;
    reasons.push('バリアフリー対応');
  }
  score += facilityScore;

  // タイプ別スコア
  if (venue.type === 'free') {
    score += 15;
    reasons.push('無料で観覧可能');
  } else if (venue.type === 'paid' && venue.reservationStatus === 'available') {
    score += 20;
    reasons.push('有料席で確実に観覧可能');
  }

  // アクセススコア (徒歩時間が短いほど高得点)
  if (venue.accessInfo.walkingTime <= 15) {
    score += 15;
    reasons.push('駅から徒歩15分以内');
  } else if (venue.accessInfo.walkingTime <= 25) {
    score += 10;
    reasons.push('駅から徒歩25分以内');
  }

  return { score, reasons };
}

export async function getLocationRecommendation(
  userLocation: UserLocation
): Promise<LocationRecommendation> {
  // 全会場のスコアを計算
  const venueScores = viewingVenues.map(venue => {
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      venue.coordinates.lat,
      venue.coordinates.lng
    );
    
    const { score, reasons } = calculateRecommendationScore(venue, userLocation);
    
    return {
      venue,
      distance,
      score,
      reasons,
    };
  });

  // スコア順にソート
  venueScores.sort((a, b) => b.score - a.score);

  const bestVenue = venueScores[0];
  const alternatives = venueScores.slice(1, 4).map(item => item.venue);

  // アクセスルートを決定（簡易版）
  const accessRoute = {
    id: `route-${bestVenue.venue.id}`,
    fromStation: bestVenue.venue.accessInfo.nearestStation,
    toVenue: bestVenue.venue.name,
    walkingTime: bestVenue.venue.accessInfo.walkingTime,
    crowdLevel: bestVenue.venue.accessInfo.crowdLevel,
    description: `${bestVenue.venue.accessInfo.nearestStation}から${bestVenue.venue.name}への最適ルート`,
    tips: [
      '早めの到着をお勧めします',
      '水分補給を忘れずに',
      '混雑時は時間に余裕を持って移動してください',
    ],
  };

  return {
    venue: bestVenue.venue,
    distance: bestVenue.distance,
    accessRoute,
    score: bestVenue.score,
    reasons: bestVenue.reasons,
    alternatives,
  };
}

export function getUserAreaPreference(userLocation: UserLocation): 'edogawa' | 'ichikawa' | 'neutral' {
  const distanceToEdogawa = calculateDistance(
    userLocation.latitude,
    userLocation.longitude,
    EDOGAWA_CENTER.lat,
    EDOGAWA_CENTER.lng
  );

  const distanceToIchikawa = calculateDistance(
    userLocation.latitude,
    userLocation.longitude,
    ICHIKAWA_CENTER.lat,
    ICHIKAWA_CENTER.lng
  );

  const diff = Math.abs(distanceToEdogawa - distanceToIchikawa);
  
  if (diff < 2000) {
    return 'neutral';
  }
  
  return distanceToEdogawa < distanceToIchikawa ? 'edogawa' : 'ichikawa';
}