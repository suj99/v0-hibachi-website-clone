import Header from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Book Northeast | Backyard Hibachi 4U - Hibachi Catering Service',
  description: 'Book your private hibachi chef experience in the Northeast region. Select from New York, New Jersey, Philadelphia, Boston, and more locations.',
  keywords: 'hibachi northeast, hibachi New York, hibachi New Jersey, hibachi Philadelphia, hibachi Boston, private chef northeast'
}

const northeastLocations = [
  { name: 'New York', image: '/new-york-skyline.jpg', href: '#' },
  { name: 'Long Island', image: '/long-island-skyline.jpg', href: '#' },
  { name: 'Buffalo', image: '/buffalo-skyline.jpg', href: '#' },
  { name: 'Rochester', image: '/rochester-skyline.jpg', href: '#' },
  { name: 'New Jersey', image: '/new-jersey-cityscape.jpg', href: '#' },
  { name: 'Philadelphia', image: '/philadelphia-skyline.jpg', href: '#' },
  { name: 'Delaware', image: '/delaware-cityscape.jpg', href: '#' },
  { name: 'Connecticut', image: '/connecticut-skyline.jpg', href: '#' },
  { name: 'Rhode Island', image: '/rhode-island-landmark.jpg', href: '#' },
  { name: 'Massachusetts', image: '/massachusetts-lighthouse.jpg', href: '#' },
]

export default function BookNorthEastPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Backyard Hibachi 4U</h1>
            <p className="text-xl text-gray-700">
              Northeast Region - Select the Nearest Location to Book
            </p>
          </div>
        </section>

        {/* Location Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {northeastLocations.map((location) => (
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
