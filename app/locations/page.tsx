import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { locationData } from "@/lib/location-data"

export default function LocationsPage() {
  // Group locations by state
  const locationsByState = locationData.reduce(
    (acc, loc) => {
      if (!acc[loc.state]) {
        acc[loc.state] = []
      }
      acc[loc.state].push(loc)
      return acc
    },
    {} as Record<string, typeof locationData>,
  )

  // Define the order of states as they appear in the original design
  const stateOrder = [
    "Rhode Island",
    "Connecticut",
    "New York",
    "New Jersey",
    "Pennsylvania",
    "Delaware",
    "Massachusetts",
    "Maryland",
    "Washington DC",
    "Virginia",
    "North Carolina",
    "South Carolina",
    "Georgia",
    "Arizona",
    "California",
    "Nevada",
    "Washington",
    "Oregon",
    "Colorado",
    "Utah",
    "Michigan",
    "Missouri",
    "Illinois",
    "Indiana",
    "Minnesota",
    "Iowa",
    "Kansas",
    "Ohio",
    "Tennessee",
    "Florida",
    "Texas",
    "Oklahoma",
    "Arkansas",
    "New Mexico",
    "Wisconsin",
    "Kentucky",
    "Kansas/Missouri",
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section */}
        <section className="relative bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-4">Locations</h1>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xl text-gray-700 leading-relaxed font-serif">
              Backyard Hibachi 4U brings the fun, entertainment and flavors of Japanese hibachi cooking to your backyard
              with our best-rated mobile hibachi catering service in State of CT, NY, NJ, PA, DE, MD, Washington DC,
              VA(Virginia Beach, Richmond), NC(Raleigh) AZ(Phoenix, Tucson), FL.(Miami, Orlando), TX(Dallas, Austin,
              Houston, San Antonio), Philadelphia, DMV and all surrounding areas
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <Image
              src="/us-map-with-highlighted-states-showing-hibachi-ser.jpg"
              alt="Service Coverage Map"
              width={900}
              height={500}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Regional Maps */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">North East</h3>
                <Image
                  src="/northeast-us-map-with-highlighted-states.jpg"
                  alt="Northeast Region"
                  width={300}
                  height={300}
                  className="mx-auto mb-4"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">South</h3>
                <Image
                  src="/southern-us-map-with-highlighted-states.jpg"
                  alt="South Region"
                  width={300}
                  height={300}
                  className="mx-auto mb-4"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">West</h3>
                <Image
                  src="/western-us-map-with-highlighted-states.jpg"
                  alt="West Region"
                  width={300}
                  height={300}
                  className="mx-auto mb-4"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">Midwest</h3>
                <Image
                  src="/midwest-us-map-with-highlighted-states.jpg"
                  alt="Midwest Region"
                  width={300}
                  height={300}
                  className="mx-auto mb-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-6xl mx-auto">
              {stateOrder.map((state) => {
                const cities = locationsByState[state]
                if (!cities) return null

                return (
                  <div key={state}>
                    <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">{state}</h3>
                    <ul className="space-y-2">
                      {cities.map((city) => (
                        <li key={city.slug}>
                          <Link
                            href={`/city/${city.slug}`}
                            className="text-gray-700 hover:text-red-600 transition-colors"
                          >
                            {city.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-bold text-4xl mb-4">Don't See Your Location?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly expanding our service areas. Contact us to see if we can bring the hibachi experience to
              your area!
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-red-500 text-white font-bold px-10 py-4 hover:bg-red-600 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
