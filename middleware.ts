import { NextRequest, NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define your public routes
const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/', '/faq', '/aboutus'])

const isProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, request) => {
  { if (isProtectedRoute(request)) { auth().protect(); } };
  if (!isPublicRoute(request)) {
    const authState = auth();
    if (!authState.userId) {
      // Redirect to the sign-in page
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }
  return NextResponse.next(); // Continue to the next middleware or route
});

export const config = { matcher: ["/((?!.\..|_next).)", "/", "/(api|trpc)(.)"], };
