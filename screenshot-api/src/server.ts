import express from "express"
import helmet from "helmet"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
import path from "path"
import routes from "./routes"
import { browserService } from "./services/browser.service"
import { logger } from "./config/logger"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

// Documentation
const swaggerDocument = YAML.load(path.join(__dirname, "../openapi.yaml"))
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Routes
app.use("/v1", routes)

// Start Server
const start = async () => {
  try {
    await browserService.init()
    app.listen(PORT, () => {
      logger.info(`Microservice running on port ${PORT}`)
      logger.info(`Documentation available at http://localhost:${PORT}/docs`)
    })
  } catch (error) {
    logger.error("Failed to start server:", error)
    process.exit(1)
  }
}

start()

// Graceful Shutdown
process.on("SIGTERM", async () => {
  await browserService.close()
  process.exit(0)
})
