export interface FireworksEvent {
  id: string;
  name: string;
  date: string;
  time: {
    start: string;
    end: string;
  };
  location: {
    name: string;
    prefecture: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  fireworksCount: number;
  expectedAttendance: number;
  isMemorialYear: boolean;
  memorialYear?: number;
  specialFeatures: string[];
  weatherDependent: boolean;
  status: 'scheduled' | 'confirmed' | 'cancelled' | 'postponed';
}

export interface ViewingVenue {
  id: string;
  name: string;
  type: 'paid' | 'free' | 'special';
  side: 'edogawa' | 'ichikawa';
  coordinates: {
    lat: number;
    lng: number;
  };
  capacity?: number;
  price?: number;
  features: string[];
  facilities: {
    toilets: boolean;
    food: boolean;
    parking: boolean;
    accessibility: boolean;
  };
  accessInfo: {
    nearestStation: string;
    walkingTime: number;
    crowdLevel: 'low' | 'medium' | 'high';
  };
  reservationRequired: boolean;
  reservationStatus?: 'available' | 'sold_out' | 'not_started';
}

export interface AccessRoute {
  id: string;
  fromStation: string;
  toVenue: string;
  walkingTime: number;
  crowdLevel: 'low' | 'medium' | 'high';
  description: string;
  tips: string[];
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export interface LocationRecommendation {
  venue: ViewingVenue;
  distance: number;
  accessRoute: AccessRoute;
  score: number;
  reasons: string[];
  alternatives: ViewingVenue[];
}

export interface EventStatus {
  isConfirmed: boolean;
  lastUpdated: string;
  weatherCondition: {
    condition: string;
    probability: number;
    windSpeed: number;
    temperature: number;
  };
  crowdStatus: {
    current: 'light' | 'moderate' | 'heavy' | 'very_heavy';
    predicted: 'light' | 'moderate' | 'heavy' | 'very_heavy';
  };
  transportStatus: {
    delays: boolean;
    specialSchedule: boolean;
    restrictions: string[];
  };
  announcements: {
    title: string;
    content: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    timestamp: string;
  }[];
}

export interface FAQ {
  id: string;
  category: 'access' | 'viewing' | 'facilities' | 'safety' | 'general';
  question: string;
  answer: string;
  tags: string[];
}

export interface ContactInfo {
  organization: string;
  phone: string;
  website: string;
  emergencyContact?: string;
}