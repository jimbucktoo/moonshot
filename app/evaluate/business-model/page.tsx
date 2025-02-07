"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SurveyProgress } from "@/components/survey-progress"

export default function BusinessModel() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    revenueModel: "",
    customerAcquisition: "",
    marketSize: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/evaluate/partnerships-support")
  }

  return (
    <div className="flex min-h-screen">
      <SurveyProgress currentStep={5} />
      <div className="flex-1 p-8">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label>
                What is your revenue model? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe your revenue model"
                className="mt-2"
                required
                value={formData.revenueModel}
                onChange={(e) => setFormData({ ...formData, revenueModel: e.target.value })}
              />
            </div>

            <div>
              <Label>
                How do you plan to acquire and retain customers? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe your customer acquisition and retention strategy"
                className="mt-2"
                required
                value={formData.customerAcquisition}
                onChange={(e) => setFormData({ ...formData, customerAcquisition: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What is the size of your target market? <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Estimate your target market size"
                className="mt-2"
                required
                value={formData.marketSize}
                onChange={(e) => setFormData({ ...formData, marketSize: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/evaluate/team-organization")}
              className="border-[#17b7ba] text-[#17b7ba] hover:bg-[#17b7ba]/10"
            >
              Previous
            </Button>
            <Button type="submit" className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

