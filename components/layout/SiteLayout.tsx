import { Header } from './Header'
import { Footer } from './Footer'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
