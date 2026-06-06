import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SectionHeader from './components/SectionHeader'
import ProductCard from './components/ProductCard'
import StatsSection from './components/StatsSection'
import Timeline from './components/Timeline'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import { trucks, buses, defenseVehicles, evVehicles, stats, timeline, news } from './data/vehicles'

function ScrollToSection() {
  const { pathname } = useLocation()
  useEffect(() => {
    const sectionMap = {
      '/': 'hero',
      '/about': 'about',
      '/products/trucks': 'products',
      '/products/buses': 'products',
      '/defense': 'defense',
      '/innovation': 'innovation',
      '/contact': 'contact',
    }
    const sectionId = sectionMap[pathname] || 'hero'
    const el = document.getElementById(sectionId)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [pathname])
  return null
}

function HomePage() {
  const allProducts = [
    { title: 'M&HCV Trucks', desc: 'Medium and Heavy Commercial Vehicles including the HIPPO tractor-trailers, TAURUS tippers, and Modular Advanced Vehicle (MAV) series with industry-best torque, payload, and Total Cost of Ownership.', items: trucks },
    { title: 'Light Commercial Vehicles', desc: 'The iconic DOST and Bada DOST series dominate the Indian LCV segment, renowned for class-leading payload capacities, superior fuel efficiency, and unmatched urban agility.', items: buses.slice(0, 2) },
    { title: 'Defence & Special Vehicles', desc: 'India\'s largest supplier of logistics vehicles to the Armed Forces. The legendary Stallion all-terrain platform, now expanding globally.', items: defenseVehicles.slice(0, 2) },
    { title: 'Electric Mobility (Switch)', desc: 'Switch Mobility — our pure EV subsidiary — achieved net profitability in FY26, delivering 1,530 electric buses (238% YoY growth) and 1,606 electric LCVs.', items: evVehicles.slice(0, 2) },
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
                Incorporated in <strong>1948</strong> as Ashok Motors Limited, our journey began by assembling Austin cars in Ennore, Chennai. A strategic partnership with British Leyland transformed us into Ashok Leyland — a name synonymous with commercial vehicle excellence in India and beyond.
              </p>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                As the flagship of the <strong>Hinduja Group</strong>, we have pioneered innovation for over 75 years: India's first 13-ton truck, first multi-axle vehicle, first CNG bus, and first hybrid electric vehicle. Today, we are the <strong>second-largest CV manufacturer in India</strong> and the <strong>fourth-largest bus manufacturer in the world</strong>.
              </p>
              <blockquote className="mt-8 pl-6 border-l-4 border-[#E11D48] italic text-gray-500">
                "Our strategic partnership with CALB is a significant step towards creating a localised battery supply chain in India to accelerate adoption of electric vehicles."
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
                <div key={s.label} className="bg-gray-50 rounded-2xl p-8 text-center">
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏛️', title: '75+ Years of Heritage', desc: 'Founded in 1948, we have continuously shaped the commercial vehicle landscape — from India\'s first multi-axle truck to pioneering CNG and hybrid electric technology.' },
              { icon: '🌍', title: 'Unmatched Scale & Reach', desc: '1,000+ service touchpoints, 9 manufacturing plants, 10 global assembly facilities spanning 50+ countries across Asia, Africa, the Middle East, and Europe.' },
              { icon: '💰', title: 'Financial Strength', desc: 'Consolidated revenue of ₹56,947 Crore and PAT of ₹3,471 Crore in FY26. A commanding 30.8% market share in domestic MHCV segment with robust dividend payout.' },
              { icon: '🔋', title: 'Future-Ready Innovation', desc: '₹5,000 Crore investment in next-gen battery technology, strategic partnership with CALB Group (China), and Switch Mobility\'s rapid EV scaling.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80', tag: 'Electric Mobility', title: 'Switch Mobility Electric Buses', desc: 'Delivered 1,530 electric buses in FY26 — 238% YoY growth. Double-decker electric buses deployed in Delhi and Tamil Nadu Tourism.' },
              { img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80', tag: 'Battery Technology', title: '₹5,000 Cr Battery Ecosystem', desc: 'Strategic partnership with CALB Group (China) to localize next-generation battery technology.' },
              { img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', tag: 'Global Manufacturing', title: 'Ras Al Khaimah Facility, UAE', desc: 'Capacity of 6,000 buses annually serving the MENA region. Won LCV Truck of the Year at 2024 Truck & Fleet Awards.' },
              { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', tag: 'Defence', title: 'Indonesia Defence Collaboration', desc: 'Signed MoU with PT Pindad for advanced defence technology collaboration. Expanding Stallion platform globally.' },
              { img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80', tag: 'Manufacturing', title: 'Green-Mobility Facility, Lucknow', desc: 'New integrated manufacturing plant in Lucknow focused on green mobility solutions.' },
              { img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', tag: 'Sustainability', title: 'Record LCV Sales', desc: '74,322 LCV units sold in FY26 (+11.5% YoY) — a record high. DOST and Bada DOST series continue to dominate.' },
            ].map((item) => (
              <NewsCard key={item.title} image={item.img} title={item.title} excerpt={item.desc} date="" author="" category={item.tag} />
            ))}
          </div>
        </div>
      </section>

      <section id="innovation" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Journey" title="75+ Years of Breaking Barriers" />
          <div className="mt-16"><Timeline events={timeline} /></div>
        </div>
      </section>

      <section id="news" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Latest Updates" title="News & Insights" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} image={item.image} title={item.title} excerpt={item.excerpt} date={item.date} author="Ashok Leyland" category={item.category} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader subtitle="Get in Touch" title="Ready to Drive with Ashok Leyland?" light />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Join 50+ countries and thousands of enterprises who trust Ashok Leyland for their commercial vehicle needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#E11D48] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#BE123C] transition-all">Contact Our Team</a>
            <a href="#products" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">Explore Products</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span>ISO 9001 Certified</span>
            <span>BS VI / Euro 6 Compliant</span>
            <span>75+ Years of Trust</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/products/trucks" element={<HomePage />} />
        <Route path="/products/buses" element={<HomePage />} />
        <Route path="/defense" element={<HomePage />} />
        <Route path="/innovation" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
