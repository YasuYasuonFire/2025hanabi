import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "江戸川区花火大会・市川花火大会2025 | 第50回記念大会",
  description: "2025年8月2日開催の江戸川区花火大会（第50回）と市川市民納涼花火大会（第41回）の総合情報サイト。現在地からのおすすめ観覧場所、アクセス案内、50周年記念企画、ギネス世界記録挑戦など最新情報をお届け。",
  keywords: "江戸川区花火大会,市川花火大会,2025,50周年,ギネス世界記録,花火,夏祭り,江戸川,市川,観覧席,アクセス",
  authors: [{ name: "江戸川区花火大会・市川花火大会実行委員会" }],
  creator: "江戸川区花火大会・市川花火大会実行委員会",
  publisher: "江戸川区花火大会・市川花火大会実行委員会",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://edogawa-ichikawa-hanabi2025.vercel.app",
    siteName: "江戸川区花火大会・市川花火大会2025",
    title: "江戸川区花火大会・市川花火大会2025 | 第50回記念大会",
    description: "2025年8月2日開催の江戸川区花火大会（第50回）と市川市民納涼花火大会（第41回）の総合情報サイト",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "江戸川区花火大会・市川花火大会2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "江戸川区花火大会・市川花火大会2025 | 第50回記念大会",
    description: "2025年8月2日開催の江戸川区花火大会（第50回）と市川市民納涼花火大会（第41回）の総合情報サイト",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL('https://edogawa-ichikawa-hanabi2025.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="花火大会2025" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} ${playfairDisplay.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}