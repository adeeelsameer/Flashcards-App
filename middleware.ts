import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/', '/faq', '/aboutus']);

export default clerkMiddleware((auth, request: NextRequest) => {
 
  if (!isPublicRoute(request)) {
    const authState = auth();
    if (!authState.userId) {
    
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }
  

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!sign-in|sign-up|faq|aboutus|_next|.*\\..*).*)',
    '/', 
    '/(api|trpc)(.*)' 
  ],
};
