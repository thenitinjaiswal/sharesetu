'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  function validateIndianPhone(num) {
    return /^[6-9]\d{9}$/.test(num);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData(prev => ({
        ...prev,
        [name]: value.replace(/[^0-9]/g, '').slice(0, 10)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    setStatus('');
    setIsSubmitting(true);
    
    if (!validateIndianPhone(formData.phone)) {
      setStatus('Invalid Indian phone number');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.text();
      if (res.ok) {
        setStatus('Successfully submitted! Our expert will reach out soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus(data || 'Error submitting form. Please try again.');
      }
    } catch {
      setStatus('Error. Please try again later.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg shadow-green-500/25">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Get In Touch</h1>
          <p className="text-gray-300">We'd love to hear from you. Send us a message!</p>
        </div>

        {/* Form Container */}
        <div className="backdrop-blur-lg bg-white/5 border border-green-500/20 rounded-2xl p-8 shadow-2xl shadow-green-500/10">
          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">Full Name</label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'name' ? 'text-green-400' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">Email Address</label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'email' ? 'text-green-400' : 'text-gray-400'
                }`} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">Phone Number</label>
              <div className="relative">
                <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'phone' ? 'text-green-400' : 'text-gray-400'
                }`} />
                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  placeholder="9876543210"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 backdrop-blur-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                  {formData.phone.length}/10
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">Message</label>
              <div className="relative">
                <MessageSquare className={`absolute left-3 top-4 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'message' ? 'text-green-400' : 'text-gray-400'
                }`} />
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 backdrop-blur-sm resize-none"
                />
              </div>
            </div>
            
            {/* Status Message */}
            {status && (
              <div className={`flex items-center space-x-2 p-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                status.includes('Success') 
                  ? 'bg-green-500/20 border border-green-400/30 text-green-300' 
                  : 'bg-red-500/20 border border-red-400/30 text-red-300'
              }`}>
                {status.includes('Success') ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{status}</p>
              </div>
            )}
            
            {/* Submit Button */}
            <button 
              type="button" 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group relative w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl px-6 py-4 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
            >
              <div className="flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </div>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-200 blur-xl" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            We'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}