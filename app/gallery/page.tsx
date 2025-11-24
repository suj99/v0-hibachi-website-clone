import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoGallery } from "@/components/video-gallery"
import Image from "next/image"

export default function GalleryPage() {
  const galleryVideos = [
    {
      thumbnail: "/hibachi-chef-cooking-with-dramatic-flames-on-outdo.jpg",
      title: "Backyard Hibachi Party",
    },
    {
      thumbnail: "/hibachi-chef-performing-tricks-at-outdoor-event.jpg",
      title: "Chef Performing Tricks",
    },
    {
      thumbnail: "/poolside-hibachi-experience-with-chef-and-flames.jpg",
      title: "Poolside Hibachi",
    },
    {
      thumbnail: "/family-enjoying-hibachi-dinner-outdoors.jpg",
      title: "Family Celebration",
    },
    {
      thumbnail: "/hibachi-chef-cooking-with-dramatic-flames-on-outdo.jpg",
      title: "Birthday Party Hibachi",
    },
    {
      thumbnail: "/hibachi-chef-performing-tricks-at-outdoor-event.jpg",
      title: "Corporate Event",
    },
    {
      thumbnail: "/poolside-hibachi-experience-with-chef-and-flames.jpg",
      title: "Wedding Reception",
    },
    {
      thumbnail: "/family-enjoying-hibachi-dinner-outdoors.jpg",
      title: "Graduation Party",
    },
    {
      thumbnail: "/hibachi-chef-cooking-with-dramatic-flames-on-outdo.jpg",
      title: "Anniversary Celebration",
    },
    {
      thumbnail: "/hibachi-chef-performing-tricks-at-outdoor-event.jpg",
      title: "Summer BBQ",
    },
    {
      thumbnail: "/poolside-hibachi-experience-with-chef-and-flames.jpg",
      title: "Holiday Gathering",
    },
    {
      thumbnail: "/family-enjoying-hibachi-dinner-outdoors.jpg",
      title: "Neighborhood Party",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">Gallery</h1>
            <p className="text-xl text-gray-300">Experience the excitement and entertainment of our hibachi events</p>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-black mb-4">Follow Our Journey on Instagram</h2>
              <p className="text-gray-700 text-lg">
                Tag us{" "}
                <a href="https://instagram.com/backyard_hibachi_4u" className="text-red-500 font-bold hover:underline">
                  @backyard_hibachi_4u
                </a>{" "}
                in your posts!
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
              {galleryVideos.map((video, index) => (
                <div key={index} className="relative aspect-square bg-gray-200 overflow-hidden group cursor-pointer">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <svg className="w-8 h-8 text-red-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-white font-bold text-sm">{video.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media CTA */}
            <div className="text-center">
              <a
                href="https://instagram.com/backyard_hibachi_4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white font-bold px-10 py-4 hover:bg-red-600 transition-colors"
              >
                View More on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <VideoGallery />

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-bold text-4xl mb-4">Ready to Create Your Own Memories?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your hibachi experience today and be featured in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/estimation"
                className="inline-block bg-red-500 text-white font-bold px-10 py-4 hover:bg-red-600 transition-colors"
              >
                Book Now
              </a>
              <a
                href="/contact-us"
                className="inline-block border-2 border-white text-white font-bold px-10 py-4 hover:bg-white hover:text-black transition-colors"
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
