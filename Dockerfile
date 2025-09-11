# --- Base Stage ---
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# Install dependencies for sharp (used by next/image)
RUN apk add --no-cache libc6-compat

# --- Dependencies Stage ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# Install dependencies based on lockfile
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then \
    npm install -g pnpm && pnpm install --frozen-lockfile; \
  else npm install; \
  fi

# --- Build Stage ---
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build Next.js app in standalone mode
RUN npm run build

# --- Production Stage ---
FROM base AS runner
WORKDIR /app

# Add user for security
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Copy build output and node_modules needed for standalone
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]