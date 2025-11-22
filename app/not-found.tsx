import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 text-foreground">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Button asChild className="bg-red-500 hover:bg-red-600">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
