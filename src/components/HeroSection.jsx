import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({ 
  title = "Driving the Future of Mobility",
  subtitle = "Building India's commercial vehicle excellence since 1948. Engineered for performance, designed for reliability.",
  backgroundImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80",
  ctaText = "Explore Vehicles",
  ctaLink = "/products/trucks",
  secondaryCta = "Contact Us",
  secondaryLink = "/contact",
  showStats = true
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/60" />
        <div className="absolute inset-0 industrial-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 bg-[#E11D48]/20 border border-[#E11D48]/30 text-[#E11D48] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[#E11D48] rounded-full animate-pulse" />
            India's Leading CV Manufacturer
          </div>

          {/* Title */}
          <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="reveal text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="reveal flex flex-wrap gap-4">
            <Link 
              to={ctaLink}
              className="group inline-flex items-center gap-2 bg-[#E11D48] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#BE123C] transition-all hover:scale-105 btn-shine"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to={secondaryLink}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
            >
              {secondaryCta}
            </Link>
          </div>

          {/* Trust Indicators */}
          {showStats && (
            <div className="reveal mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "75+", label: "Years" },
                  { value: "2M+", label: "Vehicles Sold" },
                  { value: "50+", label: "Countries" },
                  { value: "#2", label: "Global Ranking" }
                ].map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
