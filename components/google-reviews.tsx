'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const reviews = [
  {
    name: 'daniel graves',
    text: 'Steven did great!',
    rating: 5,
    date: '1 day ago',
    verified: true,
  },
  {
    name: 'Scottie Hervey',
    text: 'Daniel was great!',
    rating: 5,
    date: '2 days ago',
    verified: true,
  },
  {
    name: 'HPPH22',
    text: 'Seven was great!',
    rating: 5,
    date: '2 days ago',
    verified: true,
  },
  {
    name: 'Sterling Joiner',
    text: 'Had the best experience! Steven Ching and Lee were the most fun and gave my...',
    rating: 5,
    date: '2 days ago',
    verified: true,
  },
  {
    name: 'Alyssa House',
    text: 'The best! We had so much fun, the food was delish, and the sake was flowing!',
    rating: 5,
    date: '2 days ago',
    verified: true,
  },
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What our customers say</h2>

        {/* Google rating header */}
        <div className="bg-gray-100 rounded-lg p-8 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold">Google</span>
                <span className="text-gray-600">Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(1,169)</span>
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Review us on Google
          </Button>
        </div>

        {/* Reviews slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-1/5 flex-shrink-0 px-2">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
