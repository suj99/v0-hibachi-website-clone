'use client'

import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      {showBanner && (
        <div className="bg-secondary text-secondary-foreground py-3 px-4 text-center text-sm relative">
          <p>
            Don&apos;t forget follow us on{' '}
            <Link href="#" className="underline hover:opacity-80">
              Instagram
            </Link>{' '}
            and{' '}
            <Link href="#" className="underline hover:opacity-80">
              Facebook
            </Link>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      )}

      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="Hibachi with Us" className="h-12" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/faq" className="text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </Link>
            <Link href="/estimation" className="text-foreground hover:text-primary transition-colors font-medium">
              Estimation
            </Link>
            <Link href="/locations" className="text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/contact-us" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Social icons and CTA */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="/book-online">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
