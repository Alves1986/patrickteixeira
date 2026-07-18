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
  const [dynamicLinks, setDynamicLinks] = useState(navLinks)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Fetch dynamic menus
    fetch('/api/admin/menus')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const headerLinks = data.filter((m: any) => m.location === 'header').sort((a: any, b: any) => a.order_index - b.order_index)
          setDynamicLinks(headerLinks)
        }
      })
      .catch(err => console.error('Error fetching menus:', err))

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1E1E1E] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group"
          aria-label="Patrick Teixeira - Home"
        >
          {/* Fundo escuro atrás da logo branca */}
          <div
            className="relative h-20 w-auto"
            style={{ minWidth: 260 }}
          >
            <Image
              src="/logo.png"
              alt="Kairós Leadership — Patrick Teixeira"
              width={260}
              height={80}
              priority
              className="h-20 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              style={{ filter: 'drop-shadow(0 0 8px rgba(197,160,89,0.3))' }}
            />
          </div>
        </Link>

        {/* Nav — Desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {dynamicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide uppercase text-[#8A8580] hover:text-[#C5A059] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA — Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://form.respondi.app/DQ2AeT6P" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-6">
            Diagnóstico Gratuito
          </a>
        </div>

        {/* Menu Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-[#8A8580] hover:text-[#C5A059] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          id="mobile-menu-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1 border-t border-[#1E1E1E] mt-3">
          {dynamicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-sm font-semibold tracking-wide uppercase text-[#8A8580] hover:text-[#C5A059] transition-colors duration-300 border-b border-[#1E1E1E]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://form.respondi.app/DQ2AeT6P" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center py-4 bg-gradient-to-r from-[#C5A059] to-[#D4B577] text-[#0A0A0A] font-bold uppercase tracking-wider text-sm mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Diagnóstico Gratuito
          </a>
        </nav>
      </div>
    </header>
  )
}
