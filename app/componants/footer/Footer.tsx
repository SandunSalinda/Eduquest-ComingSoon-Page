import React from 'react';

// Footer Component
// Simple footer with copyright and contact information only
const Footer = () => (
  <footer className="w-full flex justify-center py-8 px-4 md:px-0 pb-16 mb-8">
    <div className="w-full max-w-[1170px] flex flex-col justify-center items-center">
      {/* Copyright */}
      <div className="text-center text-neutral-600 text-[10px] sm:text-[12px] font-normal font-['Bricolage_Grotesque'] mb-2 leading-tight">
        © 2025 EduQuest. All rights reserved.
      </div>

      {/* Contact */}
      <div className="text-center text-neutral-600 text-[10px] sm:text-[12px] font-normal font-['Bricolage_Grotesque'] mb-3 leading-tight">
        Contact us: <a href="mailto:hello@eduquest.global" className="text-blue-700 hover:text-blue-800 transition-colors">hello@eduquest.global</a>
      </div>

      {/* Legal Links */}
      <div className="text-center text-neutral-600 text-[10px] sm:text-[12px] font-normal font-['Bricolage_Grotesque'] mb-6 leading-tight space-x-4">
        <a href="/privacy" className="text-blue-700 hover:text-blue-800 transition-colors">Privacy Policy</a>
        <span>•</span>
        <a href="/terms" className="text-blue-700 hover:text-blue-800 transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;