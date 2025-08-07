import React from 'react';

// Hero Section Component
// Using exact Tailwind styles from Figma design - Mobile Responsive
const HeroSection = () => {
  return (
    <section className="w-full flex justify-center relative px-4 md:px-0">
      <div className="w-full max-w-[1169px] flex flex-col lg:flex-row justify-start items-center lg:items-end gap-8 lg:gap-20 relative">
        {/* Illustration - Desktop positioned absolute */}
        <div className="hidden lg:block absolute top-[-90px] left-[340px] z-5">
          <img 
            src="/Illustration.png" 
            alt="Study abroad illustration" 
            className="w-auto h-auto max-w-[400px] xl:max-w-[450px] object-contain"
          />
        </div>

        {/* Left Side - Main Headline */}
        <div className="w-full lg:w-[592px] h-auto flex justify-start items-start relative z-10">
          {/* Mobile specific layout - Only show the hero PNG */}
          <div className="block lg:hidden text-left w-full">
            {/* Mobile hero PNG scaled to fit screen */}
            <div className="relative mt-8 flex justify-center">
              <img 
                src="/hero png.png" 
                alt="Unlock Your Global Future with EduQuest" 
                className="w-full max-w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop layout - unchanged */}
          <h1 className="hidden lg:block text-left">
            <span className=" text-black text-6xl lg:text-8xl font-bold font-['Bricolage_Grotesque'] leading-tight lg:leading-[100px]">
              Unlock <br/>
              Your Global <br/>
              Future with{" "}
            </span>
            <span className="text-[#1058C3] text-6xl lg:text-8xl font-extrabold font-['Bricolage_Grotesque'] leading-tight lg:leading-[100px]">
              EduQuest
            </span>
          </h1>
        </div>

        {/* Right Side - Supporting Content */}
        <div className="w-full lg:w-[495px] h-auto flex flex-col justify-center lg:justify-end items-start gap-6 lg:gap-8 relative z-10">
          
          {/* Text Content */}
          <div className="w-full flex flex-col justify-start items-start gap-4 lg:gap-6 relative z-10 text-left px-2 sm:px-0">
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <h2 className="w-full text-black text-xl sm:text-2xl lg:text-3xl font-semibold font-['Bricolage_Grotesque'] leading-tight text-left">
                Your Study Abroad Journey Begins Here
              </h2>
            </div>
            <p className="w-full text-neutral-500 text-sm sm:text-base lg:text-lg font-normal font-['Bricolage_Grotesque'] leading-relaxed text-left">
              We&apos;re building something exciting to guide your dreams.<br className="hidden sm:block"/>
              Our new PathFinder Tool is almost ready — just for students like you!
            </p>
          </div>

          {/* Features List with Blue Lines */}
          <div className="w-full h-auto flex flex-row justify-start items-start gap-3 lg:gap-1 px-2 sm:px-0">
            {/* Blue Lines SVG - Show on all screens */}
            <div className="flex flex-col justify-start items-center pt-0">
              <img 
                src="/Line 2.svg" 
                alt="Blue lines" 
                className="w-auto h-32 lg:h-40 object-contain"
              />
            </div>
            
            {/* Features List - Aligned with blue lines */}
            <div className="flex-1 py-0 flex flex-col justify-start items-start gap-4 lg:gap-6 transform translate-y-2">
              <div className="flex justify-start items-start gap-2 min-h-[32px] lg:min-h-[36px]">
                <div className="text-black text-sm sm:text-base font-semibold font-['Bricolage_Grotesque'] leading-relaxed transform -translate-y-1 sm:translate-y-0">
                  Find the best courses
                </div>
              </div>
              <div className="flex justify-start items-start gap-2 min-h-[32px] lg:min-h-[36px]">
                <div className="text-black text-sm sm:text-base font-semibold font-['Bricolage_Grotesque'] leading-relaxed transform -translate-y-1 sm:translate-y-0">
                  Discover your perfect country
                </div>
              </div>
              <div className="flex justify-start items-start gap-2 min-h-[32px] lg:min-h-[36px]">
                <div className="text-black text-sm sm:text-base font-semibold font-['Bricolage_Grotesque'] leading-relaxed transform -translate-y-1 sm:translate-y-0">
                  Get personalized with study-abroad advice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
