'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      href: '/services',
      label: 'Services',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      description: 'Our recovery services',
    },
    {
      href: '/blog',
      label: 'Resources',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253',
      description: 'Guides & insights',
    },
    {
      href: '/about',
      label: 'About',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      description: 'Our story & mission',
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      description: 'Get expert help',
    },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b-2 border-green-100' 
          : 'bg-white/90 backdrop-blur-lg shadow-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-7 h-7 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl lg:text-3xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent group-hover:from-green-700 group-hover:to-green-900 transition-all duration-300">
                  ShareSetu
                </span>
                <div className="flex items-center space-x-2 -mt-1">
                  <span className="text-xs text-gray-600 font-bold hidden sm:block">
                    Govt. Certified Platform
                  </span>
                  <div className="flex items-center bg-green-100 px-2 py-0.5 rounded-full">
                    <svg className="w-3 h-3 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-black text-green-800">Trusted</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <div key={link.href} className="relative">
                  <Link 
                    href={link.href}
                    className="relative flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-green-700 font-bold transition-all duration-300 rounded-xl hover:bg-green-50 group"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                      </svg>
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                      {link.label}
                    </span>
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-green-500 to-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  </Link>

                  {/* Tooltip */}
                  {hoveredItem === index && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 animate-fade-in z-50">
                      {link.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}

              <div className="ml-4 flex items-center space-x-3">
                <a
                  href="tel:+919999999999"
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-700 font-bold transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden xl:inline">Call Now</span>
                </a>
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-8 py-3 rounded-xl font-black shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span>Get Started Free</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl hover:bg-green-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 group"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col space-y-1.5">
                <span className={`block w-7 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:bg-green-700'
                }`}></span>
                <span className={`block w-7 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'group-hover:bg-green-700'
                }`}></span>
                <span className={`block w-7 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:bg-green-700'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-b-2 border-green-100">
              <nav className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-green-700 font-bold transition-all duration-300 rounded-xl hover:bg-green-50 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span>{link.label}</span>
                      <span className="text-sm text-gray-500">{link.description}</span>
                    </div>
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a
                    href="tel:+919999999999"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-green-700 font-bold transition-colors duration-300 rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Now</span>
                  </a>
                  <Link 
                    href="/contact"
                    className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-6 py-3 rounded-xl font-black shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Get Started Free</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}