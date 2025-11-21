import rateLimit from "express-rate-limit"
import type { Request } from "express"

const getLimitByTier = (req: Request) => {
  const tier = (req as any).userTier
  switch (tier) {
    case "enterprise":
      return 1000
    case "pro":
      return 100
    case "free":
    default:
      return 10
  }
}

export const dynamicRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  keyGenerator: (req: Request) => req.header("X-API-Key") || req.ip || "unknown",
  limit: (req: Request) => getLimitByTier(req),
  message: { error: "Too many requests, please upgrade your plan." },
  standardHeaders: true,
  legacyHeaders: false,
})
