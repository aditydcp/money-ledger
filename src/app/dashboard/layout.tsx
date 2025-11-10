import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Redirect to login if no active session
  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>

      <main className="flex-1 p-6 bg-background">{children}</main>
    </div>
  );
}