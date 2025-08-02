'use client';

import { useState, useCallback } from 'react';
import type { UserLocation } from '@/types';

interface GeolocationState {
  location: UserLocation | null;
  error: string | null;
  isLoading: boolean;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    location: null,
    error: null,
    isLoading: false,
  });

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: 'お使いのブラウザは位置情報をサポートしていません。',
        isLoading: false,
      }));
      return;
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000, // 5分間キャッシュ
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location: UserLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: Date.now(),
        };

        setState({
          location,
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        let errorMessage = '位置情報の取得に失敗しました。';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = '位置情報の使用が拒否されました。ブラウザの設定を確認してください。';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = '位置情報が利用できません。';
            break;
          case error.TIMEOUT:
            errorMessage = '位置情報の取得がタイムアウトしました。再度お試しください。';
            break;
        }

        setState({
          location: null,
          error: errorMessage,
          isLoading: false,
        });
      },
      options
    );
  }, []);

  return {
    ...state,
    requestLocation,
  };
}