import { NextResponse } from "next/server";

export function proxy(request) {
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("better-auth.session-token")?.value;

  const jwtToken = request.cookies.get("token")?.value;

  const isAuthenticated = sessionToken || jwtToken;
  console.log(jwtToken,)

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/user/:path*",
    "/dashboard/admin/:path*",
    "/dashboard/librarian/:path*",
],
};