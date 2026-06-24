import { NextResponse } from "next/server";

export function proxy(request) {

const sessionToken =
request.cookies.get(
"better-auth.session_token"
)?.value ||
request.cookies.get(
"better-auth.session-token"
)?.value;

const { pathname } =
request.nextUrl;

const isDashboardRoute =
pathname.startsWith(
"/dashboard"
);

if (
isDashboardRoute &&
!sessionToken
) {
return NextResponse.redirect(
new URL(
"/login",
request.url
)
);
}

return NextResponse.next();
}

export const config = {
matcher: [
"/dashboard/:path*",
],
};
