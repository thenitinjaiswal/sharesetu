"use client"
import React, { useState } from 'react';

export default function Hero() {
  const [whatsappNumber] = useState('+918765610216'); // Replace with your actual WhatsApp number

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in recovering my unclaimed money. Can you help me get started?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-indigo-900 py-12 sm:py-16 lg:py-20 px-4 min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Government Certified Badge - Responsive positioning */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 flex items-center bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-emerald-400/30">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-white font-semibold text-xs sm:text-sm">Govt. Certified</span>
      </div>

      {/* Floating WhatsApp Chat Button - Responsive sizing */}
      <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 group animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.413 3.488"/>
          </svg>
        </button>
      </div>

      {/* Floating Financial Icons - Responsive positioning and sizing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Dollar Sign */}
        <div className="absolute top-16 sm:top-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
          </svg>
        </div>

        {/* Security Shield */}
        <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400/20 to-cyan-500/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDuration: '2s' }}>
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        </div>

        {/* Chart Icon */}
        <div className="absolute bottom-1/3 left-1/6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
          </svg>
        </div>

        {/* Large Rupee Background Element - Hidden on small screens */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-96 h-96 flex items-center justify-center opacity-5">
          <div className="w-80 h-80 bg-gradient-to-br from-teal-400/30 to-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.66 7H16v2h-2.34c-.38 1.37-1.54 2.48-2.95 2.85L16 18h-2.84l-4.49-6.1H7V9.65h1.36c1.54 0 2.8-1.25 2.8-2.8H7V4.35h4.16c.52-1.17 1.54-2 2.84-2s2.32.83 2.84 2H21v2.3h-4.34z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-1 lg:order-1">
            {/* Main Headline with enhanced typography */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight lg:leading-none">
                <span className="text-white block mb-1 lg:mb-2">
                  Recover Your
                </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent block animate-pulse">
                  Unclaimed Money
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">100% Legal & Secure</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Get back what's rightfully yours. We help you recover unclaimed funds from IEPF, Provident Funds, Insurance, Mutual Funds, and more through our government-certified platform.
            </p>

            {/* Enhanced Stats - Responsive grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/20">
                <div className="flex flex-col items-center justify-center mb-1 lg:mb-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-yellow-400">₹50K+</span>
                </div>
                <p className="text-white/70 text-xs font-medium text-center">Crores Unclaimed</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/20">
                <div className="flex flex-col items-center justify-center mb-1 lg:mb-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-yellow-400">15K+</span>
                </div>
                <p className="text-white/70 text-xs font-medium text-center">Funds Recovered</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/20">
                <div className="flex flex-col items-center justify-center mb-1 lg:mb-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-yellow-400">100%</span>
                </div>
                <p className="text-white/70 text-xs font-medium text-center">Govt. Certified</p>
              </div>
            </div>

            {/* Action Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span className="text-sm sm:text-base">Check Eligibility Now</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md group">
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-sm sm:text-base">Learn More</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 pt-4 border-t border-white/20">
              <div className="flex items-center space-x-2 text-white/80">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs sm:text-sm font-semibold">No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs sm:text-sm font-semibold">Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Side - Chat with Us Section - Mobile optimized */}
          <div className="relative order-2 lg:order-2">
            {/* Mobile-Only WhatsApp Button - Compact and positioned after main content */}
            <div className="block lg:hidden mt-8">
              <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 p-4 max-w-xs mx-auto">
                <div className="text-center">
                  {/* Compact WhatsApp Button */}
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.413 3.488"/>
                    </svg>
                    <span className="text-sm">Chat on WhatsApp</span>
                  </button>
                  
                  {/* Quick Info */}
                  <p className="text-xs text-gray-600 mt-2 font-medium">
                    Free consultation • Instant response
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Version - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 max-w-md mx-auto relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-indigo-50/50 rounded-3xl"></div>
                
                <div className="relative text-center">
                  {/* WhatsApp Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl mb-6 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.413 3.488"/>
                    </svg>
                  </div>

                  <h3 className="text-3xl font-black text-gray-800 mb-4">
                    Chat with Our Experts
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Get instant help and start your money recovery journey through WhatsApp
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Instant response within minutes</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Free eligibility check</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Expert guidance from certified professionals</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">24/7 support available</span>
                    </div>
                  </div>

                  {/* Chat Button */}
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.413 3.488"/>
                    </svg>
                    <span className="text-lg">Start WhatsApp Chat</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  {/* Additional Info */}
                  <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center justify-center space-x-2 text-green-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-semibold">Average response time: 2 minutes</span>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                      </svg>
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Privacy Protected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}