import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SectionHeader from './components/SectionHeader'
import ProductCard from './components/ProductCard'
import { trucks } from './data/vehicles'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Portfolio"
            title="World-Class Commercial Vehicles"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trucks.map((truck) => (
              <ProductCard
                key={truck.id}
                image={truck.image}
                name={truck.name}
                category={truck.category}
                description={truck.description}
                specs={[truck.specs.engine, truck.specs.payload, truck.specs.fuel]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
