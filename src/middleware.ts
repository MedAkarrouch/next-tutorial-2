import { NextResponse } from "next/server"
import { limiter } from "./app/api/config/limiter"

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://www.my-site-1.com",
        "https://www.my-site-2",
        "https://www.my-site-3"
      ]
    : "http://localhost:3000"

export async function middleware(request: Request) {
  //
  const origin = request.headers.get("origin")
  if (origin && !allowedOrigins.includes(origin))
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Contetn-Type": "text/plain"
      }
    })

  return NextResponse.next()
}
// export const config = {
// matcher: "/api/:path*"
// }
