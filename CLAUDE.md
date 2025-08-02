# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

江戸川区花火大会・市川花火大会2025年のランディングページ。両花火大会の情報提供と現在地ベースのおすすめ場所レコメンド機能を持つモバイルファーストWebアプリケーション。

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Google Maps JavaScript API
- **PWA**: Service Worker for offline support
- **Analytics**: Google Analytics
- **Deployment**: Vercel (推奨)

## Architecture

### Core Features
1. **基本情報表示**: 開催概要・50周年記念企画・リアルタイム開催状況
2. **現在地レコメンド**: GPS位置情報からおすすめ観覧場所を提案
3. **観覧ガイド**: 有料席・無料エリア・設備情報
4. **インタラクティブマップ**: Google Maps連携でアクセス案内
5. **PWA機能**: オフライン閲覧・プッシュ通知

### Project Structure
```
/app
  /(routes)         # App Router pages
  /components       # Reusable UI components
  /lib             # Utilities and configurations
  /types           # TypeScript type definitions
/public            # Static assets
/styles            # Global styles
```

### Key Components Architecture
- **LocationRecommendation**: 位置情報取得とレコメンドロジック
- **InteractiveMap**: Google Maps API wrapper
- **VenueSelector**: 観覧場所選択UI
- **EventStatus**: リアルタイム開催状況表示
- **MobileNavigation**: モバイル専用ナビゲーション

## Mobile-First Design Principles

- **スクリーンサイズ**: 320px-768px を最優先
- **タップエリア**: 最小44px×44px
- **パフォーマンス**: 3秒以内初期表示（3G回線対応）
- **オフライン**: 重要情報のキャッシュ化

## Data Management

### Static Data
- 花火大会基本情報（JSON）
- 観覧場所データ（座標・アクセス情報）
- FAQ・お問い合わせ先

### Dynamic Data
- 開催状況（API連携）
- 天気情報
- 交通情報
- 混雑予測

## Location Recommendation Logic

1. **位置情報取得**: Geolocation API
2. **エリア判定**: 江戸川区側 vs 市川市側 vs 中間地点
3. **最適化要素**: 
   - 現在地からの距離
   - 混雑予測
   - アクセス利便性
   - 設備充実度

## Performance Requirements

- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **画像最適化**: Next.js Image component + WebP
- **コード分割**: Dynamic imports for non-critical features
- **キャッシュ戦略**: ISR for static content, SWR for dynamic data

## Development Workflow

### Environment Setup
- Node.js 18+
- npm/yarn/pnpm
- Google Maps API key required
- Geolocation HTTPS environment for testing

### Key Environment Variables
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_GA_TRACKING_ID`
- `NEXT_PUBLIC_API_BASE_URL`

### Testing Strategy
- Unit tests: Jest + React Testing Library
- E2E tests: Playwright
- Mobile testing: デバイスエミュレーション必須
- Location mocking: 位置情報テスト用

## Deployment Considerations

- **静的最適化**: 可能な限りStatic Generation使用
- **動的ルート**: 開催状況など必要最小限でISR
- **CDN**: 画像・静的アセットの高速配信
- **モニタリング**: 開催日前後の24時間監視体制

## Critical Business Logic

### 開催可否判断フロー
1. 当日11:00の公式発表待機
2. 台風情報による前倒し判断
3. リアルタイム情報更新とユーザー通知

### レコメンドアルゴリズム優先順位
1. 安全性（避難経路確保）
2. アクセス性（公共交通機関）
3. 快適性（設備・混雑度）
4. 眺望品質（花火の見やすさ）

## Integration Points

- **Google Maps**: ルート案内・施設検索
- **公式API**: 開催状況・交通情報（可能であれば）
- **天気API**: 開催判断支援
- **Analytics**: ユーザー行動分析