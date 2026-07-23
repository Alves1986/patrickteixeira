import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://patrickteixeira.com.br'),
  title: {
    default: 'Patrick Teixeira | Liderança Masculina, Negócios e Legado',
    template: '%s | Patrick Teixeira',
  },
  description:
    'Mentoria Kairós: Formando homens que prosperam nos negócios sem sacrificar a família. Liderança, Negócios & Legado. Diagnóstico gratuito disponível.',
  keywords: [
    'mentoria liderança masculina',
    'coach de negócios',
    'Patrick Teixeira',
    'Mentoria Kairós',
    'liderança e família',
    'desenvolvimento pessoal',
    'empreendedores',
    'legado',
  ],
  authors: [{ name: 'Patrick Teixeira', url: 'https://patrickteixeira.com.br' }],
  creator: 'Patrick Teixeira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://patrickteixeira.com.br',
    siteName: 'Patrick Teixeira',
    title: 'Patrick Teixeira | Liderança Masculina, Negócios e Legado',
    description:
      'Formando homens que prosperam nos negócios sem sacrificar a família. Diagnóstico gratuito disponível.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Teixeira | Liderança & Legado',
    description:
      'Formando homens que prosperam nos negócios sem sacrificar a família.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Patrick Teixeira',
  jobTitle: 'Mentor de Liderança e Negócios',
  description:
    'Formando homens que prosperam nos negócios sem sacrificar a família. Fundador da Mentoria Kairós.',
  url: 'https://patrickteixeira.com.br',
  sameAs: ['https://instagram.com/patrickteixeiras'],
  knowsAbout: ['Liderança Masculina', 'Negócios', 'Mentoria', 'Desenvolvimento Pessoal', 'Legado'],
  offers: {
    '@type': 'Offer',
    name: 'Mentoria Kairós',
    description:
      'Programa de mentoria para líderes e empreendedores que desejam crescer nos negócios preservando a família.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Raleway:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-black-deep text-white-pure antialiased">
        {children}
      </body>
    </html>
  )
}
