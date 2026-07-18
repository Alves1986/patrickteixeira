import Link from 'next/link'
import Image from 'next/image'
import { getSettings, getMenus } from '@/lib/content'

export async function Footer() {
  const currentYear = new Date().getFullYear()
  const settings = await getSettings()
  const menus = await getMenus()
  const ctaLabel = settings.ctaLabel || 'Diagnóstico Gratuito'
  const ctaLink = settings.ctaLink || 'https://form.respondi.app/DQ2AeT6P'

  const footerPages = menus.filter((m: any) => m.location === 'footer').sort((a: any, b: any) => a.order_index - b.order_index)

  return (
    <footer
      className="bg-[#0A0A0A] border-t border-[#1E1E1E] pt-16 pb-8"
      role="contentinfo"
    >
      {/* CTA Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div
          className="relative rounded-xl overflow-hidden p-10 md:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, #161616 0%, #1a1512 100%)',
            border: '1px solid rgba(197, 160, 89, 0.2)',
            boxShadow: '0 0 60px rgba(197, 160, 89, 0.08)',
          }}
        >
          {/* Glow orb */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.4) 0%, transparent 70%)' }}
          />
          <span className="eyebrow mb-4 block">O próximo passo é seu</span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 relative"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pronto para o{' '}
            <span className="text-gold-gradient">{ctaLabel}?</span>
          </h2>
          <p className="text-[#8A8580] max-w-lg mx-auto mb-8 text-lg">
            20 minutos que podem mudar a trajetória do seu negócio e da sua família.
          </p>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            <span>Quero meu {ctaLabel} →</span>
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <Link href="/" aria-label="Patrick Teixeira - Home">
                <Image
                  src="/logo.png"
                  alt="Kairós Leadership — Patrick Teixeira"
                  width={200}
                  height={60}
                  className="h-14 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(197,160,89,0.2))' }}
                />
              </Link>
            </div>
            <p className="text-[#4A4540] text-sm leading-relaxed max-w-xs">
              Formando homens que prosperam nos negócios sem sacrificar a família.
              Liderança, Negócios & Legado.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/patrickteixeiras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#4A4540] hover:text-[#C5A059] hover:border-[#C5A059] transition-all duration-300"
                aria-label="Instagram do Patrick Teixeira"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#8A8580] mb-5">
              Páginas
            </h3>
            <ul className="space-y-3">
              {footerPages.map((link: any) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#4A4540] hover:text-[#C5A059] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#4A4540] hover:text-[#C5A059] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#8A8580] mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              {[
                { href: 'mailto:contato@patrickteixeira.com.br', label: 'contato@patrickteixeira.com.br', external: true, type: 'email' },
                { href: 'https://wa.me/554298250506', label: '(42) 9825-0506', external: true, type: 'whatsapp' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-sm text-[#4A4540] hover:text-[#C5A059] transition-colors duration-300"
                  >
                    {link.type === 'email' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )}
                    {link.type === 'whatsapp' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-lg border border-[#1E1E1E] bg-[#111111]">
              <p className="text-xs text-[#4A4540] leading-relaxed">
                <span className="text-[#C5A059] font-semibold">Mentoria Kairós</span> —
                Vagas limitadas por turma. Garanta seu diagnóstico gratuito e saiba se há vagas abertas.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E1E] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#2A2520]">
            © {currentYear} Patrick Teixeira. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#2A2520]">
            Mentoria Kairós · Liderança, Negócios & Legado
          </p>
        </div>
      </div>
    </footer>
  )
}
