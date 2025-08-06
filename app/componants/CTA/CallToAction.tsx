'use client';

import React, { useState } from 'react';
import WaitlistModal from '../modal/WaitlistModal';

// Call to Action Component
// Using exact Tailwind styles from Figma design - Mobile Responsive
const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="w-full flex justify-center py-4 px-4 md:px-0">
        <div className="w-full max-w-[1169px] flex flex-col justify-center items-center gap-6">
          {/* Border Top */}
          <div className="w-full border-t border-black"></div>
          
          {/* Content Container */}
          <div className="flex flex-col justify-start items-center gap-6 px-4 md:px-10">
            {/* Text Content */}
            <div className="flex flex-col justify-center items-center gap-2 text-center">
              <span className="text-black text-lg sm:text-xl font-semibold font-['Bricolage_Grotesque'] leading-tight">
                Ready for something new?
              </span>
              <span className="text-neutral-400 text-sm sm:text-base font-normal font-['Bricolage_Grotesque'] leading-tight mt-0.3 px-2">
                Subscribe to our newsletter to get the latest updates!
              </span>
            </div>
            
            {/* CTA Button */}
              <div className="flex justify-center items-center">
              <button
                onClick={handleJoinWaitlist}
                className="px-4 sm:px-6 py-[15px] bg-[#1058C3] rounded-xl flex justify-center items-center gap-2.5 hover:bg-blue-800 transition-colors w-full sm:w-auto min-w-[200px]"
                style={{ paddingTop: '3px', paddingBottom: '3px', paddingLeft: '16px', paddingRight: '16px' }}
              >
                <span className="text-center text-white text-base sm:text-lg font-semibold font-['Bricolage_Grotesque'] leading-loose">
                Join the Waitlist
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default CallToAction;