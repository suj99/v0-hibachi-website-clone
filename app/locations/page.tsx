import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Locations } from '@/components/locations'

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
              Service Areas & Locations
            </h1>
            <p className="text-xl text-gray-300">
              Bringing hibachi excellence to your backyard across multiple
              states
            </p>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              At Home Hibachi brings the fun, entertainment and flavors of
              Japanese hibachi cooking to your backyard with our best-rated
              mobile hibachi catering service in State of CT, NY, NJ, PA, DE,
              MD, Washington DC, VA(Virginia Beach, Richmond), NC(Raleigh)
              AZ(Phoenix, Tucson), FL.(Miami, Orlando), TX(Dallas, Austin,
              Houston, San Antonio), Philadelphia, DMV and all surrounding areas
            </p>
          </div>
        </section>

        {/* Locations Component */}
        <Locations />

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-bold text-4xl mb-4">
              Don't See Your Location?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly expanding our service areas. Contact us to see if
              we can bring the hibachi experience to your area!
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-red-500 text-white font-bold px-10 py-4 hover:bg-red-600 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
