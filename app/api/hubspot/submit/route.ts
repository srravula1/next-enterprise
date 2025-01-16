import { env } from "env.mjs"
import { NextResponse } from "next/server"

interface DemoRequestBody {
  first_name: string
  last_name: string
  company: string
  email: string
  phone: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DemoRequestBody
    
    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${env.HUBSPOT_PORTAL_ID}/${env.HUBSPOT_FORM_GUID}`
    
    const response = await fetch(hubspotEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: body.first_name },
          { name: "lastname", value: body.last_name },
          { name: "company", value: body.company },
          { name: "email", value: body.email },
          { name: "phone", value: body.phone },
          { name: "message", value: body.message },
        ],
        context: {
          pageUri: "request-demo",
          pageName: "Demo Request Form",
        },
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit to HubSpot")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("HubSpot submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
} 