import { notFound } from "next/navigation"
import { locationData } from "@/lib/location-data"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FAQ } from "@/components/faq"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cityData = locationData.find((loc) => loc.slug === slug)

  if (!cityData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section customized for the city */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hibachi-chef-cooking-with-dramatic-flames-on-outdo.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Best Mobile Hibachi Catering in <span className="text-red-500">{cityData.name}</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            We bring the hibachi grill and private chef to your backyard in {cityData.state}. Experience the
            entertainment and delicious food of Japanese steakhouse dining at home.
          </p>
          <Button
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-6 rounded-none"
            asChild
          >
            <Link href="/book-online">Book Your Party Now</Link>
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-[60px] fill-background">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2">
            Hibachi Catering Cost in <span className="text-red-500">{cityData.name}</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Top rated hibachi mobile catering service at an affordable price.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Adults</h3>
              <div className="text-5xl font-bold text-red-500 mb-2">$50.00</div>
              <p className="text-gray-500 mb-6">per person</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Choice of 2 Proteins (Chicken, Steak, Shrimp, Scallops, Salmon, Tofu, Filet Mignon +$5, Lobster Tail
                    +$10)
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Includes Fried Rice & Vegetables</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Includes Side Salad</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Full Hibachi Performance</span>
                </li>
              </ul>
              <Button className="w-full bg-red-500 hover:bg-red-600" asChild>
                <Link href="/book-online">Book Now</Link>
              </Button>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Kids (Under 12)</h3>
              <div className="text-5xl font-bold text-red-500 mb-2">$25.00</div>
              <p className="text-gray-500 mb-6">per person</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choice of 2 Proteins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Includes Fried Rice & Vegetables</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Same Great Entertainment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Perfect Portion Size</span>
                </li>
              </ul>
              <Button className="w-full bg-red-500 hover:bg-red-600" asChild>
                <Link href="/book-online">Book Now</Link>
              </Button>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500 italic">
            * $500.00 minimum for all parties. Travel fees may apply depending on your location in {cityData.state}.
          </p>
        </div>
      </section>

      <HowItWorks />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Serving {cityData.name} and Surrounding Areas</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our private hibachi chefs travel directly to your home, workplace, or event venue in {cityData.name},{" "}
            {cityData.state}. We handle everything from cooking to cleaning, so you can enjoy the party!
          </p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-bold px-8" asChild>
            <Link href="/locations">View All Locations</Link>
          </Button>
        </div>
      </section>

      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  )
}
