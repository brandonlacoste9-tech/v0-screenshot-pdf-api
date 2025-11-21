# Screenshot & PDF API Microservice

A high-performance, scalable microservice for generating screenshots and PDFs from URLs using Puppeteer.

## Features

- **Screenshot Capture**: Full-page or viewport screenshots.
- **PDF Generation**: Customizable formats (A4, Letter).
- **Concurrency Control**: Limits simultaneous browser instances to prevent overload.
- **Tiered Rate Limiting**: Different limits for Free, Pro, and Enterprise keys.
- **Swagger Documentation**: Interactive API docs at `/docs`.

## Getting Started

### Prerequisites

- Node.js 18+
- Docker (optional)

### Installation

1. Navigate to the directory:
   \`\`\`bash
   cd screenshot-api
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the server:
   \`\`\`bash
   npm run dev
   \`\`\`

### API Keys (Mock)

Use these keys in the `X-API-Key` header:
- Free: `sk_free_123` (10 req/min)
- Pro: `sk_pro_456` (100 req/min)
- Enterprise: `sk_ent_789` (1000 req/min)

### Docker Deployment

\`\`\`bash
docker build -t screenshot-api .
docker run -p 3000:3000 screenshot-api
