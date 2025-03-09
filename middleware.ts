import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhooks/clerk",
  "/sign-in", // Clerk's sign-in page
  "/sign-up", // Clerk's sign-up page
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next(); // Allow access to public routes
  }

  const authObject = await auth();

  if (!authObject.userId) {
    // Avoid infinite redirect loop by not redirecting if already on /sign-in
    if (req.nextUrl.pathname !== "/sign-in") {
      return authObject.redirectToSignIn();
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
