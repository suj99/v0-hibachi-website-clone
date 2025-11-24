"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reviews = [
  {
    name: "Google Reviewer",
    text: "I wanted to do something different for my husband's 50th birthday. We invited friends and family and we were a total of 16 people. All I had to do was decorate my backyard a little bit and provide table ware/drinks. Lee, our hibachi chef...",
    rating: 5,
    date: "2 months ago",
    verified: true,
  },
  {
    name: "Razina Dixon",
    text: "What an amazing time we had! Jason was our Chef for our lady es Bible Study Brunch! We had great weather and our hibachi experience did Not disappoint. It was just like being at the restaurant. As you can. See from the photos, we had a ...",
    rating: 5,
    date: "2 months ago",
    verified: true,
  },
  {
    name: "Robin Magrin",
    text: "Had the BEST hibachi night at the Airbnb — the chef, Ryan, brought all the energy, made it so fun, and the food was next level. The vibes were amazing from start to finish, and the sake gun had everyone laughing and cheering. Such a unique and unforgettable experience — highly recommend if you want dinner that feels like a party!",
    rating: 5,
    date: "a month ago",
    verified: true,
  },
  {
    name: "Paige Chao",
    text: "Ryan had great hospitality and was so attentive during my friend's bachelorette weekend! It was so much fun and the food was so delicious! I would definitely book with Backyard Hibachi 4 U and request for Ryan! Thank you Ryan!",
    rating: 5,
    date: "2 months ago",
    verified: true,
  },
  {
    name: "Janine",
    text: "A1 Jimmy was AMAZING!! We had such a great and fun experience! Jimmy was interactive, funny, and all around awesome!! Would 10/10 have A1 Jimmy back again!!",
    rating: 5,
    date: "5 months ago",
    verified: true,
  },
]

const GOOGLE_REVIEW_LINK =
  "https://www.google.com/maps/place/Backyard+Hibachi+4U/@40.4461756,-74.2518857,17z/data=!3m1!4b1!4m6!3m5!1s0xc56bee21a488133:0x7442ecaa3c76adf2!8m2!3d40.4461756!4d-74.2518857"

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1) // mobile: 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2) // tablet: 2 slides
      } else {
        setSlidesPerView(5) // desktop: 5 slides
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const slideWidthPercent = 100 / slidesPerView

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What our customers say</h2>

        {/* Google rating header */}
        <div className="bg-gray-100 rounded-lg p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="text-2xl font-bold">Google</span>
                <span className="text-gray-600">Reviews</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-3xl font-bold">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm sm:text-base">(Verified Reviews)</span>
              </div>
            </div>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full sm:w-auto">
            <Link href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
              Review us on Google
            </Link>
          </Button>
        </div>

        {/* Reviews slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * slideWidthPercent}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="flex-shrink-0 px-2" style={{ width: `${slideWidthPercent}%` }}>
                  <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-900 mb-4 line-clamp-3">{review.text}</p>
                    <button className="text-blue-600 text-sm hover:underline">Read more</button>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-sm font-semibold">{review.name[0].toUpperCase()}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-semibold">{review.name}</p>
                          {review.verified && (
                            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
