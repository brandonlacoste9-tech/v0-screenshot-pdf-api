import type { Page } from "puppeteer"
import PQueue from "p-queue"
import { browserService } from "./browser.service"
import { logger } from "../config/logger"

// Limit concurrency to 2 simultaneous operations
const queue = new PQueue({ concurrency: 2 })

interface CaptureOptions {
  url: string
  width?: number
  height?: number
  fullPage?: boolean
  darkMode?: boolean
  delay?: number
}

interface PdfOptions {
  url: string
  format?: "A4" | "Letter"
  landscape?: boolean
  printBackground?: boolean
}

export class CaptureService {
  async captureScreenshot(options: CaptureOptions): Promise<Buffer> {
    return queue.add(async () => {
      let page: Page | null = null
      try {
        page = await browserService.getPage()

        await page.setViewport({
          width: options.width || 1920,
          height: options.height || 1080,
        })

        if (options.darkMode) {
          await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }])
        }

        logger.info(`Navigating to ${options.url}`)
        await page.goto(options.url, { waitUntil: "networkidle0", timeout: 30000 })

        if (options.delay) {
          await new Promise((r) => setTimeout(r, options.delay))
        }

        const screenshot = await page.screenshot({
          fullPage: options.fullPage || false,
          type: "png",
        })

        return screenshot as Buffer
      } catch (error) {
        logger.error("Screenshot capture failed", error)
        throw error
      } finally {
        if (page) await page.close()
      }
    }) as Promise<Buffer>
  }

  async generatePdf(options: PdfOptions): Promise<Buffer> {
    return queue.add(async () => {
      let page: Page | null = null
      try {
        page = await browserService.getPage()

        logger.info(`Navigating to ${options.url} for PDF`)
        await page.goto(options.url, { waitUntil: "networkidle0", timeout: 30000 })

        const pdf = await page.pdf({
          format: options.format || "A4",
          landscape: options.landscape || false,
          printBackground: options.printBackground ?? true,
        })

        return pdf
      } catch (error) {
        logger.error("PDF generation failed", error)
        throw error
      } finally {
        if (page) await page.close()
      }
    }) as Promise<Buffer>
  }
}

export const captureService = new CaptureService()
