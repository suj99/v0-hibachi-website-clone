"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      {showBanner && (
        <div className="bg-secondary text-secondary-foreground py-3 px-4 text-center text-sm relative">
          <p>
            Don&apos;t forget follow us on{" "}
            <Link href="https://www.instagram.com/backyard_hibachi_4u" className="underline hover:opacity-80">
              Instagram
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.facebook.com/people/Backyard-Hibachi-4U/61564969375741/"
              className="underline hover:opacity-80"
            >
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
            <Image src="/logo.svg" alt="Backyard Hibachi For You" width={120} height={120} className="h-12 w-auto" />
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
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://www.facebook.com/people/Backyard-Hibachi-4U/61564969375741/"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/backyard_hibachi_4u"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="/book-online">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold">
                Book Online
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="/faq" className="text-lg font-medium hover:text-primary">
                  FAQ
                </Link>
                <Link href="/estimation" className="text-lg font-medium hover:text-primary">
                  Estimation
                </Link>
                <Link href="/locations" className="text-lg font-medium hover:text-primary">
                  Locations
                </Link>
                <Link href="/gallery" className="text-lg font-medium hover:text-primary">
                  Gallery
                </Link>
                <Link href="/contact-us" className="text-lg font-medium hover:text-primary">
                  Contact Us
                </Link>
                <Link href="/book-online">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Book Online</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}

export default Header
