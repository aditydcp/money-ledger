import type { Metadata } from "next";
import { Quicksand, Merriweather, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/feature/theme-toggle";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Money Ledger",
  description: "Watching every single penny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.variable} ${merriweather.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <ThemeToggle />
          <main className="p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}