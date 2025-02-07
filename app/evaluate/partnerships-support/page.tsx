"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SurveyProgress } from "@/components/survey-progress"

export default function PartnershipsSupport() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    partnerships: "",
    support: "",
    funding: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically submit the form data
    // For now, we'll just console.log it
    console.log(formData)
    // Navigate to a thank you or results page
    router.push("/evaluate/thank-you")
  }

  return (
    <div className="flex min-h-screen">
      <SurveyProgress currentStep={6} />
      <div className="flex-1 p-8">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label>
                Do you have any strategic partnerships? If so, describe them. <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe your partnerships"
                className="mt-2"
                required
                value={formData.partnerships}
                onChange={(e) => setFormData({ ...formData, partnerships: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What kind of support do you need to succeed? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe the support you need"
                className="mt-2"
                required
                value={formData.support}
                onChange={(e) => setFormData({ ...formData, support: e.target.value })}
              />
            </div>

            <div>
              <Label>
                How much funding do you need and how do you plan to use it? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe your funding needs and plans"
                className="mt-2"
                required
                value={formData.funding}
                onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/evaluate/business-model")}
              className="border-[#17b7ba] text-[#17b7ba] hover:bg-[#17b7ba]/10"
            >
              Previous
            </Button>
            <Button type="submit" className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

