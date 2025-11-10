"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function DashboardHome() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome back, {session?.user?.name}!</p>
      <Button
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign Out
      </Button>
    </div>
  );
}