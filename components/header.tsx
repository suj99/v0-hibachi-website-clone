'use client'

import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      {/* Top banner */}
      {showBanner && (
        <div className="bg-black text-white py-3 px-4 text-center text-sm relative">
          <p>
            Don&apos;t forget follow us on{' '}
            <Link href="#" className="underline hover:text-gray-300">
              Instagram
            </Link>{' '}
            and{' '}
            <Link href="#" className="underline hover:text-gray-300">
              Facebook
            </Link>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="Hibachi with Us" className="h-12" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-900 hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/faq" className="text-gray-900 hover:text-red-500 transition-colors">
              FAQ
            </Link>
            <Link href="/estimation" className="text-gray-900 hover:text-red-500 transition-colors">
              Estimation
            </Link>
            <Link href="/locations" className="text-gray-900 hover:text-red-500 transition-colors">
              Locations
            </Link>
            <Link href="/gallery" className="text-gray-900 hover:text-red-500 transition-colors">
              Gallery
            </Link>
            <Link href="/contact-us" className="text-gray-900 hover:text-red-500 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Social icons and CTA */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-900 hover:text-red-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-none">
              Book Online
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
