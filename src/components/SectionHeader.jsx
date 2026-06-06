import { useEffect, useRef } from 'react';

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false,
  className = ""
}) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={headerRef}
      className={`reveal ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
          light ? 'text-[#E11D48]' : 'text-[#E11D48]'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-[#0B1F3A]'
      }`}>
        {title}
      </h2>
      <div className={`w-20 h-1 ${
        light ? 'bg-[#E11D48]' : 'bg-[#E11D48]'
      } ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeader;
