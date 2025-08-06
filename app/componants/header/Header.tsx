import React from 'react';
import { Facebook01Icon, TwitterIcon, Linkedin01Icon, TiktokIcon } from 'hugeicons-react';

// Header Component
// Using exact Tailwind styles with Huge Icons - Mobile Responsive
const Header = () => (
  <header className="w-full flex justify-center py-6 px-4 md:px-0">
    <div className="w-full max-w-[1170px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      {/* Logo Section */}
      <img className="w-48 md:w-72 h-auto cursor-pointer" src="/eduquest logo.svg" alt="EduQuest Logo" />

      {/* Social Media Section */}
      <div className="w-auto md:w-24 h-auto md:h-14 flex flex-col justify-start items-center md:items-end gap-0.5">
        <div className="flex justify-center md:justify-end items-center gap-2">
          <div className="justify-start text-[#1058C3] text-sm md:text-base font-medium">
            Follow us
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-3">
          {/* Facebook Icon */}
          <a href="https://web.facebook.com/people/EduQuest/61558826207926/" aria-label="Facebook" className="w-5 h-5 md:w-6 md:h-6 text-slate-900 hover:text-blue-700 transition-colors" target='_blank'>
            <Facebook01Icon size={20} className="md:w-6 md:h-6 cursor-pointer" />
          </a>
          
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/company/metaxm/" aria-label="LinkedIn" target='_blank' className="w-5 h-5 md:w-6 md:h-6 text-slate-900 hover:text-blue-700 transition-colors">
            <Linkedin01Icon size={20} className="md:w-6 md:h-6 cursor-pointer" />
          </a>

          {/* tiktok Icon */}
          <a href="https://www.tiktok.com/@eduquest__" aria-label="tiktok" target='_blank' className="w-5 h-5 md:w-6 md:h-6 text-slate-900 hover:text-blue-700 transition-colors">
            <TiktokIcon size={20} className="md:w-6 md:h-6 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;