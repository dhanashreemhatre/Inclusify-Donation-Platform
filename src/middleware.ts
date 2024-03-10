import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("middleware");

  try {
    const authToken = request.cookies.get('jwtToken')?.value;
    const loggedInUserPath = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup';

    if (loggedInUserPath) {
      if (authToken) {
        return NextResponse.redirect(new URL("/donation", request.url));
      }
    } else {
      if (!authToken) {
        // Redirect to the login page if the token is not present
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }

    console.log(authToken);
  } catch (error) {
    console.error("Error retrieving JWT token:", error);
  }
}

export const config = {
  matcher: '/donation',
};
