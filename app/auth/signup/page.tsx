"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { NavHeader } from "@/components/nav-header"

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    agreeToTerms: false,
    agreeToUpdates: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle sign up logic here
  }

  return (
    <div className="min-h-screen bg-[#f6f3f3]">
      <NavHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold mb-6">Sign up now</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <select className="w-20 rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="us">🇺🇸 +1</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      By signing up, you agree to our Terms of Use and Privacy Policy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="updates"
                      checked={formData.agreeToUpdates}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToUpdates: checked as boolean })}
                    />
                    <label htmlFor="updates" className="text-sm text-gray-600">
                      I would like to receive emails about product updates and announcements
                    </label>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-[#17b7ba] hover:bg-[#17b7ba]/90">
                  Sign up
                </Button>
                <div className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-[#17b7ba] hover:underline">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Sign up illustration"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

