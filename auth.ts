import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import { customAuth } from "@/app/lib/custom-auth";

import { authConfig } from "./auth.config";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await customAuth.signIn({
          email: credentials?.email as string,
          password: credentials?.password as string,
        });
        if (user.success && user.session) {
          return {
            id: user.session.user.id,
            email: user.session.user.email,
            name: user.session.user.name,
          };
        }
        return null;
      },
    }),
  ],
});
