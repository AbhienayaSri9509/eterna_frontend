# Axiom Token Table — Mock

This repository is a focused implementation of a token discovery table (mock) built with Next.js App Router, TypeScript, Tailwind CSS, Redux Toolkit and React Query.

Setup

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

What I implemented

- Next.js app router structure under `app/`
- Tailwind + global styles with skeleton shimmer
- Redux Toolkit store with `tokens` slice
- `useMockWs` hook to simulate real-time price updates
- Table, TokenRow and Skeleton components

Notes / Next steps

- Add Radix UI popover/tooltip/dialog for full accessibility patterns
- Implement modal details and sorting UI polish
- Add visual-regression snapshots and Vercel deploy config

I'll continue wiring popovers, modals, more interactions, and prepare deployment files.
# eterna_frontend
