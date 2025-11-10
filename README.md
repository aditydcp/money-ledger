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

We ship both production and development (hot-reload) setups. First of all, please create a copy of `.env.example` and name it `.env` and populate the variables with the appropriate value for your environment. Do the same and name it `.env.prod` for production

### Development (hot reload)

```bash
docker-compose up --build
```

➡️ Mounts your local files into the container and reloads on changes.

### Production

```bash
docker-compose --env-file .env.prod -f docker-compose.yaml -f docker-compose.prod.yaml up -d
```

➡️ Uses the optimized Next.js build for production.

### Pro tip

The default settings (_using `.env` and `docker-compose.yaml` (which will be overriden by `docker-compose.override.yaml`) (with the exception of `Dockerfile.dev`)_) will be treated as `development` environment. As such, for production you can make it's own `.env` file under the name `.env.prod`. If you wish to use the same environment values, then you can just go ahead and use this command for production.

```bash
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d
```

## 📂 Project Structure

```bash
.
├── app/                          # Next.js App Router pages & routes
├── components/
│   ├── ui/                       # shadcn/ui components
│   └── shared/                   # reusable components (e.g., ThemeToggle)
├── lib/                          # utilities (e.g., class merging, helpers)
├── public/                       # static assets
├── Dockerfile                    # Production Dockerfile
├── Dockerfile.dev                # Development Dockerfile with hot reload
├── docker-compose.yml            # Base config
├── docker-compose.override.yml   # Dev overrides
└── docker-compose.prod.yml       # Prod overrides
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