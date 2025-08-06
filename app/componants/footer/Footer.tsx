import React from 'react';

// Footer Component
// Simple footer with copyright and contact information - Mobile Responsive
const Footer = () => (
  <footer className="w-full flex justify-center py-4 px-4 md:px-0">
    <div className="w-full max-w-[1170px] flex flex-col justify-center items-center gap-0">
      {/* Copyright */}
      <div className="text-center text-neutral-600 text-[10px] sm:text-[12px] font-normal font-['Bricolage_Grotesque']">
        © 2025 EduQuest. All rights reserved.
      </div>

      {/* Contact */}
      <div className="text-center text-neutral-600 text-[10px] sm:text-[12px] font-normal font-['Bricolage_Grotesque']">
        Contact us: <a href="mailto:hello@eduquest.global" className="text-blue-700 hover:text-blue-800 transition-colors">hello@eduquest.global</a>
      </div>
    </div>
  </footer>
);

export default Footer;
