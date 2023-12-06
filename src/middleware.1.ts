import { NextResponse } from "next/server"
import { limiter } from "./app/api/config/limiter"

export function middleware(request: Request) {
  // console.log(request.method)
  const remaining = limiter
  console.log("Hoi")
  // console.log(request.url)
  // const origin = request.headers.get("origin")
  // console.log(origin)
  return NextResponse.next()
  // return Response.json({ x: 1 })
}
