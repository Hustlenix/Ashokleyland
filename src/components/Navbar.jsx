import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Truck, Bus, Shield, Zap, Phone, Info, Home } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'products', 'why', 'defense', 'innovation', 'news', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [activeSection]);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    {
      name: 'Products',
      href: '#products',
      icon: Truck,
      dropdown: [
        { name: 'Trucks', href: '#products', icon: Truck },
        { name: 'Buses', href: '#products', icon: Bus },
        { name: 'Defense', href: '#products', icon: Shield },
        { name: 'Electric', href: '#products', icon: Zap },
      ]
    },
    { name: 'Defense', href: '#defense', icon: Shield },
    { name: 'Innovation', href: '#innovation', icon: Zap },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1F3A]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[#E11D48] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-bold tracking-tight">ASHOK LEYLAND</span>
                <span className="text-gray-300 text-xs tracking-widest uppercase">Driving the Future</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <button
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          ['products', 'defense', 'innovation'].includes(activeSection)
                            ? 'text-white bg-white/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <link.icon className="w-4 h-4" />
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isProductsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 animate-fadeInUp">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#E11D48] transition-colors duration-200"
                            >
                              <item.icon className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        activeSection === link.href.replace('#', '')
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 bg-[#E11D48] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#BE123C] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Get Quote
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#0B1F3A] shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className="w-5 h-5" />
                          <span className="font-medium">{link.name}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProductsOpen && (
                        <div className="ml-8 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm"
                            >
                              <item.icon className="w-4 h-4" />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        activeSection === link.href.replace('#', '')
                          ? 'text-white bg-[#E11D48]'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 bg-[#E11D48] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#BE123C] transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
