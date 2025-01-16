import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request Demo | AI-Powered Physical Security Platform",
  description: "Schedule a personalized demo of our AI-powered security platform.",
}

export default function RequestDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 