'use client';

import React, { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const steps = [
    {
      number: '01',
      title: 'Check Eligibility',
      description: 'Enter your phone number for a free eligibility check across all government databases and financial institutions',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      shadowColor: 'shadow-emerald-500/20',
      duration: '2-3 mins',
      highlight: 'Instant Check'
    },
    {
      number: '02',
      title: 'Expert Review',
      description: 'Our certified financial experts review your case and help gather all required documents for maximum recovery',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-green-600 to-emerald-700',
      bgGradient: 'from-green-50 to-emerald-50',
      shadowColor: 'shadow-green-500/20',
      duration: '3-5 days',
      highlight: 'Professional Support'
    },
    {
      number: '03',
      title: 'Process Claim',
      description: 'We handle all legal formalities, paperwork, and process your claim with concerned government authorities',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      gradient: 'from-gray-800 to-black',
      bgGradient: 'from-gray-50 to-slate-50',
      shadowColor: 'shadow-gray-500/20',
      duration: '15-20 days',
      highlight: 'Legal Processing'
    },
    {
      number: '04',
      title: 'Get Your Money',
      description: 'Your recovered unclaimed money is transferred directly to your verified bank account securely',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      shadowColor: 'shadow-green-500/25',
      duration: '1-2 days',
      highlight: 'Money Received'
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg border border-green-200">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className="uppercase tracking-wider">Simple 4-Step Process</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            How It <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Works</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process makes recovering your unclaimed money simple, transparent, and completely hassle-free
          </p>

          {/* Success Stats */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-black text-green-600">99.2%</div>
              <div className="text-sm text-gray-500 font-medium">Success Rate</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-green-600">30 Days</div>
              <div className="text-sm text-gray-500 font-medium">Avg. Timeline</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-green-600">₹15L+</div>
              <div className="text-sm text-gray-500 font-medium">Avg. Recovery</div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 relative">
          {/* Enhanced Connecting Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-emerald-300 via-gray-300 to-green-400 rounded-full opacity-30"></div>
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 via-gray-700 to-green-500 rounded-full opacity-60 animate-pulse"></div>
          
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative group transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced Step Card */}
              <div className={`bg-gradient-to-br ${step.bgGradient} rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl ${step.shadowColor} group-hover:-translate-y-3 border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                {/* Floating Number Badge */}
                <div className="absolute -top-4 -right-4 bg-white border-4 border-gray-100 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl z-10">
                  <span className="text-lg font-black text-gray-700">{step.number}</span>
                </div>

                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-3xl flex items-center justify-center text-white shadow-2xl mx-auto relative z-10 transform transition-all duration-300 ${hoveredCard === index ? 'scale-110 rotate-3' : ''}`}>
                    {step.icon}
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border border-gray-100">
                    <span className="text-xs font-bold text-green-600">{step.highlight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4 relative z-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Duration Badge */}
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-white/50">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-700">{step.duration}</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${hoveredCard === index ? 'opacity-100' : ''}`}></div>
              </div>

              {/* Mobile Connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-6">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-12 bg-gradient-to-b from-green-300 to-emerald-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Timeline Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-2xl px-8 py-4 shadow-2xl border border-white/50">
            <div className="flex items-center space-x-2 mr-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            {/* <span className="text-sm font-bold text-gray-700">
              Average completion time: <span className="text-green-600 text-lg font-black">30 days</span>
            </span> */}
            <svg className="w-5 h-5 text-green-500 ml-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Enhanced CTA Section
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl border border-white/50 p-10 max-w-lg mx-auto backdrop-blur-sm relative overflow-hidden">
            CTA Background Elements
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Ready to <span className="text-green-600">Start?</span>
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join <span className="font-bold text-green-600">15,000+</span> successful recoveries.<br />
                <span className="text-sm font-medium">No upfront fees • 100% secure process</span>
              </p>
              
              <button className="group inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black px-10 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 shadow-2xl hover:shadow-green-500/25 text-lg">
                <span>Check Eligibility - FREE</span>
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Govt. Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}