import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnFavoritesPage = nextUrl.pathname.startsWith("/favorites");

      // If trying to access favorites page
      if (isOnFavoritesPage) {
        // Allow only if logged in, otherwise redirect to login
        return isLoggedIn;
      }

      // Allow access to all other pages
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
