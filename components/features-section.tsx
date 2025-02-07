import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function FeaturesSection() {
  const features = [
    {
      title: "Detailed Evaluations",
      description:
        "Get a comprehensive score and step-by-step reasoning for every aspect of your business idea. Our evaluation covers product-market fit, innovation, feasibility, team capabilities, and more.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Benefit from cutting-edge AI analysis to identify strengths, weaknesses, and opportunities for growth. Our AI provides personalized recommendations based on successful startup patterns.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Accelerator Ecosystem",
      description:
        "Connect with mentors, investors, and other founders to take your idea to the next level. Access our network of industry experts and get the support you need to succeed.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Track Your Progress",
      description:
        "Save, review, and improve your ideas over time with our easy-to-use dashboard. Monitor your startup's growth and track improvements across all evaluation criteria.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const benefits = [
    {
      title: "Transparent Analysis",
      description: "Understand exactly what makes your startup special",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Tailored Recommendations",
      description: "Get actionable advice specific to your stage and industry",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Built for Growth",
      description: "Stay updated and adapt as your startup evolves",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="bg-[#f6f3f3]">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Discover How We Help Your Startup Succeed</h1>
          <p className="text-xl text-gray-600">
            From <span className="text-[#17b7ba]">evaluation</span> to{" "}
            <span className="text-[#17b7ba]">connection</span>,
            <br />
            we provide everything you need to turn your idea into a thriving business.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Get on Our Platform</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-white">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#17b7ba] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us Over Others?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mb-4">
                  <Image
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link href="/evaluate/product-overview">
            <Button size="lg" className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white">
              Start Your Free Evaluation
            </Button>
          </Link>
          <div>
            <Link href="/faq" className="text-[#17b7ba] hover:underline">
              Still have questions?
            </Link>
          </div>
          <div>
            <Link href="/faq" className="text-[#17b7ba] hover:underline">
              Explore our FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

