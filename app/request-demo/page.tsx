"use client"

import { useState } from "react"
import { Button } from "components/Button/Button"

export default function RequestDemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/hubspot/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitSuccess(true)
      e.currentTarget.reset()
    } catch (error) {
      setSubmitError("Failed to submit form. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Request a Demo
          </h1>
          <p className="text-xl text-blue-100">
            See our AI-powered security platform in action
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-2xl">
          {submitSuccess ? (
            <div className="rounded-lg bg-green-50 p-6 text-center">
              <h2 className="mb-2 text-2xl font-semibold text-green-800">Thank You!</h2>
              <p className="text-green-700">
                We've received your demo request and will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {submitError && (
                <div className="rounded-lg bg-red-50 p-4 text-red-800">{submitError}</div>
              )}
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="mb-2 block text-sm font-medium text-gray-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="mb-2 block text-sm font-medium text-gray-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                  Tell us about your security needs
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <Button 
                  type="submit" 
                  intent="primary" 
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-8 rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">What happens next?</h2>
            <ol className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  1
                </span>
                <span>Our team will review your request within 24 hours</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  2
                </span>
                <span>We'll schedule a call to understand your needs better</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  3
                </span>
                <span>You'll receive a personalized demo of our platform</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
} 