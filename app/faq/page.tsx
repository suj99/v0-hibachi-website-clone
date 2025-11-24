import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Backyard Hibachi For You?",
      answer:
        "Backyard Hibachi For You brings the fun, entertainment and flavors of Japanese hibachi cooking to your backyard with our best-rated mobile hibachi catering service.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve CT, NY, NJ, PA, DE, MD, Washington DC, VA (Virginia Beach, Richmond), NC (Raleigh), AZ (Phoenix, Tucson), FL (Miami, Orlando), TX (Dallas, Austin, Houston, San Antonio), Philadelphia, DMV and all surrounding areas.",
    },
    {
      question: "What is included in the hibachi experience?",
      answer:
        "Each person gets two proteins of their choice. Regular proteins include chicken, steak, salmon, shrimp, scallops, and tofu with no upcharge. Premium proteins available: Filet Mignon (+$5), Lobster (+$10).",
    },
    {
      question: "Is there a minimum spending requirement?",
      answer: "Yes, the minimum spending for a hibachi event is $500 plus traveling fees.",
    },
    {
      question: "Can I add appetizers?",
      answer: "Yes! We offer Gyoza (8 pieces) for $10 and Edamame for $6.",
    },
    {
      question: "Can I order extra proteins?",
      answer: "Extra proteins are available for $15 per order.",
    },
    {
      question: "How do I book an event?",
      answer:
        "You can book through our online booking system or contact us directly. We recommend booking at least 2 weeks in advance for best availability.",
    },
    {
      question: "What equipment do you provide?",
      answer:
        "We bring all necessary equipment including the hibachi grill, cooking utensils, and serving supplies. You just need to provide tables and seating for your guests.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Yes, we offer vegetarian options with tofu and can accommodate most dietary restrictions. Please inform us when booking.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require at least 48 hours notice for cancellations. Please contact us as soon as possible if you need to reschedule or cancel your event.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Our service has a base price of $55 per person with a $550 minimum . Gratuity for the chef are not included. Suggested gratuity is 20% of total bill. Our services are cash only. There is no deposit required, all payments are due the day of the event.",
    },
    {
      question: "What time will you expect the chef arrive?",
      answer:
        "The chef will arrive approximately 5- 10 minutes prior to reservation time. Our set up process is seamless and only takes a few minutes.",
    },
    {
      question: "Do you set up tables and chairs ?",
      answer:
        "No we do not provide tables and chairs. We provide the chef, grill, food, sake and the best unique experience! Customers need to provide utensils and table set ups. Please check out our Instagram @hibachiwithus to see the example how other customers set up. Feel free to contact us if you need help with the setup ideas.",
    },
    {
      question: "Do you cook indoor?",
      answer:
        "Yes We do. We cook both outdoor and indoor premises. We can cook at terraces, balconies, and under awnings.",
    },
    {
      question: "Do you cook with nuts or sesame products?",
      answer:
        "No , our food does not contain any nuts or sesame products. Please notify the booking agent of any food allergy of a customer may have! Please contact us and let the chef know too.",
    },
    {
      question: "Can you accommodate Gluten Free ?",
      answer:
        "Yes we have serviced many gluten free customers. We would ask that you bring your favorite gluten free soy sauce and teriyaki sauce for the chef to cook your portion separate !",
    },
    {
      question: "Any option for non-meat consumer?",
      answer:
        "We have tofu option for Vegetarian and Vegan. The price will stay the same. We will supplement their dishes with additional food like extra veggies, salad, and noodles.",
    },
    {
      question: "Can the customer provide their own proteins?",
      answer: "Sorry, we do not cook any protein or food provide by customers at this time.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl font-bold text-black mb-16">FAQ</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-bold text-xl text-black">{faq.question}</h3>
                <p className="text-gray-800 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
