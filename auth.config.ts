import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnHomePage = nextUrl.pathname === '/'; // Check if user is on homepage

      // Handle cases based on user's current route
      if (isOnDashboard) {
        if (isLoggedIn) return true; // Allow access to dashboard if logged in
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // If the user is logged in and not on the dashboard, redirect to the dashboard
        return Response.redirect(new URL('/dashboard', nextUrl));
      } else if (isOnHomePage) {
        // Allow users to be on the homepage (no redirection needed)
        return true;
      }

      // For other pages, you can handle further logic or redirects
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
