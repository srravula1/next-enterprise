import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Features | AI-Powered Physical Security Platform",
  description: "Explore the comprehensive features of our security platform - from AI detection to automated response systems.",
}

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Detection",
      description: "Our advanced AI algorithms can detect potential security threats in real-time with unprecedented accuracy.",
      details: [
        "Machine learning models trained on vast security datasets",
        "Real-time video analytics and object detection",
        "Anomaly detection and behavioral analysis",
        "Low false positive rate with continuous learning",
      ],
    },
    {
      title: "Automated Response System",
      description: "Automate your security protocols and response procedures for faster incident management.",
      details: [
        "Customizable response workflows",
        "Automatic alert escalation",
        "Integration with existing security systems",
        "Mobile notifications and remote management",
      ],
    },
    {
      title: "Analytics Dashboard",
      description: "Gain deep insights into your security operations with comprehensive analytics and reporting.",
      details: [
        "Real-time security metrics and KPIs",
        "Customizable reporting templates",
        "Trend analysis and predictive insights",
        "Compliance and audit reporting",
      ],
    },
  ]

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Platform Features
          </h1>
          <p className="text-xl text-blue-100">
            Discover how our platform can transform your security operations
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid gap-16">
          {features.map((feature) => (
            <div key={feature.title} className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">{feature.title}</h2>
                <p className="mb-6 text-xl text-gray-600">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-gray-600">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-8">
                {/* Placeholder for feature screenshot/demo */}
                <div className="aspect-video w-full rounded-lg bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/request-demo" intent="primary" className="text-lg">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </>
  )
} 