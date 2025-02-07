"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function EvaluationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    productSummary: "",
    users: "",
    problem: "",
    stage: "",
    prototype: "",
  })

  const steps = [
    { id: 1, name: "Product Overview", completed: true },
    { id: 2, name: "Product Goal & Plan", completed: true },
    { id: 3, name: "Innovation & Feasibility", completed: true },
    { id: 4, name: "Team & Organization", completed: false },
    { id: 5, name: "Business Model", completed: false },
    { id: 6, name: "Partnerships & Support", completed: false },
  ]

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-[#e0eded] p-6">
        <h2 className="text-xl font-semibold mb-8">Analyze Your Startup Potential</h2>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.id} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  s.completed ? "bg-[#17b7ba] text-white" : "bg-gray-200"
                }`}
              >
                {s.completed ? "✓" : s.id}
              </div>
              <span className={s.completed ? "text-gray-900" : "text-gray-500"}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label>
                Provide a one-line summary of your product <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Placeholder text" className="mt-2" />
            </div>
            <div>
              <Label>
                Who are your users? How many users does the product serve now? <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Placeholder text" className="mt-2" />
            </div>
            <div>
              <Label>
                What specific problem are you solving? How does it solve the problem for your users?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea placeholder="Placeholder text" className="mt-2" />
            </div>
            <div>
              <Label>
                What is your product stage now? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup className="mt-2 space-y-2">
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
          </div>
          <Button className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white w-32 float-right">Next</Button>
        </div>
      </div>
    </div>
  )
}

