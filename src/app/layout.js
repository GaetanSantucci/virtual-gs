import '/public/styles/globals.scss';

export const metadata = {
  title: 'Virtual GS - Création de site web',
  description: 'Generated by create next app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    rel: 'icon',
  },
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'cyan' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        {children}</body>
    </html>
  )
}
