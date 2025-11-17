import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is Hibachi with Us?',
      answer:
        'Hibachi with Us brings the fun, entertainment and flavors of Japanese hibachi cooking to your backyard with our best-rated mobile hibachi catering service.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve CT, NY, NJ, PA, DE, MD, Washington DC, VA (Virginia Beach, Richmond), NC (Raleigh), AZ (Phoenix, Tucson), FL (Miami, Orlando), TX (Dallas, Austin, Houston, San Antonio), Philadelphia, DMV and all surrounding areas.',
    },
    {
      question: 'What is included in the hibachi experience?',
      answer:
        'Each person gets two proteins of their choice. Regular proteins include chicken, steak, salmon, shrimp, scallops, and tofu with no upcharge. Premium proteins available: Filet Mignon (+$5), Lobster (+$10).',
    },
    {
      question: 'Is there a minimum spending requirement?',
      answer:
        'Yes, the minimum spending for a hibachi event is $500 plus traveling fees.',
    },
    {
      question: 'Can I add appetizers?',
      answer:
        'Yes! We offer Gyoza (8 pieces) for $10 and Edamame for $6.',
    },
    {
      question: 'Can I order extra proteins?',
      answer:
        'Extra proteins are available for $15 per order.',
    },
    {
      question: 'How do I book an event?',
      answer:
        'You can book through our online booking system or contact us directly. We recommend booking at least 2 weeks in advance for best availability.',
    },
    {
      question: 'What equipment do you provide?',
      answer:
        'We bring all necessary equipment including the hibachi grill, cooking utensils, and serving supplies. You just need to provide tables and seating for your guests.',
    },
    {
      question: 'Do you accommodate dietary restrictions?',
      answer:
        'Yes, we offer vegetarian options with tofu and can accommodate most dietary restrictions. Please inform us when booking.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We require at least 48 hours notice for cancellations. Please contact us as soon as possible if you need to reschedule or cancel your event.',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to know about our hibachi catering service
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-bold text-xl text-black mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gray-50 p-12">
              <h2 className="font-bold text-3xl text-black mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                If you have questions regarding our service, please do not
                hesitate to contact us
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-red-500 text-white font-bold px-10 py-4 hover:bg-red-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
