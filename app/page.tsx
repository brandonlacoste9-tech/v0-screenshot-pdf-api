import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Code2, Globe, Zap, Shield, Terminal, ArrowRight, Camera, FileText } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-white/20">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              <Camera className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">SnapAPI</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Pricing
            </Link>
            <Link href="#docs" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Log in
            </Link>
            <Button className="bg-white text-black hover:bg-zinc-200">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-green-500"></span>
                v1.0 is now available
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                Capture the web programmatically
              </h1>
              <p className="mb-8 text-lg text-zinc-400 md:text-xl leading-relaxed">
                A high-performance microservice for generating pixel-perfect screenshots and PDFs from any URL. Built
                for developers, by developers.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-12 min-w-[160px] bg-white text-black hover:bg-zinc-200 text-base">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 min-w-[160px] border-white/10 bg-transparent text-white hover:bg-white/5 text-base"
                >
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Code Preview Section */}
        <section className="border-b border-white/10 bg-zinc-950 py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, powerful API</h2>
                <p className="text-lg text-zinc-400">
                  Integrate in minutes with our RESTful API. Support for full-page captures, custom viewports, and PDF
                  generation out of the box.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Zap,
                      title: "Lightning Fast",
                      desc: "Optimized Puppeteer instances for sub-second captures",
                    },
                    {
                      icon: Shield,
                      title: "Secure by Default",
                      desc: "Built-in rate limiting and API key authentication",
                    },
                    { icon: Globe, title: "Modern Web Support", desc: "Full support for SPA, WebGL, and modern CSS" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{item.title}</h3>
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-xl border border-white/10 bg-black shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/20" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                    <div className="h-3 w-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="ml-4 text-xs text-zinc-500">example-request.js</div>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    <code className="text-zinc-300">
                      <span className="text-purple-400">const</span> response ={" "}
                      <span className="text-purple-400">await</span> fetch(
                      <span className="text-green-400">"https://api.snapapi.dev/v1/screenshot"</span>, {"{"}
                      {"\n"}
                      {"  "}method: <span className="text-green-400">"POST"</span>,{"\n"}
                      {"  "}headers: {"{"}
                      {"\n"}
                      {"    "}
                      <span className="text-green-400">"Authorization"</span>:{" "}
                      <span className="text-green-400">"Bearer YOUR_API_KEY"</span>,{"\n"}
                      {"    "}
                      <span className="text-green-400">"Content-Type"</span>:{" "}
                      <span className="text-green-400">"application/json"</span>
                      {"\n"}
                      {"  "}
                      {"}"},{"\n"}
                      {"  "}body: JSON.stringify({"{"}
                      {"\n"}
                      {"    "}url: <span className="text-green-400">"https://vercel.com"</span>,{"\n"}
                      {"    "}fullPage: <span className="text-blue-400">true</span>,{"\n"}
                      {"    "}darkMode: <span className="text-blue-400">true</span>
                      {"\n"}
                      {"  "}
                      {"}"}){"\n"}
                      {"}"});
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Everything you need</h2>
              <p className="text-lg text-zinc-400">Powerful features to handle any screenshot or PDF requirement.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Full Page Capture",
                  desc: "Automatically scroll and stitch together full page screenshots of any website.",
                  icon: Camera,
                },
                {
                  title: "PDF Generation",
                  desc: "Convert any URL into a high-quality PDF with custom formatting options.",
                  icon: FileText,
                },
                {
                  title: "Custom Viewports",
                  desc: "Emulate any device size from mobile phones to 4K desktop monitors.",
                  icon: Terminal,
                },
                {
                  title: "Wait Conditions",
                  desc: "Wait for specific elements or network idle states before capturing.",
                  icon: Code2,
                },
                {
                  title: "Dark Mode Support",
                  desc: "Force dark mode rendering on supported websites automatically.",
                  icon: Zap,
                },
                {
                  title: "Secure Headers",
                  desc: "Inject custom headers and cookies for authenticated sessions.",
                  icon: Shield,
                },
              ].map((feature, i) => (
                <Card key={i} className="border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                  <CardHeader>
                    <feature.icon className="mb-2 h-8 w-8 text-white" />
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="border-t border-white/10 bg-zinc-950 py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
              <p className="text-lg text-zinc-400">One plan, no hidden fees. Cancel anytime.</p>
            </div>
            <div className="mx-auto max-w-md">
              <div className="relative flex flex-col rounded-2xl border border-white bg-white/5 p-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                  All-Inclusive
                </div>
                <div className="mb-8 text-center">
                  <h3 className="text-lg font-medium text-white">Pro Access</h3>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">$29</span>
                    <span className="text-zinc-400">/month</span>
                  </div>
                  <p className="mt-4 text-zinc-400">Everything you need to build production-ready apps.</p>
                </div>
                <ul className="mb-8 space-y-4">
                  {[
                    "5,000 screenshots or PDFs / month",
                    "High quality retina captures",
                    "Priority email support",
                    "Instant API key delivery",
                    "Cancel anytime",
                  ].map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Check className="h-4 w-4 text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-black hover:bg-zinc-200" size="lg">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black">
                    <Camera className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-white">SnapAPI</span>
                </div>
                <p className="text-sm text-zinc-400">
                  The developer-first API for programmatic screenshots and PDF generation.
                </p>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Product</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Company</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Legal</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} SnapAPI Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
