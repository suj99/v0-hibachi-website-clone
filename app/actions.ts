"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function subscribe(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { error: "Email is required" }
  }

  const supabase = await createClient()

  const { error } = await supabase.from("subscribers").insert({ email })

  if (error) {
    if (error.code === "23505") {
      return { error: "You are already subscribed!" }
    }
    return { error: "Something went wrong. Please try again." }
  }

  revalidatePath("/")
  return { success: "Thank you for subscribing!" }
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const date = formData.get("date") as string
  const guests = formData.get("guests") as string
  const location = formData.get("location") as string
  const message = formData.get("message") as string

  if (!name || !email || !phone || !location) {
    return { error: "Please fill in all required fields." }
  }

  const supabase = await createClient()

  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    phone,
    event_date: date || null,
    guests: guests ? Number.parseInt(guests) : null,
    location,
    message,
  })

  if (error) {
    console.error("Error submitting contact form:", error)
    return { error: "Something went wrong. Please try again." }
  }

  return { success: "Your message has been sent successfully! We will get back to you soon." }
}
