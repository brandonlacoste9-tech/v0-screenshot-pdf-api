import puppeteer, { type Browser, type Page } from "puppeteer"
import { logger } from "../config/logger"

export class BrowserService {
  private browser: Browser | null = null

  async init() {
    if (!this.browser) {
      logger.info("Launching browser...")
      this.browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
      })
      logger.info("Browser launched successfully")
    }
  }

  async getPage(): Promise<Page> {
    if (!this.browser) {
      await this.init()
    }
    return this.browser!.newPage()
  }

  async close() {
    if (this.browser) {
      await this.browser.close()
      this.browser = null
    }
  }
}

export const browserService = new BrowserService()
