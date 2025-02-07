"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SurveyProgress } from "@/components/survey-progress"

export default function ProductGoal() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    goal: "",
    plan: "",
    milestones: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/evaluate/innovation-feasibility")
  }

  return (
    <div className="flex min-h-screen">
      <SurveyProgress currentStep={2} />
      <div className="flex-1 p-8">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label>
                What is the goal of your product? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe your product's main goal"
                className="mt-2"
                required
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What is your plan to achieve this goal? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Outline your plan"
                className="mt-2"
                required
                value={formData.plan}
                onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What are the key milestones in your plan? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="List your key milestones"
                className="mt-2"
                required
                value={formData.milestones}
                onChange={(e) => setFormData({ ...formData, milestones: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/evaluate/product-overview")}
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

