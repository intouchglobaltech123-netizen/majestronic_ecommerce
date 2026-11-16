# MAJESTRONICZ store (Next.js)

```bash
npm install
npm run dev   # http://localhost:3000
npm run build && npm start
```

- `app/layout.tsx` – page shell, fonts, metadata
- `app/page.tsx` → `components/Store.tsx` – renders the store markup (`lib/markup.ts`) and loads `public/store.js`
- `app/globals.css` – all styles
- `public/` – logo, hero car images (`rc-*.webp`) and product photos (`p/*.webp`)

Pages are hash-routed inside the app (`/#shop`, `/#product-12`, `/#wishlist`, `/#contact`, `/#terms`, ...). Deploys on Vercel with no extra settings.
