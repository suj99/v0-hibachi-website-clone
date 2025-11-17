import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Locations } from '@/components/locations'
import { WhyChooseUs } from '@/components/why-choose-us'
import { VideoGallery } from '@/components/video-gallery'
import { SocialTags } from '@/components/social-tags'
import { GoogleReviews } from '@/components/google-reviews'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <Locations />
        <WhyChooseUs />
        <VideoGallery />
        <SocialTags />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  )
}
