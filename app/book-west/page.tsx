import Header from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Book West | Backyard Hibachi 4U - Hibachi Catering Service',
  description: 'Book your private hibachi chef experience in the West region. Select from Phoenix, Tucson, and more locations.',
  keywords: 'hibachi west, hibachi Phoenix, hibachi Tucson, hibachi Arizona, private chef west'
}

const westLocations = [
  { name: 'Phoenix', image: '/phoenix-skyline-with-mountains.jpg', href: '#' },
  { name: 'Tucson', image: '/tucson-skyline.jpg', href: '#' },
]

export default function BookWestPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Backyard Hibachi 4U</h1>
            <p className="text-xl text-gray-700">
              West Region - Select the Nearest Location to Book
            </p>
          </div>
        </section>

        {/* Location Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {westLocations.map((location) => (
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
