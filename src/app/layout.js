import '/public/styles/globals.scss';

export const metadata = {
  title: 'Virtual GS - Création de site web',
  description: 'virtualGS - Votre partenaire web créatif, moderne et responsable. Nous concevons des sites web percutants et engageants, tout en prônant l\'écoresponsabilité. Ensemble, façonnons une présence digitale innovante et respectueuse de l\'environnement. Découvrez nos solutions web sur mesure dès aujourd\'hui. Optimisation de sites web et tratégies de référencement, Sites web personnalisés et ergonomique, Expérience utilisateur (UX)',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.svg',
    rel: 'icon'
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
