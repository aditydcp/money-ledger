import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            🚧 Work in Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          We will be watching for your pennies soon!
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <a
              href="https://github.com/aditydcp"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}