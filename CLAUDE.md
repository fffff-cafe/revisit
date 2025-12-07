# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` - starts Next.js development server
- **Build**: `pnpm build` - creates production build (static export)
- **Production server**: `pnpm start` - serves the production build
- **Linting**: `pnpm lint` - runs ESLint
- **Type checking**: `pnpm typecheck` - runs TypeScript compiler without emitting files
- **Code formatting**: `pnpm format` - formats code with Prettier

## Architecture

This is a Next.js 16 project configured for static site generation with the following key characteristics:

- **Static Export**: Configured with `output: "export"` for static site generation
- **Base Path**: Uses `/page` base path in production, empty in development
- **App Router**: Uses the modern App Router architecture with the `app/` directory
- **Package Manager**: Uses pnpm as the package manager
- **Styling**: Uses inline styles and a CSS reset file

### Project Structure
- `app/layout.tsx` - Root layout with header/footer structure and basic styling
- `app/page.tsx` - Main page component (currently empty)
- `app/reset.css` - CSS reset styles

### Configuration
- **Next.js**: Configured for static export with unoptimized images
- **TypeScript**: Strict mode disabled, ES2017 target
- **ESLint**: Flat config with React, TypeScript, and accessibility rules
- **Prettier**: Code formatting with write mode

### Key Settings
- Language: Japanese (`lang="ja"`)
- TypeScript strict mode is disabled
- Images are unoptimized for static export compatibility
- Trailing slashes enabled for static hosting