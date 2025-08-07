import React from 'react';
import { Facebook01Icon, Linkedin01Icon, TiktokIcon } from 'hugeicons-react';

// Mobile Social Media Component
// Separate component for mobile social media icons with proper spacing
const MobileSocialMedia = () => (
  <section className="flex md:hidden w-full justify-center py-8 px-4 mobile-social-spacing">
    <div className="w-full max-w-[1170px] flex flex-col justify-center items-center">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-[#1058C3] text-sm font-medium">
          Follow us
        </div>
      </div>
      <div className="flex items-center gap-12">
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
    </div>
  </section>
);

export default MobileSocialMedia;
