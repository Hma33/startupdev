import React from 'react';
import imgImage13 from "figma:asset/aa78a886a75f6de471cc68bc0da029b40d28c2bf.png";
import imgNewLogo6 from "figma:asset/6f34d5024cf5761bbb97c670a0751fc429924eba.png";
import img171 from "figma:asset/b09f1c7194143ba2e4175025bf9b741cb674e6e8.png";
import img255 from "figma:asset/ae9236fb2c99d28d7913e0c77c28fa5ee9371501.png";
import imgUntitledDesign25 from "figma:asset/b142d6bfe3e5528023c4114c29edd86c2d8754c3.png";

const HeroSection = () => {
  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Hero Image - Fixed height as per design */}
      <div className="w-full h-[300px] md:h-[407px] relative overflow-hidden">
        <img 
          src={imgImage13} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center flex flex-col items-center gap-8">
        <h1 className="text-3xl md:text-5xl lg:text-[46px] font-bold text-[#F26522] leading-tight">
          Stop paying 15,000 AED , Build with US
        </h1>
        
        <p className="text-lg md:text-xl text-[#1E1E1E] max-w-3xl mx-auto leading-relaxed text-center">
          The "Future-Proof" Stop paying 15,000 AED agency fees.<br className="hidden md:block" />
          Professional, secure, and fast websites starting. .
        </p>
        
        <button className="mt-4 bg-[#F26522] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-[#d9581e] transition-transform hover:scale-105 shadow-md">
          Start Build Now
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#D9D9D9] py-16 px-6 md:px-16 lg:px-24 mt-auto relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-12">
        
        {/* Left Column: Logo & Taglines */}
        <div className="flex flex-col items-start space-y-8 max-w-lg">
          {/* Logo */}
          <div className="w-[45px] h-[44px]">
             <img src={imgNewLogo6} alt="Logo" className="w-full h-full object-contain" />
          </div>
          
          {/* Taglines */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-medium text-black/70 leading-snug">
              We don’t sell the website,
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F26522] leading-snug">
              We provide Business Solution.
            </h2>
          </div>
          
          {/* Copyright */}
          <p className="text-xs font-semibold text-black pt-8">
            @2026 Dev Loom Innovations.
          </p>
        </div>

        {/* Right Column: Links & Socials */}
        <div className="flex flex-col items-end space-y-12 w-full md:w-auto">
          {/* Vertical Navigation Links */}
          <nav className="flex flex-col items-end space-y-4">
            <a href="#" className="text-black/70 hover:text-black font-semibold text-sm transition-colors">
              Demo
            </a>
            <a href="#" className="text-[#F26522] hover:text-[#d9581e] font-semibold text-sm transition-colors">
              Pricing
            </a>
            <a href="#" className="text-black/70 hover:text-black font-semibold text-sm transition-colors">
              Contact
            </a>
            <a href="#" className="text-black/70 hover:text-black font-semibold text-sm transition-colors">
              Security
            </a>
          </nav>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
             <a href="#" className="w-9 h-9 block hover:opacity-80 transition-opacity">
               <img src={img171} alt="Facebook" className="w-full h-full object-contain" />
             </a>
             <a href="#" className="w-8 h-8 block hover:opacity-80 transition-opacity">
               <img src={img255} alt="Instagram" className="w-full h-full object-contain" />
             </a>
             <a href="#" className="w-9 h-9 block hover:opacity-80 transition-opacity">
               <img src={imgUntitledDesign25} alt="TikTok" className="w-full h-full object-contain" />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans flex flex-col justify-between">
      <HeroSection />
      <Footer />
    </div>
  );
}
