import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EstimationCalculator } from "@/components/estimation-calculator"

export default function EstimationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="font-bold text-4xl md:text-5xl text-black mb-8">Hibachi at Home Cost Estimation</h1>

            <div className="text-black space-y-4 mb-12">
              <p>
                Each person gets two proteins, regular protein with no upcharge (chicken, steak, salmon, shrimp,
                scallops, tofu), Premium proteins: Filet Mignon +$5, Lobster +$10, Appetizers: $10 Gyoza(8), $6 Edamame
              </p>
              <p>Extra proteins: $15 per order</p>
              <p>the traveling fees are various and depends on the location</p>
              <p>
                Minimum spending for a hibachi event is $550 plus the traveling fees. If you have questions regarding
                the estimation please do not hesitate to{" "}
                <a href="/contact-us" className="text-red-500 underline">
                  contact us
                </a>
              </p>
            </div>

            <EstimationCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
