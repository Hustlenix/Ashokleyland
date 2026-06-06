import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsCard = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author, 
  category,
  link = "#"
}) => {
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
    >
      <div className="relative img-zoom aspect-[16/10]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute top-4 left-4">
          <span className="bg-[#E11D48] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {author}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 line-clamp-2 group-hover:text-[#E11D48] transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>

        <Link
          to={link}
          className="inline-flex items-center gap-2 text-[#E11D48] font-semibold text-sm group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
