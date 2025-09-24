// middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Specify Node.js runtime
export const runtime = "nodejs";

export default async function middleware(request: NextRequest) {
  const session = await auth();

  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // If the user is not logged in and trying to access /favorites
  if (!session?.user && path.startsWith("/favorites")) {
    // Redirect to login page with a return URL
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/favorites/:path*"],
};
