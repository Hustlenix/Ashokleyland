import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ProductCard = ({
  image,
  name,
  category,
  description,
  specs = [],
  link = "#",
  variant = "default",
  onViewDetails
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewDetails = (e) => {
    e.preventDefault();
    if (onViewDetails) {
      onViewDetails({ image, name, category, description, specs });
    }
  };

  if (variant === "horizontal") {
    return (
      <div
        ref={cardRef}
        className="reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 img-zoom">
            <img
              src={image}
              alt={name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          <div className="md:w-3/5 p-8">
            <div className="text-sm font-semibold text-[#E11D48] uppercase tracking-wider mb-2">
              {category}
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3">{name}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

            {specs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {specs.slice(0, 3).map((spec, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {spec}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={handleViewDetails}
              className="inline-flex items-center gap-2 text-[#E11D48] font-semibold group-hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
    >
      <div className="relative img-zoom aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 left-4">
          <span className="bg-[#E11D48] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 group-hover:text-[#E11D48] transition-colors duration-200">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {specs.length > 0 && (
          <div className="space-y-2 mb-4">
            {specs.slice(0, 2).map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {spec}
              </div>
            ))}
          </div>
        )}

        <button
          onClick={handleViewDetails}
          className="flex items-center justify-between pt-4 border-t border-gray-100 w-full cursor-pointer"
        >
          <span className="text-[#E11D48] font-semibold text-sm">View Details</span>
          <div className="w-8 h-8 rounded-full bg-[#E11D48]/10 flex items-center justify-center group-hover:bg-[#E11D48] transition-colors duration-200">
            <ArrowRight className="w-4 h-4 text-[#E11D48] group-hover:text-white transition-colors duration-200" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
