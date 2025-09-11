# 💰 Money Ledger

Money Ledger is a modern **finance tracker app** built with [Next.js](https://nextjs.org), designed to help you stay on top of your expenses and income in a clean, fast, and delightful way.

It comes with:

- ⚡ **Next.js (App Router)** – optimized React framework for web apps.
- 🎨 **shadcn/ui** – beautifully styled, accessible UI components.
- 🐳 **Docker & Docker Compose** – ready for local development with hot reload and production deployments.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional, but recommended)

### Local Development (without Docker)

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## 🐳 Running with Docker

We ship both production and development (hot-reload) setups.

### Development (hot reload)

```bash
docker-compose up --build
```

➡️ Mounts your local files into the container and reloads on changes.

### Production

```bash
docker-compose -f docker-compose.yml up --build
```

➡️ Uses the optimized Next.js build for production.

## 📂 Project Structure

```bash
.
├── app/                # Next.js App Router pages & routes
├── components/
│   ├── ui/             # shadcn/ui components
│   └── shared/         # reusable components (e.g., ThemeToggle)
├── lib/                # utilities (e.g., class merging, helpers)
├── public/             # static assets
├── Dockerfile          # Production Dockerfile
├── Dockerfile.dev      # Development Dockerfile with hot reload
├── docker-compose.yml  # Base config
└── docker-compose.override.yml  # Dev overrides
```

## ✨ Features

-	Track income and expenses easily.
-	Dark/light mode.
-	Modern, reusable UI with shadcn components.
-	Developer-friendly setup with Docker Compose hot-reload.

## 📖 Learn More

- [Next.js documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Docker Docs](https://docs.docker.com/)

## 🚀 Deployment

The recommended way to deploy is via **Docker** or **Vercel**:
-	Vercel – easiest, managed hosting for Next.js.
-	Docker – consistent deployments anywhere.

## 📝 License

This project is licensed under the MIT License.