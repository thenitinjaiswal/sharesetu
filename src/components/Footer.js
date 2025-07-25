"use client";
import { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/services', label: 'Our Services', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { href: '/blog', label: 'Blog & Guides', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { href: '/contact', label: 'Contact Us', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { href: '/about', label: 'About ShareSetu', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  const services = [
    { href: '/services#iepf', label: 'IEPF Recovery', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
    { href: '/services#pf', label: 'Provident Fund', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    { href: '/services#insurance', label: 'Insurance Claims', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { href: '/services#mutual-funds', label: 'Mutual Funds', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { href: '/terms-of-service', label: 'Terms of Service', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { href: '/refund-policy', label: 'Refund Policy', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { href: '/disclaimer', label: 'Disclaimer', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' }
  ];

  const socialLinks = [
    { href: '#', name: 'Twitter', color: 'hover:bg-gray-800 hover:border-green-500', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
    { href: '#', name: 'LinkedIn', color: 'hover:bg-gray-800 hover:border-green-500', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { href: '#', name: 'YouTube', color: 'hover:bg-gray-800 hover:border-green-500', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { href: '#', name: 'Instagram', color: 'hover:bg-gray-800 hover:border-green-500', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                    <svg className="w-6 h-6 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="font-black text-3xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    ShareSetu
                  </span>
                  <div className="text-sm text-gray-400 -mt-1 font-bold">Government Certified Platform</div>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed max-w-lg text-lg font-medium">
                India's most trusted platform for recovering unclaimed financial assets. 
                We help citizens reclaim their forgotten funds from IEPF, Provident Fund, 
                Insurance, and Mutual Funds with complete legal assistance.
              </p>

              {/* Enhanced Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-green-500/20 border-2 border-green-500/40 text-green-400 px-4 py-2.5 rounded-xl text-sm font-black flex items-center shadow-lg backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Govt. Certified
                </div>
                <div className="bg-gray-700/50 border-2 border-gray-600/40 text-white px-4 py-2.5 rounded-xl text-sm font-black flex items-center shadow-lg backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  100% Secure
                </div>
                <div className="bg-green-600/20 border-2 border-green-500/40 text-green-300 px-4 py-2.5 rounded-xl text-sm font-black flex items-center shadow-lg backdrop-blur-sm">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse shadow-lg"></span>
                  ₹500Cr+ Recovered
                </div>
              </div>

              {/* Enhanced Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 group hover:text-green-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+919999999999" className="font-bold text-lg group-hover:text-green-400 transition-colors duration-300">
                    +91-99999-99999
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300 group hover:text-green-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:support@sharesetu.in" className="font-bold text-lg group-hover:text-green-400 transition-colors duration-300">
                    support@sharesetu.in
                  </a>
                </div>
                
                <div className="flex items-start text-gray-300 group hover:text-green-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:bg-green-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg leading-relaxed">
                    123 Business Hub, Financial District<br />
                    Mumbai, Maharashtra 400001
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-black text-xl mb-8 text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm flex items-center group font-bold"
                      onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                        </svg>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-black text-xl mb-8 text-white relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={service.href}>
                    <a 
                      href={service.href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm flex items-center group font-bold"
                      onMouseEnter={() => setHoveredLink(`service-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h3 className="font-black text-xl mb-8 text-white relative">
                Legal & Support
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
              </h3>
              <ul className="space-y-4 mb-10">
                {legalLinks.map((link, index) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm flex items-center group font-bold"
                      onMouseEnter={() => setHoveredLink(`legal-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                        </svg>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Enhanced Social Links */}
              <div>
                <h4 className="font-black text-white mb-6 text-lg">Follow Us</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      className="w-full h-12 bg-gray-800 border-2 border-gray-700 hover:border-green-500 rounded-xl flex items-center justify-center transition-all duration-300 group hover:bg-gray-700 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              
              {/* Copyright */}
              <div className="text-gray-400 text-sm font-bold text-center lg:text-left">
                © {currentYear} ShareSetu. All rights reserved. | 
                <span className="text-green-400 ml-2 font-black">Making financial recovery accessible to all Indians.</span>
              </div>

              {/* Security & Compliance */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
                <div className="flex items-center bg-green-500/20 border border-green-500/30 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-400 font-black">SSL Secured</span>
                </div>
                <div className="flex items-center bg-gray-700/50 border border-gray-600/30 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <span className="text-white font-black">GDPR Compliant</span>
                </div>
                <div className="flex items-center bg-green-600/20 border border-green-500/30 px-3 py-2 rounded-lg">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-400 font-black">RBI Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        {/* <div className="bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-center">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Stay Updated on Financial Recovery
              </h3>
              <p className="text-green-100 text-lg font-medium max-w-2xl mx-auto">
                Get expert tips, recovery guides, and updates on unclaimed funds directly in your inbox
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-600 font-bold focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300"
              />
              <button className="bg-black hover:bg-gray-900 text-white font-black px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                <span>Subscribe</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            <p className="text-green-100/80 text-sm mt-4 font-medium">
              Join 50,000+ Indians who have successfully recovered their funds
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
}