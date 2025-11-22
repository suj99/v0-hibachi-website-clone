import Header from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Book South | Backyard Hibachi 4U - Hibachi Catering Service',
  description: 'Book your private hibachi chef experience in the South region. Select from Maryland, Virginia, Texas, Florida, and more locations.',
  keywords: 'hibachi south, hibachi Maryland, hibachi Texas, hibachi Florida, hibachi Virginia, private chef south'
}

const southLocations = [
  { name: 'Maryland', image: '/maryland-skyline.jpg', href: '#' },
  { name: 'Washington DC', image: '/washington-dc-skyline.jpg', href: '#' },
  { name: 'Virginia Beach', image: '/virginia-beach-skyline.jpg', href: '#' },
  { name: 'Richmond', image: '/richmond-skyline.jpg', href: '#' },
  { name: 'Raleigh', image: '/raleigh-skyline.jpg', href: '#' },
  { name: 'Charleston', image: '/charleston-skyline.jpg', href: '#' },
  { name: 'Orlando', image: '/orlando-skyline.jpg', href: '#' },
  { name: 'Miami', image: '/miami-skyline.jpg', href: '#' },
  { name: 'Austin', image: '/austin-texas-skyline.png', href: '#' },
  { name: 'Dallas', image: '/dallas-texas-skyline.jpg', href: '#' },
  { name: 'Houston', image: '/houston-texas-skyline.jpg', href: '#' },
  { name: 'San Antonio', image: '/san-antonio-skyline.jpg', href: '#' },
  { name: 'Atlanta GA', image: '/atlanta-skyline.jpg', href: '#' },
  { name: 'Outer Bank Area', image: '/outer-banks-beach.jpg', href: '#' },
]

export default function BookSouthPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Backyard Hibachi 4U</h1>
            <p className="text-xl text-gray-700">
              South Region - Select the Nearest Location to Book
            </p>
          </div>
        </section>

        {/* Location Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {southLocations.map((location) => (
                <div key={location.name} className="flex flex-col">
                  <div className="relative h-64 mb-4 overflow-hidden">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`${location.name} skyline`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href={location.href}
                    className="bg-red-600 text-white py-3 px-6 text-center font-semibold hover:bg-red-700 transition-colors"
                  >
                    Book {location.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
