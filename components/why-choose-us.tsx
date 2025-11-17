import { Button } from '@/components/ui/button'

const features = [
  {
    title: 'Private Hibachi Chef',
    description: 'Our skilled hibachi chefs are available to turn your home into a culinary spectacle. Whether it\'s a special occasion, a family gathering, or a romantic dinner for two, our chefs will tailor the experience to your preferences.',
  },
  {
    title: 'Convenience and Privacy',
    description: 'Say goodbye to crowded restaurants and waiting times. Enjoy an intimate and exclusive dining experience right in your own home. We handle all the cooking, leaving you free to relax and enjoy the company of your guests.',
  },
  {
    title: 'Gourmet Cuisine',
    description: 'Indulge in the finest cuisine, featuring fresh, high-quality ingredients. Our menu includes an array of hibachi classics, from succulent steak and tender chicken to delectable seafood and vegetarian options.',
  },
  {
    title: 'Booking Your Private Hibachi Experience',
    description: 'Booking a private hibachi chef is easy. Simply choose your preferred date, discuss your menu options, and let us handle the rest. We bring everything needed for the perfect hibachi experience, from the grill to the ingredients.',
  },
  {
    title: 'Entertainment and Expertise',
    description: 'Our Mobile hibachi chefs are not just skilled in the art of cooking; they\'re also entertainers who\'ll captivate your guests with their culinary prowess. Witness dazzling knife tricks, fiery grill performances, and engaging interactions that make every meal an event to remember.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance italic">
          Why Choose Us?
        </h2>

        <div className="space-y-12 mb-12">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg leading-relaxed italic font-semibold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg leading-relaxed italic font-semibold mb-8">
            Make your next gathering a memorable one with our private hibachi chef service. 
            We're here to bring the sizzle and excitement of hibachi to your doorstep. 
            Contact us today to book an unforgettable dining experience in the comfort of your home.
          </p>
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-bold rounded-none"
          >
            Book Online
          </Button>
        </div>
      </div>
    </section>
  )
}
