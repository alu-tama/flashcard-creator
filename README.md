# Flashcard Creator

A minimal TypeScript + Vite starter for creating and reviewing flashcards locally in the browser (persisted to `localStorage`).

## Features
- Vite + TypeScript
- Simple `Flashcard` store with CRUD operations persisted in `localStorage`
- Basic UI for creating, listing, editing, and deleting cards
- Vitest configured with an example test

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install # or: npm install / yarn install
pnpm dev     # or: npm run dev
```

Then open: http://localhost:5173

## Scripts
- `dev` - start Vite dev server
- `build` - build for production
- `preview` - preview production build locally
- `test` - run tests once
- `test:watch` - watch mode tests

## Project Structure
```
index.html
src/
  main.ts         # App entry
  store.ts        # Flashcard store logic
  types.ts        # Shared types
  style.css       # Basic styling
  main.test.ts    # Example vitest spec
```

## Future Ideas
- Tagging & search
- Spaced repetition scheduling
- Export/import JSON
- Keyboard shortcuts & improved accessibility
- Offline PWA support

## License
MIT
