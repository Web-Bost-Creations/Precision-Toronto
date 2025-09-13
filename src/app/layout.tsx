import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Barrie\'s Mobile Detailing",
  description: "Barrie's premier mobile detailing services. Specializing in mobile detailing services with industry-leading quality and precision.",
  icons: [{ rel: "icon", url: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBq5eGX9YsNxfujw0v69PZOBH1Sc7DQnRGkaFE" }],
  metadataBase: new URL('https://barriesdetailing.com'),
  openGraph: {
    title: 'Barrie\'s Mobile Detailing',
    description: 'Barrie\'s premier mobile detailing services. Specializing in mobile detailing services with industry-leading quality and precision.',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBq5eGX9YsNxfujw0v69PZOBH1Sc7DQnRGkaFE',
        width: 1200,
        height: 630,
        alt: 'Barrie\'s Mobile Detailing - Mobile Detailing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrie\'s Mobile Detailing',
    description: 'Barrie\'s premier mobile detailing services',
    images: ['https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXBq5eGX9YsNxfujw0v69PZOBH1Sc7DQnRGkaFE'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: "Web Boost Creations",
    url: "https://webboostcreations.com"
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
