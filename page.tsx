import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f3f3]">
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MoonshotAI-0IPSm6E010ng0b7LAtrec5ypwEANGm.png"
              alt="MoonshotAI Logo"
              width={167}
              height={42}
              className="h-[42px] w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-[#17b7ba] hover:text-[#17b7ba] hover:bg-[#17b7ba]/10"
            >
              Log in
            </Button>
            <Button className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white">Signup</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Your Startup Idea into Reality{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-gray-600">Insightful Evaluations.</h2>
              <h2 className="text-2xl md:text-3xl text-gray-600">Smarter Decisions.</h2>
              <h2 className="text-2xl md:text-3xl text-gray-600">Better Outcomes.</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Discover your startup's true potential with detailed AI-powered insights and an accelerator ecosystem
              connecting founders and investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white">
                Start for free
              </Button>
              <Button size="lg" variant="outline" className="border-[#17b7ba] text-[#17b7ba] hover:bg-[#17b7ba]/10">
                Learn more
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MoonshotAI-0IPSm6E010ng0b7LAtrec5ypwEANGm.png"
              alt="Startup illustration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

