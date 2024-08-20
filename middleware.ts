import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define your public routes
const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/', '/faq', '/aboutus']);

export default clerkMiddleware((auth, request: NextRequest) => {
  // Check if the current route is a public route
  if (!isPublicRoute(request)) {
    const authState = auth();
    if (!authState.userId) {
      // Redirect to the sign-in page if the user is not authenticated
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }
  
  // Continue to the next middleware or route
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Match all routes except for public routes
    '/((?!sign-in|sign-up|faq|aboutus|_next|.*\\..*).*)',
    '/', // Ensure the root (/) is matched properly
    '/(api|trpc)(.*)' // Match API and TRPC routes
  ],
};
