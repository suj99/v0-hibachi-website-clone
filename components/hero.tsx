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
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Red Wave Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
            fill="#EF4444"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Hibachi at Home – Book a Private Chef Anywhere in the U.S.
        </h1>
        <Button 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-lg font-semibold rounded-none"
        >
          Book Now
        </Button>
      </div>
    </section>
  )
}
