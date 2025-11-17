import Image from 'next/image'
import { Button } from '@/components/ui/button'

const locations = [
  {
    name: 'Northeast',
    states: 'Connecticut, Massachusetts, New York, New Jersey, Pennsylvania',
    image: '/northeast-united-states-map-with-highlighted-state.jpg',
  },
  {
    name: 'South',
    states: 'Florida, Georgia, Maryland, North Carolina, Virginia, West Virginia, Texas',
    image: '/southern-united-states-map-with-highlighted-states.jpg',
  },
  {
    name: 'West',
    states: 'Arizona, Nevada, California, Utah, Oregon, Colorado, Montana, and Washington',
    image: '/western-united-states-map-with-highlighted-states.jpg',
  },
  {
    name: 'Midwest',
    states: 'Minnesota, Illinois, Ohio, Michigan, Indiana, Wisconsin, Kansas',
    image: '/midwest-united-states-map-with-highlighted-states.jpg',
  },
]

const cities = [
  {
    name: 'Phoenix, AZ',
    image: '/phoenix-arizona-cityscape-with-desert-mountains.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'New York, NY',
    image: '/nyc-night-skyline.png',
    phone: '602-767-2964',
  },
  {
    name: 'Delaware',
    image: '/philadelphia-skyline-with-river.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Miami, FL',
    image: '/miami-skyline-at-night-with-bridge.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Austin, TX',
    image: '/austin-texas-skyline-with-bridge.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'New Jersey',
    image: '/new-jersey-city-skyline.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Houston, TX',
    image: '/houston-skyline-with-green-trees.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Orlando, FL',
    image: '/orlando-florida-skyline-at-sunset-with-lake.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Virginia Beach, VA',
    image: '/virginia-beach-oceanfront-with-hotels.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Raleigh, NC',
    image: '/raleigh-north-carolina-skyline.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Richmond, VA',
    image: '/richmond-virginia-skyline-with-river.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'Connecticut',
    image: '/placeholder.svg?height=400&width=600',
    phone: '602-767-2964',
  },
  {
    name: 'Dallas, TX',
    image: '/placeholder.svg?height=400&width=600',
    phone: '602-767-2964',
  },
  {
    name: 'Philadelphia, PA',
    image: '/philadelphia-skyline-with-river.jpg',
    phone: '602-767-2964',
  },
  {
    name: 'San Antonio, TX',
    image: '/placeholder.svg?height=400&width=600',
    phone: '602-767-2964',
  },
  {
    name: 'DC, Maryland, Virginia',
    image: '/placeholder.svg?height=400&width=600',
    phone: '602-767-2964',
  },
  {
    name: 'Tucson, AZ',
    image: '/placeholder.svg?height=400&width=600',
    phone: '602-767-2964',
  },
]

export function Locations() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          We Bring Hibachi to You – Nationwide Coverage
        </h2>
        <p className="text-xl text-center mb-6 font-semibold">
          Serving All Across the U.S.
        </p>
        <p className="text-lg text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          From coast to coast, our mobile hibachi chefs deliver unforgettable backyard 
          experiences. Popular service areas include:
        </p>

        {/* Regional Maps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {locations.map((location) => (
            <div key={location.name} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-none mb-2"
              >
                {location.name}
              </Button>
              <p className="text-sm text-center text-gray-700">
                {location.states}
              </p>
            </div>
          ))}
        </div>

        {/* City Locations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city.name} className="group">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{city.name}</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Chef will cook for approximately 1 hour and 30 minutes. 
                Customer must provide and set up tables, chairs, plates and utensils. 
                We will take care the rest
              </p>
              <p className="mb-4">
                <span className="font-semibold">Call/Text:</span> {city.phone}
              </p>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-none"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
