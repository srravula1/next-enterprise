import { Metadata } from "next"
import { Hero } from "components/marketing/Hero"
import { Features } from "components/marketing/Features"
import { Testimonials } from "components/marketing/Testimonials"
import { CTASection } from "components/marketing/CTASection"

export const metadata: Metadata = {
  title: "AI-Powered Physical Security Platform",
  description: "Enhance your security operations with real-time AI detection, automated response systems, and comprehensive analytics.",
  openGraph: {
    title: "AI-Powered Physical Security Platform",
    description: "Enhance your security operations with real-time AI detection, automated response systems, and comprehensive analytics.",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </>
  )
}
