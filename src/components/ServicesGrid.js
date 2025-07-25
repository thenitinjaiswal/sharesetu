'use client';

import React, { useState, useEffect } from 'react';

export default function ServicesGrid() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: 'IEPF Recovery',
      desc: 'Recover unclaimed dividends, shares, and fixed deposits from IEPF with expert guidance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      amount: '₹2.5 Lakhs',
      amountLabel: 'Average Recovery',
      success: '94%',
      timeline: '20-25 days',
      features: [
        'Unclaimed dividends recovery',
        'Share transfers from IEPF',
        'Fixed deposit claims',
        'Complete documentation support'
      ],
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-green-50 to-emerald-50',
      category: 'Government'
    },
    {
      title: 'Provident Fund',
      desc: 'Claim your unclaimed PF balance from previous employers with seamless processing',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      amount: '₹1.8 Lakhs',
      amountLabel: 'Average Recovery',
      success: '98%',
      timeline: '15-18 days',
      features: [
        'EPF withdrawal assistance',
        'PF transfer facilitation',
        'Pension fund recovery',
        'EPS benefit claims'
      ],
      gradient: 'from-green-600 to-emerald-700',
      bgGradient: 'from-emerald-50 to-green-50',
      category: 'Employment'
    },
    {
      title: 'Insurance Claims',
      desc: 'Recover unclaimed insurance policies and maturity amounts with professional support',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      amount: '₹3.2 Lakhs',
      amountLabel: 'Average Recovery',
      success: '91%',
      timeline: '25-30 days',
      features: [
        'Life insurance claims',
        'General insurance recovery',
        'Maturity amount claims',
        'Bonus & loyalty benefits'
      ],
      gradient: 'from-gray-800 to-black',
      bgGradient: 'from-gray-50 to-slate-50',
      category: 'Insurance'
    },
    {
      title: 'Mutual Funds',
      desc: 'Claim unclaimed mutual fund investments and dividends with portfolio analysis',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      amount: '₹95,000',
      amountLabel: 'Average Recovery',
      success: '96%',
      timeline: '12-15 days',
      features: [
        'Unclaimed MF investments',
        'Dividend recovery',
        'NAV based claims',
        'Portfolio reconciliation'
      ],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      category: 'Investment'
    },
    {
      title: 'Bank Deposits',
      desc: 'Recover dormant bank accounts and unclaimed deposits across all major banks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      amount: '₹1.2 Lakhs',
      amountLabel: 'Average Recovery',
      success: '99%',
      timeline: '10-12 days',
      features: [
        'Dormant account activation',
        'Fixed deposit recovery',
        'Unclaimed balances',
        'Interest calculations'
      ],
      gradient: 'from-emerald-600 to-green-700',
      bgGradient: 'from-emerald-50 to-green-50',
      category: 'Banking'
    },
    {
      title: 'Other Financial Assets',
      desc: 'Recover from bonds, debentures, and other financial instruments with expert guidance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      amount: '₹75,000',
      amountLabel: 'Average Recovery',
      success: '89%',
      timeline: '18-22 days',
      features: [
        'Government bonds',
        'Corporate debentures',
        'Postal savings',
        'Co-operative society deposits'
      ],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      category: 'Assets'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg border border-green-200">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className="uppercase tracking-wider">Recovery Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Recovery</span> Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We help you recover unclaimed funds from various financial institutions and government bodies across India with our expert team and proven track record
          </p>

          {/* Service Stats */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-green-600">6+</div>
              <div className="text-sm text-gray-500 font-medium">Service Types</div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-green-600">₹50,000+</div>
              <div className="text-sm text-gray-500 font-medium">Crores Recovered</div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-green-600">15,000+</div>
              <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              data-index={index}
              className={`service-card group bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/50 overflow-hidden backdrop-blur-sm transform ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-white/50">
                <span className="text-xs font-bold text-gray-700">{service.category}</span>
              </div>

              {/* Card Header */}
              <div className="p-8 pb-6 relative z-10">
                {/* Icon Container */}
                <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center text-white shadow-2xl mb-6 mx-auto transform transition-all duration-300 ${hoveredCard === index ? 'scale-110 rotate-3' : ''}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 text-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Enhanced Amount Display */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-green-600 mb-1">
                    {service.amount}
                  </div>
                  <div className="text-xs text-gray-500 font-medium mb-3">
                    {service.amountLabel}
                  </div>
                  
                  {/* Success & Timeline Stats */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-md border border-white/50">
                      <span className="text-xs font-bold text-green-600">{service.success} Success</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-md border border-white/50">
                      <span className="text-xs font-bold text-gray-700">{service.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Features List */}
              <div className="px-8 pb-8 relative z-10">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced Learn More Button */}
                <button className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 group shadow-lg`}>
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${hoveredCard === index ? 'opacity-100' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        {/* <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl border border-white/50 p-12 max-w-2xl mx-auto backdrop-blur-sm relative overflow-hidden">
            CTA Background Elements */}
            {/* <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div> */}
{/*               
              <h3 className="text-4xl font-black text-gray-900 mb-6">
                Don't Let Your Money <span className="text-green-600">Stay Unclaimed</span>
              </h3>
              
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Our expert team has successfully recovered <span className="font-bold text-green-600">₹50,000+ crores</span> for over 15,000 clients.<br />
                <span className="text-base font-medium">Start your recovery journey today - completely risk-free!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black px-10 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 shadow-2xl hover:shadow-green-500/25 text-lg">
                  <span>Start Free Check</span>
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
                
                <button className="group inline-flex items-center border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 font-bold px-8 py-5 rounded-2xl transition-all duration-300 backdrop-blur-sm">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Expert</span>
                </button>
              </div>
               */}
              {/* Trust Indicators */}
              {/* <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-bold">No Upfront Fees</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-bold">Govt. Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-bold">100% Secure</span>
                </div>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}