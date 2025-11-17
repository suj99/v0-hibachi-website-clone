import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hibachi-chef-cooking-with-dramatic-flames-on-outdo.jpg"
          alt="Hibachi chef cooking"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-background/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-balance drop-shadow-2xl">
          Hibachi at Home – Book a Private Chef Anywhere in the U.S.
        </h1>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-bold shadow-2xl"
        >
          Book Now
        </Button>
      </div>
    </section>
  )
}
