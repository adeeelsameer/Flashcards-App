import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define your public routes
const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/', '/faq', '/aboutus'])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    const authState = auth();
    if (!authState.userId) {
      // Redirect to the sign-in page
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }
  return NextResponse.next(); // Continue to the next middleware or route
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
