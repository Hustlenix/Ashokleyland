import { Mail, Phone, MapPin, Globe, ArrowUpRight, Truck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const footerLinks = {
    products: [
      { name: 'Heavy Trucks', href: '#products' },
      { name: 'Medium Trucks', href: '#products' },
      { name: 'Buses', href: '#products' },
      { name: 'Defense Vehicles', href: '#products' },
      { name: 'Electric Vehicles', href: '#products' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our History', href: '#about' },
      { name: 'Sustainability', href: '#innovation' },
      { name: 'Innovation', href: '#innovation' },
      { name: 'Careers', href: '#contact' },
    ],
    support: [
      { name: 'Dealer Locator', href: '#contact' },
      { name: 'Service Centers', href: '#contact' },
      { name: 'Spare Parts', href: '#contact' },
      { name: 'Warranty', href: '#contact' },
      { name: 'FAQs', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: 'https://www.ashokleyland.com/privacy-policy' },
      { name: 'Terms of Use', href: 'https://www.ashokleyland.com/terms' },
      { name: 'Cookie Policy', href: 'https://www.ashokleyland.com/cookie-policy' },
      { name: 'Sitemap', href: 'https://www.ashokleyland.com/sitemap' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Globe, url: 'https://www.linkedin.com/company/ashok-leyland' },
    { name: 'Twitter', icon: Globe, url: 'https://x.com/AshokLeyland' },
    { name: 'Facebook', icon: Globe, url: 'https://www.facebook.com/AshokLeyland' },
    { name: 'YouTube', icon: Globe, url: 'https://www.youtube.com/user/ashokleyland' },
  ];

  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E11D48] rounded-lg flex items-center justify-center">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">ASHOK LEYLAND</span>
                  <span className="text-gray-400 text-xs tracking-widest uppercase">Driving the Future</span>
                </div>
              </a>

              <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                India's leading commercial vehicle manufacturer, delivering innovative mobility solutions
                for over 75 years. A Hinduja Group Enterprise.
              </p>

              <div className="space-y-3">
                <a href="tel:+914422206000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#E11D48] transition-colors duration-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91-44-2220-6000</span>
                </a>

                <a href="mailto:contact@ashokleyland.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#E11D48] transition-colors duration-200">
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

            <div>
              <h4 className="text-lg font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#071428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#E11D48] transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-500">
              © {currentYear} Ashok Leyland Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
