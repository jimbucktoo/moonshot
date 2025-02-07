"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SurveyProgress } from "@/components/survey-progress"

export default function TeamOrganization() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    teamMembers: "",
    roles: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/evaluate/business-model")
  }

  return (
    <div className="flex min-h-screen">
      <SurveyProgress currentStep={4} />
      <div className="flex-1 p-8">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label>
                Who are the key members of your team? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="List your key team members"
                className="mt-2"
                required
                value={formData.teamMembers}
                onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What are their roles and responsibilities? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe roles and responsibilities"
                className="mt-2"
                required
                value={formData.roles}
                onChange={(e) => setFormData({ ...formData, roles: e.target.value })}
              />
            </div>

            <div>
              <Label>
                What relevant experience does your team have? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="Describe your team's relevant experience"
                className="mt-2"
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/evaluate/innovation-feasibility")}
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

