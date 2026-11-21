import Link from 'next/link'
import Image from 'next/image'
import { getSettings, getMenus } from '@/lib/content'
import { IconArrowRight, IconInstagram, IconMail, IconPhone } from '@/components/ui/Icons'

export async function Footer() {
  const currentYear = new Date().getFullYear()
  const settings = await getSettings()
  const menus = await getMenus()
  const ctaLabel = settings.ctaLabel || 'Diagnóstico Gratuito'
  const ctaLink = settings.ctaLink || 'https://form.respondi.app/DQ2AeT6P'

  const footerPages = menus
    .filter((m: any) => m.location === 'footer')
    .sort((a: any, b: any) => a.order_index - b.order_index)

  return (
    <footer
      className="bg-[#0A0A0A] border-t border-[#27272A] pt-16 pb-8"
      role="contentinfo"
    >
      {/* CTA Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div
          className="relative rounded-[16px] overflow-hidden p-10 md:p-14 text-center bg-[#161616] border border-[#27272A]"
        >
          <span className="eyebrow mb-4 block justify-center">O próximo passo é seu</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FAFAFA]">
            Pronto para o <span className="text-[#C5A059]">{ctaLabel}?</span>
          </h2>
          <p className="text-[#B8B2AC] max-w-lg mx-auto mb-8 text-lg">
            <span className="tabular-nums">20</span> minutos que podem mudar a trajetória do seu negócio e da sua família.
          </p>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            <span>Quero meu {ctaLabel}</span>
            <IconArrowRight className="w-5 h-5" />
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
                  width={180}
                  height={63}
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-[#B8B2AC] leading-relaxed mb-6">
              Formando homens que prosperam nos negócios sem sacrificar a família. Liderança, Negócios &amp; Legado.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/patrickteixeiras"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Patrick Teixeira"
                className="w-10 h-10 rounded-[8px] border border-[#71717A] flex items-center justify-center text-[#B8B2AC] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors duration-200"
              >
                <IconInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#B8B2AC] mb-5">
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
                      className="text-sm text-[#B8B2AC] hover:text-[#C5A059] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#B8B2AC] hover:text-[#C5A059] transition-colors duration-200"
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
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#B8B2AC] mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@patrickteixeira.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#B8B2AC] hover:text-[#C5A059] transition-colors duration-200"
                >
                  <IconMail className="w-5 h-5 flex-shrink-0" />
                  <span>contato@patrickteixeira.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/554298250506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#B8B2AC] hover:text-[#C5A059] transition-colors duration-200 tabular-nums"
                >
                  <IconPhone className="w-5 h-5 flex-shrink-0" />
                  <span>(42) 9825-0506</span>
                </a>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-[8px] border border-[#27272A] bg-[#111111]">
              <p className="text-xs text-[#B8B2AC] leading-relaxed">
                <span className="text-[#C5A059] font-semibold">Mentoria Kairós</span> —
                Vagas limitadas por turma. Garanta seu diagnóstico gratuito e saiba se há vagas abertas.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#27272A] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#B8B2AC] tabular-nums">
            © {currentYear} Patrick Teixeira. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#B8B2AC]">
            Mentoria Kairós · Liderança, Negócios &amp; Legado
          </p>
        </div>
      </div>
    </footer>
  )
}
