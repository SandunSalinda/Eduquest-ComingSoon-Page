// Main App Component
// Renders the individual sections of the landing page.

import React from 'react';
import Header from './componants/header/Header';
import HeroSection from './componants/hero/hero';
import CallToAction from './componants/CTA/CallToAction';
import MobileSocialMedia from './componants/social/MobileSocialMedia';
import Footer from './componants/footer/Footer';
import './globals.css'; // Import global styles

const App = () => {
  return (
    <div 
      className="bg-white relative min-h-screen overflow-x-hidden"
      style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundImage: 'url(/background.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better readability if needed */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
      
      {/* Content with responsive scaling using CSS */}
      <div 
        className="relative z-10 flex flex-col responsive-scale"
        style={{ 
          width: '100%',
          minHeight: '100vh',
          padding: '4vh 5vw 0',
          transformOrigin: 'center top'
        }}
      >
        <Header />
        
        {/* Space between Header and Hero - responsive for different screen sizes */}
        <div className="header-hero-spacing"></div>
        
        <HeroSection />
        
        {/* Space between Hero and CTA - responsive for different screen sizes */}
        <div className="hero-cta-spacing"></div>
        
        <CallToAction />
        
        {/* Bottom padding - responsive for different screen sizes */}
        <div className="bottom-spacing"></div>
        
        <MobileSocialMedia />
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
