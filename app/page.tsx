import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavHeader } from "@/components/nav-header";
import Image1 from "../public/image1.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3f3]">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Your Startup Idea into Reality{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-gray-600">
                Insightful Evaluations.
              </h2>
              <h2 className="text-2xl md:text-3xl text-gray-600">
                Smarter Decisions.
              </h2>
              <h2 className="text-2xl md:text-3xl text-gray-600">
                Better Outcomes.
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Discover your startup's true potential with detailed AI-powered
              insights and an accelerator ecosystem connecting founders and
              investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/evaluate/product-overview">
                <Button
                  size="lg"
                  className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white w-full sm:w-auto"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <Image
              src={Image1}
              alt="Startup illustration"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
