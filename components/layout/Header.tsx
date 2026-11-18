'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/mentoria', label: 'Mentoria Kairós' },
  { href: '/palestras', label: 'Palestras' },
  { href: '/blog', label: 'Blog' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loadingNav, setLoadingNav] = useState(true)
  const [dynamicLinks, setDynamicLinks] = useState(navLinks)
  const [cta, setCta] = useState({ label: 'Diagnóstico Gratuito', link: 'https://form.respondi.app/DQ2AeT6P' })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })

    Promise.allSettled([
      fetch('/api/admin/menus')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) {
            const headerLinks = data
              .filter((m: any) => m.location === 'header')
              .sort((a: any, b: any) => a.order_index - b.order_index)
            if (headerLinks.length > 0) setDynamicLinks(headerLinks)
          }
        }),
      fetch('/api/admin/settings')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.ctaLabel) {
            setCta({ label: data.ctaLabel, link: data.ctaLink })
          }
        }),
    ]).finally(() => setLoadingNav(false))

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0A0A0A] border-b border-[#27272A] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Patrick Teixeira - Home"
        >
          <div className="relative h-20 w-auto">
            <Image
              src="/logo.png"
              alt="Kairós Leadership — Patrick Teixeira"
              width={240}
              height={84}
              priority
              className="h-20 w-auto object-contain transition-opacity duration-200 hover:opacity-85"
            />
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navegação principal"
          aria-busy={loadingNav}
        >
          {dynamicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide uppercase text-[#B8B2AC] hover:text-[#C5A059] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={cta.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-6">
            {cta.label}
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-[4px] text-[#B8B2AC] hover:text-[#C5A059] transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          id="mobile-menu-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-[#27272A] px-4 py-6 flutuante">
          <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
            {dynamicLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold tracking-wide uppercase text-[#B8B2AC] hover:text-[#C5A059] py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6 mt-2 text-center"
            >
              {cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
