import { Router } from "express"
import { captureService } from "../services/capture.service"
import { authenticate } from "../middleware/auth.middleware"
import { dynamicRateLimiter } from "../middleware/rate-limit.middleware"
import { z } from "zod"

const router = Router()

// Validation Schemas
const screenshotSchema = z.object({
  url: z.string().url(),
  width: z.number().optional(),
  height: z.number().optional(),
  fullPage: z.boolean().optional(),
  darkMode: z.boolean().optional(),
  delay: z.number().optional(),
})

const pdfSchema = z.object({
  url: z.string().url(),
  format: z.enum(["A4", "Letter"]).optional(),
  landscape: z.boolean().optional(),
  printBackground: z.boolean().optional(),
})

// Health Check
router.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

// Screenshot Endpoint
router.post("/screenshot", authenticate, dynamicRateLimiter, async (req, res) => {
  try {
    const options = screenshotSchema.parse(req.body)
    const imageBuffer = await captureService.captureScreenshot(options)

    res.set("Content-Type", "image/png")
    res.send(imageBuffer)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors })
    }
    res.status(500).json({ error: "Failed to generate screenshot" })
  }
})

// PDF Endpoint
router.post("/pdf", authenticate, dynamicRateLimiter, async (req, res) => {
  try {
    const options = pdfSchema.parse(req.body)
    const pdfBuffer = await captureService.generatePdf(options)

    res.set("Content-Type", "application/pdf")
    res.send(pdfBuffer)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors })
    }
    res.status(500).json({ error: "Failed to generate PDF" })
  }
})

export default router
