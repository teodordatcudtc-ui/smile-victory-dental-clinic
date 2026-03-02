# Smile Victory Dental Clinic – Site web

Site web multi-pagină pentru **Smile Victory Dental Clinic** (clinica de stomatologie, Timișoara), realizat cu **Next.js 14** (App Router), Tailwind CSS și TypeScript.

## Stack tehnic

- **Framework:** Next.js 14 (App Router)
- **Limbaj:** TypeScript
- **Stilizare:** Tailwind CSS
- **Font:** Unbounded (Google Fonts)

### Motivarea alegerii App Router

- Suport nativ pentru Server Components
- Integrare SEO prin `metadata` și `generateMetadata`
- Rute dinamice și layout-uri flexibile
- API pentru sitemap și robots

## Structura paginilor

| Pagină   | URL       | Descriere                          |
|----------|-----------|------------------------------------|
| Home     | `/`       | Hero, servicii, despre noi, medici, testimoniale |
| Servicii | `/services` | Lista serviciilor stomatologice   |
| Medici   | `/doctors`  | Echipa medicală                   |
| Prețuri  | `/pricing`  | Prețuri orientative               |
| Despre   | `/about`    | Despre clinică                    |
| Contact  | `/contacts` | Date contact, hartă, programare   |

## Comenzi (copy-paste ready)

```bash
# 1. Instalare dependențe
npm install

# 2. Pornire server de dezvoltare
npm run dev

# 3. Build pentru producție
npm run build

# 4. Pornire aplicație în mod producție (după build)
npm start
```

Serverul de dezvoltare va fi disponibil la: **http://localhost:3000**

## Design

- **Culori:** `#131c15` (dark), `#a9eaf7` (accent), `#f4f5f7` (background), `#ffffff` (alb)
- **Font:** Unbounded
- Layout asimetric, secțiuni cu identitate vizuală proprie
- Responsive, optimizat pentru mobil (fără probleme de zoom)

## SEO & Accesibilitate

- Meta tags configurate per pagină
- `robots.txt` și `sitemap.xml` generate automat
- Viewport și meta tags pentru responsive corect
- Elemente semantic HTML (header, main, footer, nav, section, article)
- Aria-labels unde e necesar
- Contrast adecvat pentru text

## TO-DO: Checklist post-generare

- [ ] Rulează `npm install`
- [ ] Rulează `npm run dev` și verifică toate paginile
- [ ] Verifică pe mobil (Chrome DevTools) – layout, zoom, navigare
- [ ] Adaugă favicon în `app/` sau `public/`
- [ ] Înlocuiește imaginile Unsplash cu fotografii reale ale clinicii (dacă e cazul)
- [ ] Actualizează URL-ul de bază în `layout.tsx`, `sitemap.ts`, `robots.ts` dacă domeniul diferă de `smilevictory.ro`
- [ ] Testează linkurile (toate deschid în același tab)
- [ ] Verifică accesibilitatea (Lighthouse sau axe DevTools)
- [ ] Rulează `npm run build` pentru a confirma că build-ul trece
