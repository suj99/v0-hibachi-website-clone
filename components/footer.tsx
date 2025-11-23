import Link from "next/link"
import Image from "next/image"
import { SubscribeForm } from "@/components/subscribe-form"

export function Footer() {
  return (
    <footer className="bg-white py-16 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div>
            <div className="mb-6">
              <Image src="/logo.svg" alt="Hibachi with Us" width={200} height={80} className="h-16 w-auto" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Backyard Hibachi For You brings the fun, entertainment and flavors of Japanese hibachi cooking to your backyard
              with our best-rated mobile hibachi catering service in State of CT, NY, NJ, PA, DE, MD, Washington DC,
              VA(Virginia Beach, Richmond), NC(Raleigh) AZ(Phoenix, Tucson), FL(Miami, Orlando), TX(Dallas, Austin,
              Houston, San Antonio), Philadelphia, DMV and all surrounding areas
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick link</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/faq" className="text-gray-700 hover:text-red-500 underline transition-colors">
                FAQ
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-red-500 underline transition-colors">
                Contact us
              </Link>
              <Link
                href="/book-online"
                className="text-red-500 hover:text-red-600 underline transition-colors font-medium"
              >
                Book now
              </Link>
              <Link href="/sitemap" className="text-gray-700 hover:text-red-500 underline transition-colors">
                Sitemap
              </Link>
              <Link href="/blogs" className="text-gray-700 hover:text-red-500 underline transition-colors">
                Blogs
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-red-500 underline transition-colors">
                Locations
              </Link>
            </nav>
          </div>

          {/* Newsletter signup */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Subscribe for 2 Free Appetizer</h3>
            <SubscribeForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Backyard Hibachi For You. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
