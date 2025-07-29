"use client"
import React from 'react';

// WhatsApp Float Button Component
export const WhatsAppFloat = ({ 
  phoneNumber = "+918765610216", 
  message = "Hi! I'm interested in recovering my unclaimed money. Can you help me get started?",
  position = "bottom-right", // bottom-right, bottom-left, top-right, top-left
  size = "large", // small, medium, large
  showTooltip = true,
  customMessage = null
}) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(customMessage || message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-8 left-8";
      case "top-right":
        return "top-8 right-8";
      case "top-left":
        return "top-8 left-8";
      default:
        return "bottom-8 right-8";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-12 h-12 p-3";
      case "medium":
        return "w-14 h-14 p-3.5";
      default:
        return "w-16 h-16 p-4";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "small":
        return "w-6 h-6";
      case "medium":
        return "w-7 h-7";
      default:
        return "w-8 h-8";
    }
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-50 group`}>
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-black rotate-45"></div>
        </div>
      )}
      
      <button
        onClick={openWhatsApp}
        className={`${getSizeClasses()} bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce group`}
        style={{ animationDuration: '2s' }}
        aria-label="Chat on WhatsApp"
      >
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.413 3.488"/>
        </svg>
      </button>
    </div>
  );
};

// WhatsApp Chat Button Component (Inline)
export const WhatsAppButton = ({ 
  phoneNumber = "+918765610216", 
  message = "Hi! I'm interested in recovering my unclaimed money. Can you help me get started?",
  text = "Chat on WhatsApp",
  variant = "primary", // primary, secondary, outline
  size = "medium", // small, medium, large
  fullWidth = false,
  showIcon = true,
  customMessage = null,
  className = ""
}) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(customMessage || message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-600 hover:bg-gray-700 text-white";
      case "outline":
        return "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent";
      default:
        return "bg-green-600 hover:bg-green-700 text-white";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-4 py-2 text-sm";
      case "large":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "small":
        return "w-4 h-4";
      case "large":
        return "w-6 h-6";
      default:
        return "w-5 h-5";
    }
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        ${fullWidth ? 'w-full' : ''} 
        font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group
        ${className}
      `}
    >
      {showIcon && (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.413 3.488"/>
        </svg>
      )}
      <span>{text}</span>
    </button>
  );
};

// WhatsApp Chat Section Component (For replacing contact forms)
export const WhatsAppChatSection = ({ 
  phoneNumber = "+918765610216", 
  message = "Hi! I'm interested in recovering my unclaimed money. Can you help me get started?",
  title = "Chat with Our Experts",
  subtitle = "Get instant help and start your money recovery journey through WhatsApp",
  benefits = [
    "Instant response within minutes",
    "Free eligibility check", 
    "Expert guidance from certified professionals",
    "24/7 support available"
  ],
  responseTime = "2 minutes",
  customMessage = null
}) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(customMessage || message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
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
          {title}
        </h3>
        
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          {subtitle}
        </p>

        {/* Benefits List */}
        <div className="space-y-4 mb-8 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
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
            <span className="text-sm font-semibold">Average response time: {responseTime}</span>
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
  );
};

// Demo Component showing all variations
export default function WhatsAppDemo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">WhatsApp Components Demo</h1>
        <p className="text-gray-600 mb-12">Reusable WhatsApp components you can use anywhere in your app</p>
        
        {/* Floating Button Examples */}
        <div className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">1. Floating WhatsApp Button</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 h-40">
              <h3 className="text-sm font-semibold mb-2">Small Size</h3>
              <WhatsAppFloat size="small" position="bottom-right" />
            </div>
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 h-40">
              <h3 className="text-sm font-semibold mb-2">Medium Size</h3>
              <WhatsAppFloat size="medium" position="bottom-right" />
            </div>
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 h-40">
              <h3 className="text-sm font-semibold mb-2">Large Size (Default)</h3>
              <WhatsAppFloat size="large" position="bottom-right" />
            </div>
          </div>
        </div>

        {/* Button Examples */}
        <div className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">2. Inline WhatsApp Buttons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <WhatsAppButton text="Primary Button" variant="primary" />
              <WhatsAppButton text="Secondary Button" variant="secondary" />
              <WhatsAppButton text="Outline Button" variant="outline" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <WhatsAppButton text="Small" size="small" />
              <WhatsAppButton text="Medium" size="medium" />
              <WhatsAppButton text="Large" size="large" />
            </div>
            <WhatsAppButton text="Full Width Button" fullWidth={true} />
          </div>
        </div>

        {/* Chat Section Example */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">3. WhatsApp Chat Section</h2>
          <WhatsAppChatSection />
        </div>
      </div>
    </div>
  );
}