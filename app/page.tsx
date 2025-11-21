"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ArrowRight,
  Camera,
  FileText,
  Zap,
  Smartphone,
  Moon,
  Lock,
  Github,
  ChevronDown,
  ChevronUp,
  Play,
  Aperture,
  Palette,
} from "lucide-react"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [demoUrl, setDemoUrl] = useState("https://vercel.com")
  const [demoFormat, setDemoFormat] = useState("screenshot")
  const [demoViewport, setDemoViewport] = useState("desktop")
  const [demoFullPage, setDemoFullPage] = useState(true)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-emerald-500/30">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
              <Aperture className="h-5 w-5 text-orange-500" />
            </div>
            <span className="text-xl font-bold tracking-tight">SnapAPI</span>
          </div>
          <nav className="hidden gap-6 md:flex items-center">
            <Link href="#features" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#demo" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Demo
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Pricing
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </Link>
            <button className="rounded-full bg-white/5 p-2 text-zinc-400 hover:text-white">
              <Palette className="h-4 w-4" />
            </button>
          </nav>
          <Button className="bg-white text-black hover:bg-zinc-200 font-semibold">Get API Key</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-white/5 py-32 md:py-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#1f2937,transparent)]" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center text-left">
                <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  V1.0 Public Beta
                </div>
                <h1 className="mb-6 text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl italic">
                  JUST
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                    SNAP IT.
                  </span>
                </h1>
                <p className="mb-8 text-xl text-zinc-400 md:text-2xl max-w-xl leading-relaxed">
                  Don't overcomplicate it. Turn any URL into a pixel-perfect screenshot or PDF with a single API call.
                  The web, captured.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-zinc-200 text-base font-bold">
                    Start Building
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 border-white/10 bg-transparent text-white hover:bg-white/5 text-base font-medium"
                  >
                    <Play className="mr-2 h-5 w-5 fill-current" />
                    Live Demo
                  </Button>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3 w-3 text-emerald-500" />
                    </div>
                    Backed by Stripe
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3 w-3 text-emerald-500" />
                    </div>
                    Built on Node.js
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3 w-3 text-emerald-500" />
                    </div>
                    99.9% Uptime
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
                <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent" />
                  <div className="flex items-center justify-between border-b border-white/5 bg-[#0A0A0A] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                      <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                      <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-xs font-medium text-zinc-500">index.js</div>
                    <div className="h-4 w-4" />
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-sm font-mono leading-relaxed">
                      <code className="text-zinc-300">
                        <span className="text-[#C792EA]">const</span> response ={" "}
                        <span className="text-[#C792EA]">await</span> fetch(
                        <span className="text-[#C3E88D]">'https://api.snapapi.dev/v1/capture'</span>, {"{\n"}
                        {"  "}method: <span className="text-[#C3E88D]">'POST'</span>,{"\n"}
                        {"  "}headers: {"{\n"}
                        {"    "}
                        <span className="text-[#C3E88D]">'Authorization'</span>:{" "}
                        <span className="text-[#C3E88D]">'Bearer sk_live_...'</span>
                        {"\n"}
                        {"  "}
                        {"}"},{"\n"}
                        {"  "}body: JSON.stringify({"{\n"}
                        {"    "}url: <span className="text-[#C3E88D]">'https://nike.com'</span>,{"\n"}
                        {"    "}format: <span className="text-[#C3E88D]">'png'</span>,{"\n"}
                        {"    "}full_page: <span className="text-[#82AAFF]">true</span>
                        {"\n"}
                        {"  "}
                        {"}"}) {"\n"}
                        {"}"});{"\n\n"}
                        <span className="text-zinc-500 italic">// It's that simple.</span>
                        {"\n"}
                        <span className="text-[#C792EA]">const</span> image ={" "}
                        <span className="text-[#C792EA]">await</span> response.blob();
                      </code>
                    </pre>
                  </div>
                </div>
                {/* Glow effect behind code block */}
                <div className="absolute -inset-4 -z-10 bg-emerald-500/20 blur-3xl opacity-20" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-32 bg-black relative">
          <div className="container px-4 md:px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">Built for Developers</h2>
              <p className="text-xl text-zinc-400">Everything you need for automated web capture.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Full Page Capture",
                  desc: "Automatically scroll and stitch pages of any length. Perfect for long dashboards.",
                  icon: Camera,
                  color: "text-yellow-400",
                  bg: "bg-yellow-400/10",
                },
                {
                  title: "PDF Generation",
                  desc: "Generate high-fidelity A4 or Letter sized PDFs with selectable text and clickable links.",
                  icon: FileText,
                  color: "text-pink-400",
                  bg: "bg-pink-400/10",
                },
                {
                  title: "Custom Viewports",
                  desc: "Set specific width and height to simulate mobile, tablet, or ultra-wide desktop monitors.",
                  icon: Smartphone,
                  color: "text-blue-400",
                  bg: "bg-blue-400/10",
                },
                {
                  title: "Dark Mode Support",
                  desc: "Force `prefers-color-scheme: dark` to capture the dark mode version of any website.",
                  icon: Moon,
                  color: "text-zinc-200",
                  bg: "bg-zinc-200/10",
                },
                {
                  title: "Secure Headers",
                  desc: "Inject custom headers for authentication or cookie consent handling automatically.",
                  icon: Lock,
                  color: "text-amber-400",
                  bg: "bg-amber-400/10",
                },
                {
                  title: "Lightning Fast",
                  desc: "Powered by optimized Chromium instances running on edge infrastructure for low latency.",
                  icon: Zap,
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="border-white/5 bg-zinc-900/50 transition-all hover:bg-zinc-900 hover:border-white/10"
                >
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg}`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="border-y border-white/5 bg-zinc-950/50 py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">See it in action</h2>
              <p className="text-xl text-zinc-400">No headless browser setup. Just input and output.</p>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-xs font-mono text-pink-500 uppercase tracking-wider">
                        TARGET_URL
                      </label>
                      <input
                        type="text"
                        value={demoUrl}
                        onChange={(e) => setDemoUrl(e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-4 text-white font-mono text-sm placeholder-zinc-600 focus:border-pink-500/50 focus:outline-none focus:ring-1 focus:ring-pink-500/50 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="mb-2 block text-xs font-mono text-pink-500 uppercase tracking-wider">
                          FORMAT
                        </label>
                        <div className="relative">
                          <select
                            value={demoFormat}
                            onChange={(e) => setDemoFormat(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-white/10 bg-black/50 px-4 py-4 text-white font-mono text-sm focus:border-pink-500/50 focus:outline-none focus:ring-1 focus:ring-pink-500/50 transition-all"
                          >
                            <option value="screenshot">Screenshot (PNG)</option>
                            <option value="pdf">PDF Document</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-mono text-pink-500 uppercase tracking-wider">
                          VIEWPORT
                        </label>
                        <div className="relative">
                          <select
                            value={demoViewport}
                            onChange={(e) => setDemoViewport(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-white/10 bg-black/50 px-4 py-4 text-white font-mono text-sm focus:border-pink-500/50 focus:outline-none focus:ring-1 focus:ring-pink-500/50 transition-all"
                          >
                            <option value="desktop">Desktop (1920x1080)</option>
                            <option value="tablet">Tablet (768x1024)</option>
                            <option value="mobile">Mobile (375x667)</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-2">
                      <div
                        className={`h-6 w-11 rounded-full p-1 transition-colors cursor-pointer ${demoFullPage ? "bg-zinc-700" : "bg-zinc-800"}`}
                        onClick={() => setDemoFullPage(!demoFullPage)}
                      >
                        <div
                          className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${demoFullPage ? "translate-x-5" : "translate-x-0"}`}
                        />
                      </div>
                      <label
                        className="text-sm font-mono text-zinc-400 cursor-pointer"
                        onClick={() => setDemoFullPage(!demoFullPage)}
                      >
                        Full Page
                      </label>
                    </div>
                    <Button className="w-full h-14 bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:opacity-90 transition-opacity text-lg font-bold shadow-lg shadow-orange-500/20 border-0">
                      <Zap className="mr-2 h-5 w-5 fill-current" />
                      Execute Request
                    </Button>
                  </div>
                </div>

                <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/50 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-zinc-700" />
                      <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    </div>
                    <div className="mx-auto flex items-center gap-2 rounded bg-black/50 px-3 py-1 text-xs font-mono text-zinc-500">
                      <span>waiting for input...</span>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-center p-12 min-h-[400px]">
                    <div className="text-center text-zinc-600">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900">
                        <Camera className="h-8 w-8 opacity-50" />
                      </div>
                      <p className="font-mono text-sm">Output will render here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-black py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Common Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How does authentication work?",
                    a: "We use standard Bearer tokens. Once you purchase a plan, you'll receive an API key immediately via email to include in your request headers.",
                  },
                  {
                    q: "Can I capture pages behind a login?",
                    a: "Yes. You can inject custom cookies or headers into the request to authenticate the session before the screenshot is taken.",
                  },
                  {
                    q: "What happens if I exceed my rate limit?",
                    a: "We provide a soft buffer. If you consistently exceed limits, we'll reach out to discuss an Enterprise upgrade. We won't cut you off abruptly.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900/30">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                    >
                      <span className="font-medium text-white">{faq.q}</span>
                      {openFaq === i ? (
                        <ChevronUp className="h-5 w-5 text-zinc-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-zinc-400" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="border-t border-white/10 bg-black/20 px-6 pb-6 pt-4">
                        <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#1f2937,transparent)] opacity-40" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">Simple, Transparent Pricing</h2>
              <p className="text-xl text-zinc-400">One plan, everything included. No hidden fees.</p>
            </div>
            <div className="mx-auto max-w-md">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-orange-500 to-purple-600 opacity-20 blur-2xl" />
                <div className="relative flex flex-col rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl">
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-white">Pro Developer</h3>
                    <div className="mt-6 flex items-baseline justify-center gap-1">
                      <span className="text-6xl font-black text-white tracking-tight">$29</span>
                      <span className="text-xl text-zinc-500 font-medium">/mo</span>
                    </div>
                  </div>
                  <ul className="mb-10 space-y-5">
                    {[
                      "5,000 Requests / month",
                      "Priority Email Support",
                      "99.9% Uptime SLA",
                      "Full Page & PDF Support",
                      "Commercial Usage Rights",
                    ].map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-base text-zinc-300">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20">
                          <Check className="h-3 w-3 text-orange-500 flex-shrink-0" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-bold rounded-xl transition-all hover:scale-[1.02]"
                    size="lg"
                  >
                    buy
                  </Button>
                  <p className="mt-6 text-center text-xs text-zinc-500">Instant access via email after payment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-orange-500/10">
                  <Aperture className="h-4 w-4 text-orange-500" />
                </div>
                <span className="font-bold text-white">SnapAPI</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400 font-medium">
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Demo
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
