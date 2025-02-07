"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"

export default function ThankYou() {
  const router = useRouter()

  useEffect(() => {
    // Simulate loading time for report generation
    const timer = setTimeout(() => {
      router.push("/evaluate/report")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-[#f6f3f3] flex items-center justify-center">
      <Card className="max-w-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-[#17b7ba] mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We're analyzing your responses and generating your startup evaluation report...
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-[#17b7ba] border-t-transparent rounded-full animate-spin" />
        </div>
      </Card>
    </div>
  )
}

