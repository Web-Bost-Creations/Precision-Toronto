import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Precision Toronto",
  description: "Toronto's premier precision machining and manufacturing services. Specializing in CNC machining, prototyping, and custom parts production with industry-leading quality and precision.",
  icons: [{ rel: "icon", url: "https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB6jZIz4c14avs3mALE2itWCYze7djnrQPbRBO" }],
  metadataBase: new URL('https://precision-toronto.com'),
  openGraph: {
    title: 'Precision Toronto',
    description: 'Toronto\'s premier precision machining and manufacturing services. Specializing in CNC machining, prototyping, and custom parts production.',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB6jZIz4c14avs3mALE2itWCYze7djnrQPbRBO',
        width: 1200,
        height: 630,
        alt: 'Precision Toronto - CNC Machining Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precision Toronto',
    description: 'Toronto\'s premier precision machining and manufacturing services',
    images: ['https://o2ftva8bhe.ufs.sh/f/I9sqKqh18dXB6jZIz4c14avs3mALE2itWCYze7djnrQPbRBO'],
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
