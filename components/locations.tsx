import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Northeast",
    states: "Connecticut, Massachusetts, New Jersey, New York, Pennsylvania, Rhode Island, Delaware",
    image: "/NorthEast.png",
    link: "/book-north-east",
  },
  {
    name: "South",
    states:
      "Florida, Georgia, Maryland, North Carolina, South Carolina, Virginia, Oklahoma, Louisiana, Missouri, Tennessee, Kentucky, Arkansas, and Texas",
    image: "/South.png",
    link: "/book-south",
  },
  {
    name: "West",
    states: "Arizona, Nevada, California, Utah, Colorado, Oregon, Washington, and New Mexico",
    image: "/West.png",
    link: "/book-west",
  },
  {
    name: "Midwest",
    states: "Minnesota, Illinois, Ohio, Michigan, Indiana, Mississippi, Iowa, Kansas, and Wisconsin",
    image: "/Midwest.png",
    link: "/book-online",
  },
]

const cities = [
  {
    name: "Phoenix, AZ",
    image: "/phoenix-arizona-cityscape-with-desert-mountains.jpg",
    phone: "646-508-8436",
    link: "/city/phoenix-private-chef-book-now",
  },
  {
    name: "New York, NY",
    image: "/nyc-night-skyline.png",
    phone: "646-508-8436",
    link: "/city/new-york-private-chef-book-now",
  },
  {
    name: "Delaware",
    image: "/philadelphia-skyline-with-river.jpg",
    phone: "646-508-8436",
    link: "/city/delaware-private-chef-book-now",
  },
  {
    name: "Miami, FL",
    image: "/miami-skyline-at-night-with-bridge.jpg",
    phone: "646-508-8436",
    link: "/city/miami-private-chef-book-now",
  },
  {
    name: "Austin, TX",
    image: "/austin-texas-skyline-with-bridge.jpg",
    phone: "646-508-8436",
    link: "/city/austin-private-chef-book-now",
  },
  {
    name: "New Jersey",
    image: "/new-jersey-city-skyline.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-new-jersey",
  },
  {
    name: "Houston, TX",
    image: "/houston-skyline-with-green-trees.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-houston",
  },
  {
    name: "Orlando, FL",
    image: "/orlando-florida-skyline-at-sunset-with-lake.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-at-home-orlando",
  },
  {
    name: "Virginia Beach, VA",
    image: "/virginia-beach-oceanfront-with-hotels.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-virginia",
  },
  {
    name: "Raleigh, NC",
    image: "/raleigh-north-carolina-skyline.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-raleigh",
  },
  {
    name: "Richmond, VA",
    image: "/richmond-virginia-skyline-with-river.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-richmond",
  },
  {
    name: "Connecticut",
    image: "/connecticut-cityscape.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-connecticut",
  },
  {
    name: "Dallas, TX",
    image: "/dallas-texas-skyline.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-dallas",
  },
  {
    name: "Philadelphia, PA",
    image: "/philadelphia-skyline-with-river.jpg",
    phone: "646-508-8436",
    link: "/city/philadelphia-private-chef-book-now",
  },
  {
    name: "San Antonio, TX",
    image: "/san-antonio-texas-skyline.jpg",
    phone: "646-508-8436",
    link: "/city/sanantonio-private-chef-book-now",
  },
  {
    name: "DC, Maryland, Virginia",
    image: "/washington-dc-skyline.jpg",
    description:
      "Please check out our locations for the full service area. if you don't see the area where you are at, Please contact us, we might still serve your area",
    link: "/contact-us",
    buttonText: "Contact Us",
  },
  {
    name: "Tucson, AZ",
    image: "/tucson-skyline.jpg",
    phone: "646-508-8436",
    link: "/city/hibachi-catering-tucson",
  },
  {
    name: "Nationwide Service",
    image: "/us-map-with-highlighted-states-showing-hibachi-ser.jpg",
    description:
      "Please check out our locations for the full service area. if you don't see the area where you are at, Please contact us, we might still serve your area",
    link: "/contact-us",
    buttonText: "Contact Us",
  },
]

const stateSlugMap: Record<string, string> = {
  Connecticut: "hibachi-catering-connecticut",
  Massachusetts: "hibachi-catering-massachusetts",
  "New York": "new-york-private-chef-book-now",
  "New Jersey": "hibachi-catering-new-jersey",
  Pennsylvania: "philadelphia-private-chef-book-now",
  "Rhode Island": "hibachi-at-home-rhode-island",
  Delaware: "delaware-private-chef-book-now",
  Maryland: "hibachi-catering-maryland",
  Virginia: "hibachi-catering-virginia",
  "West Virginia": "hibachi-catering-west-virginia",
  "North Carolina": "hibachi-catering-raleigh",
  "South Carolina": "hibachi-at-home-charleston",
  Texas: "hibachi-catering-dallas",
  Oklahoma: "hibachi-at-home-okc",
  Louisiana: "hibachi-at-home-new-orleans", // Mapping to generic south link via fallback if not found, but better to check locationData. Let's assume generic for now or closest.
  Missouri: "hibachi-at-home-st-louis",
  Tennessee: "hibachi-at-home-nashville",
  Kentucky: "hibachi-at-home-louisville",
  Arkansas: "hibachi-at-home-little-rock",
  Arizona: "phoenix-private-chef-book-now",
  California: "hibachi-at-home-los-angeles",
  Nevada: "hibachi-at-home-las-vegas",
  Utah: "hibachi-at-home-salt-lake-city",
  Oregon: "hibachi-at-home-portland-or",
  Colorado: "hibachi-at-home-denver",
  Washington: "hibachi-at-home-seattle",
  "New Mexico": "hibachi-at-home-albuquerque",
  Florida: "miami-private-chef-book-now",
  Georgia: "hibachi-at-home-atlanta",
  Ohio: "hibachi-at-home-columbus-oh",
  Michigan: "hibachi-at-home-detroit",
  Illinois: "hibachi-at-home-chicago",
  Minnesota: "hibachi-at-home-minneapolis",
  Indiana: "hibachi-at-home-indianapolis",
  Wisconsin: "hibachi-at-home-milwaukee",
  Kansas: "hibachi-at-home-kansas-city",
  Mississippi: "", // No specific city in data, will fall back to region link
  Iowa: "", // No specific city in data, will fall back to region link
}

function StateLinks({ states, regionLink }: { states: string; regionLink: string }) {
  const stateList = states.split(",").map((s) => s.trim().replace(/^and\s+/, ""))

  return (
    <p className="text-sm text-center text-muted-foreground">
      {stateList.map((state, i) => {
        const slug = stateSlugMap[state]
        const href = slug ? `/city/${slug}` : regionLink

        return (
          <span key={state}>
            <Link href={href} className="hover:text-primary hover:underline">
              {state}
            </Link>
            {i < stateList.length - 1 ? (i === stateList.length - 2 && states.includes("and") ? ", and " : ", ") : ""}
          </span>
        )
      })}
    </p>
  )
}

export function Locations() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance text-foreground">
          We Bring Hibachi to You – Nationwide Coverage
        </h2>
        <p className="text-xl text-center mb-6 font-semibold text-foreground">Serving All Across the U.S.</p>
        <p className="text-lg text-center mb-16 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
          From coast to coast, our mobile hibachi chefs deliver unforgettable backyard experiences. Popular service
          areas include:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {locations.map((location) => (
            <div key={location.name} className="group flex flex-col">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Link href={location.link}>
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 mb-2"
              >
                <Link href={location.link}>{location.name}</Link>
              </Button>
              {location.description ? (
                <p className="text-muted-foreground mb-3 leading-relaxed">{location.description}</p>
              ) : (
                <StateLinks states={location.states} regionLink={location.link} />
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.slice(0, -1).map((city) => (
            <div
              key={city.name}
              className="group bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Link href={city.link}>
                  <Image
                    src={city.image || "/placeholder.svg"}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <Link href={city.link} className="hover:underline hover:text-primary transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{city.name}</h3>
                </Link>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {(city as any).description ||
                    "Chef will cook for approximately 1 hour and 30 minutes. Customer must provide and set up tables, chairs, plates and utensils. We will take care the rest"}
                </p>
                <div className="mt-auto">
                  {city.phone && (
                    <p className="mb-4 text-foreground">
                      <span className="font-semibold">Call/Text:</span>{" "}
                      <a href={`tel:${city.phone}`} className="hover:underline hover:text-primary">
                        {city.phone}
                      </a>
                    </p>
                  )}
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
                  >
                    <Link href={city.link}>{(city as any).buttonText || "Book Now"}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <div
            key="Nationwide Service"
            className="group bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <Link href="/contact-us">
                <Image
                  src="/us-map-with-highlighted-states-showing-hibachi-ser.jpg"
                  alt="Nationwide Service"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <Link href="/contact-us" className="hover:underline hover:text-primary transition-colors">
                <h3 className="text-xl font-bold mb-2 text-foreground">Nationwide Service</h3>
              </Link>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Please check out our locations for the full service area. if you don't see the area where you are at,
                Please contact us, we might still serve your area
              </p>
              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
                >
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
