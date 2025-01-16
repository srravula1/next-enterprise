import { Button } from "components/Button/Button"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-32">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
          AI-Powered Physical Security Platform
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-200 sm:px-16 lg:text-xl xl:px-48">
          Enhance your security operations with real-time AI detection, automated response systems, and comprehensive analytics.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button href="/request-demo" intent="primary" className="text-lg">
            Request Demo
          </Button>
          <Button href="/features" intent="secondary" className="text-lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
} 