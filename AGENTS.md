# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts the Next.js App Router pages, route handlers, and UI components. Example: `app/page.tsx`, `app/api/tasks/route.ts`.
- `app/components/` contains reusable UI pieces such as `Header.tsx` and `TaskModal.tsx`.
- `app/lib/` and `lib/` contain utilities and server helpers; SQLite initialization lives in `lib/db.ts`.
- `app/types/` defines shared TypeScript types.
- `public/` is for static assets (images, icons).
- Data persists to `data/tasks.db` (created at runtime by `lib/db.ts`).

## Build, Test, and Development Commands
- `npm run dev`: start the Next.js dev server with Fast Refresh on `http://localhost:3000`.
- `npm run build`: create a production build.
- `npm start`: run the production server.
- `npm run lint`: run Next.js ESLint checks.

## Coding Style & Naming Conventions
- TypeScript is `strict` (see `tsconfig.json`); keep types explicit for public APIs and component props.
- Follow existing patterns: PascalCase React components (`TaskModal`), camelCase functions and variables.
- Use Tailwind utility classes for styling in `app/` and global styles in `app/globals.css`.
- Prefer the `@/*` path alias for imports (e.g., `import { foo } from '@/app/lib/utils'`).

## Testing Guidelines
- No automated test framework is configured yet. Use `npm run lint` as the current quality gate.
- If you add tests, document the runner and naming pattern (for example, `*.test.tsx`) in this file.

## Commit & Pull Request Guidelines
- Commit messages follow a short, imperative style: `Add SQLite database...` or `Fix header colors`.
- Keep commits focused; include a brief body if context is needed.
- PRs should include: summary, linked issue (if any), and screenshots or GIFs for UI changes.

## Configuration & Data Notes
- SQLite data is stored in `data/tasks.db`; do not commit the `data/` directory.
- Environment-specific settings should use `.env.local` (not tracked) if introduced.
