import { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

const Timeline = ({ events }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = timelineRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#E11D48] via-[#E11D48]/50 to-transparent hidden lg:block" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={index}
            className={`reveal relative flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Content Card */}
            <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover-lift">
                <span className="inline-flex items-center gap-2 text-[#E11D48] font-bold text-2xl mb-2">
                  <Clock className="w-5 h-5" />
                  {event.year}
                </span>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>

            {/* Center Dot */}
            <div className="relative z-10 hidden lg:flex items-center justify-center">
              <div className="w-12 h-12 bg-[#E11D48] rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                <span className="text-white font-bold text-sm">{event.year.slice(-2)}</span>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
