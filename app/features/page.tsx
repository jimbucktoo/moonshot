import { NavHeader } from "@/components/nav-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <div className="min-h-screen bg-[#f6f3f3]">
      <NavHeader />
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Discover How We Help Your Startup Succeed{" "}
            <span role="img" aria-label="lightbulb">
              💡
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            From <span className="font-semibold">evaluation</span> to <span className="font-semibold">connection</span>,
            <br />
            we provide everything you need to turn your idea into a thriving business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/95 backdrop-blur p-6">
            <CardContent className="space-y-4">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Detailed Evaluations"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#17b7ba]">Detailed Evaluations</h3>
              <p className="text-gray-600">
                Get a comprehensive score and step-by-step reasoning for every aspect of your business idea. Example: Is
                your idea innovative? Is it feasible? We'll break it down for you.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur p-6">
            <CardContent className="space-y-4">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="AI-Powered Insights"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#17b7ba]">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Benefit from cutting-edge AI analysis to identify strengths, weaknesses, and opportunities for growth.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur p-6">
            <CardContent className="space-y-4">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Accelerator Ecosystem"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#17b7ba]">Accelerator Ecosystem</h3>
              <p className="text-gray-600">
                Connect with mentors, investors, and other founders to take your idea to the next level.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur p-6">
            <CardContent className="space-y-4">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Track Your Progress"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#17b7ba]">Track Your Progress</h3>
              <p className="text-gray-600">
                Save, review, and improve your ideas over time with our easy-to-use dashboard.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Link href="/survey/product-overview">
            <Button size="lg" className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white">
              Start Your Free Evaluation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

