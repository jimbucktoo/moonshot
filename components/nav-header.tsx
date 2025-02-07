import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function NavHeader() {
  return (
    <header className="w-full py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MoonshotAI-0IPSm6E010ng0b7LAtrec5ypwEANGm.png"
            alt="MoonshotAI Logo"
            width={167}
            height={42}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="text-[#17b7ba] hover:bg-[#17b7ba]/10">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-[#17b7ba] hover:bg-[#17b7ba]/90 text-white">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

