import React from 'react';
import { Facebook01Icon, Linkedin01Icon, TiktokIcon } from 'hugeicons-react';

// Header Component
// Using exact Tailwind styles with Huge Icons - Mobile Responsive
const Header = () => (
  <header className="w-full flex justify-center py-6 px-4">
    <div className="w-full max-w-[1170px] flex flex-row justify-between items-center">
      {/* Logo Section - Smaller on mobile */}
      <img className="w-36 md:w-72 h-auto cursor-pointer" src="/eduquest logo.svg" alt="EduQuest Logo" />

      {/* Social Media Section - Hidden on mobile, Row on desktop */}
      <div className="hidden md:flex items-center gap-3">
        <div className="justify-start text-[#1058C3] text-sm md:text-base font-medium mr-2">
          Follow us
        </div>
        {/* Icons */}
        <a href="https://web.facebook.com/people/EduQuest/61558826207926/" aria-label="Facebook" className="w-5 h-5 text-slate-900 hover:text-blue-700 transition-colors" target='_blank'>
          <Facebook01Icon size={20} className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/company/metaxm/" aria-label="LinkedIn" target='_blank' className="w-5 h-5 text-slate-900 hover:text-blue-700 transition-colors">
          <Linkedin01Icon size={20} className="cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com/@eduquest__" aria-label="tiktok" target='_blank' className="w-5 h-5 text-slate-900 hover:text-blue-700 transition-colors">
          <TiktokIcon size={20} className="cursor-pointer" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;