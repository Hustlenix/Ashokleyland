import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowUpRight, Truck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Heavy Trucks', path: '/products/trucks' },
      { name: 'Medium Trucks', path: '/products/trucks' },
      { name: 'Buses', path: '/products/buses' },
      { name: 'Defense Vehicles', path: '/defense' },
      { name: 'Electric Vehicles', path: '/innovation' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Leadership', path: '/about#leadership' },
      { name: 'Our History', path: '/about#history' },
      { name: 'Sustainability', path: '/innovation' },
      { name: 'Careers', path: '/contact' },
    ],
    support: [
      { name: 'Dealer Locator', path: '/contact' },
      { name: 'Service Centers', path: '/contact' },
      { name: 'Spare Parts', path: '/contact' },
      { name: 'Warranty', path: '/contact' },
      { name: 'FAQs', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Use', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Sitemap', path: '#' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Globe, url: '#' },
    { name: 'Twitter', icon: Globe, url: '#' },
    { name: 'Facebook', icon: Globe, url: '#' },
    { name: 'YouTube', icon: Globe, url: '#' },
  ];

  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E11D48] rounded-lg flex items-center justify-center">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">ASHOK LEYLAND</span>
                  <span className="text-gray-400 text-xs tracking-widest uppercase">Driving the Future</span>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 max-w-sm">
                India's leading commercial vehicle manufacturer, delivering innovative mobility solutions 
                for over 75 years.
              </p>
              
              <div className="space-y-3">
                <a href="tel:+914422206000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91-44-2220-6000</span>
                </a>
                
                <a href="mailto:contact@ashokleyland.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contact@ashokleyland.com</span>
                </a>
                
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#071428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E11D48] transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-500">
              © {currentYear} Ashok Leyland. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
