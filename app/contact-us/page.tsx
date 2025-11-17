'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    location: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('[v0] Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch to book your hibachi experience
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 border-2 border-gray-200">
                <h2 className="font-bold text-3xl text-black mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-bold text-black mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-bold text-black mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-bold text-black mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="date"
                        className="block font-bold text-black mb-2"
                      >
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guests"
                        className="block font-bold text-black mb-2"
                      >
                        Number of Guests
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block font-bold text-black mb-2"
                    >
                      Event Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      placeholder="City, State"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-bold text-black mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event..."
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white font-bold py-4 hover:bg-red-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-black text-white p-8">
                  <h2 className="font-bold text-3xl mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-red-500">
                        Email
                      </h3>
                      <a
                        href="mailto:info@hibachiwithus.com"
                        className="text-lg hover:text-red-500 transition-colors"
                      >
                        info@hibachiwithus.com
                      </a>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-2 text-red-500">
                        Phone
                      </h3>
                      <a
                        href="tel:+15551234567"
                        className="text-lg hover:text-red-500 transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-2 text-red-500">
                        Service Hours
                      </h3>
                      <p className="text-lg">Monday - Sunday</p>
                      <p className="text-lg">10:00 AM - 10:00 PM</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-2 text-red-500">
                        Follow Us
                      </h3>
                      <div className="flex gap-4">
                        <a
                          href="https://instagram.com/hibachiwithus"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors"
                        >
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a
                          href="https://facebook.com/hibachiwithus"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors"
                        >
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-8">
                  <h3 className="font-bold text-2xl text-black mb-4">
                    Quick Response
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We typically respond to all inquiries within 2-4 hours
                    during business hours. For urgent requests, please call us
                    directly.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Minimum Notice:</strong> We recommend booking at
                    least 2 weeks in advance for best availability.
                  </p>
                </div>

                <div className="bg-red-500 text-white p-8 text-center">
                  <h3 className="font-bold text-2xl mb-4">
                    Ready to Book Now?
                  </h3>
                  <p className="mb-6">
                    Skip the form and schedule your event directly
                  </p>
                  <a
                    href="/estimation"
                    className="inline-block bg-white text-red-500 font-bold px-8 py-3 hover:bg-gray-100 transition-colors"
                  >
                    View Pricing & Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-bold text-3xl text-black mb-6">
              We Serve Multiple States
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              CT, NY, NJ, PA, DE, MD, Washington DC, VA (Virginia Beach,
              Richmond), NC (Raleigh), AZ (Phoenix, Tucson), FL (Miami,
              Orlando), TX (Dallas, Austin, Houston, San Antonio), Philadelphia,
              DMV and all surrounding areas
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
