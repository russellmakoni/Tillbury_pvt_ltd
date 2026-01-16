import React, { useState, useEffect } from 'react';
import { Shield, Clock } from 'react-feather';
import bus1 from '../resources/bus1.jpg';
import bus2 from '../resources/bus2.jpg';
import bus3 from '../resources/bus3.jpg';
import bus4 from '../resources/bus4.jpg';
import bus5 from '../resources/bus12.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use your uploaded image filenames here
  const slides = [
    bus1,bus2,bus3,bus4,bus5
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[800px] lg:h-[700px] flex items-center overflow-hidden bg-[#002B5B]">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <img 
              src={slide} 
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ))}
        {/* Overlay Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B] via-[#002B5B]/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="text-left text-white">
          <span className="inline-block bg-[#FFD700] text-[#002B5B] px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Zim & SA Fleet Specialists
          </span>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            QUALITY PARTS. <br />
            <span className="text-[#FFD700]">EXPERT </span> 
            SERVICE.
          </h1>
          <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-lg font-medium">
            Professional commercial vehicle maintenance and breakdown support. We provide the technical expertise you can trust to keep your business moving.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-4 bg-[#002B5B]/80 backdrop-blur-md p-4 border-l-4 border-[#FFD700]">
              <Shield className="text-[#FFD700]" size={24} />
              <div>
                <p className="text-[10px] font-bold text-white/50 uppercase">Guaranteed</p>
                <p className="text-xs font-black text-white uppercase">Quality Spares</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#002B5B]/80 backdrop-blur-md p-4 border-l-4 border-[#FFD700]">
              <Clock className="text-[#FFD700]" size={24} />
              <div>
                <p className="text-[10px] font-bold text-white/50 uppercase">Response</p>
                <p className="text-xs font-black text-white uppercase">24/7 Dispatch</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-6 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#FFD700]' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroSection;