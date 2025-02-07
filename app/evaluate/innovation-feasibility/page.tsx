"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SurveyProgress } from "@/components/survey-progress"

export default function InnovationFeasibility() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    innovation: "",
    feasibility: "",
    challenges: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/evaluate/team-organization")
  }

  return (
    <div className="flex min-h-screen">
      <SurveyProgress currentStep={3} />
      <div className="flex-1 p-8">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label>
                How is your product innovative? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe your product's innovative aspects"
                className="mt-2"
                required
                value={formData.innovation}
                onChange={(e) => setFormData({ ...formData, innovation: e.target.value })}
              />
            </div>

            <div>
              <Label>
                How feasible is your product? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Explain the feasibility of your product"
                className="mt-2"
                required
                value={formData.feasibility}
                onChange={(e) => setFormData({ ...formData, feasibility: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What are the main challenges in developing and launching your product?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="List the main challenges"
                className="mt-2"
                required
                value={formData.challenges}
                onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/evaluate/product-goal")}
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

