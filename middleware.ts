import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isExpired } from "./app/hooks/token";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token");
  const isAdmin = req.cookies.get("isAdmin");
  const url = req.nextUrl.pathname;
  console.log(isAdmin.value);
  if (!token) {
    console.log("middleware: No token found");
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (url.startsWith("/admin") && isAdmin.value !== "true") {
    console.log("middleware: User is not an admin", typeof isAdmin?.value);
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  console.log("middleware: Token is valid");
  return NextResponse.next();
}

// Apply middleware to the profile page
export const config = {
  matcher: ["/profile/:path*", "/admin/:path*"],
};
