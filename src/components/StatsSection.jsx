import { useEffect, useRef, useState } from 'react';

const StatsSection = ({ stats, variant = "default" }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let startTime = null;
      const numericEnd = parseInt(end.replace(/\D/g, ''));
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * numericEnd));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return <span>{count}{suffix}</span>;
  };

  if (variant === "dark") {
    return (
      <section ref={sectionRef} className="py-20 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease'
                }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.value.replace(/[0-9]/g, '')}
                  />
                </div>
                <div className="text-gray-400 text-sm sm:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-2">
                <CountUp 
                  end={stat.value} 
                  suffix={stat.value.replace(/[0-9]/g, '')}
                />
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
