import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhooks/clerk",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next(); // Allow access to public routes
  }

  const authObject = await auth(); // Await authentication

  if (!authObject.userId) {
    // Redirect unauthenticated users to the sign-in page
    return authObject.redirectToSignIn();
  }

  return NextResponse.next(); // Allow authenticated users
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
