import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "database",
  },
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async session({ session, token }) {
      console.log("Session callback:", { session, token });
      // Attach user ID or custom data
      return session;
    },
  },
  // pages: {
  //   signIn: "/login", // optional, if you want a custom login page
  // },
};
