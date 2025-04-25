import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isExpired } from "./app/hooks/token";
export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token"); // Replace "token" with the actual cookie name
  const expiredData = req.cookies.get("expires_in");
  if (!token) {
    // Redirect to /signin if the token is missing
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Allow the request to proceed if the token exists
  return NextResponse.next();
}

// Apply middleware to the profile page
export const config = {
  matcher: "/profile/:path*", // Adjust the path if necessary
};
