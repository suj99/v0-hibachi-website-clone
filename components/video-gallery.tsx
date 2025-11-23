'use client'

import { Play } from 'lucide-react'

const videos = [
  {
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-17%20at%2012.01.07%E2%80%AFPM-7VACSJeMdYBwuZbDJ07COfTZhTRYuG.png',
    title: 'Hibachi chef cooking at backyard party',
  },
  {
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-17%20at%2012.01.07%E2%80%AFPM-7VACSJeMdYBwuZbDJ07COfTZhTRYuG.png',
    title: 'Outdoor hibachi catering event',
  },
  {
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-17%20at%2012.01.07%E2%80%AFPM-7VACSJeMdYBwuZbDJ07COfTZhTRYuG.png',
    title: 'Private chef hibachi experience',
  },
  {
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-17%20at%2012.01.07%E2%80%AFPM-7VACSJeMdYBwuZbDJ07COfTZhTRYuG.png',
    title: 'Book your next event with us',
  },
]

export function VideoGallery() {
  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={`/placeholder.svg?height=400&width=600&query=hibachi chef cooking with flames at outdoor party`}
                alt={video.title}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              {index === 3 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-white text-center">
                  <p className="font-bold">book your next event with us</p>
                  <p className="text-sm">at backyardhibachi4u.com</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
