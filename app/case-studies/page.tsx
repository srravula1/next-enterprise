import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Case Studies | AI-Powered Physical Security Platform",
  description: "See how leading organizations have transformed their security operations with our platform.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Global Retail Chain Reduces Security Incidents by 60%",
      company: "MegaMart Retail",
      industry: "Retail",
      challenge: "Managing security across 500+ locations with inconsistent protocols",
      solution: "Implemented AI-powered surveillance and automated response system",
      results: [
        "60% reduction in security incidents",
        "85% faster response times",
        "$2M annual cost savings",
        "Improved staff satisfaction",
      ],
    },
    {
      title: "Tech Campus Enhances Security with AI Integration",
      company: "TechCorp International",
      industry: "Technology",
      challenge: "Complex campus security with high-value assets",
      solution: "Deployed comprehensive AI security platform with custom workflows",
      results: [
        "90% reduction in false alarms",
        "24/7 automated monitoring",
        "Streamlined access control",
        "Enhanced emergency response",
      ],
    },
  ]

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Customer Success Stories
          </h1>
          <p className="text-xl text-blue-100">
            See how organizations are transforming their security operations
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid gap-12">
          {caseStudies.map((study) => (
            <div key={study.title} className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">{study.title}</h2>
                <p className="text-gray-600">
                  {study.company} • {study.industry}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">Challenge</h3>
                  <p className="text-gray-600">{study.challenge}</p>

                  <h3 className="mb-3 mt-6 font-semibold text-gray-900">Solution</h3>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-gray-900">Results</h3>
                  <ul className="space-y-3">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center gap-3 text-gray-600">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button href={`/case-studies/${study.company.toLowerCase().replace(/\s+/g, "-")}`} intent="secondary">
                  Read Full Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 