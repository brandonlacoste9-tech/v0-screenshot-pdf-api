import type { Request, Response, NextFunction } from "express"

// Mock database of API keys
const API_KEYS: Record<string, { tier: "free" | "pro" | "enterprise" }> = {
  sk_free_123: { tier: "free" },
  sk_pro_456: { tier: "pro" },
  sk_ent_789: { tier: "enterprise" },
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.header("X-API-Key")

  if (!apiKey || !API_KEYS[apiKey]) {
    return res.status(401).json({ error: "Unauthorized: Invalid or missing API Key" })
  }
  // Attach user tier to request for rate limiting
  ;(req as any).userTier = API_KEYS[apiKey].tier
  next()
}
