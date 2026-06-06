import { useState } from 'react'
import { X, CheckCircle2, Send, Check, MapPin, Phone, Mail, Clock } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SectionHeader from './components/SectionHeader'
import ProductCard from './components/ProductCard'
import StatsSection from './components/StatsSection'
import Timeline from './components/Timeline'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import { trucks, buses, defenseVehicles, evVehicles, stats, timeline, news } from './data/vehicles'

function ProductModal({ product, onClose }) {
  if (!product) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 z-10 cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <span className="inline-block text-sm font-semibold text-[#E11D48] uppercase tracking-wider mb-2">{product.category}</span>
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">{product.name}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          {product.specs.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-[#0B1F3A] mb-4">Key Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 5000)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 animate-fadeInUp">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-all duration-200"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-all duration-200"
          placeholder="john@company.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-all duration-200"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-all duration-200 resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#E11D48] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#BE123C] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  )
}

function HomePage({ onViewDetails }) {
  const allProducts = [
    { title: 'M&HCV Trucks', desc: 'Medium and Heavy Commercial Vehicles including the HIPPO tractor-trailers, TAURUS tippers, and Modular Advanced Vehicle (MAV) series with industry-best torque, payload, and Total Cost of Ownership.', items: trucks },
    { title: 'Light Commercial Vehicles', desc: 'The iconic DOST and Bada DOST series dominate the Indian LCV segment, renowned for class-leading payload capacities, superior fuel efficiency, and unmatched urban agility.', items: buses.slice(0, 2) },
    { title: 'Defence & Special Vehicles', desc: 'India\'s largest supplier of logistics vehicles to the Armed Forces. The legendary Stallion all-terrain platform, now expanding globally.', items: defenseVehicles.slice(0, 2) },
    { title: 'Electric Mobility (Switch)', desc: 'Switch Mobility — our pure EV subsidiary — achieved net profitability in FY26, delivering 1,530 electric buses (238% YoY growth) and 1,606 electric LCVs. Over 150 million green kilometers logged globally.', items: evVehicles.slice(0, 2) },
  ]

  return (
    <>
      <section id="hero"><HeroSection /></section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader subtitle="Our Story" title="A Legacy of Moving Nations" centered={false} />
              <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                Incorporated in <strong>1948</strong> as Ashok Motors Limited, our journey began by assembling Austin cars in Ennore, Chennai. A strategic partnership with British Leyland transformed us into Ashok Leyland — a name that would become synonymous with commercial vehicle excellence in India and beyond.
              </p>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                As the flagship of the <strong>Hinduja Group</strong>, we have pioneered innovation for over 75 years: India's first 13-ton truck, first multi-axle vehicle, first CNG bus, and first hybrid electric vehicle. Today, we are the <strong>second-largest CV manufacturer in India</strong> and the <strong>fourth-largest bus manufacturer in the world</strong>.
              </p>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                Our philosophy — <em>"Koi Manzil Door Nahin"</em> (No Dream Too Far) — drives our commitment to engineering excellence, sustainability, and global mobility solutions.
              </p>
              <blockquote className="mt-8 pl-6 border-l-4 border-[#E11D48] italic text-gray-500">
                "Our strategic partnership with CALB is a significant step towards creating a localised battery supply chain in India to accelerate adoption of electric vehicles. A Global Centre of Excellence will be created to serve as a hub for research and development."
                <footer className="mt-2 text-sm not-italic text-gray-400">— Shenu Agarwal, MD & CEO, Ashok Leyland</footer>
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '1948', label: 'Year Founded' },
                { value: '50+', label: 'Countries' },
                { value: '36K+', label: 'Employees' },
                { value: '9', label: 'Manufacturing Plants' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-[#0B1F3A] mb-1">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Portfolio" title="World-Class Commercial Vehicles" />
          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            From rugged defense trucks to zero-emission electric buses — our diversified portfolio serves every mobility need across road transport, logistics, defense, and public transit.
          </p>
          {allProducts.map((group) => (
            <div key={group.title} className="mt-20">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">{group.title}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">{group.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {group.items.map((item) => (
                  <ProductCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    description={item.description}
                    specs={Object.values(item.specs).slice(0, 3)}
                    variant="horizontal"
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Why Ashok Leyland" title="Built on Trust, Driven by Innovation" />
          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            For over seven decades, Ashok Leyland has been the backbone of global transportation — delivering reliability, performance, and cutting-edge technology to customers across the world.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏛️', title: '75+ Years of Heritage', desc: 'Founded in 1948, we have continuously shaped the commercial vehicle landscape — from India\'s first multi-axle truck to pioneering CNG and hybrid electric technology.' },
              { icon: '🌍', title: 'Unmatched Scale & Reach', desc: '1,000+ service touchpoints, 9 manufacturing plants, 10 global assembly facilities, and operations spanning 50+ countries across Asia, Africa, the Middle East, and Europe.' },
              { icon: '💰', title: 'Financial Strength', desc: 'Consolidated revenue of ₹56,947 Crore and PAT of ₹3,471 Crore in FY26. A commanding 30.8% market share in domestic MHCV segment with robust dividend payout of ₹3.50 per share.' },
              { icon: '🔋', title: 'Future-Ready Innovation', desc: '₹5,000 Crore investment in next-gen battery technology, strategic partnership with CALB Group (China), and Switch Mobility\'s rapid EV scaling position us at the forefront of zero-emission mobility.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection stats={stats} variant="dark" />

      <section id="defense" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Global Impact" title="Delivering Excellence Worldwide" />
          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            From landmark electric bus deployments to cutting-edge defence collaborations — our projects move people, goods, and nations forward.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80', tag: 'Electric Mobility', title: 'Switch Mobility Electric Buses', desc: 'Delivered 1,530 electric buses in FY26 — 238% YoY growth. Double-decker electric buses deployed in Delhi and Tamil Nadu Tourism. 150M+ green kilometers and net profitability achieved.', link: 'https://www.ashokleyland.com/electric-mobility' },
              { img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80', tag: 'Battery Technology', title: '₹5,000 Cr Battery Ecosystem', desc: 'Strategic partnership with CALB Group (China) to localize next-generation battery technology. Greenfield facility in Pillaipakkam, Chennai with ₹400-500 Cr initial outlay.', link: 'https://www.ashokleyland.com/innovation' },
              { img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', tag: 'Global Manufacturing', title: 'Ras Al Khaimah Facility, UAE', desc: 'Capacity of 6,000 buses annually serving the MENA region. Partner truck segment won LCV Truck of the Year at 2024 Truck & Fleet Awards.', link: 'https://www.ashokleyland.com/global' },
              { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', tag: 'Defence', title: 'Indonesia Defence Collaboration', desc: 'Signed MoU with PT Pindad, Indonesia\'s state-owned defence enterprise, for advanced defence technology collaboration. Expanding the legendary Stallion platform globally.', link: 'https://www.ashokleyland.com/defence' },
              { img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80', tag: 'Manufacturing', title: 'Green-Mobility Facility, Lucknow', desc: 'New integrated manufacturing plant in Lucknow, Uttar Pradesh focused on green mobility solutions. Part of the 9 worldwide manufacturing plants.', link: 'https://www.ashokleyland.com/manufacturing' },
              { img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', tag: 'Sustainability', title: 'Record LCV Sales & Market Leadership', desc: '74,322 LCV units sold in FY26 (+11.5% YoY) — a record high. The DOST and Bada DOST series continue to dominate with superior payload and urban agility.', link: 'https://www.ashokleyland.com/products' },
            ].map((item) => (
              <NewsCard key={item.title} image={item.img} title={item.title} excerpt={item.desc} date="" author="" category={item.tag} link={item.link} />
            ))}
          </div>
        </div>
      </section>

      <section id="innovation" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Journey" title="75+ Years of Breaking Barriers" />
          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            From assembling cars in 1948 to pioneering electric mobility in 2026 — every milestone reflects our relentless pursuit of engineering excellence.
          </p>
          <div className="mt-16"><Timeline events={timeline} /></div>
        </div>
      </section>

      <section id="news" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Latest Updates" title="News & Insights" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} image={item.image} title={item.title} excerpt={item.excerpt} date={item.date} author="Ashok Leyland" category={item.category} link="https://www.ashokleyland.com/news" />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Get in Touch" title="Ready to Drive with Ashok Leyland?" light />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-center">
            Join 50+ countries and thousands of enterprises who trust Ashok Leyland for their commercial vehicle needs. From cutting-edge electric buses to rugged heavy-duty trucks — we have the solution for your journey.
          </p>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white/5 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-[#E11D48]" /> Head Office</h4>
                <p className="text-gray-400 text-sm">Ashok Leyland Limited<br />No. 1, Sardar Patel Road<br />Guindy, Chennai — 600 032<br />Tamil Nadu, India</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2"><Phone className="w-5 h-5 text-[#E11D48]" /> Phone</h4>
                <a href="tel:+914422501000" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">+91 44 2250 1000</a>
                <a href="tel:+914422501111" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">+91 44 2250 1111</a>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2"><Mail className="w-5 h-5 text-[#E11D48]" /> Email</h4>
                <a href="mailto:info@ashokleyland.com" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">info@ashokleyland.com</a>
                <a href="mailto:investors@ashokleyland.com" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">investors@ashokleyland.com</a>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-[#E11D48]" /> Business Hours</h4>
                <p className="text-gray-400 text-sm">Monday — Friday: 9:00 AM — 6:00 PM<br />Saturday: 9:00 AM — 1:00 PM</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <h4 className="text-white text-xl font-semibold mb-6">Send us a Message</h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <Navbar />
      <HomePage onViewDetails={setSelectedProduct} />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}

export default App
