import Header from "@/components/header"
import Footer from "@/components/footer"
import { Locations } from "@/components/locations"

const locations = [
  {
    id: "phoenix",
    name: "Phoenix Private Chef",
    description:
      "Ready to elevate your dining experience in Phoenix? Click below to book your private hibachi chef online now!",
    duration: "1 hour 30 minutes",
    image: "/phoenix-skyline-with-mountains.jpg",
  },
  {
    id: "austin",
    name: "Austin Private Chef",
    description:
      "Get ready for an unforgettable meal in Austin! Secure your private hibachi chef by booking online today.",
    duration: "1 hour 30 minutes",
    image: "/austin-texas-skyline.png",
  },
  {
    id: "dallas",
    name: "Dallas Private Chef",
    description: "Book your private hibachi chef online and savor the flavors of Dallas in the comfort of your home.",
    duration: "1 hour 30 minutes",
    image: "/dallas-texas-skyline.jpg",
  },
  {
    id: "new-york",
    name: "New York Private Chef",
    description:
      "Experience the magic of hibachi in New York. Reserve your private chef online for a unique culinary journey.",
    duration: "1 hour 30 minutes",
    image: "/nyc-skyline-twilight.png",
  },
  {
    id: "new-jersey",
    name: "New Jersey Private Chef",
    description: "Bring the hibachi experience to New Jersey. Book your private chef online and savor the excitement.",
    duration: "1 hour 30 minutes",
    image: "/new-jersey-cityscape.jpg",
  },
  {
    id: "philadelphia",
    name: "PA Private Chef",
    description:
      "Online booking is just a click away to enjoy a private hibachi chef in Philadelphia. Reserve your table now!",
    duration: "1 hour 30 minutes",
    image: "/philadelphia-skyline.jpg",
  },
  {
    id: "delaware",
    name: "Delaware Private Chef",
    description:
      "Delaware's best hibachi chefs are at your service. Secure your unique dining experience by booking online.",
    duration: "1 hour 30 minutes",
    image: "/delaware-cityscape.jpg",
  },
  {
    id: "houston",
    name: "Houston Private Chef",
    description:
      "Discover the taste of Houston with a private hibachi chef. Click here to book your exclusive Hibachi at home experience online",
    duration: "1 hour 30 minutes",
    image: "/houston-texas-skyline.jpg",
  },
  {
    id: "san-antonio",
    name: "San Antonio Private Chef",
    description:
      "Ready for a hibachi feast in San Antonio? Book your private hibachi chef online and savor the flavors of the city",
    duration: "1 hour 30 minutes",
    image: "/san-antonio-texas-skyline.jpg",
  },
  {
    id: "miami",
    name: "Miami Private Hibachi Chef",
    description:
      "Ready for a unique hibachi experience in Miami? Book our mobile hibachi chef online and savor the flavors of the city",
    duration: "1 hour 30 minutes",
    image: "/miami-florida-skyline.jpg",
  },
  {
    id: "virginia-beach",
    name: "Virginia Beach Private Hibachi Chef",
    description:
      "Experience the sizzle and spectacle of our hibachi event – book now for an unforgettable culinary adventure in Hampton Roads!",
    duration: "1 hour 30 minutes",
    image: "/virginia-beach-oceanfront.png",
  },
  {
    id: "dmv",
    name: "DMV Private Hibachi Chef",
    description:
      "Experience the sizzle and spectacle of our hibachi event – book now for an unforgettable culinary adventure in Washington D.C, Maryland, and Virginia!",
    duration: "1 hour 30 minutes",
    image: "/washington-dc-monuments.jpg",
  },
  {
    id: "richmond",
    name: "Richmond Private Hibachi Chef",
    description:
      "Richmond Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in RVA( Richmond VA)",
    duration: "1 hour 30 minutes",
    image: "/richmond-virginia-skyline.png",
  },
  {
    id: "connecticut",
    name: "Connecticut Private Hibachi Chef",
    description:
      "Connecticut Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in Connecticut",
    duration: "1 hour 30 minutes",
    image: "/connecticut-cityscape.jpg",
  },
  {
    id: "raleigh",
    name: "Raleigh Private Hibachi Chef",
    description:
      "Raleigh Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in Raleigh NC",
    duration: "1 hour 30 minutes",
    image: "/raleigh-north-carolina-skyline.jpg",
  },
  {
    id: "rochester-buffalo",
    name: "Rochester-Buffalo Private Hibachi Chef",
    description:
      "Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in Rochester-Buffalo area",
    duration: "1 hour 30 minutes",
    image: "/rochester-new-york-cityscape.jpg",
  },
  {
    id: "orlando",
    name: "Orlando Private Hibachi Chef",
    description:
      "Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in Orlando area",
    duration: "1 hour 30 minutes",
    image: "/orlando-florida-skyline.jpg",
  },
  {
    id: "charleston",
    name: "Charleston Private Hibachi Chef",
    description:
      "Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in Charleston area",
    duration: "1 hour 30 minutes",
    image: "/charleston-south-carolina-historic-district.jpg",
  },
  {
    id: "tucson",
    name: "Tucson Private Hibachi Chef",
    description:
      "Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in Tucson area",
    duration: "1 hour 30 minutes",
    image: "/tucson-arizona-desert-landscape.jpg",
  },
  {
    id: "rhode-island",
    name: "Rhode Island Private Hibachi Chef",
    description:
      "Private Hibachi Chef provides an exclusive and interactive hibachi dining experience, perfect for any special occasion or private gathering in Rhode Island area",
    duration: "1 hour 30 minutes",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BookOnlinePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Book a Private Hibachi Chef Today!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-8 italic">
            Experience the thrill of a private hibachi chef cooking in your home! We serve Arizona(Phoenix, Scottsdale,
            Tucson), Texas(Austin, Dallas, Houston, and San Antonio) Connecticut, New York, New Jersey, Philadelphia,
            Delaware, Maryland, Virginia(Virginia Beach, Richmond), DMV(Washington DC, Maryland, Virginia), North
            Carolina(Raleigh, Durham), South Carolina(Charleston, Columbia), Florida(Miami, Orlando), Rhode Island more
            coming soon.
          </p>
          <p className="text-lg font-semibold text-foreground">Book now for an unforgettable dining experience.</p>
        </div>
      </section>

      {/* Regional Maps Section */}
      <Locations />

      <Footer />
    </main>
  )
}
