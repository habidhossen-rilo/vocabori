import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const url = request.nextUrl;
  const pathname = url.pathname;

  const userRole = session?.role; // User role from the session

  // Define restricted paths
  const adminOnlyPaths = [
    "/dashboard",
    "/dashboard/lesson",
    "/dashboard/vocabulary",
    "/dashboard/tutorial",
    "/dashboard/contact",
  ];

  const isOnLoginPage = pathname === "/login";
  const isOnSignupPage = pathname === "/signup";
  const isOnDashboard = pathname.startsWith("/dashboard");
  const isOnAdminPanel = pathname.startsWith("/admin");

  if (!session) {
    // Allow unauthenticated users to access the login page
    if (isOnLoginPage || isOnSignupPage) {
      return NextResponse.next();
    }

    // Redirect unauthenticated users trying to access restricted routes
    if (isOnDashboard || isOnAdminPanel) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    // Redirect logged-in users away from the login page
    if (isOnLoginPage || isOnSignupPage) {
      return NextResponse.redirect(new URL("/lessons", request.url));
    }

    // Restrict non-admin users from accessing admin-only paths
    if (
      adminOnlyPaths.some((path) => pathname.startsWith(path)) &&
      userRole !== "admin"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Restrict non-admin users from the admin panel
    if (isOnAdminPanel && userRole !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: ["/login", "/signup", "/dashboard/:path*", "/admin/:path*"],
};

// -----------------------------------------------------------------------
// export { auth as middleware } from "@/auth";

// import NextAuth from "next-auth";
// import { authConfig } from "./authConfig";

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/((?!api|static|.*\\..*|_next).*)"],
// };

// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middleware
