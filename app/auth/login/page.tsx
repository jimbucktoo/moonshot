"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavHeader } from "@/components/nav-header"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-[#f6f3f3]">
      <NavHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Login illustration"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold mb-6">Welcome back!</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
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
                <Button type="submit" className="w-full bg-[#17b7ba] hover:bg-[#17b7ba]/90">
                  Continue with Email
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" type="button" className="w-full">
                    Continue with Google
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    Continue with Facebook
                  </Button>
                </div>
                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" className="text-[#17b7ba] hover:underline">
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

