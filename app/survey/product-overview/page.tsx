"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SurveyProgress } from "@/components/survey-progress"

export default function ProductOverview() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    summary: "",
    users: "",
    problem: "",
    stage: "",
    prototype: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/survey/product-goal")
  }

  return (
    <div className="flex min-h-screen">
      <SurveyProgress currentStep={1} />
      <div className="flex-1 p-8">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label>
                Provide a one-line summary of your product <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Placeholder text"
                className="mt-2"
                required
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              />
            </div>

            <div>
              <Label>
                Who are your users? How many users does the product serve now? <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Placeholder text"
                className="mt-2"
                required
                value={formData.users}
                onChange={(e) => setFormData({ ...formData, users: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What specific problem are you solving? How does it solve the problem for your users?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Placeholder text"
                className="mt-2"
                required
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What is your product stage now? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                className="mt-2 space-y-2"
                value={formData.stage}
                onValueChange={(value) => setFormData({ ...formData, stage: value })}
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ideation" id="ideation" />
                  <Label htmlFor="ideation" className="text-sm">
                    Ideation Stage - Pre-seed Stage, problem-solution fit, conduct market research, prototype and
                    validate the idea
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="early" id="early" />
                  <Label htmlFor="early" className="text-sm">
                    Early stage - Seed Stage, Developing a Minimum Viable Product (MVP)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="growth" id="growth" />
                  <Label htmlFor="growth" className="text-sm">
                    Growth Stage - Series A & B, achieve product-market fit
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="scale" id="scale" />
                  <Label htmlFor="scale" className="text-sm">
                    Scale stage - Series C and Beyond, Rapid scaling and expansion
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Upload the link or file if there is a prototype or demo.</Label>
              <Input
                placeholder="Placeholder text"
                className="mt-2"
                value={formData.prototype}
                onChange={(e) => setFormData({ ...formData, prototype: e.target.value })}
              />
            </div>
          </div>

          <Button type="submit" className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white w-32 float-right">
            Next
          </Button>
        </form>
      </div>
    </div>
  )
}

