import React from 'react';

// Hero Section Component
// Using exact Tailwind styles from Figma design - Mobile Responsive
const HeroSection = () => {
  return (
    <section className="w-full flex justify-center relative px-4 md:px-0">
      <div className="w-full max-w-[1169px] flex flex-col lg:flex-row justify-start items-center lg:items-end gap-8 lg:gap-20 relative">
        {/* Illustration - Hidden on mobile, positioned on desktop */}
        <div className="hidden lg:block absolute top-[-90px] left-[340px] z-5">
          <img 
            src="/Illustration.png" 
            alt="Study abroad illustration" 
            className="w-auto h-auto max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] object-contain"
          />
        </div>

        {/* Left Side - Main Headline */}
        <div className="w-full lg:w-[592px] h-auto lg:h-96 flex justify-center lg:justify-start items-start relative z-10">
          <h1 className="text-center lg:text-left">
            <span className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-['Bricolage_Grotesque'] leading-tight lg:leading-[100px]">
              Unlock <br/>
              Your Global <br/>
              Future with{" "}
            </span>
            <span className="text-[#1058C3] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold font-['Bricolage_Grotesque'] leading-tight lg:leading-[100px]">
              EduQuest
            </span>
          </h1>
        </div>

        {/* Right Side - Supporting Content */}
        <div className="w-full lg:w-[495px] h-auto lg:h-96 flex flex-col justify-center lg:justify-end items-center gap-6 lg:gap-8 relative z-10">
          
          {/* Mobile Illustration - Show only on mobile with better spacing */}
          <div className="block lg:hidden mb-6">
            <img 
              src="/Illustration.png" 
              alt="Study abroad illustration" 
              className="w-auto h-auto max-w-[280px] sm:max-w-[320px] object-contain mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full flex flex-col justify-start items-start gap-4 lg:gap-6 relative z-10 text-center lg:text-left px-2 sm:px-0">
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <h2 className="w-full text-black text-xl sm:text-2xl lg:text-3xl font-semibold font-['Bricolage_Grotesque'] leading-tight">
                Your Study Abroad Journey Begins Here
              </h2>
            </div>
            <p className="w-full text-neutral-400 text-sm sm:text-base lg:text-lg font-normal font-['Bricolage_Grotesque'] leading-relaxed">
              We&apos;re building something exciting to guide your dreams.<br className="hidden sm:block"/>
              Our new PathFinder Tool is almost ready — just for students like you!
            </p>
          </div>

          {/* Features List with Blue Lines */}
          <div className="w-full h-auto lg:h-36 flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-1 px-2 sm:px-0">
            {/* Blue Lines SVG - Hidden on mobile */}
            <div className="hidden lg:flex flex-col justify-center items-center h-full">
              <img 
                src="/Line 2.svg" 
                alt="Blue lines" 
                className="w-auto h-40 object-contain"
              />
            </div>
            
            {/* Features List */}
            <div className="flex-1 h-auto lg:h-36 py-2 flex flex-col justify-center lg:justify-between items-start gap-4 lg:gap-0">
              <div className="flex justify-start items-center gap-2 h-auto lg:h-8">
                <div className="text-black text-sm sm:text-base font-semibold font-['Bricolage_Grotesque'] leading-relaxed">
                  Find the best courses
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 h-auto lg:h-8">
                <div className="text-black text-sm sm:text-base font-semibold font-['Bricolage_Grotesque'] leading-relaxed">
                  Discover your perfect country
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 h-auto lg:h-8">
                <div className="text-black text-sm sm:text-base font-semibold font-['Bricolage_Grotesque'] leading-relaxed">
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