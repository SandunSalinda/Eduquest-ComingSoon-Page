'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [mounted, setMounted] = useState(false);

  // Mount check for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add body scroll lock and create overlay element
  useEffect(() => {
    if (isOpen && mounted) {
      // Create overlay backdrop element
      const overlayElement = document.createElement('div');
      overlayElement.id = 'modal-backdrop';
      overlayElement.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: rgba(0, 0, 0, 0.6) !important;
        z-index: 999999 !important;
        display: block !important;
        transform: none !important;
        scale: none !important;
      `;
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Add backdrop to body
      document.body.appendChild(overlayElement);
      
      return () => {
        // Cleanup
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (document.getElementById('modal-backdrop')) {
          document.body.removeChild(overlayElement);
        }
      };
    }
  }, [isOpen, mounted]);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setEmailError('');
    
    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // NOTE: This is frontend-only for UI demonstration
    // NO emails are collected, stored, or sent anywhere
    // NO backend communication occurs - purely visual feedback
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setEmail('');
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    setEmail('');
    setEmailError('');
    setShowSuccess(false);
    onClose();
  };

  if (!isOpen || !mounted) return null;

  // Modal content
  const modalContent = (
    <div 
      className="modal-overlay-container"
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        pointerEvents: 'auto'
      }}
    >
      {/* Modal Container - Completely independent styling */}
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          width: '100%',
          maxWidth: '28rem',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e5e7eb',
          padding: '2rem',
          transform: 'none !important',
          scale: 'none !important',
          position: 'relative',
          zIndex: 1000000
        }}
      >
          {!showSuccess ? (
            // Content with explicit spacing
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Header with margin bottom */}
              <div className="flex justify-between items-start" style={{ marginBottom: '0.1rem' }}>
                <h2 className="text-3xl font-bold text-gray-900 font-['Bricolage_Grotesque'] leading-tight" style={{ paddingRight: '1rem' }}>
                  Join the Waitlist
                </h2>
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 w-8 h-8 rounded-lg border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Description with spacing */}
              <div style={{ marginBottom: '0.1rem' }}>
                <p className="text-base text-gray-900 font-['Bricolage_Grotesque'] leading-relaxed" style={{ marginBottom: '0.75rem' }}>
                  Be among the first to explore our powerful PathFinder tool, designed to guide your study abroad journey.
                </p>
                <p className="text-base text-gray-900 font-['Bricolage_Grotesque'] leading-relaxed">
                  Enter your email below and we&apos;ll notify you as soon as we launch!
                </p>
              </div>

              {/* Form with spacing */}
              <form onSubmit={handleSubmit} style={{ marginBottom: '0.1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full font-['Bricolage_Grotesque'] text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      emailError ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
                    }`}
                    style={{ 
                      height: '3rem', 
                      padding: '0 1rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      marginBottom: emailError ? '0.5rem' : '1rem'
                    }}
                  />
                  {emailError && (
                    <p className="text-red-600 text-sm font-['Bricolage_Grotesque']" style={{ marginTop: '0.5rem' }}>
                      {emailError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1058C3] hover:bg-blue-700 disabled:opacity-50 text-white font-semibold font-['Bricolage_Grotesque'] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  style={{ 
                    height: '3rem', 
                    borderRadius: '0.5rem',
                    border: 'none'
                  }}
                >
                  {isSubmitting ? 'Joining...' : 'Join Now'}
                </button>
              </form>

              {/* Privacy Notice with top margin */}
              <p className="text-center text-gray-500 text-sm font-['Bricolage_Grotesque']" style={{ marginTop: '0.1rem' }}>
                Demo only - No emails stored or sent. Privacy respected.
              </p>
            </div>
          ) : (
            /* Success Message with proper spacing */
            <div className="text-center" style={{ padding: '2rem 0' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center" style={{ 
                marginBottom: '1rem', 
                marginLeft: 'auto', 
                marginRight: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Bricolage_Grotesque']" style={{ marginBottom: '1rem', textAlign: 'center' }}>
                You&apos;re In! 🎉
              </h3>
              <p className="text-gray-600 font-['Bricolage_Grotesque'] leading-relaxed" style={{ textAlign: 'center' }}>
                Successfully joined the waitlist! We&apos;ll notify you soon.
              </p>
            </div>
          )}
        </div>
    </div>
  );

  // Use portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

export default WaitlistModal;