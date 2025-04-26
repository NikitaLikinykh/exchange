import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isExpired } from "./app/hooks/token";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token");
  const expiredData = req.cookies.get("expires_in");

  if (!token) {
    console.log("middleware: No token found");
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // if (expiredData && isExpired(expiredData)) {
  //   console.log("middleware: Token expired");
  //   return NextResponse.redirect(new URL("/signin", req.url));
  // }

  console.log("middleware: Token is valid");
  return NextResponse.next();
}

// Apply middleware to the profile page
export const config = {
  matcher: "/profile/:path*",
};
