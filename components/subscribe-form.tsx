"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribe } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"

export function SubscribeForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    try {
      const result = await subscribe(formData)
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        })
      } else {
        toast({
          title: "Success",
          description: result.success,
        })
        // Reset the form
        const form = document.getElementById("subscribe-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form id="subscribe-form" action={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="flex-1 border-gray-300 rounded-none"
      />
      <Button type="submit" disabled={isLoading} className="bg-red-500 hover:bg-red-600 text-white px-8 rounded-none">
        {isLoading ? "Signing Up..." : "Sign Up"}
      </Button>
    </form>
  )
}
