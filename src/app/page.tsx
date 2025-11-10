"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    router.replace("/dashboard");
    return null;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {/* 🚧 Work in Progress */}
            Welcome to Money Ledger
          </CardTitle>
        </CardHeader>
        {/* <CardContent className="text-center text-muted-foreground">
          We will be watching for your pennies soon!
        </CardContent> */}
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Sign in with Google
          </Button>
          {/* <Button asChild>
            <a
              href="https://github.com/aditydcp/money-ledger"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button> */}
        </CardFooter>
      </Card>
    </main>
  )
}