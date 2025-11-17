import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
              Locations
            </h1>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16">
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
              {/* Rhode Island */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Rhode Island
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Rhode Island</li>
                </ul>
              </div>

              {/* Connecticut */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Connecticut
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Connecticut</li>
                </ul>
              </div>

              {/* New York */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  New York
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Long Island, New York</li>
                  <li className="text-gray-700">Rochester-Buffalo, New york</li>
                  <li className="text-gray-700">Syracuse, New York</li>
                  <li className="text-gray-700">New York</li>
                </ul>
              </div>

              {/* New Jersey */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  New Jersey
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">New jersey whole state</li>
                </ul>
              </div>

              {/* Pennsylvania */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Pennsylvania
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Philadelphia metropolitan , PA</li>
                  <li className="text-gray-700">Central PA</li>
                </ul>
              </div>

              {/* Delaware */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Delaware
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Delaware whole state</li>
                </ul>
              </div>

              {/* Massachusetts */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Massachusetts
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Boston, Worcester, Springfield</li>
                  <li className="text-gray-700">Cape Cod</li>
                </ul>
              </div>

              {/* Maryland */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Maryland
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Maryland Whole State</li>
                  <li className="text-gray-700">Ocean City</li>
                </ul>
              </div>

              {/* Washington DC */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Washington DC
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    DMV(Washington DC, Maryland, North Virginia
                  </li>
                </ul>
              </div>

              {/* Virginia */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Virginia
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Virginia Beach-Hampton Roads, Richmond, Fredericksburg,
                    Newport News
                  </li>
                </ul>
              </div>

              {/* North Carolina */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  North Carolina
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Raleigh-Durham Area, Outer Bank Area, Wilmington,
                    Fayetteville, Greensboro/Winston-Salem, Charlotte, Durham
                  </li>
                </ul>
              </div>

              {/* South Carolina */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  South Carolina
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Charleston-Columbia, Savannah Beach, Myrtle Beach
                  </li>
                </ul>
              </div>

              {/* Georgia */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Georgia
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Atlanta, Savannah, Augusta, Athens, Marieta, Columbus
                  </li>
                </ul>
              </div>

              {/* Arizona */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Arizona
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Phoenix-Scottsdale Area, Tucson, Sedona-Flagstaff,
                    Scottsdale, Chandler, Gilbert, Glendale, Queen Creek
                  </li>
                </ul>
              </div>

              {/* California */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  California:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Los Angeles, San Diego, Bakersfield, Lancaster, Santa
                    Clarita, Thousand Oaks, Fresno, Sacramento
                  </li>
                </ul>
              </div>

              {/* Nevada */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Nevada:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Las Vegas, Henderson, North Las Vegas, Paradise, Spring
                    Valley
                  </li>
                </ul>
              </div>

              {/* Washington */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Washington:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Seattle, Tacoma, Spokane, Vancouver, Bellevue
                  </li>
                </ul>
              </div>

              {/* Oregon */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Oregon:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Portland, Salem, Eugene, Bend
                  </li>
                </ul>
              </div>

              {/* Colorado */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Colorado:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Denver, Colorado Springs, Boulder, Lakewood
                  </li>
                </ul>
              </div>

              {/* Utah */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Utah:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Salt Lake City, Provo, West Valley City
                  </li>
                </ul>
              </div>

              {/* Michigan */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Michigan:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Detroit, Grand Rapids, Ann Arbor
                  </li>
                </ul>
              </div>

              {/* Missouri */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Missouri:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    St. Louis, Kansas City, Springfield, Columbia
                  </li>
                </ul>
              </div>

              {/* Illinois */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Illinois:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Chicago, Aurora, Naperville, Rockford, Peoria, Springfield
                  </li>
                </ul>
              </div>

              {/* Indiana */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Indiana:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Indianapolis, Fort Wayne</li>
                </ul>
              </div>

              {/* Minnesota */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Minnesota:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Minneapolis, St. Paul, Maple Grove
                  </li>
                </ul>
              </div>

              {/* Iowa */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Iowa:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Des Moines, Iowa City, Cedar Rapids
                  </li>
                </ul>
              </div>

              {/* Kansas */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Kansas:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Wichita, Topeka, Overland Park
                  </li>
                </ul>
              </div>

              {/* Ohio */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Ohio:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Columbus, Cleveland, Cincinnati, Dayton
                  </li>
                </ul>
              </div>

              {/* Tennessee */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Tennessee:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Nashville, Memphis, Knoxville, Chattanooga
                  </li>
                </ul>
              </div>

              {/* Florida */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Florida:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Orlando, Miami, Jacksonville, Tampa, Fort Lauderdale,
                    Tallahassee, Cape Coral, Port St. Lucie
                  </li>
                </ul>
              </div>

              {/* Texas */}
              <div>
                <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2">
                  Texas:
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    Dallas, Austin, Houston, San Antonio, Fort Worth, El Paso,
                    Arlington, Corpus Christi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
