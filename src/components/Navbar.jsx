import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Truck, Bus, Shield, Zap, Phone, Info, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { 
      name: 'Products', 
      path: '#',
      icon: Truck,
      dropdown: [
        { name: 'Trucks', path: '/products/trucks', icon: Truck },
        { name: 'Buses', path: '/products/buses', icon: Bus },
        { name: 'Defense', path: '/defense', icon: Shield },
        { name: 'Electric', path: '/innovation', icon: Zap },
      ]
    },
    { name: 'Defense', path: '/defense', icon: Shield },
    { name: 'Innovation', path: '/innovation', icon: Zap },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
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
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[#E11D48] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-bold tracking-tight">ASHOK LEYLAND</span>
                <span className="text-gray-300 text-xs tracking-widest uppercase">Driving the Future</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
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
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                          isActive('/products') || isActive('/defense') || isActive('/innovation')
                            ? 'text-white bg-white/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <link.icon className="w-4 h-4" />
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown */}
                      {isProductsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 animate-fadeInUp">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#E11D48] transition-colors"
                            >
                              <item.icon className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        isActive(link.path)
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#E11D48] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#BE123C] transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
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
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className="w-5 h-5" />
                          <span className="font-medium">{link.name}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProductsOpen && (
                        <div className="ml-8 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
                            >
                              <item.icon className="w-4 h-4" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(link.path)
                          ? 'text-white bg-[#E11D48]'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#E11D48] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#BE123C] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
