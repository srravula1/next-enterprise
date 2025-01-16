import { Button } from "components/Button/Button"

export function CTASection() {
  return (
    <section className="bg-blue-600">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to transform your security operations?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Get started with our AI-powered platform today and see the difference in your security effectiveness.
          </p>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <Button href="/request-demo" intent="secondary" className="text-lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
} 