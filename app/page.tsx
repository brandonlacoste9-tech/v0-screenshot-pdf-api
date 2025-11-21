import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, FileText, Server } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Server className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Screenshot API</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Microservice Ready
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The Screenshot & PDF API microservice has been generated in the <code>screenshot-api</code> directory.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/docs">Documentation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/vercel/v0">View on GitHub</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Camera className="h-10 w-10 mb-2" />
                  <CardTitle>Screenshots</CardTitle>
                  <CardDescription>Capture high-quality screenshots of any website.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Supports full-page capture, custom viewports, and various image formats.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 mb-2" />
                  <CardTitle>PDF Generation</CardTitle>
                  <CardDescription>Convert web pages to PDF documents.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generate professional PDFs with custom formatting, margins, and print options.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Server className="h-10 w-10 mb-2" />
                  <CardTitle>Standalone Service</CardTitle>
                  <CardDescription>Run independently with Docker support.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Built with Express, Puppeteer, and TypeScript. Ready for deployment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by v0.
          </p>
        </div>
      </footer>
    </div>
  )
}
