# Page

A Next.js static site project configured for static export.

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in development mode.

### Building

```bash
pnpm build
```

Creates a static export in the `out/` directory.

### Production

```bash
pnpm start
```

Serves the production build locally.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Serve production build
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## Configuration

This project is configured as a static Next.js application with:

- Static export enabled
- Base path: `/page` (production only)
- Unoptimized images for static hosting compatibility
- App Router architecture

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- ESLint + Prettier
- pnpm

## Author

- kixixixixi
