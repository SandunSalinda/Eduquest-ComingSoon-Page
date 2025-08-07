import React from 'react';
import { Facebook01Icon, Linkedin01Icon, TiktokIcon } from 'hugeicons-react';

// Footer Component
// Simple footer with copyright and contact information - Mobile Responsive
const Footer = () => (
  <footer className="w-full flex justify-center py-4 px-4 md:px-0 pb-8">
    <div className="w-full max-w-[1170px] flex flex-col justify-center items-center gap-2">
      {/* Mobile Social Media Icons - Only show on mobile */}
      <div className="flex md:hidden items-center gap-4 mt-8 mb-2">
        <div className="text-[#1058C3] text-sm font-medium">
          Follow us
        </div>
      </div>
      <div className="flex md:hidden items-center gap-4 mb-8">
        <a href="https://web.facebook.com/people/EduQuest/61558826207926/" aria-label="Facebook" className="w-6 h-6 text-slate-900 hover:text-blue-700 transition-colors" target='_blank'>
          <Facebook01Icon size={24} className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/company/metaxm/" aria-label="LinkedIn" target='_blank' className="w-6 h-6 text-slate-900 hover:text-blue-700 transition-colors">
          <Linkedin01Icon size={24} className="cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com/@eduquest__" aria-label="tiktok" target='_blank' className="w-6 h-6 text-slate-900 hover:text-blue-700 transition-colors">
          <TiktokIcon size={24} className="cursor-pointer" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-neutral-600 text-[10px] sm:text-[12px] font-normal font-['Bricolage_Grotesque'] mt-8 mb-2">
        © 2025 EduQuest. All rights reserved.
      </div>

      {/* Contact */}
      <div className="text-center text-neutral-600 text-[10px] sm:text-[12px] font-normal font-['Bricolage_Grotesque'] mb-6">
        Contact us: <a href="mailto:hello@eduquest.global" className="text-blue-700 hover:text-blue-800 transition-colors">hello@eduquest.global</a>
      </div>
    </div>
  </footer>
);

export default Footer;
