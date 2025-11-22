import { Accordion } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is the price?",
      answer:
        "$55.00 per person (12 years old and over) with a $500.00 minimum for all parties. $25.00 per child (12 years old and under). No charge for 4 and under (2 proteins only). All prices do not include gratuity and tax.",
    },
    {
      question: "What is included in the price?",
      answer:
        "The price includes the private hibachi chef, the grill, the full hibachi performance, and the food (choice of 2 proteins, fried rice, vegetables, and side salad).",
    },
    {
      question: "Do you provide tables and chairs?",
      answer:
        "No, we do not provide tables and chairs. You must provide enough tables and chairs for your party setup. We only provide the chef and the grill.",
    },
    {
      question: "What proteins can I choose?",
      answer:
        "Each person gets a choice of 2 proteins: Chicken, Steak, Shrimp, Scallops, Salmon, Tofu. Premium upgrades available: Filet Mignon (+$5), Lobster Tail (+$10).",
    },
    {
      question: "Is there a travel fee?",
      answer:
        "Depending on your location, a travel fee may apply. This helps cover the chef's transportation costs to bring the hibachi experience directly to your backyard.",
    },
    {
      question: "Do you cook inside or outside?",
      answer:
        "We cook primarily outside. We can cook inside if there is proper ventilation or if it is a well-ventilated garage area, but outdoor setups (backyard, patio, deck) are preferred for the best experience.",
    },
    {
      question: "What if it rains?",
      answer:
        "You must have a backup plan for rain, such as a tent, garage, or covered patio. We can cook under a tent or covering. If you cancel due to rain without rescheduling within our policy window, cancellation fees may apply.",
    },
    {
      question: "How do I book?",
      answer:
        "You can book directly online through our website. Choose your location/region to find the appropriate booking form. A deposit is typically required to secure your date and time.",
    },
    {
      question: "Do you accommodate allergies?",
      answer:
        "Yes, please let us know of any food allergies (gluten-free, shellfish, etc.) when booking or before the event starts so our chef can prepare accordingly.",
    },
    {
      question: "Do you provide plates and utensils?",
      answer: "No, customers are responsible for providing plates, utensils, and napkins for their guests.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">FAQ</h2>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full grid md:grid-cols-3 gap-6 items-start">
            {/* Splitting into columns for visual balance as per the design */}
            <div className="space-y-6 md:col-span-3 grid md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-4">
                {faqs.slice(0, 4).map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              {/* Column 2 */}
              <div className="space-y-4">
                {faqs.slice(4, 7).map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              {/* Column 3 */}
              <div className="space-y-4">
                {faqs.slice(7, 10).map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
